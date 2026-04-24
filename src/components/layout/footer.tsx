import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

// TikTok Icon SVG
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-3.4 2.97-6.28 6.37-6.48 1.06-.06 2.1.14 3.08.55v4.03c-.58-.34-1.2-.52-1.88-.54-1.52-.07-2.98.71-3.64 2.08-.45.95-.53 2.09-.2 3.07.35 1.06 1.25 1.89 2.29 2.18.88.25 1.83.15 2.66-.25.93-.45 1.58-1.4 1.73-2.43.04-.3.05-.6.05-.91.02-4.33 0-8.66.02-12.99z"/>
  </svg>
);

export function Footer() {
  return (
    <footer id="contact" className="relative bg-white/60 backdrop-blur-3xl text-foreground/70 overflow-hidden border-t border-black/5">
      {/* Background Accent Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10 pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex flex-col items-start gap-1">
                <Image 
                  src="/assets/Logo_cercle_rouge-titré.png" 
                  alt="Kaba Fulfillment - Votre partenaire logistique" 
                  width={200} 
                  height={70} 
                  className="h-16 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-foreground/40">
                  Solutions de Stockage & Livraison
                </span>
              </div>
            </Link>
            <p className="text-lg leading-relaxed max-w-md font-medium text-foreground/60">
              E-commerce & Logistique depuis 2019. Vendez, Kaba gère votre logistique.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: Facebook, href: "https://web.facebook.com/kabadelivery" },
                { icon: Instagram, href: "https://www.instagram.com/kaba_delivery/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/kaba-delivery-sarl/posts/?feedView=all" },
                { icon: Twitter, href: "https://x.com/kaba_delivery" },
                { icon: TikTokIcon, href: "https://www.tiktok.com/@kaba_delivery" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-black/5 text-foreground/60 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-3 lg:pl-10">
            <h3 className="text-foreground font-black uppercase tracking-widest text-xs mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "Nos Offres", href: "#nos-offres" },
                { label: "Pourquoi KABA", href: "#pourquoi-kaba" },
                { label: "Tarifs & Plans", href: "#tarifs" },
                { label: "Questions FAQ", href: "#faq" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-base font-medium hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="text-foreground font-black uppercase tracking-widest text-xs mb-6">Bureau de Lomé</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                 <Image
                   src="/assets/icones/Pin.svg"
                   alt="Map"
                   width={20}
                   height={20}
                   className="h-5 w-5 mt-0.5 flex-shrink-0"
                   style={{ filter: 'invert(15%) sepia(95%) saturate(6932%) hue-rotate(348deg) brightness(92%) contrast(100%)' }}
                 />
                <p className="text-base leading-relaxed text-foreground/80">
                  Agbalepedo, 319 Rue AZIABOR, Lomé, Togo
                </p>
              </div>
              
              <div className="space-y-2 pt-4 border-t border-black/5">
                <a href="tel:+22870694206" className="block text-xl font-black text-foreground hover:text-primary transition-all">
                  +228 70 69 42 06
                </a>
                <a href="mailto:infos@kabafulfillment.com" className="block text-base hover:text-primary transition-colors">
                  infos@kabafulfillment.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium">
            &copy; {new Date().getFullYear()} Kaba Fulfillment.
          </p>
          <div className="flex gap-6 text-xs font-semibold">
            <Link href="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</Link>
            <Link href="/conditions-generales-utilisations" className="hover:text-primary transition-colors">CGU</Link>
            <Link href="/confidentialite" className="hover:text-primary transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
