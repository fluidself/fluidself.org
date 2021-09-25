import { connectStateResults } from 'react-instantsearch-dom';
import { Box, Text, Link, Divider, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import Highlight from './Highlight';

function Hits({ searchState, searchResults }) {
  const { colorMode } = useColorMode();
  const validQuery = searchState.query?.length >= 2;

  if (!validQuery) {
    return null;
  }

  return (
    <Box
      w="325px"
      maxW="325px"
      border="1px solid"
      px={2}
      position="absolute"
      zIndex={10}
      bgColor={colorMode === 'dark' ? 'rgb(17, 17, 17)' : 'white'}
    >
      {searchResults?.hits.length === 0 && validQuery && (
        <Text py={1}>
          {'No results for '}
          <Text as="b">{searchState.query}</Text>
        </Text>
      )}
      {searchResults?.hits.length > 0 &&
        validQuery &&
        searchResults.hits.slice(0, 5).map(hit => {
          const { category, slug } = hit;

          return (
            <Box key={hit.objectID} py={1}>
              <NextLink href={`/books/${category}/${slug}`} passHref>
                <Link>
                  <Highlight hit={hit} attribute="title" />
                </Link>
              </NextLink>
              <Divider mt={1} />
            </Box>
          );
        })}
    </Box>
  );
}

export default connectStateResults(Hits);
