import { Heading, Text, Stack } from '@chakra-ui/react';

export default function ContentBlock({ heading, children }) {
  return (
    <Stack border="3px solid" paddingBottom={2} marginBottom={5} mx={[2, 2, 0]}>
      <Heading borderBottom="3px solid" px={3} py={1}>
        {heading}
      </Heading>
      <Text px={3}>{children}</Text>
    </Stack>
  );
}
