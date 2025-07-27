"use client";

import { ThemeToggle } from '@/components/theme-toggle';
import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <a href="/" className="mr-6 flex items-center space-x-3">
          <div className="p-1">
             <Logo className="h-8 w-8 text-primary" />
          </div>
          <div>
            <span className="font-bold text-lg leading-none">VISIG</span>
            <p className="text-xs text-muted-foreground leading-none mt-1">
              Viral Script Generator
            </p>
          </div>
        </a>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
