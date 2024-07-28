'use client';

import { memo } from 'react';
import { Heading, Text, Stack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import ExperienceTab from '@/components/Sections/Experience/ExperienceTab';

const DetailSection = () => {
  const t = useTranslations('Experience.main');

  return (
    <Stack width={{ base: '99%', lg: '60%', xl: '75%' }} height="100%" spacing={{ base: 6, xl: 8 }}>
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        {t('header')}
      </Heading>
      <Text variant="description">
        Sejak tahun 2022, aku memulai magang pertama untuk mengasah keterampilan dan menambah
        pengalaman. Meskipun masih terbilang singkat, aku sangat berterima kasih kepada
        perusahaan-perusahaan yang telah memberikan kesempatan untuk berkembang. Pengalaman ini
        sangat berharga dan memberikan fondasi kuat dalam perjalanan karierku.
      </Text>

      <ExperienceTab />
    </Stack>
  );
};

export default memo(DetailSection);
