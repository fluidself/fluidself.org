import { connectHighlight } from 'react-instantsearch-dom';
import { Text } from '@chakra-ui/react';

function CustomHighlight({ highlight, attribute, hit }) {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <Text as="span">
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <Text as="b" key={index}>
            {part.value}
          </Text>
        ) : (
          <Text as="span" key={index}>
            {part.value}
          </Text>
        ),
      )}
    </Text>
  );
}

export default connectHighlight(CustomHighlight);
