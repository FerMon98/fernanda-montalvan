/**
 * @description Case study page for a single project by slug.
*/

import { useParams } from 'react-router-dom'
import { projects } from '../content/projects'
import { JSX } from 'react'

/**
 * Renders a single project case study based on the URL slug.
 */
export default function ProjectDetailPage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <main className="p-8">Project not found.</main>
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-display">{project.title}</h1>
      <p className="opacity-80 mt-2">{project.summary}</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Highlights</h2>
        <ul className="list-disc pl-6 space-y-1">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}
