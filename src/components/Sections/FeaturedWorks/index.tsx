'use client'

import { memo } from 'react'
import { Heading, Text, Stack, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import FeaturedCard from '@/components/Sections/FeaturedWorks/FeaturedCard'
import { fadeInUpSlower, galleryStagger } from '@/config/animations'
import { mobileBreakpointsMap } from '@/config/theme'
import { ProjectsList } from '@/config/project'

const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)

  const t = useTranslations('FeaturedWorks.main')

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

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        {ProjectsList.map((project) => (
          <MotionGridItem key={`project-${project.idx}`} colSpan={6} variants={fadeInUpSlower}>
            <FeaturedCard
              idx={project.idx}
              title={t(project.title)}
              src={project.src}
              description={t(project.description)}
              ctaUrl={project.ctaUrl}
              height={project.height}
              objectPosition={project.objectPosition}
              isMobile={useBreakpointValue(project.isMobile)}
              technologies={project.technologies}
            />
          </MotionGridItem>
        ))}
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
