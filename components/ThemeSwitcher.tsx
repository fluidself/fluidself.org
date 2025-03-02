'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 p-0"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <svg height="100%" width="100%" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8.5" className="stroke-primary" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0V18Z"
          className="fill-primary"
        />
      </svg>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
