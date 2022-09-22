import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  shadows: {
    outline: '0 0 0 3px rgba(250, 240, 137, 0.6)',
  },
  components: {
    Link: {
      baseStyle: {
        textDecoration: 'underline',
      },
    },
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
