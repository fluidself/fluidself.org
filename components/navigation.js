import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="navigation-wrapper" role="banner">
      <Link href="/">
        <a className="home-link">
          <h1>FLUIDSELF</h1>
          <h1 className="h1-shortened">FS</h1>
        </a>
      </Link>
      <nav role="navigation">
        <Link href="/books">
          <a>Books</a>
        </Link>
      </nav>
    </header>
  );
}
