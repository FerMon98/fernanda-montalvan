/**
 * @description Compact card for project listing.
 */

import type { Project } from '../content/projects'
import { Link } from 'react-router-dom'

interface ProjectCardProps {
  /** Project data object */
  project: Project
}

/**
 * Renders a single project card with title, tags and actions.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-card rounded-2xl p-5 shadow hover:shadow-lg transition">
      {project.cover && (
        <img
          src={project.cover}
          alt={`${project.title} cover`}
          className="rounded-xl mb-4 aspect-video object-cover"
        />
      )}
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm opacity-80 mt-1">{project.summary}</p>

      <ul className="flex flex-wrap gap-2 mt-3">
        {project.stack.map((tag) => (
          <li key={tag} className="text-xs px-2 py-1 rounded-full border border-white/10">
            {tag}
          </li>
        ))}
      </ul>

      <div className="flex gap-3 mt-4">
        <Link
          to={`/projects/${project.slug}`}
          className="text-sm underline underline-offset-4 hover:opacity-80"
        >
          Case study
        </Link>
        <a className="text-sm opacity-80 hover:opacity-100" href={project.repo} target="_blank" rel="noreferrer">
          Repo ↗
        </a>
        {project.live && (
          <a className="text-sm opacity-80 hover:opacity-100" href={project.live} target="_blank" rel="noreferrer">
            Live ↗
          </a>
        )}
      </div>
    </article>
  )
}
