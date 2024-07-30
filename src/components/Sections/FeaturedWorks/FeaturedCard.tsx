'use client'

import {
  Box,
  Image,
  ResponsiveValue,
  Divider,
  Skeleton,
  Text,
  SimpleGrid,
  Button,
  Container,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import styles from '@/components/Sections/FeaturedWorks/styles.module.css'
import { easing, DURATIONS } from '@/config/animations'

export type FeaturedCardProps = {
  height: string | ResponsiveValue<any>
  src: string
  idx: number
  title: string
  description: string
  objectPosition?: string
  ctaUrl?: string
  isMobile?: boolean
  technologies?: string[]
}

const variants = {
  normal: {
    opacity: 0.85,
  },
  hover: {
    scale: 1.1,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: 'backOut',
    },
  },
  tap: {
    scale: 0.85,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const MotionImage = motion(Image)

const TechnologySetModal = dynamic(() => import('./TechnologySetModal'))

const ProjectDescription = ({
  idx,
  title,
  description,
  ctaUrl,
  isLeft,
  technologies,
}: {
  idx?: number
  title: string
  description: string
  ctaUrl?: string
  isLeft: boolean
  technologies?: string[]
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const t = useTranslations('FeaturedWorks.featuredCard')

  return (
    <>
      <Container
        paddingX={5}
        paddingY={1}
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        flexDirection="column"
      >
        <Stack spacing={1} width="100%">
          <Text
            fontSize={{ base: 'md', md: 'large', '2xl': 'xx-large' }}
            fontWeight="bold"
            letterSpacing={2}
            width="90%"
            alignSelf={isLeft ? 'flex-end' : 'flex-start'}
            textTransform="uppercase"
            as="span"
          >
            <Text variant="accentAlternative" fontSize="md" as="span">
              #0{idx}
              {'  '}
            </Text>
            {title}
          </Text>
          <Divider
            borderColor="#A6A6A6"
            width="90%"
            marginLeft={0}
            alignSelf={isLeft ? 'flex-end' : 'flex-start'}
          />
        </Stack>
        <Text
          fontSize="smaller"
          variant="accentAlternative"
          width="90%"
          alignSelf={isLeft ? 'flex-end' : 'flex-start'}
          wordBreak="break-word"
          paddingY={{ base: 3, md: 0 }}
        >
          {description}
        </Text>
        <Stack direction="row">
          {ctaUrl && (
            <Button
              variant="outlineAlternative"
              fontWeight="light"
              fontSize={{ base: 'sm', '2xl': 'md' }}
              size="sm"
              as="a"
              href={ctaUrl}
              rel="noreferrer"
              target="_blank"
              marginY={{ base: 3, md: 0 }}
            >
              {t('viewProject')}
            </Button>
          )}
          {technologies?.length && (
            <Button
              variant="outlineAlternative"
              fontWeight="light"
              fontSize={{ base: 'sm', '2xl': 'md' }}
              size="sm"
              marginY={{ base: 3, md: 0 }}
              onClick={onOpen}
            >
              {t('viewTechnology')}
            </Button>
          )}
        </Stack>
      </Container>
      <TechnologySetModal isOpen={isOpen} onClose={onClose} technologies={technologies} />
    </>
  )
}

const FeaturedCard = ({
  idx,
  height,
  src,
  title,
  description,
  objectPosition,
  ctaUrl,
  isMobile,
  technologies,
}: FeaturedCardProps) => {
  const isLeftImage = isMobile ? false : idx % 2 === 0
  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.200')
  const CoverImage = () => (
    <MotionImage
      height={height}
      width="100%"
      src={src}
      alt={title}
      objectFit="cover"
      objectPosition={objectPosition}
      loading="lazy"
      opacity={0.75}
      whileHover={variants.hover}
      whileTap={variants.tap}
      fallback={<Skeleton height={height} width="100%" />}
    />
  )

  return (
    <Box
      height="auto"
      bg={bg}
      borderRadius="1em"
      className={styles.featureCard}
      borderColor={bg}
      borderWidth="1px"
    >
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 3, md: 0 }}
        display={{ base: 'flex', md: 'grid' }}
        flexDirection={{ base: 'column-reverse', md: 'initial' }}
      >
        {isLeftImage && <CoverImage />}
        <ProjectDescription
          idx={idx}
          title={title}
          description={description}
          ctaUrl={ctaUrl}
          isLeft={isLeftImage}
          technologies={technologies}
        />
        {!isLeftImage && <CoverImage />}
      </SimpleGrid>
    </Box>
  )
}
export default FeaturedCard
