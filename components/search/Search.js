import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import SearchBox from './SearchBox';
import Hits from './Hits';

const searchClient = algoliasearch('UDGC9LGHR4', '28b27c0e5ddf401c86790fcc6e1a5053');

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="FS_BOOKS">
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}
