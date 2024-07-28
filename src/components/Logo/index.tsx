'use client';

import { memo, useState } from 'react';
import { useColorMode, Image, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/components/Logo/styles.module.css';
import { ThemeMode, mobileBreakpointsMap } from '@/config/theme';
import { simpleOpacity } from '@/config/animations';

const Logo = () => {
  const { colorMode } = useColorMode();
  const [isLogoLoaded, setLogoLoaded] = useState(false);
  const MotionImage = motion(Image);
  const isMobile = useBreakpointValue(mobileBreakpointsMap);
  return (
    <Link href="/" passHref>
      {colorMode === ThemeMode.Dark ? (
        <MotionImage
          className={!isMobile ? styles.logo : ''}
          boxSize={isMobile ? '30px' : '50px'}
          objectFit="cover"
          src="./logo.png"
          alt="Naochizuki Logo"
          fallbackSrc="./logo.png"
          variants={simpleOpacity}
          initial="initial"
          animate={isLogoLoaded && 'animate'}
          onLoad={() => setLogoLoaded(true)}
          zIndex={2}
        />
      ) : (
        <MotionImage
          className={`${!isMobile ? styles.logo : ''} ${styles.logoLight}`}
          boxSize={isMobile ? '30px' : '50px'}
          objectFit="cover"
          src="./logo.png"
          fallbackSrc="./logo.png"
          alt="Naochizuki Logo"
          variants={simpleOpacity}
          initial="initial"
          animate={isLogoLoaded && 'animate'}
          onLoad={() => setLogoLoaded(true)}
          zIndex={2}
        />
      )}
    </Link>
  );
};

export default memo(Logo);
