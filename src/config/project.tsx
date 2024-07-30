'use client'

import { ResponsiveValue } from '@chakra-ui/react'
import { mobileBreakpointsMap } from '@/config/theme'

export type Project = 'MeiwaPortal' | 'Risnov'

export type ProjectDetail = {
  height: string | ResponsiveValue<any>
  src: string
  idx: number
  title: string
  description: string
  objectPosition?: string
  ctaUrl?: string
  isMobile?: any
  technologies?: string[]
}

export const Projects: {
  [key in Project]: ProjectDetail
} = {
  MeiwaPortal: {
    height: { base: '130px', md: '225px', '2xl': '300px' },
    src: '/works/meiwa/meiwa_portal.png',
    idx: 1,
    title: 'title.meiwaPortal',
    description: 'descriptions.meiwaPortal',
    objectPosition: 'right 20%',
    isMobile: mobileBreakpointsMap,
    technologies: [
      'VueJS',
      'Laravel',
      'TailwindCSS',
      'InertiaJS',
      'Pusher',
      'Microsoft SQL Server',
      'VSCode',
      'Git',
      'SourceTree',
      'FontAwesome',
      'PHP',
      'Axios',
      'Apache',
      'Vite',
    ],
  },
  Risnov: {
    height: { base: '130px', md: '225px', '2xl': '300px' },
    src: '/works/lppm/risnov.png',
    idx: 2,
    title: 'title.risnov',
    description: 'descriptions.risnov',
    ctaUrl: 'https://risnov.uns.ac.id/id',
    objectPosition: 'right 20%',
    isMobile: mobileBreakpointsMap,
    technologies: [
      'Laravel',
      'TailwindCSS',
      'VSCode',
      'Git',
      'SourceTree',
      'PHP',
      'Apache',
      'Bootstrap',
    ],
  },
}

export const ProjectsList = [Projects.MeiwaPortal, Projects.Risnov]
