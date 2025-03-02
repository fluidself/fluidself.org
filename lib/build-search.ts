const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const dotenv = require('dotenv');
const algoliasearch = require('algoliasearch/lite');

const booksDirectory = path.join(process.cwd(), '_books');

function getBookData(category: string, bookIdentifier: string) {
  const slug = bookIdentifier.replace(/\.md$/, '');
  const filePath = path.join(booksDirectory, `/${category}/${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  const bookData = {
    category,
    slug,
    title: data.title,
  };

  return bookData;
}

function getBooksInCategory(category: string) {
  const categoryPath = path.join(booksDirectory, category);
  const bookIdentifiers: string[] = fs.readdirSync(categoryPath);
  const slugsCategoriesTitles = bookIdentifiers.map(bookIdentifier => getBookData(category, bookIdentifier));

  return slugsCategoriesTitles;
}

const CATEGORY_SLUGS = [
  'art',
  'biographies',
  'business',
  'fiction',
  'health-and-fitness',
  'history',
  'philosophy',
  'psychology',
  'science',
  'self-help',
  'spirituality',
];

(async function () {
  dotenv.config();

  try {
    const searchObjects = CATEGORY_SLUGS.flatMap(category => getBooksInCategory(category));
    const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_ADMIN_API_KEY);
    const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX);

    await index.clearObjects();
    await index.setSettings({ searchableAttributes: ['title'] });
    const algoliaResponse = await index.saveObjects(searchObjects, { autoGenerateObjectIDIfNotExist: true });

    console.log(`Sucessfully added ${algoliaResponse.objectIDs.length} records to Algolia search.`);
  } catch (error) {
    console.log(error);
  }
})();
