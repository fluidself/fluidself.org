import { useSearchBox } from 'react-instantsearch';

import { Input } from '@/components/ui/input';

export default function SearchBox() {
  const { refine } = useSearchBox();

  return (
    <Input
      type="search"
      placeholder="Search for book or author"
      className="w-full md:max-w-md"
      onChange={e => refine(e.currentTarget.value)}
    />
  );
}
