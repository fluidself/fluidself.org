import { connectStateResults } from 'react-instantsearch-dom';
import { Box, Text, Link, Divider, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';

function Hits({ searchState, searchResults }) {
  const { colorMode } = useColorMode();
  const validQuery = searchState.query?.length >= 2;

  if (!validQuery) {
    return null;
  }

  return (
    <Box
      maxW="325px"
      border="1px solid"
      px={2}
      position="absolute"
      zIndex={10}
      bgColor={colorMode === 'dark' ? 'rgb(17, 17, 17)' : 'white'}
    >
      {searchResults?.hits.length === 0 && validQuery && <Text>{`No results for ${searchState.query}`}</Text>}
      {searchResults?.hits.length > 0 &&
        validQuery &&
        searchResults.hits.slice(0, 5).map(hit => {
          const parts = hit.url.split('/');
          const category = parts[parts.length - 3];
          const slug = parts[parts.length - 2];

          return (
            <Box key={hit.objectID}>
              <Text>
                <NextLink href={`/books/${category}/${slug}`} passHref>
                  <Link>{hit.title}</Link>
                </NextLink>
              </Text>
              <Divider />
            </Box>
          );
        })}
    </Box>
  );
}

export default connectStateResults(Hits);
