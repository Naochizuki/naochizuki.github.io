'use client'

import { memo, useCallback } from 'react'
import {
  Container,
  Button,
  Flex,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  HStack,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { motion, useCycle } from 'framer-motion'
import styles from '@/components/Menu/styles.module.css'
import MobileMenu from '@/components/Menu/toggle'
import LocaleSwitcherSelect from '@/components/LocaleSwitcher'
import { ThemeMode, mobileBreakpointsMap } from '@/config/theme'
import { easing, menuAnim } from '@/config/animations'
import useScrollDirection, { ScrollDirection } from '@/hooks/useScrollDirection'

const Navigation = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  const MotionContainer = motion(Container)
  const [isOpen, toggleOpen] = useCycle(false, true)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  const menuButtonSize = useBreakpointValue({
    base: 'xl',
    md: 'sm',
  })

  const bg = useColorModeValue('rgba(237, 242, 247, 0.95)', 'rgba(18, 18, 18, 0.9)')

  const borderColor = useColorModeValue('teal.500', 'cyan.200')

  const IsDark = colorMode === ThemeMode.Dark
  const btnClassName = `${styles.blogBtn} ${!IsDark && styles.dark}`
  const Icon = IsDark ? SunIcon : MoonIcon
  const onMenuItemClick = useCallback(
    (e: any) => {
      e.stopPropagation()
      if (isMobile) {
        toggleOpen()
      }
    },
    [isMobile, toggleOpen]
  )
  const scrollDirection = useScrollDirection()
  const t = useTranslations('Menu.navigation')

  return (
    <>
      <Box
        display={{ base: 'flex', xl: 'none' }}
        alignItems="center"
        paddingTop={1}
        className={styles.menuBar}
        zIndex={100}
        top="3%"
      >
        <IconButton
          aria-label="Color Mode"
          variant="ghost"
          icon={<Icon />}
          boxShadow="none"
          onClick={toggleColorMode}
          padding={0}
        />
        <MobileMenu isDarkMode={IsDark} toggle={toggleOpen} isOpen={isOpen} />
      </Box>
      <Box
        display={{ base: 'flex', xl: 'none' }}
        alignItems="center"
        paddingTop={1}
        className={styles.menuBar}
        zIndex={100}
        top="3%"
      >
        <LocaleSwitcherSelect />
      </Box>

      <MotionContainer
        width="100%"
        backgroundColor={bg}
        maxWidth={{ base: '100%', sm: '100%', lg: '50%', xl: '60%' }}
        className={styles.menu}
        right={{
          lg: !isMobile && scrollDirection === ScrollDirection.Down ? '2%' : '3.5%',
        }}
        initial="hide"
        animate={(!isMobile || isOpen) && 'show'}
        style={{
          width: !isMobile && scrollDirection === ScrollDirection.Down ? '12%' : '100%',
          top: !isOpen && isMobile && '-100vh',
          opacity: !isOpen && isMobile && '0',
          left: isOpen && isMobile && 0,
        }}
        borderColor={isOpen && isMobile && borderColor}
        borderBottomWidth={isOpen && isMobile && '1px'}
        paddingBottom={isOpen && isMobile && '1px'}
        ease={easing}
        variants={menuAnim}
        marginTop={0}
        paddingTop={1}
        as="nav"
      >
        <Flex
          justifyContent={{ base: 'center', lg: 'flex-end' }}
          direction={{
            base: 'column',
            lg: scrollDirection === ScrollDirection.Down ? 'column' : 'row',
          }}
          paddingX={{ base: '', sm: '10', lg: '0' }}
          paddingY={{
            base: '10',
            lg: scrollDirection === ScrollDirection.Down ? '10' : '3',
          }}
          height={{ base: '100vh', lg: 'auto' }}
          paddingRight="0"
          paddingBottom={isMobile ? 10 : '0'}
          onClick={() => isMobile && toggleOpen()}
        >
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
            order={{ lg: scrollDirection === ScrollDirection.Down ? 2 : 1 }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href={isMobile ? '#aboutMe' : '#'}
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              {t('about')}
            </Button>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
            marginY={{ base: 2, lg: 0 }}
            order={{ lg: scrollDirection === ScrollDirection.Down ? 3 : 2 }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href="#jobs"
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              {t('experience')}
            </Button>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
            marginY={{ base: 2, lg: 0 }}
            order={{ lg: scrollDirection === ScrollDirection.Down ? 4 : 3 }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href="#works"
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              {t('works')}
            </Button>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            textAlign={{ base: 'center', lg: 'left' }}
            marginY={{ base: 2, lg: 0 }}
            order={{ lg: scrollDirection === ScrollDirection.Down ? 5 : 4 }}
          >
            <Button
              fontWeight="light"
              variant="ghost"
              fontSize={menuButtonSize}
              letterSpacing={2}
              className={btnClassName}
              padding={2}
              marginX={2}
              as="a"
              href="#contact"
              rel="noreferrer"
              onClick={onMenuItemClick}
            >
              {t('contact')}
            </Button>
          </Box>
          {!isMobile && (
            <HStack spacing="1px" order={{ lg: scrollDirection === ScrollDirection.Down ? 1 : 5 }}>
              <Box>
                <IconButton
                  marginX={1}
                  aria-label="Color Mode"
                  variant="ghost"
                  icon={<Icon />}
                  boxShadow="none"
                  onClick={toggleColorMode}
                />
              </Box>
              <Box>
                <LocaleSwitcherSelect />
              </Box>
            </HStack>
          )}
        </Flex>
      </MotionContainer>
    </>
  )
}

export default memo(Navigation)
