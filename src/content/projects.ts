/**
 * @description Strongly typed projects content for the portfolio grid/detail.
 * All human-readable text is i18n key-based (see dictionary.ts).
 */

export type Project = {
  slug: string
  period: string
  repo?: string
  live?: string
  cover?: string
  i18n: {
    title: string
    summary: string
    highlights: string[]
    stack: string[]              // e.g. ['tech.react', 'tech.mysql']
    role?: string                // e.g. 'projects.huellas.role'
    responsibilities?: string[]  // e.g. ['projects.huellas.resp1', ...]
  }
}

export const projects: Project[] = [
  {
    slug: 'huellas',
    period: '2025',
    repo: 'https://github.com/FerMon98/huellas',
    cover: './media/HuellasBanner.png',
    i18n: {
      title: 'projects.huellas.title',
      summary: 'projects.huellas.summary',
      highlights: ['projects.huellas.hl1', 'projects.huellas.hl2', 'projects.huellas.hl3'],
      stack: ['tech.react', 'tech.typescript', 'tech.node', 'tech.express', 'tech.mysql', 'tech.docker', 'tech.vite'],
      role: 'projects.huellas.role',
      responsibilities: [
        'projects.huellas.resp1',
        'projects.huellas.resp2',
        'projects.huellas.resp3',
      ],
    },
  },
  {
    slug: 'music-library',
    period: '2024',
    repo: 'https://github.com/FerMon98/Ferzk-Music-Library',
    cover: './media/MusicLibraryBanner.png',
    i18n: {
      title: 'projects.music.title',
      summary: 'projects.music.summary',
      highlights: ['projects.music.hl1', 'projects.music.hl2', 'projects.music.hl3'],
      stack: ['tech.php', 'tech.mysql', 'tech.html', 'tech.css', 'tech.javascript'],
      role: 'projects.music.role',
      responsibilities: [
        'projects.music.resp1',
        'projects.music.resp2',
        'projects.music.resp3',
      ],
    },
  },
  {
    slug: 'academy',
    period: '2025',
    repo: 'https://github.com/FerMon98/Fernandas_Academy',
    cover: './media/academySS.png',
    i18n: {
      title: 'projects.academy.title',
      summary: 'projects.academy.summary',
      highlights: ['projects.academy.hl1', 'projects.academy.hl2', 'projects.academy.hl3', 'projects.academy.hl4'],
      stack: ['tech.react', 'tech.javascript', 'tech.bootstrap', 'tech.css', 'tech.html', 'tech.vite'],
      role: 'projects.academy.role',
      responsibilities: [
        'projects.academy.resp1',
        'projects.academy.resp2',
        'projects.academy.resp3',
      ],
    },
  },

  // Placeholders
  {
    slug: 'project-x',
    period: 'TBD',
    i18n: {
      title: 'projects.placeholder.title',
      summary: 'projects.placeholder.description',
      highlights: [],
      stack: [],
    },
  },
  {
    slug: 'project-y',
    period: 'TBD',
    i18n: {
      title: 'projects.placeholder.title',
      summary: 'projects.placeholder.description',
      highlights: [],
      stack: [],
    },
  },
]
