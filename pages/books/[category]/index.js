import Head from 'next/head';
import NextLink from 'next/link';
import { Text, Link } from '@chakra-ui/react';
import Layout from '../../../components/Layout';
import ContentBlock from '../../../components/ContentBlock';
import { getAllCategories, getBooksInCategory } from '../../../lib/api';

export default function BookCategory(props) {
  const { category, categoryTitle, books } = props;

  return (
    <Layout>
      <Head>
        <title>{categoryTitle}</title>
        <meta name="description" content={`${categoryTitle} book notes`} />
      </Head>
      <ContentBlock heading={categoryTitle.toUpperCase()} category={category}>
        {books.map(book => (
          <Text key={book.slug} mb={1}>
            <NextLink href={`/books/${category}/${book.slug}`} passHref>
              <Link>{book.title}</Link>
            </NextLink>
          </Text>
        ))}
      </ContentBlock>
    </Layout>
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
