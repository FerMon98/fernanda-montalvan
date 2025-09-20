/**
 * Landing / About Me for Fernanda Montalván
 * - Tagline: Night owl · Ocean lover · Coding lover
 * - Personal slice (values, languages, “Now” line)
 * - Horus photo (public/media/horus.jpg)
 * - Real-time Spotify (via Discord/Lanyard) + playlist embeds fallback
 * - Uses Tailwind v4.1 tokens and existing i18n hooks
 */

import { JSX, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslate } from '../i18n/useTranslate';
import SpotifyNowPlaying from '../components/SpotifyNowPlaying';
import { useConsent } from '../components/legal/useConsent'

// Tech icons (already used in your page)
import { FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiExpress, SiVite } from 'react-icons/si';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';

export default function HomePage(): JSX.Element {
    const t = useTranslate();

    const tr = (key: string, fallback: string) => {
        try {
            const v = t(key);
            return typeof v === 'string' ? v : fallback;
        } catch {
            return fallback;
        }
    };

    const lang = useMemo(() => {
        const htmlLang = document.documentElement.getAttribute('lang')?.toLowerCase() ?? 'en';
        if (htmlLang.startsWith('es')) return 'es';
        if (htmlLang.startsWith('ca')) return 'ca';
        return 'en';
    }, []);

    // Use BASE_URL so it works on GitHub Pages (repo subpath)
    const cvHref = useMemo(() => {
        const base = import.meta.env.BASE_URL;
        const map: Record<string, string> = {
            en: base + 'Fernanda_Montalvan_CV.pdf',
            es: base + 'CVs Fernanda Montalvan.pdf',
            ca: base + 'Fernanda_Montalvan_CV.pdf',
        };
        return encodeURI(map[lang] ?? map.en);
    }, [lang]);

    const coreTech = [
        { name: tr('tech.react', 'React'), icon: <FaReact className="text-sky-400" /> },
        { name: tr('tech.typescript', 'TypeScript'), icon: <SiTypescript className="text-blue-500" /> },
        { name: tr('tech.tailwind', 'Tailwind'), icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: tr('tech.node', 'Node.js'), icon: <FaNodeJs className="text-green-500" /> },
        { name: tr('tech.express', 'Express'), icon: <SiExpress className="text-gray-300" /> },
        { name: tr('tech.php', 'PHP'), icon: <FaPhp className="text-indigo-400" /> },
        { name: tr('tech.mysql', 'MySQL/MariaDB'), icon: <SiMysql className="text-orange-400" /> },
        { name: tr('tech.vite', 'Vite'), icon: <SiVite className="text-yellow-400" /> },
    ];

    const rawTitle = tr('hero.title', "Hi, I'm Fernanda — Full-Stack Developer");
    const titleParts = rawTitle.split('Fernanda');
    const { consent, setConsent } = useConsent();

    return (
        <main className="relative overflow-hidden">
            {/* subtle accent blobs */}
            <div aria-hidden className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(157,75,255,0.28),_transparent_60%)] blur-2xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(59,224,255,0.22),_transparent_60%)] blur-2xl" />

            <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                <section className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
                    {/* Left: hero & about */}
                    <div>
                        <h1 className="text-balance font-display text-4xl leading-tight text-[var(--text-app)] md:text-5xl">
                            {titleParts.length === 2 ? (
                                <>
                                    {titleParts[0]}
                                    <span className="text-[var(--accent-app)]">Fernanda</span>
                                    {titleParts[1]}
                                </>
                            ) : (
                                rawTitle
                            )}
                        </h1>

                        <p className="mt-2 text-sm opacity-80">
                            Night owl · Ocean lover · <span className="accent">Coding lover</span>
                        </p>

                        <p className="mt-4 text-pretty text-base/7 text-[color:rgba(239,231,255,0.8)] md:text-lg/8">
                            {tr(
                                'about.blurb',
                                'Certified Full-Stack Web Developer focused on building clean, accessible and user-centered interfaces with React, TypeScript, Tailwind and pragmatic backend with Node, PHP & MySQL. Before transitioning into web development, I worked in technical support & fintech (KYC/Risk), explaining complex systems to non-technical users and training teams.'
                            )}
                        </p>

                        {/* Support stack */}
                        <div className="mt-6 rounded-2xl border border-white/5 bg-[var(--card-app)] p-5 shadow-sm">
                            <div className="text-sm font-semibold tracking-wide uppercase text-[var(--text-app)]">
                                {tr('about.support.title', 'Hands-on Support Stack')}
                            </div>
                            <ul className="mt-3 grid grid-cols-1 gap-y-2 pl-5 text-sm leading-relaxed text-[color:rgba(239,231,255,0.85)] md:grid-cols-2 md:gap-x-6">
                                <li className="list-disc">{tr('about.support.item1', 'Microsoft 365 / Office 365 admin & troubleshooting')}</li>
                                <li className="list-disc">{tr('about.support.item2', 'Google Workspace (GSuite) administration')}</li>
                                <li className="list-disc">{tr('about.support.item3', 'Windows setup, OS hygiene, user provisioning')}</li>
                                <li className="list-disc">{tr('about.support.item4', 'Basic networking (DNS, VPN, proxies, Wi-Fi)')}</li>
                                <li className="list-disc">{tr('about.support.item5', 'Ticketing, documentation, and knowledge bases')}</li>
                                <li className="list-disc">{tr('about.support.item6', 'Risk/KYC operations and agent training')}</li>
                            </ul>
                        </div>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 rounded-2xl bg-[var(--accent-app)] px-5 py-3 font-medium text-black shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-app)]"
                            >
                                <FiArrowRight aria-hidden className="text-black" />
                                {tr('hero.viewProjects', 'View Projects')}
                            </Link>

                            <a
                                href={cvHref}
                                download
                                className="inline-flex items-center gap-2 rounded-2xl bg-[color:rgba(255,255,255,0.08)] px-5 py-3 font-medium text-[var(--text-app)] shadow hover:bg-[color:rgba(255,255,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-app)]"
                            >
                                <FiDownload aria-hidden />
                                {tr('hero.downloadCV', 'Download CV')}
                            </a>

                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-2xl border border-[color:rgba(255,255,255,0.15)] px-5 py-3 font-medium text-[var(--text-app)] hover:bg-[color:rgba(255,255,255,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-app)]"
                            >
                                <FiMail aria-hidden />
                                {tr('hero.contact', 'Contact')}
                            </Link>
                        </div>
                    </div>

                    {/* Right: certifications + core tech */}
                    <aside className="rounded-3xl border border-white/5 bg-[var(--card-app)] p-6 shadow-sm">
                        <header className="text-[var(--text-app)]">
                            <h3 className="text-base font-semibold">{tr('about.certs.title', 'Certifications & Training')}</h3>
                        </header>
                        <ul className="mt-4 space-y-3 text-sm text-[color:rgba(239,231,255,0.85)]">
                            <li>{tr('about.certs.item1', 'Web App Development Certification — 510h')}</li>
                            <li>{tr('about.certs.item2', 'Full-Stack w/ React Bootcamp — 376h (Fundación Esplai, Sep 2025)')}</li>
                            <li>{tr('about.certs.item3', 'Microsoft Azure Fundamentals (AZ-900)')}</li>
                            <li>{tr('about.certs.item4', 'JavaScript FullStack Junior Developer Badge')}</li>
                        </ul>

                        <div className="my-6 h-px w-full bg-white/10" />

                        <header className="text-[var(--text-app)]">
                            <h3 className="text-base font-semibold">{tr('about.coreTech.title', 'Core Tech')}</h3>
                        </header>

                        <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
                            {coreTech.map((tech) => (
                                <li
                                    key={tech.name}
                                    className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-[color:rgba(239,231,255,0.85)]"
                                >
                                    {tech.icon}
                                    <span>{tech.name}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 rounded-2xl border border-white/5 bg-black/10 p-4 text-xs text-[color:rgba(239,231,255,0.85)]">
                            {tr(
                                'about.note',
                                'I enjoy translating real user problems into simple interfaces and working across the stack when needed. Currently showcasing Huellas and a revamped Music Library.'
                            )}
                        </div>
                    </aside>
                </section>

                {/* Personal slice */}
                <section className="mt-12 rounded-3xl border border-white/5 bg-[var(--card-app)] p-6 shadow-sm">
                    <header className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-base font-semibold text-[var(--text-app)]">
                            {tr('about.personal.tagline', 'Night owl · Ocean lover · Coding lover')}
                        </h3>
                        <div className="text-xs opacity-80">
                            {tr('about.personal.languages', 'ES (native) · EN (C2) · CA (B1)')}
                        </div>
                    </header>

                    <p className="mt-3 text-sm text-[color:rgba(239,231,255,0.88)]">
                        {tr(
                            'about.personal.bio',
                            "I’m Fernanda—curious builder, music explorer, and late-night coder. I love discovering new sounds, reading, good food, and anything that puts me near nature—especially water. I’m happiest in winter nights with rain and a clean UI taking shape."
                        )}
                    </p>

                    {/* Values */}
                    <div className="mt-5 flex flex-row gap-3 align-center my-4 mx-auto">
                        <div className="text-xs font-semibold uppercase tracking-wide text-[var(--text-app)]/80">
                            {tr('about.personal.valuesTitle', 'Core beliefs')}:
                        </div>
                        <ul className="mt-2 flex flex-wrap gap-2 text-xs">
                            {(JSON.parse(
                                tr('about.personal.values.json', JSON.stringify(['Loyalty', 'Honesty', 'Ownership']))
                            ) as string[]).map((v) => (
                                <li key={v} className="rounded-2xl border border-white/10 bg-black/10 px-3 py-1.5">
                                    {v}
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Horus */}
                    <div className="mt-6 flex items-center gap-4">
                        <img
                            src={import.meta.env.BASE_URL + 'media/horus.jpg'}
                            alt="Horus, my dog (Labrador + Shepherd mix)"
                            className="h-55 w-64 rounded-2xl object-cover"
                        />
                        <div className="text-sm opacity-90">
                            {tr('about.personal.horus', 'This is Horus — Labrador + Shepherd mix and professional treat negotiator.')}
                        </div>
                    </div>

                    {/* Now */}
                    <p className="mt-4 opacity-80">
                        {tr(
                            'about.personal.now',
                            'Now: Learning German (Duolingo) · Continuing Catalan · Practicing driving · Polishing my portfolio'
                        )}
                    </p>

                    {/* Real-time Spotify via Discord presence */}
                    <h3 className="mt-6 text-xl font-semibold text-[var(--text-app)]">SPOTIFY</h3>

                    {consent === 'accepted' ? (
                        <>
                            <SpotifyNowPlaying label={t('about.personal.listeningNow')} />
                            <div className="mt-6 grid gap-4 md:grid-cols-3">
                                {/* tus 3 iframes exactamente igual */}
                            </div>
                        </>
                    ) : (
                        <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-5 text-sm text-white/85">
                            {t('cookie.blocked.spotifyText')}
                            <div className="mt-3 flex gap-2">
                                <button
                                    className="rounded-2xl bg-white text-black px-4 py-2"
                                    onClick={() => setConsent('accepted')}
                                >
                                    {t('cookie.blocked.acceptAndLoad')}
                                </button>
                                <button
                                    className="rounded-2xl border border-white/20 px-4 py-2 hover:bg-white/5"
                                    onClick={() => setConsent('rejected')}
                                >
                                    {t('cookie.blocked.reject')}
                                </button>
                                <button
                                    className="underline underline-offset-4"
                                    onClick={() => setConsent('unset')}
                                    aria-label={t('footer.cookiePrefs')}
                                >
                                    {t('cookie.blocked.prefs')}
                                </button>
                            </div>
                            <p className="mt-2 text-xs opacity-80">
                                {t('cookie.blocked.moreInfo')}{' '}
                                <a href="/cookies" className="underline">
                                    {t('legal.nav.cookies')}
                                </a>
                                .
                            </p>
                        </div>
                    )}


                    {/* Playlists */}
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/5oj50z6pNVAIvCGoX1NVph?utm_source=generator"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title="Playlist 1"
                        />
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/1OwNtZAeTU9eokrsd0Cwc6?utm_source=generator"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title="Playlist 2"
                        />
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/6kMm1kiXgfzWjqtZmfmpru?utm_source=generator"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title="Playlist 3"
                        />
                    </div>
                </section>

                {/* Featured projects */}
                <section className="mt-16">
                    <h3 className="mb-6 text-lg font-semibold text-[var(--text-app)]">
                        {tr('projects.featured', 'Featured Projects')}
                    </h3>
                    <div className="grid gap-15 md:grid-cols-3">
                        <ProjectPill title="Huellas" stack="React · Node · MySQL · Docker" to="/projects/huellas" />
                        <ProjectPill title="Music Library" stack="React · PHP · MySQL" to="/projects/music-library" />
                        <ProjectPill title="Fernanda’s Academy" stack="React · PHP" to="/projects/academy" />
                    </div>
                </section>
            </div>
        </main>
    );
}

function ProjectPill({ title, stack, to }: { title: string; stack: string; to: string }) {
    return (
        <Link
            to={to}
            className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[var(--card-app)] p-4 shadow-sm transition hover:border-white/20 hover:bg-white/5"
        >
            <div>
                <h4 className="text-sm font-semibold text-[var(--text-app)]">{title}</h4>
                <p className="mt-1 text-xs opacity-80">{stack}</p>
            </div>
            <span className="mt-3 self-end text-lg opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100">
                →
            </span>
        </Link>
    );
}
