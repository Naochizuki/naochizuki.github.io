'use client'

import { IconType } from 'react-icons'
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiDocker,
  SiGooglecloud,
  SiCpanel,
  SiRancher,
  SiGitlab,
  SiMysql,
  SiMongodb,
  SiFramer,
  SiGit,
  SiGnubash,
  SiVisualstudiocode,
  SiUnity,
  SiMicrosoft,
  SiElectron,
  SiLaravel,
  SiExpress,
  SiQuasar,
  SiMantine,
  SiChakraui,
  SiTailwindcss,
  SiInertia,
  SiPusher,
  SiMicrosoftsqlserver,
  SiAxios,
  SiApache,
  SiVite,
  SiBootstrap,
} from 'react-icons/si'
import { FaFontAwesomeAlt, FaSourcetree } from 'react-icons/fa'
import { IoLogoPwa } from 'react-icons/io5'

export type TechnologyCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'games'
  | 'desktop'
  | 'icon libraries'
  | 'http client'
  | 'web server'

export type Technology = {
  name: string
  icon: IconType
}

export const Technologies: {
  [key in TechnologyCategory]: Technology[]
} = {
  backend: [
    {
      name: 'Javascript (ES6+)',
      icon: SiJavascript,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    },
    {
      name: 'Express',
      icon: SiExpress,
    },
    {
      name: 'PHP',
      icon: SiPhp,
    },
    {
      name: 'Laravel',
      icon: SiLaravel,
    },
    {
      name: 'Pusher',
      icon: SiPusher,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },
    {
      name: 'VueJS',
      icon: SiVuedotjs,
    },
    {
      name: 'InertiaJS',
      icon: SiInertia,
    },
  ],
  database: [
    {
      name: 'MySQL',
      icon: SiMysql,
    },
    {
      name: 'MongoDb',
      icon: SiMongodb,
    },
    {
      name: 'Microsoft SQL Server',
      icon: SiMicrosoftsqlserver,
    },
  ],
  cicd: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'GCP',
      icon: SiGooglecloud,
    },
    {
      name: 'CPanel',
      icon: SiCpanel,
    },
    {
      name: 'Rancher',
      icon: SiRancher,
    },
    {
      name: 'GitlabCICD',
      icon: SiGitlab,
    },
  ],
  'ui frameworks': [
    {
      name: 'Quasar',
      icon: SiQuasar,
    },
    {
      name: 'ChakraUI',
      icon: SiChakraui,
    },
    {
      name: 'MantineUI',
      icon: SiMantine,
    },
    {
      name: 'TailwindCSS',
      icon: SiTailwindcss,
    },
    {
      name: 'Framer Motion',
      icon: SiFramer,
    },
    {
      name: 'Bootstrap',
      icon: SiBootstrap,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
      icon: SiVisualstudiocode,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Bash',
      icon: SiGnubash,
    },
    {
      name: 'SourceTree',
      icon: FaSourcetree,
    },
    {
      name: 'Vite',
      icon: SiVite,
    },
  ],
  mobile: [
    {
      name: 'React Native',
      icon: SiReact,
    },
    {
      name: 'Web PWA',
      icon: IoLogoPwa,
    },
  ],
  games: [
    {
      name: 'Unity3D',
      icon: SiUnity,
    },
  ],
  desktop: [
    {
      name: 'Windows Forms, WPF',
      icon: SiMicrosoft,
    },
    {
      name: 'Electron',
      icon: SiElectron,
    },
  ],
  'icon libraries': [
    {
      name: 'FontAwesome',
      icon: FaFontAwesomeAlt,
    },
  ],
  'http client': [
    {
      name: 'Axios',
      icon: SiAxios,
    },
  ],
  'web server': [
    {
      name: 'Apache',
      icon: SiApache,
    },
  ],
}

export const splitTechnologies = (srcArray: Technology[], technologies?: string[]) => {
  const array = srcArray.filter((item) => technologies?.includes(item.name))

  const arrLength = array.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = array.length; i < j; i += chunk) {
    temporary.push(array.slice(i, i + chunk))
  }
  return temporary
}
