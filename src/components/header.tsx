import React from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Github, Twitter } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card">
      <div className="container mx-auto flex h-16 items-center">
        <div className="flex items-center gap-2 md:hidden">
          <SidebarTrigger />
        </div>
        <div className="hidden flex-1 items-center gap-2 md:flex">
          <Icons.logo className="h-6 w-6 text-primary" />
          <h1 className="font-headline text-xl font-bold">MuskBlog</h1>
        </div>
        <div className="flex flex-1 items-center justify-center gap-2 md:hidden">
            <Icons.logo className="h-6 w-6 text-primary" />
            <h1 className="font-headline text-xl font-bold">MuskBlog</h1>
        </div>
        <div className="flex items-center justify-end space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <div className="hidden md:flex">
            <SidebarTrigger />
          </div>
        </div>
      </div>
    </header>
  );
}
