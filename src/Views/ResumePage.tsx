/**
 * @file ResumePage.tsx
 * @description Resume UI (homepage-style glow), enlarged tech icons, roomier skill badges,
 *              and a dedicated Soft Skills card. Education + Certifications share one container.
 */

import { JSX, useContext, useMemo, useCallback } from 'react'
import { TranslatorContext } from '../i18n/TranslatorContext'

/** ----------------------------------------------------------------------------
 * TechIcon: inline SVGs for common stacks (now 2× bigger by default).
 * ---------------------------------------------------------------------------*/
function TechIcon({ name, className = 'h-7 w-7' }: { name: string; className?: string }) {
  const n = name.toLowerCase()
  const key =
    n.includes('typescript') ? 'ts' :
    n.includes('javascript') ? 'js' :
    n.includes('react') ? 'react' :
    n.includes('node') ? 'node' :
    n.includes('express') ? 'express' :
    n.includes('php') ? 'php' :
    n.includes('mysql') || n.includes('mariadb') ? 'mysql' :
    n.includes('tailwind') ? 'tailwind' :
    n.includes('vite') ? 'vite' :
    n.includes('docker') ? 'docker' :
    n.includes('figma') ? 'figma' :
    n.includes('prisma') ? 'prisma' :
    n.includes('github actions') ? 'gh-actions' :
    'fallback'

  const common = { viewBox: '0 0 24 24', className, 'aria-hidden': true } as any

  switch (key) {
    case 'react':
      return (
        <svg {...common}>
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="2.2" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
          </g>
        </svg>
      )
    case 'ts':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.12" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor">TS</text>
        </svg>
      )
    case 'js':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.12" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor">JS</text>
        </svg>
      )
    case 'node':
      return (
        <svg {...common}>
          <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" fill="currentColor" opacity="0.12" />
          <path d="M12 7v10m-6-7v6l6 3 6-3V10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    case 'express':
      return (
        <svg {...common}>
          <path d="M4 8l6 8M10 8l-6 8M14 8h6M14 16h6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      )
    case 'php':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="12" rx="9" ry="6.5" fill="currentColor" opacity="0.12" />
          <text x="12" y="14" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor">PHP</text>
        </svg>
      )
    case 'mysql':
      return (
        <svg {...common}>
          <path d="M4 16c2.5-4 6-6 8-6s5.5 2 8 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="10" r="1" fill="currentColor"/>
        </svg>
      )
    case 'tailwind':
      return (
        <svg {...common}>
          <path d="M4 14c2-4 4-6 8-6 4 0 6 2 8 6-2 4-4 6-8 6-4 0-6-2-8-6Z" fill="currentColor" opacity="0.12" />
          <path d="M6 14c1.2-2.4 2.6-3.6 6-3.6 3.4 0 4.8 1.2 6 3.6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      )
    case 'vite':
      return (
        <svg {...common}>
          <path d="M12 3l8 4-8 14L4 7l8-4Z" fill="currentColor" opacity="0.12" />
          <path d="M12 7v6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'docker':
      return (
        <svg {...common}>
          <rect x="4" y="11" width="16" height="5" rx="1.5" fill="currentColor" opacity="0.12" />
          <rect x="6" y="8" width="4" height="3" rx="0.6" stroke="currentColor" />
          <rect x="11" y="8" width="4" height="3" rx="0.6" stroke="currentColor" />
          <circle cx="18" cy="13.5" r="1" fill="currentColor" />
        </svg>
      )
    case 'figma':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="2.2" fill="currentColor" />
          <circle cx="9" cy="12" r="2.2" fill="currentColor" opacity="0.7" />
          <circle cx="9" cy="16" r="2.2" fill="currentColor" opacity="0.4" />
          <rect x="11.5" y="6" width="4.5" height="4.5" rx="2.2" fill="currentColor" />
          <rect x="11.5" y="11.5" width="4.5" height="4.5" rx="2.2" fill="currentColor" opacity="0.6" />
        </svg>
      )
    case 'prisma':
      return (
        <svg {...common}>
          <path d="M7 17l4.8-11.5a1 1 0 0 1 1.9.4L17 17a1 1 0 0 1-1 .9H8a1 1 0 0 1-1-.9Z" fill="currentColor" opacity="0.12"/>
          <path d="M12 5l4 12H8l4-12Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        </svg>
      )
    case 'gh-actions':
      return (
        <svg {...common}>
          <circle cx="7.5" cy="12" r="3" fill="currentColor" opacity="0.12"/>
          <circle cx="16.5" cy="8" r="2" stroke="currentColor"/>
          <circle cx="16.5" cy="16" r="2" stroke="currentColor"/>
          <path d="M10.5 11 L14.5 9.2M10.5 13 L14.5 14.8" stroke="currentColor"/>
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" opacity="0.12" />
          <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor">
            {name.slice(0, 2).toUpperCase()}
          </text>
        </svg>
      )
  }
}

/** Tech skill pill with enlarged icon and roomier spacing */
function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-3 rounded-full border border-[color:var(--accent-app)]/30 bg-[color:var(--accent-app)]/10 px-4 py-2 text-base leading-tight">
      <TechIcon name={label} />
      <span>{label}</span>
    </span>
  )
}

/** Soft-skill pill (text only) */
function SoftSkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm leading-tight">
      {label}
    </span>
  )
}

/** Generic card */
function Card({ children, tone = 'panel', className = '' }: { children: React.ReactNode; tone?: 'panel' | 'accent'; className?: string }) {
  const base = 'rounded-2xl border p-5 shadow-lg transition-colors text-white'
  const tones: Record<typeof tone, string> = {
    panel: 'border-white/10 bg-white/[0.03] hover:bg-white/[0.05]',
    accent: 'border-[color:var(--accent-app)]/40 bg-white/[0.04] shadow-[0_0_25px_color-mix(in_oklab,var(--accent-app),transparent_80%)]',
  }
  return <article className={`${base} ${tones[tone]} ${className}`}>{children}</article>
}

function SectionDivider() {
  return <div className="my-8 border-t border-white/10" />
}

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback
  try {
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export default function ResumePage(): JSX.Element {
  const { t } = useContext(TranslatorContext)

  // dynamic content
  const summary = t('resume.summary')
  const updated = t('resume.updated')
  const skills = useMemo(() => parseJSON<string[]>(t('resume.skills.json'), []), [t])
  const softSkills = useMemo(() => parseJSON<string[]>(t('resume.softSkills.json'), []), [t])
  const experience = useMemo(() => parseJSON<any[]>(t('resume.experience.json'), []), [t])
  const education = useMemo(() => parseJSON<any[]>(t('resume.education.json'), []), [t])
  const certs = useMemo(() => parseJSON<any[]>(t('resume.certs.json'), []), [t])

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <main className="relative mx-auto max-w-6xl px-6 py-12 text-white">
      {/* homepage-like glowing ball */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 flex items-end justify-center">
        <div className="h-[400px] w-[600px] rounded-full blur-[160px]" style={{ background: 'var(--accent-app)', opacity: 0.25 }} />
      </div>

      {/* header */}
      <header className="mb-8 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-display tracking-tight">{t('resume.title')}</h1>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">{updated}</span>
          <a
            className="group relative overflow-hidden rounded-2xl px-4 py-2 text-sm font-medium text-white
                       shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent-app),transparent_60%),0_6px_20px_color-mix(in_oklab,var(--accent-app),black_80%)]
                       ring-1 ring-[color:var(--accent-app)]/40 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-app)]/70
                       transition-transform hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, color-mix(in_oklab,var(--accent-app),white 20%), color-mix(in_oklab,var(--accent-app),black 30%))' }}
            href="/Fernanda_Montalvan_CV.pdf"
            download
          >
            <span className="relative z-10">⬇︎ {t('resume.download')}</span>
          </a>
        </div>
      </header>

      {/* nav */}
      <nav className="mb-8 text-sm">
        <ul className="flex flex-wrap gap-3">
          {[
            { id: 'summary', label: t('resume.nav.summary') },
            { id: 'experience', label: t('resume.nav.experience') },
            { id: 'skills', label: t('resume.nav.skills') },
            { id: 'edu-certs', label: `${t('resume.nav.education')} & ${t('resume.nav.certs')}` },
          ].map((x) => (
            <li key={x.id}>
              <button onClick={() => scrollToId(x.id)} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 underline underline-offset-4 hover:no-underline">
                {x.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* summary */}
      <section id="summary" className="mb-8">
        <h2 className="mb-4 font-display text-2xl">{t('resume.summaryTitle')}</h2>
        <Card tone="accent"><p className="opacity-90 leading-relaxed">{summary}</p></Card>
      </section>

      <SectionDivider />

      {/* experience */}
      <section id="experience" className="mb-8">
        <h2 className="mb-4 font-display text-2xl">{t('resume.experienceTitle')}</h2>
        <div className="space-y-5">
          {experience.map((job, i) => (
            <Card key={i} tone="panel">
              <header className="flex flex-col sm:flex-row sm:justify-between">
                <h3 className="text-lg font-medium">{job.role} — {job.company}</h3>
                <span className="text-sm opacity-70">{job.period}{job.location ? ` · ${job.location}` : ''}</span>
              </header>
              <ul className="mt-3 list-disc list-inside space-y-1 opacity-90">
                {job.bullets.map((b: string, j: number) => <li key={j}>{b}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* skills + edu/certs */}
      <div className="grid gap-10 lg:grid-cols-[1fr,2fr]">
        {/* TECH + SOFT SKILLS (sidebar) */}
        <aside id="skills">
          <h2 className="mb-3 font-display text-2xl">{t('resume.skillsTitle')}</h2>
          <Card tone="panel">
            {/* increased spacing to fit bigger pills nicely */}
            <div className="flex flex-wrap gap-4">
              {skills.map((s, i) => <SkillBadge key={i} label={s} />)}
            </div>
          </Card>

          {/* Soft skills box */}
          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold">{t('resume.softSkillsTitle')}</h3>
            <Card tone="panel">
              <div className="flex flex-wrap gap-3">
                {softSkills.map((s, i) => <SoftSkillBadge key={i} label={s} />)}
              </div>
            </Card>
          </div>
        </aside>

        {/* EDUCATION + CERTS */}
        <section id="edu-certs">
          <h2 className="mb-3 font-display text-2xl">{t('resume.educationTitle')} & {t('resume.certificationsTitle')}</h2>
          <Card tone="accent">
            <div className="flex flex-col gap-6 lg:flex-row">
              {/* Education */}
              <div className="flex-1">
                <h3 className="mb-3 text-lg font-semibold">{t('resume.educationTitle')}</h3>
                <div className="space-y-3">
                  {education.map((e, i) => (
                    <Card key={i} tone="panel">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <strong>{e.title}</strong>
                        <span className="text-sm opacity-70">{[e.year, e.location].filter(Boolean).join(' · ')}</span>
                      </div>
                      <div className="mt-1 text-sm opacity-90">{e.org}{e.hours ? ` — ${e.hours}` : ''}</div>
                      {e.details?.length ? (
                        <ul className="mt-2 list-disc list-inside space-y-1 text-sm opacity-90">
                          {e.details.map((d: string, k: number) => <li key={k}>{d}</li>)}
                        </ul>
                      ) : null}
                    </Card>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="flex-1">
                <h3 className="mb-3 text-lg font-semibold">{t('resume.certificationsTitle')}</h3>
                <div className="space-y-3">
                  {certs.map((c, i) => (
                    <Card key={i} tone="panel">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <span>• {c.title}</span>
                        <span className="text-sm opacity-70">
                          {[c.year, c.location, c.org].filter(Boolean).join(' · ')}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </main>
  )
}
