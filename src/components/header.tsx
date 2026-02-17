'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold hover:opacity-80 transition-opacity">
            Sri Chandramouli
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              style={{ color: 'var(--foreground)' }}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              style={{ color: 'var(--foreground)' }}
            >
              Blog
            </Link>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-md p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
