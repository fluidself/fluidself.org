import Link from 'next/link';

import { getAllCategories, getBooksInCategory } from '@/lib/api';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export async function generateMetadata({ params }: { params: { category: string } }) {
  const category = params.category;
  const categories = getAllCategories();
  const categoryTitle = categories.find(categoryData => categoryData.slug === category)!.title;

  return {
    title: categoryTitle,
    description: `${categoryTitle} book notes`,
  };
}

export async function generateStaticParams() {
  return getAllCategories().map(category => ({
    category: category.slug,
  }));
}

export default function BookCategory({ params }: { params: { category: string } }) {
  const category = params.category;
  const categories = getAllCategories();
  const categoryTitle = categories.find(categoryData => categoryData.slug === category)!.title;
  const books = getBooksInCategory(category);

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
            <BreadcrumbPage>{category}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{categoryTitle}</h1>
        <div className="flex flex-col gap-1">
          {books.map(book => (
            <Link key={book.slug} href={`/books/${category}/${book.slug}`} className="hover:text-link underline w-fit">
              {book.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
