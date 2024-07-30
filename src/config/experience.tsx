'use client'

export type Company = 'Meiwa' | 'SC' | 'Risnov'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url?: string
  position: string
  start: string
  startYear: string
  end: string
  endYear: string
  logo: {
    light: string
    dark?: string
  }
  roles: string[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Meiwa: {
    name: 'name.meiwaIndustry',
    longName: 'Meiwa Industry Co., Ltd.',
    subDetail: 'subDetail.internship',
    url: 'https://www.meiwa-industry.co.jp',
    position: 'position.softwareEngineer',
    start: 'June',
    startYear: '2023',
    end: 'May',
    endYear: '2024',
    logo: {
      light: '/worked_at_logos/meiwa/Meiwa_logo.png',
      dark: '/worked_at_logos/meiwa/Meiwa_logo_black.png',
    },
    roles: ['roles.meiwa.role1', 'roles.meiwa.role2', 'roles.meiwa.role3', 'roles.meiwa.role4'],
  },
  SC: {
    name: 'name.startupCampus',
    longName: 'Scentregroup Limited AU',
    subDetail: 'subDetail.msib',
    url: 'https://startupcampus.id/studi-independen',
    position: 'position.backendTrackParticipants',
    start: 'August',
    startYear: '2022',
    end: 'December',
    endYear: '2022',
    logo: {
      light: '/worked_at_logos/startupcampus/Startup_campus_logo.png',
      dark: '/worked_at_logos/startupcampus/Startup_campus_logo_black.png',
    },
    roles: ['roles.sc.role1', 'roles.sc.role2'],
  },
  Risnov: {
    name: 'name.lppm',
    longName: 'LPPM Universitas Sebelas Maret',
    subDetail: 'subDetail.uns',
    url: 'https://risnov.uns.ac.id/id',
    position: 'position.juniorSoftwareEngineer',
    start: 'July',
    startYear: '2022',
    end: 'December',
    endYear: '2022',
    logo: {
      light: '/worked_at_logos/lppm/lppm_logo.PNG',
      dark: '/worked_at_logos/lppm/lppm_logo.PNG',
    },
    roles: ['roles.risnov.role1', 'roles.risnov.role2', 'roles.risnov.role3'],
  },
}

export const ExperiencesList = [Experiences.Meiwa, Experiences.SC, Experiences.Risnov]
