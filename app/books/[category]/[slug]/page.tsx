import Link from 'next/link';
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { neon } from '@neondatabase/serverless';

import { getAllCategories, getBookData, getBooksInCategory } from '@/lib/api';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export async function generateMetadata({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;
  const bookData = getBookData(category, slug);

  return {
    title: bookData.title,
    description: `${bookData.title} book notes`,
  };
}

export async function generateStaticParams() {
  return getAllCategories().flatMap(category =>
    getBooksInCategory(category.slug).map(book => ({
      category: category.slug,
      slug: book.slug,
    })),
  );
}

export default async function Book({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;
  const bookData = getBookData(category, slug);
  const sql = neon(process.env.DATABASE_URL!);
  const url = `${process.env.BASE_URL}/books/${category}/${slug}`;
  const relatedBooks =
    await sql`SELECT url, title from book_embeddings WHERE url <> ${url} ORDER BY embedding <-> (SELECT embedding FROM book_embeddings WHERE url = ${url} limit 1) asc LIMIT 10`;

  return (
    <div className="flex flex-col w-full -mt-[23px]">
      <Breadcrumb className="mb-[3px]">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-link" asChild>
              <Link href="/books">books</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-link" asChild>
              <Link href={`/books/${category}`}>{category}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{slug}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{bookData.title}</h1>
        <article>
          <ReactMarkdown className="prose dark:prose-invert prose-neutral max-w-none" remarkPlugins={[gfm]}>
            {bookData.content}
          </ReactMarkdown>
        </article>
        <Separator />
        <h3 className="text-lg text-secondary-foreground">You might also enjoy</h3>
        <ul className="list-disc marker:text-muted-foreground pl-[26px]">
          {relatedBooks.map(book => {
            const [category, slug] = book.url.split('/').slice(-2);
            return (
              <li key={book.url} className="pl-1.5 my-1">
                <Link href={`/books/${category}/${slug}`} className="hover:text-link underline">
                  {book.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
