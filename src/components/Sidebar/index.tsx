'use client';

import {
  Stack,
  Heading,
  Text,
  Button,
  useColorMode,
  Container,
  Link,
  Box,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import styles from '@/components/Sidebar/styles.module.css';
import { fadeInUp, letterSpace, simpleOpacity, stagger, scaleUp } from '@/config/animations';
import { SocialMedias } from '@/config/sidebar';

const Sidebar = () => {
  const { colorMode } = useColorMode();
  const display = useBreakpointValue({ base: 'none', lg: 'block' });
  const surNameSize = useBreakpointValue({ base: '3xl', md: '3xl' });
  const MotionHeading = motion(Heading);
  const MotionText = motion(Text);
  const MotionStack = motion(Stack);
  const MotionButton = motion(Button);
  const MotionBox = motion(Box);

  const t = useTranslations('Sidebar');
  const locale = useLocale();

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      position={{ xl: 'fixed' }}
      maxWidth={{ xl: '34%' }}
      top={{ lg: 0 }}
    >
      <motion.div
        key="sidebarCirle"
        id="sidebarCircle"
        className={`${styles.sidebar} ${colorMode === 'light' ? styles.dark : ''}`}
        variants={scaleUp}
        style={{ display }}
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
      />
      <Container
        padding={0}
        margin={0}
        height={{ xl: '100vh' }}
        display={{ xl: 'flex' }}
        alignItems={{ xl: 'center' }}
      >
        <MotionStack variants={stagger} spacing={6} w="100">
          <MotionText variants={fadeInUp} delay={1} variant="accent" fontWeight="light">
            {t('hello')}
          </MotionText>
          <MotionHeading
            as="h2"
            size={surNameSize}
            variant="emphasis"
            className={styles.marginTopForce}
            textTransform="uppercase"
            variants={letterSpace}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Basugandhi
          </MotionHeading>
          <MotionHeading
            as="h1"
            size="xl"
            paddingRight={{ lg: '20' }}
            textTransform="uppercase"
            variants={fadeInUp}
          >
            Sasangka Murti
          </MotionHeading>
          <MotionText
            colorScheme="gray"
            fontSize="smaller"
            className={styles.marginTopForce}
            variants={fadeInUp}
          >
            {t('nickname')}
          </MotionText>

          <MotionHeading
            as="h3"
            size="md"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
          >
            Software Engineer
          </MotionHeading>

          <MotionText
            variant="description"
            fontSize="small"
            paddingRight={{ lg: '12' }}
            variants={fadeInUp}
            maxWidth={{ base: '100%', lg: '80%' }}
          >
            {t('thanks1')}
            <Text variant="emphasis" as="span">
              {' '}
              {t('thanks2')}
            </Text>
            <br /> {t('me')}
          </MotionText>
          <MotionButton
            size="lg"
            variant="outline"
            borderWidth="1px"
            borderRadius="0"
            fontWeight="normal"
            fontSize="sm"
            width={locale === 'id' ? '140px' : '120px'}
            variants={simpleOpacity}
            as="a"
            href="mailto:basugandhisasangka10m@gmail.com"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {t('getInTouch')}
          </MotionButton>

          <MotionBox d="flex" variants={simpleOpacity}>
            {SocialMedias.map((socMedia) => (
              <Link
                variant="description"
                key={socMedia.label}
                aria-label={socMedia.label}
                rel="noreferrer"
                width={8}
                href={socMedia.href}
                target="_blank"
                _focus={{ boxShadow: 'none' }}
                marginX={0.5}
              >
                <Icon w={6} h={6} as={socMedia.icon} color="currentColor" />
              </Link>
            ))}
          </MotionBox>
        </MotionStack>
      </Container>
    </MotionBox>
  );
};

export default Sidebar;
