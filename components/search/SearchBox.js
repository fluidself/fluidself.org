import { connectSearchBox } from 'react-instantsearch-dom';
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function SearchBox({ refine }) {
  return (
    <InputGroup maxW="325px" my={2}>
      <Input
        border="1px solid"
        type="search"
        placeholder="Search for book or author..."
        onChange={e => refine(e.currentTarget.value)}
      />
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
}

export default connectSearchBox(SearchBox);
