'use client'

import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useLocale } from 'next-intl'
import { Locale } from '@/config/language'
import { useTransition } from 'react'
import { useRouter, usePathname } from '@/navigation'
import { HiTranslate } from 'react-icons/hi'

const LocaleSwitcherSelect = () => {
  const locale = useLocale()
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (lang: Locale) => {
    startTransition(() => {
      router.replace({ pathname }, { locale: lang })
    })
  }

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            marginX={1}
            as={IconButton}
            variant="ghost"
            boxShadow="none"
            padding={0}
            icon={<Icon as={HiTranslate} />}
            isActive={isOpen}
          />
          <MenuList minWidth="3rem" maxWidth="10rem">
            {[
              { lang: 'English', value: 'en' },
              { lang: 'Bahasa Indonesia', value: 'id' },
              { lang: '日本語', value: 'ja' },
            ].map((cur: any) => (
              <MenuItem key={cur.value} width="10rem" onClick={() => switchLanguage(cur.value)}>
                {cur.lang}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default LocaleSwitcherSelect
