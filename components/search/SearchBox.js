import { connectSearchBox } from 'react-instantsearch-dom';
import { InputGroup, Input, InputRightElement, useColorModeValue } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function SearchBox({ refine }) {
  const borderColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500');

  return (
    <InputGroup maxW="325px" mt={2} mb={4}>
      <Input
        type="search"
        border="1px solid"
        borderColor={borderColor}
        focusBorderColor="yellow.200"
        placeholder="Search for book or author..."
        _placeholder={{ opacity: 0.5, color: 'currentcolor' }}
        onChange={e => refine(e.currentTarget.value)}
      />
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
}

export default connectSearchBox(SearchBox);
