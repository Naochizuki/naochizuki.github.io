'use client';

import { memo } from 'react';
import { Heading, Text, Stack, Link, Icon, Box } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RiCopyrightLine, RiGithubFill } from 'react-icons/ri';
import { useTranslations } from 'next-intl';

const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
};

const GetInTouch = () => {
  const [ref, inView] = useInView();

  const t = useTranslations('GetInTouch');
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        {t('sayHi')}{' '}
        <Text as="span" fontSize="2xl" variant="emphasis">
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
          >
            (⁀ᗢ⁀)
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
        Meskipun aku agak introvert, aku tetap akan membalas pesan selama energi interaksi sosialku
        masih ada. Coding, pekerjaan, film, atau bahkan hal-hal terkait anime, semuanya oke. Jadi,
        jangan ragu untuk menghubungiku di media sosial atau kirim{' '}
        <Link href="mailto:basugandhisasangka10m@gmail.com" target="_blank" rel="noreferrer">
          email
        </Link>
        .
      </Text>

      <Box
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
      >
        <Link
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href="https://github.com/Naochizuki"
          target="_blank"
          _focus={{ boxShadow: 'none' }}
        >
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Naochizuki <Icon as={RiCopyrightLine} /> 2024
          </Text>
        </Link>
      </Box>
    </Stack>
  );
};

export default memo(GetInTouch);
