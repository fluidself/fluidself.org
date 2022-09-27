import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Link, Flex, Stack } from '@chakra-ui/react';
import ThemeSwitch from './ThemeSwitch';
import pixelself from '../public/pixelself.png';

export default function Header() {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" mb={4} mt={2} paddingLeft={3}>
      <NextLink href="/">
        <a style={{ height: '40px' }}>
          <Image src={pixelself} alt="logo" width={40} height={40} />
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
