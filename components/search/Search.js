import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import CustomSearchBox from './CustomSearchBox';
import CustomHits from './CustomHits';

const searchClient = algoliasearch('UDGC9LGHR4', '28b27c0e5ddf401c86790fcc6e1a5053');

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="FS_BOOKS">
      <CustomSearchBox />
      <CustomHits />
    </InstantSearch>
  );
}
