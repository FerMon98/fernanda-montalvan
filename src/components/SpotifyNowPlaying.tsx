/**
 * SpotifyNowPlaying — shows current track via Lanyard (Discord presence).
 * No Spotify OAuth. Polls every 55 seconds.
*/

import { useEffect, useState } from 'react';

type SpotifyInfo = {
    track_id: string;
    song: string;
    artist: string;
    album: string;
    album_art_url: string;
    timestamps?: { start: number; end?: number };
};

type LanyardResponse = {
    success: boolean;
    data?: { spotify?: SpotifyInfo };
};

const NETLIFY_URL = 'https://fernandamontalvan.netlify.app';

export default function SpotifyNowPlaying(
    { discordId, label = 'Listening now' }:
        { discordId: string; label?: string }) {
    const [now, setNow] = useState<SpotifyInfo | null>(null);

    useEffect(() => {
        let mounted = true;

        const load = async () => {
            const res = await fetch(`${NETLIFY_URL}/api/spotify-now`, { cache: 'no-store' });
            if (res.status === 204) { // nothing playing
                if (mounted) setNow(null);
                return;
            }
            if (!res.ok) {
                // optional: hide widget quietly on error
                if (mounted) setNow(null);
                return;
            }
            const current = (await res.json()) as SpotifyInfo | null;
            if (mounted) setNow(current);
        };

        load();
        const id = setInterval(load, 55000);
        return () => {
            mounted = false;
            clearInterval(id);
        };
    }, [discordId]);

    if (!now) return null;

    const openUrl = `https://open.spotify.com/track/${now.track_id}`;

    return (
        <a
            href={openUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-3 no-underline hover:bg-black/30"
            aria-label={`${label} ${now.song} by ${now.artist}`}
        >
            <img src={now.album_art_url} alt="Album art" className="h-14 w-14 rounded-lg object-cover" />
            <div className="min-w-0">
                <div className="truncate text-sm font-semibold">{now.song}</div>
                <div className="truncate text-xs opacity-80">{now.artist}</div>
            </div>
            <span className="ml-auto text-xs opacity-70">{label}</span>
        </a>
    );
}
