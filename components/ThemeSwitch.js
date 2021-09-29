import { useColorMode, IconButton, Icon } from '@chakra-ui/react';

export default function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  const iconTransform = {
    light: 'rotate(0deg)',
    dark: 'rotate(180deg)',
  };
  const iconColor = {
    light: 'rgb(17, 17, 17)',
    dark: 'white',
  };

  return (
    <IconButton
      bg="transparent"
      aria-label="Toggle dark mode"
      onClick={toggleColorMode}
      icon={
        <Icon height="18px" width="18px" viewBox="0 0 18 18" fill="none" transition="0.4s" transform={iconTransform[colorMode]}>
          <circle cx="9" cy="9" r="8.5" stroke={iconColor[colorMode]} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0V18Z"
            fill={iconColor[colorMode]}
          />
        </Icon>
      }
    />
  );
}
