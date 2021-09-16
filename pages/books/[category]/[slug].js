import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import { getBookData, getAllCategories, getBooksInCategory } from '../../../lib/api';

export default function Book(props) {
  const { title, content } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${title} book notes`} />
      </Head>
      <section>
        <div className="section-header">
          <h2>{title}</h2>
        </div>
        <ReactMarkdown>{content}</ReactMarkdown>
      </section>
    </>
  );
}

export async function getStaticProps(context) {
  const { category, slug } = context.params;
  const bookData = getBookData(category, slug);

  return {
    props: {
      title: bookData.title,
      content: bookData.content,
    },
  };
}

export async function getStaticPaths() {
  const categorySlugs = getAllCategories().map(category => category.slug);
  const paths = [];

  categorySlugs.forEach(category => {
    const bookSlugsInCategory = getBooksInCategory(category).map(book => book.slug);
    bookSlugsInCategory.forEach(slug => paths.push({ params: { category, slug } }));
  });

  return {
    paths,
    fallback: false,
  };
}
