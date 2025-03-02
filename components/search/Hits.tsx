import Link from 'next/link';
import { Highlight, useHits, useSearchBox } from 'react-instantsearch';

export default function Hits() {
  const { query } = useSearchBox();
  const { items } = useHits();

  const validQuery = query?.length >= 2;

  if (!validQuery) {
    return null;
  }

  return (
    <div className="w-full md:max-w-md absolute top-11 z-10 bg-background border border-muted-foreground p-2 flex flex-col gap-1 rounded-sm">
      {validQuery && items.length === 0 ? (
        <p>
          {'No results for '}
          <b>{query}</b>
        </p>
      ) : null}
      {validQuery && items.length > 0
        ? items.slice(0, 8).map(hit => {
            const { category, slug } = hit;

            return (
              <Link key={hit.objectID} href={`/books/${category}/${slug}`}>
                <Highlight attribute="title" hit={hit} className="hover:text-link underline hover:decoration-link" />
              </Link>
            );
          })
        : null}
    </div>
  );
}
