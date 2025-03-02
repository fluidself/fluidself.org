import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const booksDirectory = path.join(process.cwd(), '_books');

interface BookData {
  slug: string;
  content: string;
  title: string;
  date: string;
  link: string;
}

export function getBookData(category: string, bookIdentifier: string) {
  const slug = bookIdentifier.replace(/\.md$/, '');
  const filePath = path.join(booksDirectory, `/${category}/${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const bookData: BookData = {
    slug,
    content,
    title: data.title,
    date: data.date,
    link: data.link,
  };

  return bookData;
}

export function getBooksInCategory(category: string) {
  const categoryPath = path.join(booksDirectory, category);
  const bookIdentifiers = fs.readdirSync(categoryPath);
  const slugsAndTitles = bookIdentifiers
    .map(bookIdentifier => getBookData(category, bookIdentifier))
    .map(dataSet => ({ slug: dataSet.slug, title: dataSet.title }));

  return slugsAndTitles;
}

export function getAllCategories() {
  return [
    { slug: 'art', title: 'Art and Creativity' },
    { slug: 'biographies', title: 'Biographies and Memoirs' },
    { slug: 'business', title: 'Business and Economics' },
    { slug: 'fiction', title: 'Fiction' },
    { slug: 'health-and-fitness', title: 'Health and Fitness' },
    { slug: 'history', title: 'History' },
    { slug: 'philosophy', title: 'Philosophy' },
    { slug: 'psychology', title: 'Psychology' },
    { slug: 'science', title: 'Science' },
    { slug: 'self-help', title: 'Self-Help' },
    { slug: 'spirituality', title: 'Spirituality' },
  ];
}
