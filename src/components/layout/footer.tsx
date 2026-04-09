import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer id="contact" className="bg-muted text-muted-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image 
                src="/assets/logo.png" 
                alt="Kaba-Fulfillment - Votre partenaire logistique" 
                width={200} 
                height={60} 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm">
              Solutions de stockage, gestion de commandes et livraison. 
              Kaba-Fulfillment accompagne les e-commerçants et marques de la zone UEMOA.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#nos-offres" className="hover:text-primary transition-colors">Nos Offres</a></li>
              <li><a href="#pourquoi-kaba" className="hover:text-primary transition-colors">Pourquoi KABA</a></li>
              <li><a href="#tarifs" className="hover:text-primary transition-colors">Tarifs</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contactez-nous</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Agbalepedo, 319 Rue AZIABOR,
              <br />
              Lomé, Togo
              <br />
              <a href="tel:+22892109474" className="hover:text-primary transition-colors">+228 92 10 94 74</a>
              <br />
              <a href="mailto:contact@kaba-delivery.com" className="hover:text-primary transition-colors">contact@kaba-delivery.com</a>
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://web.facebook.com/kabadelivery" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/kaba_delivery/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/company/kaba-delivery-sarl/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Kaba-Fulfillment. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
