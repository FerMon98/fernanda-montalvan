/**
 * @file ResumePage.tsx
 * @description Online resume with quick PDF download.
*/
import { JSX } from 'react'

/**
 * Renders the resume page with a download link for the PDF version.
 */
export default function ResumePage(): JSX.Element {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-display mb-4">Resume</h1>
      <a className="underline underline-offset-4" href="/resume.pdf" download>
        Download PDF
      </a>
      <p className="opacity-80 mt-4">
        (A web version will live here with bilingual toggle.)
      </p>
    </main>
  )
}
