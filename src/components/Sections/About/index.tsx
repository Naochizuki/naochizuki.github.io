'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';
import { useDisclosure } from '@chakra-ui/react';
import Detail from '@/components/Sections/About/Detail';

const SkillSetModal = dynamic(() => import('@/components/Sections/About/SkillSetModal'));

const AboutSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Detail onOpen={onOpen} />
      <SkillSetModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default memo(AboutSection);
