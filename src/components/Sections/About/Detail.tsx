'use client'

import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiLaravel,
  SiJavascript,
  SiTypescript,
  SiVuedotjs,
  SiQuasar,
  SiTailwindcss,
  SiMysql,
  SiExpress,
} from 'react-icons/si'

import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'
import { useTranslations } from 'next-intl'

type ISkillSetModal = {
  onOpen: any
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2022

  const t = useTranslations('About.detail')

  return (
    <Stack width={{ base: '100%', lg: '75%' }} spacing={{ base: 6, xl: 8 }} as="section">
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        {t('whatIDo')}
      </Heading>
      <Text variant="description">
        {t.rich('description', {
          major: (chunks) => (
            <Text as="span" variant="emphasis">
              <b>{chunks}</b>
            </Text>
          ),
          university: (chunks) => (
            <Text as="span" variant="emphasis">
              <b>{chunks}</b>
            </Text>
          ),
          role: (chunks) => (
            <Text as="span" variant="emphasis">
              <b>{chunks}</b>
            </Text>
          ),
          meiwa: (chunks) => (
            <Tooltip
              label="Akhirnya aku bisa merasakan hidup di Jepang! Buatku, ini mimpi yang jadi nyata, apalagi sebagai mahasiswa dengan kondisi ekonomi pas-pasan"
              hasArrow
            >
              <Text as="span" variant="emphasis">
                <b>{chunks}</b>
              </Text>
            </Tooltip>
          ),
          years: professionalYears,
        })}
        <br /> <br />
        {t.rich('technologyDescription', {
          coffee: (chunks) => (
            <Tooltip label="Sebenernya aku lebih sering minum MilkTea, hehe" hasArrow>
              <Text as="span" variant="emphasis" textDecorationLine="underline">
                {chunks}
              </Text>
            </Tooltip>
          ),
          icon: () => <Icon as={GiCoffeePot} color={emphasis} />,
        })}
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiExpress} color={emphasis} fontSize="2em" />
            Express
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiLaravel} color={emphasis} fontSize="2em" />
            Laravel
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiMysql} color={emphasis} fontSize="2em" />
            MySQL
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiVuedotjs} color={emphasis} fontSize="2em" />
            VueJs
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiQuasar} color={emphasis} fontSize="2em" />
            Quasar
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTailwindcss} color={emphasis} fontSize="2em" />
            TailwindCSS
          </ListItem>
        </List>
        <Box>
          <Text as="button" variant="emphasis" fontSize="smaller" textAlign="left" onClick={onOpen}>
            {`${t('fullArsenal')} `} <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
