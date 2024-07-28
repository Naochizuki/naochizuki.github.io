'use client';

import {
  Text,
  Link,
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image,
  List,
  ListIcon,
  ListItem,
  SlideFade,
  Skeleton,
  useColorModeValue,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import { useTranslations, useLocale } from 'next-intl';
import { BiRightArrow } from 'react-icons/bi';
import styles from '@/components/Sections/Experience/styles.module.css';
import { ExperiencesList } from '@/config/experience';
import { mobileBreakpointsMap } from '@/config/theme';

const ExperienceTab = () => {
  const { colorMode } = useColorMode();
  const emphasis = useColorModeValue('teal.500', 'cyan.200');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const activeBordercolor = useColorModeValue('teal.500', '#97DFFC');
  const isMobile = useBreakpointValue(mobileBreakpointsMap);

  const tMonth = useTranslations('Month');
  const t = useTranslations('Experience.experienceTab');
  const locale = useLocale();

  const tabOrientation =
    useBreakpointValue({
      base: 'horizontal',
      sm: 'horizontal',
      md: 'vertical',
      lg: 'vertical',
      xl: 'vertical',
    }) ?? ('vertical' as any);

  const tabMinWidth = useBreakpointValue({
    base: '160px',
    sm: '160px',
    md: 'auto',
    lg: 'auto',
    xl: 'auto',
  });
  return (
    <Tabs id="experienceTabs" orientation={tabOrientation} isLazy>
      <TabList
        width={!isMobile ? '30%' : 'auto'}
        borderColor="transparent"
        overflowX={isMobile ? 'scroll' : 'auto'}
        overflowY="hidden"
        className={styles.experienceTabs}
      >
        {ExperiencesList.map((company) => (
          <Tab
            key={`Tab-${company.name}`}
            fontSize="smaller"
            h="120px"
            minWidth={tabMinWidth}
            boxShadow="none"
            borderColor={borderColor}
            borderLeftWidth={tabOrientation === 'vertical' ? '4px' : '0'}
            _selected={{
              borderColor: activeBordercolor,
              boxShadow: 'none',
              borderLeftWidth: tabOrientation === 'vertical' ? '4px' : '0',
              borderBottomWidth: tabOrientation === 'horizontal' ? '4px' : '0',
              background: 'whiteAlpha.100',
            }}
            borderBottomWidth={tabOrientation === 'horizontal' ? '4px' : '0'}
          >
            <Image
              src={colorMode === 'dark' ? company.logo.dark : company.logo.light}
              alt={company.longName}
              maxWidth="100px"
              fallback={<Skeleton height="100%" width="100%" />}
            />
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {ExperiencesList.map((company) => (
          <TabPanel key={`TabPanel-${company.name}`}>
            <SlideFade offsetY="20px" in>
              <Stack spacing={0}>
                <Text as="span" fontSize="lg" fontWeight="bold" variant="description">
                  {company.position}
                </Text>
                <Text as="span">
                  <Link
                    href={company.url}
                    aria-label="scentregroup"
                    rel="noreferrer"
                    target="_blank"
                    fontSize="lg"
                    fontWeight="bold"
                  >
                    #{company.name}
                  </Link>
                  <Text as="span" textTransform="none" fontSize="x-small" variant="description">
                    {' '}
                    {company.subDetail}
                  </Text>
                </Text>
                <Text fontSize="smaller">{`${tMonth(`${company.start.toLowerCase()}.long`)} ${
                  company.startYear
                } - ${
                  company.end === 'present'
                    ? t('present')
                    : `${tMonth(`${company.end.toLowerCase()}.long`)} ${company.endYear}`
                }`}</Text>
              </Stack>
              <List spacing={3} pt={5}>
                {Object.entries(company.roles || {}).map((roles: any) => {
                  if (locale === roles[0]) {
                    return roles[1].map((roleDesc: any, idx: any) => (
                      <ListItem
                        key={`${company.name}-desc-${idx}`}
                        fontSize="smaller"
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-start"
                      >
                        <ListIcon as={BiRightArrow} color={emphasis} display="block" />
                        <Text as="span" display="block" variant="description">
                          {roleDesc}
                        </Text>
                      </ListItem>
                    ));
                  }

                  return <span key={roles[1][0]}></span>;
                })}
              </List>
            </SlideFade>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default ExperienceTab;
