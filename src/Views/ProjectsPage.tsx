/**
 * ProjectsPage.tsx
 * Responsive projects grid using i18n keys from ../content/projects
 * Uses the reusable <ProjectCard /> (with placeholder mode).
*/

import ProjectCard from '../components/ProjectCard'
import { useTranslate } from '../i18n/useTranslate'
import { projects } from '../content/projects'
import { JSX } from 'react/jsx-runtime'

export default function ProjectsPage(): JSX.Element {
  const t = useTranslate()

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-[var(--text-app)]">
          {t('projects.featured')}
        </h1>
      </header>

      {/* Grid of cards (real projects + polished placeholders) */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => {
          // Placeholder rule: slugs like "project-x" OR entries with no stack and no repo
          const isPlaceholder =
            p.slug.startsWith('project-') || (p.i18n.stack.length === 0 && !p.repo)

          return (
            <ProjectCard
              key={p.slug}
              // For placeholders, the component renders a non-link card, so this is ignored.
              to={isPlaceholder ? '#' : `/projects/${p.slug}`}
              title={t(p.i18n.title)}
              summary={t(p.i18n.summary)}
              cover={p.cover}
              stackKeys={p.i18n.stack}
              t={t}
              isPlaceholder={isPlaceholder}
            />
          )
        })}
      </section>
    </main>
  )
}
