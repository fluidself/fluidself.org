import { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';

import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'FS',
  description: 'fluidself digital garden',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#111111' },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-primary">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="flex flex-col items-center justify-center container mx-auto max-w-3xl mt-10 mb-7 px-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
