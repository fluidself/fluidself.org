import { Box, Link } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';
import Layout from '../../components/Layout';
import ContentBlock from '../../components/ContentBlock';
import Search from '../../components/search/Search';
import { getAllCategories } from '../../lib/api';

export default function Books({ categories }) {
  return (
    <Layout>
      <Head>
        <title>Book Notes</title>
        <meta name="description" content="book notes" />
      </Head>
      <ContentBlock heading="BOOK NOTES">
        <Search />
        {categories.map(category => (
          <Box key={category.slug} mb={1}>
            <NextLink href={`/books/${category.slug}`} passHref>
              <Link>{category.title}</Link>
            </NextLink>
          </Box>
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
