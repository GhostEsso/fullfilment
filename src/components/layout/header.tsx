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
        'fixed top-0 left-0 w-full transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white shadow-xl border-b border-black/5 py-2 z-[9999]'
          : 'bg-transparent py-4 z-[9999]'
      )}
    >
      <div className="container mx-auto px-6 sm:px-8 flex items-center justify-between h-14 md:h-20">
        <Link href="/" className="flex flex-col items-start gap-0 group relative z-[10001] flex-shrink-0">
          <Image 
            src="/assets/Logo_cercle_rouge-titré.png" 
            alt="Kaba Fulfillment - Logistique e-commerce" 
            width={180} 
            height={60} 
            className={cn(
              "w-auto object-contain transition-all duration-500",
              isScrolled ? "h-8 md:h-10" : "h-11 md:h-14"
            )}
          />
          <span className={cn(
            "text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 mt-0.5",
            isScrolled ? "text-primary/80" : "text-white/60"
          )}>
            Solutions de Stockage & Livraison
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-[13px] font-black uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap",
                isScrolled 
                    ? "text-foreground/70 hover:text-primary hover:bg-primary/5" 
                    : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>


        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden relative z-[10001]">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-xl transition-all duration-300",
                isMobileMenuOpen 
                    ? "bg-primary text-white rotate-90" 
                    : isScrolled ? "bg-primary/5 text-primary" : "bg-white/10 text-white backdrop-blur-md"
              )}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>

        {/* Mobile Menu Overlay - Solid Full Cover */}
        <div 
          className={cn(
            "fixed inset-0 z-[10000] bg-white transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center",
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          )}
        >
          <nav className="flex flex-col items-center gap-6 w-full px-10 relative z-[10002]">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "text-2xl font-black text-foreground uppercase tracking-widest hover:text-primary transition-all duration-300",
                    isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${idx * 75}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
          </nav>
        </div>
      </div>
    </header>
  );
}
