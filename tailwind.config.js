/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        link: 'hsl(var(--link))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'hsl(var(--primary))',
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--link))',
              },
            },
            blockquote: {
              color: 'hsl(var(--primary))',
              borderLeftColor: 'hsl(var(--primary))',
              borderLeftWidth: '0.15rem',
            },
            h2: {
              color: 'hsl(var(--primary))',
              fontWeight: '500',
              fontSize: '1.25rem',
            },
            h3: {
              color: 'hsl(var(--primary))',
              fontWeight: '500',
              fontSize: '1.125rem',
            },
            li: {
              marginTop: '0.3em',
              marginBottom: '0.3em',
            },
            '> ul > li p': {
              marginTop: '0.45em',
              marginBottom: '0.45em',
            },
            '> ul > li > p:first-child': {
              marginTop: '0.75em',
            },
            '> ul > li > p:last-child': {
              marginBottom: '0.75em',
            },
            '> ol > li > p:first-child': {
              marginTop: '0.75em',
            },
            '> ol > li > p:last-child': {
              marginBottom: '0.75em',
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: '0.45em',
              marginBottom: '0.45em',
            },
            strong: {
              color: 'hsl(var(--primary))',
            },
            th: {
              color: 'hsl(var(--primary))',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
