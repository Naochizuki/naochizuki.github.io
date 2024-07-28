'use client';

import { IconType } from 'react-icons';
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
} from 'react-icons/si';
import { FaSourcetree } from 'react-icons/fa';
import { IoLogoPwa } from 'react-icons/io5';

export type SkillCategory =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'mobile'
  | 'games'
  | 'desktop';

export type Skill = {
  name: string;
  icon: IconType;
};

export const Skills: {
  [key in SkillCategory]: Skill[];
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
};

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length;
  const isEvenChunk = arrLength % 2 === 0;

  let chunk = 4;
  if (isEvenChunk) {
    chunk = arrLength / 2;
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3;
  }

  let i = 0;
  let j = 0;
  const temporary = [];
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk));
  }
  return temporary;
};
