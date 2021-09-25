const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const dotenv = require('dotenv');
const algoliasearch = require('algoliasearch/lite');

const booksDirectory = path.join(process.cwd(), '_books');

function getBookData(category, bookIdentifier) {
  const slug = bookIdentifier.replace(/\.md$/, '');
  const filePath = path.join(booksDirectory, `/${category}/${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  const bookData = {
    category,
    slug,
    title: data.title,
    url: data.link,
  };

  return bookData;
}

function getBooksInCategory(category) {
  const categoryPath = path.join(booksDirectory, category);
  const bookIdentifiers = fs.readdirSync(categoryPath);
  const slugsTitlesUrls = bookIdentifiers.map(bookIdentifier => getBookData(category, bookIdentifier));

  return slugsTitlesUrls;
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

async function getAllBookData() {
  return [].concat(...CATEGORY_SLUGS.map(category => getBooksInCategory(category)));
}

(async function () {
  dotenv.config();

  try {
    const searchObjects = await getAllBookData();
    const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_ADMIN_API_KEY);
    const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX);

    await index.setSettings({ searchableAttributes: ['title'] });
    const algoliaResponse = await index.saveObjects(searchObjects, { autoGenerateObjectIDIfNotExist: true });

    console.log(`Sucessfully added ${algoliaResponse.objectIDs.length} records to Algolia search.`);
  } catch (error) {
    console.log(error);
  }
})();
