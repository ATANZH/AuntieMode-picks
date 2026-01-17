import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Home, Grid3X3, Info, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/collections', label: 'Collections', icon: Grid3X3 },
    { href: '/about', label: 'About', icon: Info },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="font-heading text-lg font-bold">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-semibold leading-tight text-foreground">
                AuntieMode
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                Picks (SG)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant={isActive(link.href) ? 'secondary' : 'ghost'}
                  size="sm"
                  className={isActive(link.href) 
                    ? 'bg-secondary text-secondary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                  }
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://YOUR_SUBSTACK_URL.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm">
                Subscribe
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <Link 
                    to="/" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <span className="font-heading text-base font-bold">A</span>
                    </div>
                    <span className="font-heading text-base font-semibold">AuntieMode</span>
                  </Link>
                </div>

                <nav className="flex flex-col gap-1 py-6">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                          isActive(link.href)
                            ? 'bg-secondary text-secondary-foreground'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{link.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-auto pt-6 border-t border-border">
                  <a
                    href="https://YOUR_SUBSTACK_URL.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="default" className="w-full">
                      Subscribe to Newsletter
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
