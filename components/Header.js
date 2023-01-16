import React from 'react';
import NextLink from 'next/link';
import { Link, Flex, Stack } from '@chakra-ui/react';
import ThemeSwitch from './ThemeSwitch';
import FSIcon from './FSIcon';

export default function Header() {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={4} mt={2}>
      <NextLink href="/">
        <a>
          <FSIcon />
        </a>
      </NextLink>
      <Stack spacing={6} align="center" direction="row">
        <NextLink href="/books" passHref>
          <Link textDecoration="none" fontFamily="mono">
            /books
          </Link>
        </NextLink>
        <ThemeSwitch />
      </Stack>
    </Flex>
  );
}
