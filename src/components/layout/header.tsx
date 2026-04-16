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
        'fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out',
        isScrolled
          ? 'bg-white/90 backdrop-blur-2xl shadow-lg border-b border-black/5 py-1'
          : 'bg-black/10 backdrop-blur-sm py-4'
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 group relative z-50 flex-shrink-0">
          <Image 
            src="/assets/logo.png" 
            alt="Kaba-Fulfillment - Logistique e-commerce" 
            width={180} 
            height={60} 
            className={cn(
              "w-auto object-contain transition-all duration-500 group-hover:scale-105",
              isScrolled ? "h-10 md:h-12" : "h-12 md:h-16"
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-[13px] lg:text-[14px] font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap",
                isScrolled 
                    ? "text-foreground/70 hover:text-primary hover:bg-primary/5" 
                    : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button (Desktop Only) */}
        <div className="hidden md:flex items-center">
          <Button 
            asChild
            className={cn(
              "rounded-full px-6 font-black uppercase tracking-widest text-[11px] transition-all duration-300 shadow-lg hover:scale-105 active:scale-95",
              isScrolled 
                ? "bg-primary text-white hover:bg-primary/90 shadow-primary/20" 
                : "bg-white text-primary hover:bg-white/90 shadow-white/10"
            )}
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Démarrer
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden relative z-50">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full transition-colors",
                isMobileMenuOpen || isScrolled ? "text-foreground" : "text-white"
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
            "fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-10",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-10"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-3xl font-black text-foreground uppercase tracking-widest hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button 
            asChild
            size="lg"
            className="mt-6 bg-primary text-white px-10 h-16 rounded-[1.5rem] tracking-widest text-lg font-black uppercase shadow-2xl shadow-primary/30"
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Démarrer Maintenant
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
