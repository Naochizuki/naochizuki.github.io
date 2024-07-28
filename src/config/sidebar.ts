'use client';

import { IconType } from 'react-icons';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

type SocialMedia = {
  label: string;
  href: string;
  icon: IconType;
};

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/nao.cchi_/',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/basugandhi-sasangka-murti-2137281bb/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/Naochizuki',
    icon: FaGithub,
  },
];
