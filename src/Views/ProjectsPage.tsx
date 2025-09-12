/**
 * @description Grid of portfolio projects with simple filters (todo).
 */

import { projects } from '../content/projects'
import ProjectCard from '../components/ProjectCard'
import { JSX } from 'react'

/**
 * Renders the projects grid pulling from typed content.
 */
export default function ProjectsPage(): JSX.Element {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-display mb-6">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  )
}
