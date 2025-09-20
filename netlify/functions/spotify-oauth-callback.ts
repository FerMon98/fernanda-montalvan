// HTTPS OAuth callback hosted by Netlify. Exchanges ?code=... for tokens
// and prints the REFRESH TOKEN on a simple HTML page (copy/paste it).
export const handler = async (event: any) => {
  try {
    const { queryStringParameters, rawUrl } = event;
    const code = queryStringParameters?.code;
    if (!code) {
      return { statusCode: 400, body: 'Missing ?code param' };
    }

    const clientId = process.env.SPOTIFY_CLIENT_ID!;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
    if (!clientId || !clientSecret) {
      return { statusCode: 500, body: 'Missing SPOTIFY_CLIENT_ID/SECRET' };
    }

    // Use the function URL itself as redirect_uri (must exactly match the one registered in Spotify)
    const redirectUri = rawUrl.split('?')[0];

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
    });

    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    const json: any = await res.json();
    if (!res.ok) {
      return { statusCode: res.status, body: JSON.stringify(json) };
    }

    const refresh = json.refresh_token;
    const access = json.access_token;

    const html = `
<!DOCTYPE html><meta charset="utf-8" />
<title>Spotify tokens</title>
<style>body{font-family:system-ui,sans-serif;margin:2rem}code{background:#111;color:#0f0;padding:.25rem .5rem;border-radius:.5rem}</style>
<h1>All set ✅</h1>
<p><strong>REFRESH_TOKEN</strong> (save in Netlify env):</p>
<p><code>${refresh}</code></p>
<p>You can close this tab now.</p>
`;
    return { statusCode: 200, headers: { 'content-type': 'text/html' }, body: html };
  } catch (e: any) {
    return { statusCode: 500, body: e?.message ?? 'error' };
  }
};
