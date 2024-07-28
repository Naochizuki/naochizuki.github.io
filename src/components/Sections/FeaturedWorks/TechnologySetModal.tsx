'use client';

import {
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import styles from '@/components/Sections/FeaturedWorks/styles.module.css';
import { Technology, Technologies, splitTechnologies } from '@/config/technologies';

interface ITechnologySetModal {
  isOpen: boolean;
  onClose: any;
  technologies?: string[];
}

const TechnologyList = ({ title, columns }: { title: string; columns: Technology[][] }) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200');
  const [colOne, colTwo = []] = columns;

  if (colOne?.length || colTwo?.length) {
    return (
      <>
        <Heading as="div" size="sm" paddingBottom={1} variant="description">
          {title}
        </Heading>
        <Divider marginBottom={4} />
        <SimpleGrid columns={2} spacing={4} paddingBottom={6}>
          <List spacing={3}>
            {colOne.map((item) => (
              <ListItem
                key={`colOne-${item.name}`}
                fontSize="small"
                display="flex"
                alignItems="center"
              >
                <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
                {item.name}
              </ListItem>
            ))}
          </List>
          <List spacing={3}>
            {colTwo.map((item) => (
              <ListItem
                key={`colTow-${item.name}`}
                fontSize="small"
                display="flex"
                alignItems="center"
              >
                <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
                {item.name}
              </ListItem>
            ))}
          </List>
        </SimpleGrid>
      </>
    );
  }

  return <span></span>;
};
const TechnologySetModal = ({ isOpen, onClose, technologies }: ITechnologySetModal) => {
  const backendCols = splitTechnologies(Technologies.backend, technologies);
  const frontendCols = splitTechnologies(Technologies.frontend, technologies);
  const cicdCols = splitTechnologies(Technologies.cicd, technologies);
  const dataBaseCols = splitTechnologies(Technologies.database, technologies);
  const uiFrameWorkCols = splitTechnologies(Technologies['ui frameworks'], technologies);
  const productivityCols = splitTechnologies(Technologies['productivity boost'], technologies);
  const mobileCols = splitTechnologies(Technologies.mobile, technologies);
  const gameCols = splitTechnologies(Technologies.games, technologies);
  const desktopCols = splitTechnologies(Technologies.desktop, technologies);

  const t = useTranslations('FeaturedWorks.technologySet');
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('modal.header')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.technologyModal}>
          <TechnologyList title={t('technologyList.backend')} columns={backendCols} />
          <TechnologyList title={t('technologyList.frontend')} columns={frontendCols} />
          <TechnologyList title={t('technologyList.cicd')} columns={cicdCols} />
          <TechnologyList title={t('technologyList.database')} columns={dataBaseCols} />
          <TechnologyList title={t('technologyList.uiFramework')} columns={uiFrameWorkCols} />
          <TechnologyList title={t('technologyList.mobile')} columns={mobileCols} />
          <TechnologyList title={t('technologyList.game')} columns={gameCols} />
          <TechnologyList title={t('technologyList.desktop')} columns={desktopCols} />
          <TechnologyList
            title={t('technologyList.productivityBoosts')}
            columns={productivityCols}
          />
        </ModalBody>
        <ModalFooter>
          <Text fontSize="x-small">*{t('technologyList.note')} </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TechnologySetModal;
