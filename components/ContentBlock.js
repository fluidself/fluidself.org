import { Box, Heading, Stack } from '@chakra-ui/react';

export default function ContentBlock({ heading, children }) {
  return (
    <Stack border="solid" borderWidth={[2, 3, 3]} paddingBottom={2} marginBottom={5} mx={[0.5, 2, 0]}>
      <Heading borderBottom="solid" borderBottomWidth={[2, 3, 3]} px={3} py={1}>
        {heading}
      </Heading>
      <Box px={3}>{children}</Box>
    </Stack>
  );
}
