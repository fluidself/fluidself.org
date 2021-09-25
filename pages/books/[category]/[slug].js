import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import Layout from '../../../components/Layout';
import ContentBlock from '../../../components/ContentBlock';
import { getBookData, getAllCategories, getBooksInCategory } from '../../../lib/api';
import { customRenderers } from '../../../lib/markdown-renderer';

export default function Book(props) {
  const { title, content } = props;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${title} book notes`} />
      </Head>
      <ContentBlock heading={title}>
        <ReactMarkdown components={customRenderers} remarkPlugins={[gfm]}>
          {content}
        </ReactMarkdown>
      </ContentBlock>
    </Layout>
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
