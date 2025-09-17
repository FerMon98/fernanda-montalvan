/**
 * ProjectCard.tsx
 * Reusable card for projects. Renders either:
 * - A normal, clickable project card (cover + summary + stack badges), or
 * - A polished placeholder card when `isPlaceholder` is true.
 */

import { Link } from 'react-router-dom'
import { FaReact, FaNodeJs, FaPhp, FaRocket } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiMysql, SiExpress, SiVite } from 'react-icons/si'
import { JSX } from 'react/jsx-runtime'

type TFunc = (k: string) => string

type ProjectCardProps = {
  to: string
  title: string
  summary: string
  cover?: string
  stackKeys: string[]
  t: TFunc
  /** When true, render the themed placeholder instead of a normal card */
  isPlaceholder?: boolean
}

// Map i18n tech keys -> icon components (keep in one place)
type IconProps = { className?: string }
const techIconMap: Record<string, (p: IconProps) => JSX.Element> = {
  'tech.react': (p) => <FaReact {...p} />,
  'tech.typescript': (p) => <SiTypescript {...p} />,
  'tech.tailwind': (p) => <SiTailwindcss {...p} />,
  'tech.node': (p) => <FaNodeJs {...p} />,
  'tech.express': (p) => <SiExpress {...p} />,
  'tech.php': (p) => <FaPhp {...p} />,
  'tech.mysql': (p) => <SiMysql {...p} />,
  'tech.vite': (p) => <SiVite {...p} />,
}

/** Small internal badge with icon + label */
function StackBadge({ label, iconKey }: { label: string; iconKey: string }) {
  const Icon = techIconMap[iconKey]
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/80">
      {Icon ? <Icon className="text-[1rem]" /> : null}
      {label}
    </span>
  )
}

export default function ProjectCard({
  to,
  title,
  summary,
  cover,
  stackKeys,
  t,
  isPlaceholder = false,
}: ProjectCardProps): JSX.Element {
  /** Placeholder mode */
  if (isPlaceholder) {
    return (
      <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-white/10 bg-[var(--card-app)] p-6">
        <FaRocket className="mb-3 text-3xl text-[var(--accent-app)]" />
        <span className="text-base font-semibold text-[var(--text-app)]">
          {t('projects.placeholder.title')}
        </span>
        <p className="mt-2 text-sm text-white/70">{t('projects.placeholder.description')}</p>
      </div>
    )
  }

  /** Default (clickable) project card */
  return (
    <Link
      to={to}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--card-app)] shadow-sm transition hover:border-white/20 hover:bg-white/5"
    >
      {/* Cover image or fallback title */}
      <div className="aspect-[16/9] w-full overflow-hidden bg-black/20">
        {cover ? (
          <img
            src={cover}
            alt={title}
            className="h-full w-full object-cover transition group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-white/60">
            {title}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold text-[var(--text-app)]">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-white/70">{summary}</p>

        {/* Stack badges (show first 4, then +N) */}
        <div className="mt-3 flex flex-wrap gap-2">
          {stackKeys.slice(0, 4).map((key) => (
            <StackBadge key={key} label={t(key)} iconKey={key} />
          ))}
          {stackKeys.length > 4 && (
            <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/70">
              +{stackKeys.length - 4}
            </span>
          )}
        </div>

        {/* Footer hint */}
        <div className="mt-4 flex items-center justify-end">
          <span className="text-sm text-white/60 group-hover:text-white/80">{t('hero.viewProjects')}</span>
        </div>
      </div>
    </Link>
  )
}
