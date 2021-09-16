import Head from 'next/head';
import Link from 'next/link';

import { getAllCategories } from '../../lib/api';

export default function Books({ categories }) {
  return (
    <>
      <Head>
        <title>Books</title>
        <meta name="description" content="book notes" />
      </Head>
      <section>
        <div className="section-header">
          <h2 className="h2-decor">BOOKS</h2>
        </div>
        <p>
          I like to read, and I like to take notes to help me remember the lessons and impressions books give me. These are those
          notes. They're not meant to be precise summaries, but rather reminders of important concepts. Use them as you see fit.
        </p>

        <div className="aa-input-container" id="aa-input-container">
          <input
            type="search"
            id="aa-search-input"
            className="aa-input-search"
            placeholder="Search for book or author..."
            name="search"
            autoComplete="off"
          />
          <svg className="aa-input-icon" viewBox="654 -372 1664 1664">
            <path d="M1806,332c0-123.3-43.8-228.8-131.5-316.5C1586.8-72.2,1481.3-116,1358-116s-228.8,43.8-316.5,131.5  C953.8,103.2,910,208.7,910,332s43.8,228.8,131.5,316.5C1129.2,736.2,1234.7,780,1358,780s228.8-43.8,316.5-131.5  C1762.2,560.8,1806,455.3,1806,332z M2318,1164c0,34.7-12.7,64.7-38,90s-55.3,38-90,38c-36,0-66-12.7-90-38l-343-342  c-119.3,82.7-252.3,124-399,124c-95.3,0-186.5-18.5-273.5-55.5s-162-87-225-150s-113-138-150-225S654,427.3,654,332  s18.5-186.5,55.5-273.5s87-162,150-225s138-113,225-150S1262.7-372,1358-372s186.5,18.5,273.5,55.5s162,87,225,150s113,138,150,225  S2062,236.7,2062,332c0,146.7-41.3,279.7-124,399l343,343C2305.7,1098.7,2318,1128.7,2318,1164z" />
          </svg>
        </div>
        {categories.map(category => (
          <p key={category.slug}>
            <Link href={`/books/${category.slug}`}>
              <a>{category.title}</a>
            </Link>
          </p>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const categories = getAllCategories();

  return {
    props: {
      categories,
    },
  };
}
