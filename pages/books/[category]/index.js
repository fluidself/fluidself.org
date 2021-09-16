import Head from 'next/head';
import Link from 'next/link';

import { getAllCategories, getBooksInCategory } from '../../../lib/api';

export default function BookCategory(props) {
  const { category, categoryTitle, books } = props;

  return (
    <>
      <Head>
        <title>{categoryTitle}</title>
        <meta name="description" content={`${categoryTitle} book notes`} />
      </Head>
      <section>
        <div className="section-header">
          <h2>{categoryTitle.toUpperCase()}</h2>
        </div>
        {books.map(book => (
          <p key={book.slug}>
            <Link href={`/books/${category}/${book.slug}`}>
              <a>{book.title}</a>
            </Link>
          </p>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps(context) {
  const { category } = context.params;
  const allCategoryData = getAllCategories();
  const categoryTitle = allCategoryData.find(categoryData => categoryData.slug === category).title;
  const books = getBooksInCategory(category);

  return {
    props: {
      category,
      categoryTitle,
      books,
    },
  };
}

export async function getStaticPaths() {
  const categories = getAllCategories();
  const paths = categories.map(category => ({ params: { category: category.slug } }));

  return {
    paths,
    fallback: false,
  };
}
