import type { ServiceOffer } from '@/lib/types';
import {
  Clock,
  Warehouse,
  Smartphone,
  ShieldCheck,
  Truck,
  Users,
  Store,
  BarChart3,
  CreditCard,
  Package,
} from 'lucide-react';

export const offers: ServiceOffer[] = [
  {
    id: 1,
    name: 'Offre 1',
    subtitle: 'Stockage/gestion de commandes & Livraison GRATUITE',
    description: 'Payé par l\'e-commerçant. La livraison est offerte à vos clients partout à Lomé.',
    longDescription:
      'Vendez à Lomé, sans y être, sans local. Nous gérons tout : de l\'appel de confirmation à l\'emballage et la livraison gratuite pour votre client.',
    price: '2 700 FCFA / livraison',
    priceDetails: [
      { label: 'Frais par livraison', value: '2 700 FCFA' },
      { label: 'Livraison client', value: 'GRATUITE' },
      { label: 'Appels & Relances', value: 'Inclus (3x5)' },
      { label: 'Stockage & Emballage', value: 'Inclus' },
      { label: 'Frais de transfert', value: 'Inclus' },
    ],
    features: [
      {
        icon: Clock,
        title: 'Appels & Relances',
        description: 'Jusqu\'à 15 tentatives d\'appels pour confirmer la commande.',
      },
      {
        icon: Truck,
        title: 'Livraison Gratuite',
        description: 'Livraison offerte à votre client partout à Lomé.',
      },
      {
        icon: Smartphone,
        title: 'App de Suivi',
        description: 'Application de suivi et point journalier via WhatsApp.',
      },
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1920',
  },
  {
    id: 2,
    name: 'Offre 2',
    subtitle: 'Stockage/gestion de commandes & Livraison PAYANTE',
    description: 'Payé par l\'e-commerçant. Les frais de livraison sont à la charge du client.',
    longDescription:
      'Une solution économique où vous ne payez que la gestion. La livraison est facturée directement à votre client lors de la remise du colis.',
    price: '1 000 FCFA / livraison',
    priceDetails: [
      { label: 'Frais par livraison', value: '1 000 FCFA' },
      { label: 'Tarif préférentiel', value: '700 FCFA' },
      { label: 'Livraison client', value: 'À la charge du client' },
      { label: 'Stockage & Emballage', value: 'Inclus' },
      { label: 'App de Suivi', value: 'Inclus' },
    ],
    features: [
      {
        icon: Package,
        title: 'Gestion Complète',
        description: 'Stockage, emballage et gestion du tableau de bord inclus.',
      },
      {
        icon: Users,
        title: 'Confirmation Client',
        description: 'Appels et relances pour garantir la réussite de la livraison.',
      },
      {
        icon: Smartphone,
        title: 'Point WhatsApp',
        description: 'Restez informé quotidiennement de l\'état de vos stocks.',
      },
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920',
  },
  {
    id: 3,
    name: 'Offre 3',
    subtitle: 'Abonnement avec livraison gratuite',
    description: 'Forfait mensuel tout compris pour une sérénité totale.',
    longDescription:
      'L\'offre premium pour les commerçants établis. Un abonnement mensuel fixe qui couvre le stockage et toutes vos livraisons gratuites à Lomé.',
    price: '75 000 FCFA / mois',
    priceDetails: [
      { label: 'Abonnement mensuel', value: '75 000 FCFA' },
      { label: 'Livraison Lomé', value: 'Illimitée & Gratuite' },
      { label: 'Stockage & Emballage', value: 'Inclus' },
      { label: 'Frais de transfert', value: 'Inclus' },
      { label: 'Support Dédié', value: 'Inclus' },
    ],
    features: [
      {
        icon: ShieldCheck,
        title: 'Sérénité Totale',
        description: 'Un coût fixe mensuel peu importe votre volume de ventes.',
      },
      {
        icon: Truck,
        title: 'Logistique Illimitée',
        description: 'Livraisons gratuites partout à Lomé sans frais supplémentaires.',
      },
      {
        icon: BarChart3,
        title: 'Tableau de Bord',
        description: 'Statistiques avancées pour piloter votre croissance.',
      },
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1920',
  },
  {
    id: 4,
    name: 'Offre 4',
    subtitle: 'Abonnement sans livraison gratuite',
    description: 'Forfait mensuel pour la gestion et le stockage.',
    longDescription:
      'Idéal pour externaliser votre logistique et votre service client tout en laissant les frais de livraison à la charge de vos acheteurs.',
    price: '50 000 FCFA / mois',
    priceDetails: [
      { label: 'Abonnement mensuel', value: '50 000 FCFA' },
      { label: 'Livraison client', value: 'À la charge du client' },
      { label: 'Stockage & Emballage', value: 'Inclus' },
      { label: 'Appels & Relances', value: 'Inclus' },
      { label: 'Point WhatsApp', value: 'Quotidien' },
    ],
    features: [
      {
        icon: Warehouse,
        title: 'Entreposage Pro',
        description: 'Gestion professionnelle de vos stocks en entrepôt sécurisé.',
      },
      {
        icon: Smartphone,
        title: 'Suivi Application',
        description: 'Application de gestion mise à votre disposition gratuitement.',
      },
      {
        icon: Users,
        title: 'Service Client',
        description: 'Nous gérons les relances colis pour vous.',
      },
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1521331032864-539423c4a45a?auto=format&fit=crop&q=80&w=1920',
  },
  {
    id: 5,
    name: 'Offre 5',
    subtitle: 'Sur Mesure',
    description: 'Tarification adaptée à la réalité de votre activité.',
    longDescription:
      'Vous avez des volumes importants ou des besoins atypiques (UEMOA, retours complexes) ? Nous concevons une offre personnalisée.',
    price: 'Sur devis',
    priceDetails: [
      { label: 'Volume important', value: 'Tarif spécial' },
      { label: 'Zone UEMOA', value: 'Sur demande' },
      { label: 'Intégration API', value: 'Disponible' },
      { label: 'Gestion retours', value: 'Personnalisée' },
    ],
    features: [
      {
        icon: BarChart3,
        title: 'Intégration Web',
        description: 'Connectez votre boutique en ligne à notre logistique.',
      },
      {
        icon: Truck,
        title: 'Export UEMOA',
        description: 'Livraison dans toute la sous-région ouest-africaine.',
      },
      {
        icon: Users,
        title: 'Gestion Retours',
        description: 'Service dédié pour vos invendus et retours clients.',
      },
    ],
    backgroundImage: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1920',
  },
];

export const benefits = [
  {
    icon: ShieldCheck,
    iconPath: '/assets/icones/Shield hide.svg',
    title: 'Stockage Sécurisé',
    description: 'Vos produits stockés et emballés avec soin pour chaque livraison et expédition.',
  },
  {
    icon: BarChart3,
    iconPath: '/assets/icones/Up graph.svg',
    title: 'Gestion des Commandes',
    description: 'Confirmation client, relances et suivi de tableau de bord inclus.',
  },
  {
    icon: Truck,
    iconPath: '/assets/icones/Delivery Box.svg',
    title: 'Livraison à Lomé',
    description: 'Livraison rapide partout à Lomé, gratuite ou à la charge du client selon l\'offre.',
  },
  {
    icon: Users,
    iconPath: '/assets/icones/User.svg',
    title: 'Offre Personnalisée',
    description: 'Une solution sur mesure disponible pour les partenaires avec des besoins spécifiques.',
  },
  {
    icon: Smartphone,
    iconPath: '/assets/icones/iPhone.svg',
    title: 'App de Suivi',
    description: 'Suivez vos commandes en temps réel grâce à notre application avec portefeuille intégré.',
  },
  {
    icon: CreditCard,
    iconPath: '/assets/icones/Card wallet.svg',
    title: 'Remboursement 24h',
    description: 'Demande de remboursement via Mobile Money traitée en moins de 24h.',
  },
  {
    icon: Clock,
    iconPath: '/assets/icones/Timer.svg',
    title: '7 Ans d\'Expérience',
    description: 'Plus de 7 ans d\'expertise en e-commerce et logistique en Afrique de l\'Ouest.',
  },
  {
    icon: Store,
    iconPath: '/assets/icones/Wallet.svg',
    title: 'Point de Vente',
    description: 'Vos clients peuvent acheter et récupérer leurs commandes directement à notre direction.',
  },
];

export const faqItems = [
  {
    value: 'item-1',
    question: 'Quels sont les frais de mise en stock ?',
    answer:
      'KABA facture 5 000 FCFA pour la récupération et l\'acheminement initial de votre stock vers notre Direction Logistique.',
  },
  {
    value: 'item-2',
    question: 'Comment fonctionnent les relances clients ?',
    answer:
      'Pour les offres incluant la confirmation, nous effectuons jusqu\'à 15 tentatives (3 cycles de 5 appels) pour assurer que votre client est prêt à recevoir son colis.',
  },
  {
    value: 'item-3',
    question: 'Livrez-vous en dehors de Lomé ?',
    answer:
      'Oui, nous couvrons l\'intérieur du pays et toute la sous-région UEMOA sur devis spécial via notre offre "Sur Mesure".',
  },
  {
    value: 'item-4',
    question: 'Comment puis-je récupérer mon argent ?',
    answer:
      'Dès que la livraison est confirmée, vous pouvez demander un remboursement. Nous traitons les virements via Mobile Money en moins de 24h.',
  },
];
