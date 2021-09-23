import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import SearchBox from './SearchBox';
import Hits from './Hits';

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY);

export default function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX}>
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}
