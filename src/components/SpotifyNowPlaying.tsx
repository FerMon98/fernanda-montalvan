/**
 * @file SpotifyNowPlaying.tsx
 * @description React component to display the "Listening now" track via
 *              Spotify Web API through a Netlify serverless function.
 *              Polls every 55s to stay up to date.
 *
 * @example
 *   <SpotifyNowPlaying label="Listening now" />
 */

import { useEffect, useState } from 'react';

/** Shape of the Spotify track info returned by Netlify function */
type SpotifyInfo = {
  track_id: string;
  song: string;
  artist: string;
  album: string;
  album_art_url: string;
  progress_ms?: number | null;
  duration_ms?: number | null;
  is_playing?: boolean;
  external_url?: string;
};

/** 
 * URL of your Netlify deployment.
 * Make sure this matches your live Netlify project domain.
 */
const NETLIFY_URL = 'https://fernandamontalvan.netlify.app';

/**
 * SpotifyNowPlaying Component
 *
 * @param {string} label - Text label to show next to the widget (default "Listening now").
 * @returns JSX.Element | null
 */
export default function SpotifyNowPlaying({ label = 'Listening now' }: { label?: string }) {
  const [now, setNow] = useState<SpotifyInfo | null>(null);

  useEffect(() => {
    let mounted = true;

    /**
     * Fetches current track info from Netlify function.
     * If no song is playing, the function may return 204 (No Content).
     */
    const load = async () => {
      try {
        const res = await fetch(`${NETLIFY_URL}/api/spotify-now`, { cache: 'no-store' });

        // Case: no content (user not playing anything)
        if (res.status === 204) {
          if (mounted) setNow(null);
          return;
        }

        // Case: error response
        if (!res.ok) {
          if (mounted) setNow(null);
          return;
        }

        // Case: valid JSON payload
        const json = (await res.json()) as SpotifyInfo;
        if (mounted) setNow(json ?? null);
      } catch {
        // On fetch/network errors, hide the widget
        if (mounted) setNow(null);
      }
    };

    load(); // initial load
    const id = setInterval(load, 55_000); // poll every 55s

    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  // Nothing to display if no track is active
  if (!now) return null;

  // Openable Spotify URL (track page)
  const openUrl = now.external_url ?? `https://open.spotify.com/track/${now.track_id}`;

  return (
    <a
      href={openUrl}
      target="_blank"
      rel="noreferrer"
      className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-3 no-underline hover:bg-black/30"
      aria-label={`${label} ${now.song} by ${now.artist}`}
    >
      {/* Album artwork */}
      <img
        src={now.album_art_url}
        alt="Album art"
        className="h-14 w-14 rounded-lg object-cover"
      />

      {/* Track details */}
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold">{now.song}</div>
        <div className="truncate text-xs opacity-80">{now.artist}</div>
      </div>

      {/* Label (e.g. "Listening now") */}
      <span className="ml-auto text-xs opacity-70">{label}</span>
    </a>
  );
}
