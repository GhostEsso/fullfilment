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
        'fixed top-0 left-0 z-[100] w-full transition-all duration-500 ease-in-out',
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-black/5 py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-6 sm:px-8 flex items-center justify-between h-14 md:h-20">
        <Link href="/" className="flex items-center gap-2 group relative z-[110] flex-shrink-0">
          <Image 
            src="/assets/logo.png" 
            alt="Kaba-Fulfillment - Logistique e-commerce" 
            width={180} 
            height={60} 
            className={cn(
              "w-auto object-contain transition-all duration-500",
              isScrolled ? "h-8 md:h-10" : "h-10 md:h-14"
            )}
          />
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

        {/* Action Button (Desktop Only) */}
        <div className="hidden md:flex items-center">
          <Button 
            asChild
            className={cn(
              "rounded-full px-8 h-11 font-black uppercase tracking-widest text-[11px] transition-all duration-500 shadow-xl hover:scale-105 active:scale-95",
              isScrolled 
                ? "bg-primary text-white hover:bg-primary/90 shadow-primary/20" 
                : "bg-white text-primary hover:bg-white/90 shadow-white/20"
            )}
          >
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Démarrer
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden relative z-[110]">
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

        {/* Mobile Menu Overlay - Smooth Slide from Top */}
        <div 
          className={cn(
            "fixed inset-0 z-[100] bg-white backdrop-blur-3xl transition-all duration-700 ease-in-out md:hidden flex flex-col items-center justify-center pt-20",
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          )}
        >
          <nav className="flex flex-col items-center gap-8 w-full px-10">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "text-3xl font-black text-foreground uppercase tracking-widest hover:text-primary transition-all duration-300",
                    isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className={cn(
                "w-full mt-10 transition-all duration-500 delay-500",
                isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
                <Button 
                    asChild
                    className="w-full bg-primary text-white h-16 rounded-2xl tracking-[0.2em] text-sm font-black uppercase shadow-2xl shadow-primary/30"
                >
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                        Démarrer Maintenant
                    </a>
                </Button>
            </div>
          </nav>

          {/* Decorative background for mobile menu */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </header>
  );
}
