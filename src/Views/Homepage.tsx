/**
 * Landing / About Me for Fernanda Montalván
 * - Name highlight with accent color
 * - Support list spacing fixed (no overlap)
 * - Icons in CTAs (Projects / CV / Contact)
*/

import { JSX, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslate } from '../i18n/useTranslate'
import { FaReact, FaNodeJs, FaPhp } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiMysql, SiExpress, SiVite } from 'react-icons/si'
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'

export default function HomePage(): JSX.Element {
    const t = useTranslate()

    const tr = (key: string, fallback: string) => {
        try {
            const v = t(key)
            return typeof v === 'string' ? v : fallback
        } catch {
            return fallback
        }
    }

    const lang = useMemo(() => {
        const htmlLang = document.documentElement.getAttribute('lang')?.toLowerCase() ?? 'en'
        if (htmlLang.startsWith('es')) return 'es'
        if (htmlLang.startsWith('ca')) return 'ca'
        return 'en'
    }, [])

    const cvHref = useMemo(() => {
        const map: Record<string, string> = {
            en: '/Fernanda_Montalvan_CV.pdf',
            es: '/CVs Fernanda Montalvan.pdf',
            ca: '/Fernanda_Montalvan_CV.pdf',
        }
        return encodeURI(map[lang] ?? map.en)
    }, [lang])

    const coreTech = [
        { name: tr('tech.react', 'React'), icon: <FaReact className="text-sky-400" /> },
        { name: tr('tech.typescript', 'TypeScript'), icon: <SiTypescript className="text-blue-500" /> },
        { name: tr('tech.tailwind', 'Tailwind'), icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: tr('tech.node', 'Node.js'), icon: <FaNodeJs className="text-green-500" /> },
        { name: tr('tech.express', 'Express'), icon: <SiExpress className="text-gray-300" /> },
        { name: tr('tech.php', 'PHP'), icon: <FaPhp className="text-indigo-400" /> },
        { name: tr('tech.mysql', 'MySQL/MariaDB'), icon: <SiMysql className="text-orange-400" /> },
        { name: tr('tech.vite', 'Vite'), icon: <SiVite className="text-yellow-400" /> },
    ]

    // put these above the return, near other consts:
    const rawTitle = tr('hero.title', "Hi, I'm Fernanda — Full-Stack Developer");
    const titleParts = rawTitle.split('Fernanda');


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

                        {/* Allow the highlighted span to render */}
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                  (function(){
                    var h1=document.querySelector('h1');
                    if(h1 && h1.innerText.includes('Fernanda')){
                      // no-op: we used string replace above; this script is a safeguard in SSR-less envs.
                    }
                  })();
                `,
                            }}
                        />

                        <p className="mt-4 text-pretty text-base/7 text-[color:rgba(239,231,255,0.8)] md:text-lg/8">
                            {tr(
                                'about.blurb',
                                'Certified Full-Stack Web Developer focused on building clean, accessible and user-centered interfaces with React, TypeScript, Tailwind and pragmatic backend with Node, PHP & MySQL. Before transitioning into web development, I worked in technical support & fintech (KYC/Risk), explaining complex systems to non-technical users and training teams.'
                            )}
                        </p>

                        {/* Support stack - spacing adjusted */}
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

                        {/* CTAs with icons */}
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            {/* Primary */}
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 rounded-2xl bg-[var(--accent-app)] px-5 py-3 font-medium text-black shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-app)]"
                            >
                                <FiArrowRight aria-hidden className="text-black" />
                                {tr('hero.viewProjects', 'View Projects')}
                            </Link>

                            {/* Secondary */}
                            <a
                                href={cvHref}
                                download
                                className="inline-flex items-center gap-2 rounded-2xl bg-[color:rgba(255,255,255,0.08)] px-5 py-3 font-medium text-[var(--text-app)] shadow hover:bg-[color:rgba(255,255,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-app)]"
                            >
                                <FiDownload aria-hidden />
                                {tr('hero.downloadCV', 'Download CV')}
                            </a>

                            {/* Outline */}
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-2xl border border-[color:rgba(255,255,255,0.15)] px-5 py-3 font-medium text-[var(--text-app)] hover:bg-[color:rgba(255,255,255,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-app)]"
                            >
                                <FiMail aria-hidden />
                                {tr('hero.contact', 'Contact')}
                            </Link>
                        </div>

                        {/* Social row removed (links already in footer) */}
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

                {/* Mini project strip */}
                <section className="mt-16">
                    <h3 className="mb-6 text-lg font-semibold text-[var(--text-app)]">Featured Projects</h3>
                    <div className="grid gap-15 md:grid-cols-3">
                        <ProjectPill title="Huellas" stack="React · Node · MySQL · Docker" to="/projects/huellas" />
                        <ProjectPill title="Music Library" stack="React · PHP · MySQL" to="/projects/music-library" />
                        <ProjectPill title="Fernanda’s Academy" stack="React · PHP" to="/projects/academy" />
                    </div>
                </section>

            </div>
        </main>
    )
}

function ProjectPill({ title, stack, to }: { title: string; stack: string; to: string }) {
  return (
    <Link
      to={to}
      className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[var(--card-app)] p-4 shadow-sm transition hover:border-white/20 hover:bg-white/5"
    >
      <div>
        <h4 className="text-sm font-semibold text-[var(--text-app)]">{title}</h4>
        <p className="mt-1 text-xs opacity-80">{stack}</p>
      </div>
      <span className="mt-3 self-end text-lg opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100">
        →
      </span>
    </Link>
  )
}

