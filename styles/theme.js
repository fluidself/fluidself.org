import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  styles: {
    global: props => ({
      body: {
        bg: mode('white', 'rgb(17, 17, 17)')(props),
      },
    }),
  },
});

export default theme;
