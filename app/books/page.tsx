import { Metadata } from 'next';
import Link from 'next/link';

import { getAllCategories } from '@/lib/api';
import Search from '@/components/search/Search';

export const metadata: Metadata = {
  title: 'Book Notes',
  description: 'book notes',
};

export default function Books() {
  const categories = getAllCategories();

  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-medium">Book notes</h1>
      <Search />
      <div className="flex flex-col gap-1">
        {categories.map(category => (
          <Link key={category.slug} href={`/books/${category.slug}`} className="hover:text-link underline w-fit">
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
