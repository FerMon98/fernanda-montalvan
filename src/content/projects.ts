/**
 * @description Strongly typed projects content for the portfolio grid/detail.
*/

export type Project = {
  slug: 'huellas' | 'music-library'
  title: string
  period: string
  stack: string[]
  summary: string
  repo: string
  live?: string
  cover?: string
  highlights: string[]
}

/**
 * Portfolio projects to render on /projects and detail pages.
*/
export const projects: Project[] = [
  {
    slug: 'huellas',
    title: 'Huellas – Pet Health Platform',
    period: '2025',
    stack: ['React', 'TypeScript', 'Node', 'Express', 'MySQL', 'Docker'],
    summary:
      'Full-stack platform with auth, profiles, and health records. Focus on clean architecture and containerized services.',
    repo: 'https://github.com/FerMon98/huellas', // update if different
    live: undefined,
    cover: './media/huellas.svg', // swap to a real screenshot later
    highlights: [
      'Hexagonal-ish service boundaries',
      'Dockerized multi-service dev setup',
      'REST API with typed contracts',
    ],
  },
  {
    slug: 'music-library',
    title: 'Ferzk’s Music Library',
    period: '2024',
    stack: ['PHP', 'MySQL/MariaDB', 'HTML5', 'CSS', 'Vanilla JS'],
    summary:
      'Personal music library with playlists, user auth, and song metadata. Modular PHP architecture + SQL schema.',
    repo: 'https://github.com/FerMon98/Ferzk-Music-Library', // update if needed
    live: undefined,
    cover: './media/MusicLibraryBanner.png', // swap to a real screenshot later
    highlights: ['Auth + playlists', 'Normalized schema', 'Clean separation (PHP includes)'],
  },
]
