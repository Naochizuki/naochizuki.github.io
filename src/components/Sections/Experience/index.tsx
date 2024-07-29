'use client'

import { memo } from 'react'
import { Heading, Text, Stack } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import ExperienceTab from '@/components/Sections/Experience/ExperienceTab'

const DetailSection = () => {
  const t = useTranslations('Experience.main')

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
      <Text variant="description">{t('description')}</Text>

      <ExperienceTab />
    </Stack>
  )
}

export default memo(DetailSection)
