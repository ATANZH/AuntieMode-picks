import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { label: 'Home', href: '/' },
      { label: 'All Collections', href: '/collections' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Affiliate Disclosure', href: '/disclosure' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <span className="font-heading text-lg font-bold">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-lg font-semibold leading-tight text-foreground">
                    AuntieMode Picks
                  </span>
                  <span className="text-xs text-muted-foreground leading-tight">
                    Singapore
                  </span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
                Practical home & lifestyle recommendations curated with the 
                no-nonsense wisdom of a helpful auntie. We find products that 
                actually work, so you don't waste money on things that don't.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-primary fill-primary" />
                <span>in Singapore</span>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Explore
              </h3>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AuntieMode Picks (SG). All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Product links may earn us a commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
