import Head from 'next/head';
import NextLink from 'next/link';
import { Heading, Link, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { neon } from '@neondatabase/serverless';
import Layout from '../../../components/Layout';
import ContentBlock from '../../../components/ContentBlock';
import { getBookData, getAllCategories, getBooksInCategory } from '../../../lib/api';
import { customRenderers } from '../../../lib/markdown-renderer';

export default function Book(props) {
  const { title, content, category, slug, related } = props;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${title} book notes`} />
      </Head>
      <ContentBlock heading={title} category={category} slug={slug}>
        <ReactMarkdown components={customRenderers} remarkPlugins={[gfm]}>
          {content}
        </ReactMarkdown>
      </ContentBlock>

      <Stack px={3} marginBottom={5}>
        <Heading as="h3" size="md">
          You might also enjoy
        </Heading>
        <UnorderedList pl={4}>
          {related.map(book => {
            const [category, slug] = book.url.split('/').slice(-2);
            return (
              <ListItem key={book.url}>
                <NextLink href={`/books/${category}/${slug}`} passHref>
                  <Link>{book.title}</Link>
                </NextLink>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Stack>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { category, slug } = context.params;
  const bookData = getBookData(category, slug);
  const sql = neon(process.env.DATABASE_URL);
  const url = `${process.env.BASE_URL}/books/${category}/${slug}`;
  const relatedBooks =
    await sql`SELECT url, title from book_embeddings WHERE url <> ${url} ORDER BY embedding <-> (SELECT embedding FROM book_embeddings WHERE url = ${url} limit 1) asc LIMIT 10`;

  return {
    props: {
      title: bookData.title,
      content: bookData.content,
      category,
      slug,
      related: relatedBooks,
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
