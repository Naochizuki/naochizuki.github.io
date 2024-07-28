'use-client';

import { useColorMode } from '@chakra-ui/react';

const OpenGraphHead = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <title>Basugandhi</title>
      <link rel="shortcut icon" href={colorMode === 'dark' ? '/favicon.svg' : '/favicon.svg'} />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />
    </>
  );
};

export default OpenGraphHead;
