import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-medium">404</h2>
      <p>There is nothing here.</p>
      <Link href="/" className="underline hover:text-link w-fit">
        Take me home
      </Link>
    </div>
  );
}
