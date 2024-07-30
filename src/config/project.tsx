'use client'

import { ResponsiveValue } from '@chakra-ui/react'
import { mobileBreakpointsMap } from '@/config/theme'

export type Project = 'MeiwaPortal'

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
    src: '/works/tobira/IphoneX-tobira.webp',
    idx: 1,
    title: 'Meiwa Portal',
    description:
      'Website internal untuk memantau pekerjaan di pabrik dan mempermudah pegawai dalam mengakses informasi. Dikembangkan menggunakan Vue.js dan Laravel, serta beberapa library tambahan lainnya.',
    objectPosition: 'right 20%',
    isMobile: mobileBreakpointsMap,
    technologies: ['VueJS', 'Laravel'],
  },
}

export const ProjectsList = [Projects.MeiwaPortal]
