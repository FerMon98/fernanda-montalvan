// Returns compact "listening now" JSON. 204 when nothing is playing.
export const handler = async () => {
  const {
    SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN,
    ALLOWED_ORIGIN,
  } = process.env as Record<string, string>;

  const cors = {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN || '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store',
  };

  try {
    if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
      return { statusCode: 500, headers: cors, body: 'Missing Spotify env vars' };
    }

    // Refresh access token
    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer
          .from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
    });
    if (!tokenRes.ok) {
      return { statusCode: tokenRes.status, headers: cors, body: await tokenRes.text() };
    }
    const { access_token } = await tokenRes.json() as any;

    // Now playing
    const nowRes = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (nowRes.status === 204) return { statusCode: 204, headers: cors, body: '' };
    if (!nowRes.ok) return { statusCode: nowRes.status, headers: cors, body: await nowRes.text() };

    const data: any = await nowRes.json();
    const item = data?.item;

    const payload = {
      track_id: item?.id,
      song: item?.name,
      artist: item?.artists?.map((a: any) => a.name).join(', '),
      album: item?.album?.name,
      album_art_url: item?.album?.images?.[0]?.url,
      progress_ms: data?.progress_ms ?? null,
      duration_ms: item?.duration_ms ?? null,
      is_playing: !!data?.is_playing,
      external_url: item?.external_urls?.spotify,
    };

    return { statusCode: 200, headers: cors, body: JSON.stringify(payload) };
  } catch (err: any) {
    return { statusCode: 500, headers: cors, body: err?.message ?? 'error' };
  }
};
