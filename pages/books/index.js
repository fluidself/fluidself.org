import { Text, Link } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import Layout from '../../components/Layout';
import ContentBlock from '../../components/ContentBlock';

import { getAllCategories } from '../../lib/api';

export default function Books({ categories }) {
  return (
    <Layout>
      <Head>
        <title>Books</title>
        <meta name="description" content="book notes" />
      </Head>
      <ContentBlock heading="BOOKS">
        {categories.map(category => (
          <Text key={category.slug}>
            <NextLink href={`/books/${category.slug}`}>
              <Link>{category.title}</Link>
            </NextLink>
          </Text>
        ))}
      </ContentBlock>
    </Layout>
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
