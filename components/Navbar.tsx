import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import FSIcon from '@/components/FSIcon';

export default function Navbar() {
  return (
    <nav className="container mx-auto flex h-12 items-center bg-background justify-between max-w-3xl px-2.5 mt-2 md:mt-7">
      <Button asChild variant="ghost" size="icon" className="h-10 w-10">
        <Link href={'/'}>
          <FSIcon />
        </Link>
      </Button>
      <div className="flex items-center gap-4">
        <Link className="hover:text-link" href="/books">
          books
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
