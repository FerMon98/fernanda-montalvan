/**
 * @description Strongly typed projects content for the portfolio grid/detail.
 * Text is language-dynamic via i18n KEYS (dictionary.ts).
 */

export type Project = {
  slug: string
  i18n: {
    title: string
    summary: string
    highlights: string[]
    stack: string[]
  }
  period: string
  repo?: string
  live?: string
  cover?: string
}

export const projects: Project[] = [
  {
    slug: 'huellas',
    i18n: {
      title: 'projects.huellas.title',
      summary: 'projects.huellas.summary',
      highlights: ['projects.huellas.hl1', 'projects.huellas.hl2', 'projects.huellas.hl3'],
      stack: ['tech.react', 'tech.typescript', 'tech.node', 'tech.express', 'tech.mysql', 'tech.vite'],
    },
    period: '2025',
    repo: 'https://github.com/FerMon98/huellas',
    cover: './media/huellas.svg',
  },
  {
    slug: 'music-library',
    i18n: {
      title: 'projects.music.title',
      summary: 'projects.music.summary',
      highlights: ['projects.music.hl1', 'projects.music.hl2', 'projects.music.hl3'],
      stack: ['tech.php', 'tech.mysql', 'tech.vite'],
    },
    period: '2024',
    repo: 'https://github.com/FerMon98/Ferzk-Music-Library',
    cover: './media/MusicLibraryBanner.png',
  },
  {
    slug: 'academy',
    i18n: {
      title: 'projects.academy.title',
      summary: 'projects.academy.summary',
      highlights: ['projects.academy.hl1', 'projects.academy.hl2', 'projects.academy.hl3', 'projects.academy.hl4'],
      stack: ['tech.react', 'tech.javascript', 'tech.bootstrap', 'tech.css', 'tech.html', 'tech.vite'],
    },
    period: '2025',
    repo: 'https://github.com/FerMon98/Fernandas_Academy',
    cover: './media/academySS.png',
  },
  {
    slug: 'project-x',
    i18n: {
      title: 'projects.placeholder.title',
      summary: 'projects.placeholder.summary',
      highlights: [],
      stack: [],
    },
    period: 'TBD',
  },
  {
    slug: 'project-y',
    i18n: {
      title: 'projects.placeholder.title',
      summary: 'projects.placeholder.summary',
      highlights: [],
      stack: [],
    },
    period: 'TBD',
  },
]
