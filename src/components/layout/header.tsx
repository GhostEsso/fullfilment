'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn, WHATSAPP_URL, getWhatsAppLink } from '@/lib/utils';

const navLinks = [
  { href: '#nos-offres', label: 'Nos Offres' },
  { href: '#pourquoi-kaba', label: 'Pourquoi KABA' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-1 border-b'
          : 'bg-transparent py-2'
      )}
    >
      <div className="container relative flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <Image 
            src="/assets/logo.png" 
            alt="KABA DELIVERY" 
            width={180} 
            height={60} 
            className="h-10 md:h-16 w-auto object-contain transition-all group-hover:scale-105"
          />
        </Link>
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-16 text-[15px] font-semibold tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-all hover:text-primary",
                isScrolled 
                    ? "text-black" 
                    : "text-white hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden relative z-50">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                isMobileMenuOpen || isScrolled ? "text-black" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={cn(
            "fixed inset-0 z-40 bg-background transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button 
            asChild
            className="mt-4 bg-primary text-white px-8 h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/20"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Démarrer maintenant
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
