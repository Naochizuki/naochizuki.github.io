'use client';

import { Box, Image as ChkImage, SkeletonCircle, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { avatarAnimation } from '@/config/animations';

const AvatarImages = {
  DarkMode: '/Avatar.JPG',
  LightMode: './Avatar.JPG',
};

declare global {
  interface Window {
    preloadedPictures?: HTMLImageElement[];
  }
}

const Avatar = () => {
  const MotionBox = motion(Box);
  const imgAvatar = useColorModeValue(AvatarImages.LightMode, AvatarImages.DarkMode);
  useEffect(() => {
    // Some nice preloading and caching
    const images = [AvatarImages.DarkMode, AvatarImages.LightMode];
    const preloadedImages = images.map((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
      return img;
    });
    window.preloadedPictures = preloadedImages;
  }, []);
  return (
    <MotionBox
      id="ncAvatar"
      boxSize={{ base: 64, lg: 'sm' }}
      padding={{ base: 8 }}
      marginBottom={{ base: 10, md: 0, lg: 0 }}
      initial="initial"
      animate="animate"
      variants={avatarAnimation}
      exit={{ opacity: 0 }}
    >
      <ChkImage
        src={imgAvatar}
        alt="Naochizuki Avatar"
        htmlWidth="250"
        htmlHeight="250"
        margin="auto"
        rounded={999}
        ring={5}
        ringColor="#97dffc"
        fallback={<SkeletonCircle height="100%" width="100%" />}
      />
    </MotionBox>
  );
};

export default Avatar;
