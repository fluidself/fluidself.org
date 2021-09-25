import React from 'react';
import NextLink from 'next/link';
import { Link, Flex, Stack, Image } from '@chakra-ui/react';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={4} mt={2} paddingLeft={3}>
      <NextLink href="/" passHref>
        <Link fontSize="lg" fontWeight="bold">
          <Image borderRadius="full" boxSize="40px" src="/pixelself.png" alt="logo" ignoreFallback />
        </Link>
      </NextLink>
      <Stack spacing={6} align="center" direction="row">
        <NextLink href="/books" passHref>
          <Link>BOOK NOTES</Link>
        </NextLink>
        <ThemeSwitch />
      </Stack>
    </Flex>
  );
}
