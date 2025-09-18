/**
 * ProjectDetailPage.tsx
 * Detail view for a single project, using i18n keys from ./projects
*/

import { useParams, Link } from 'react-router-dom'
import { useTranslate } from '../i18n/useTranslate'
import { projects } from '../content/projects'

import { FaReact, FaNodeJs, FaPhp, FaExternalLinkAlt, FaGithub, FaArrowLeft, FaDatabase } from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiExpress,
  SiVite,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiDocker,
} from 'react-icons/si'

import { JSX } from 'react/jsx-runtime'

type IconProps = { className?: string }

/** Map i18n tech keys -> icon components used in the Tech stack sidebar */
const techIconMap: Record<string, (p: IconProps) => JSX.Element> = {
  'tech.react': (p) => <FaReact {...p} />,
  'tech.typescript': (p) => <SiTypescript {...p} />,
  'tech.javascript': (p) => <SiJavascript {...p} />,
  'tech.tailwind': (p) => <SiTailwindcss {...p} />,
  'tech.node': (p) => <FaNodeJs {...p} />,
  'tech.express': (p) => <SiExpress {...p} />,
  'tech.php': (p) => <FaPhp {...p} />,
  'tech.mysql': (p) => <SiMysql {...p} />,
  'tech.html': (p) => <SiHtml5 {...p} />,
  'tech.css': (p) => <SiCss3 {...p} />,
  'tech.bootstrap': (p) => <SiBootstrap {...p} />,
  'tech.vite': (p) => <SiVite {...p} />,
  'tech.docker': (p) => <SiDocker {...p} />,
  'tech.nocodb': (p) => <FaDatabase {...p} />, // fallback db icon
}


export default function ProjectDetailPage(): JSX.Element {
  const { slug } = useParams()
  const t = useTranslate()

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-14">
        <Link to="/projects" className="mb-6 inline-flex items-center gap-2 text-white/80 hover:text-white">
          <FaArrowLeft />
          <span>{t('projects.featured')}</span>
        </Link>
        <h1 className="text-xl font-semibold text-[var(--text-app)]">Project not found</h1>
        <p className="mt-2 text-white/70">The project you are looking for does not exist or has been moved.</p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <Link to="/projects" className="mb-6 inline-flex items-center gap-2 text-white/80 hover:text-white">
        <FaArrowLeft />
        <span>{t('projects.featured')}</span>
      </Link>

      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-[var(--text-app)]">{t(project.i18n.title)}</h1>
        <p className="mt-1 text-sm text-white/70">{project.period}</p>
      </header>

      {project.cover && (
        <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
          <img
            src={project.cover}
            alt={t(project.i18n.title)}
            className="h-auto w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}

      <section className="grid gap-8 md:grid-cols-[2fr_1fr]">
        {/* Left: summary + highlights */}
        <div>
          <h2 className="text-base font-semibold text-[var(--text-app)]">Overview</h2>
          <p className="mt-2 text-white/80">{t(project.i18n.summary)}</p>

          {project.i18n.highlights.length > 0 && (
            <>
              <h3 className="mt-6 text-sm font-semibold text-[var(--text-app)]">Highlights</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                {project.i18n.highlights.map((k) => (
                  <li key={k}>{t(k)}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Right: stack + links */}
        <aside className="rounded-2xl border border-white/10 bg-[var(--card-app)] p-4">
          <h3 className="text-sm font-semibold text-[var(--text-app)]">Tech stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.i18n.stack.map((key) => (
              <StackBadge key={key} label={t(key)} iconKey={key} />
            ))}
          </div>

          <div className="mt-5 grid gap-2">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-white/85 hover:bg-white/5"
              >
                <FaGithub />
                <span>Repository</span>
                <FaExternalLinkAlt className="ml-auto text-xs opacity-70" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-white/85 hover:bg-white/5"
              >
                <FaExternalLinkAlt />
                <span>Live demo</span>
                <FaExternalLinkAlt className="ml-auto text-xs opacity-70" />
              </a>
            )}
          </div>
        </aside>
      </section>
    </main>
  )
}

function StackBadge({ label, iconKey }: { label: string; iconKey: string }) {
  const Icon = techIconMap[iconKey]
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/80">
      {Icon ? <Icon className="text-[1rem]" /> : null}
      {label}
    </span>
  )
}
