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
    tag: 'Populaire',
    subtitle: 'Avec Kaba, vendez à Lomé au Togo, sans y être, sans local.',
    description: 'Payé par vous. Livraison gratuite pour tous vos clients à Lomé',
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
    subtitle: 'Kaba est votre bureau logistique à Lomé. Vendez, nous livrons.',
    description: 'Payé par vous. Livraison payante par vos clients selon leurs adresses.',
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
    subtitle: 'Faites vos publicités et vendez. Kaba s’occupe du reste.',
    description: 'Forfait mensuel tout compris, pour une sérénité totale.',
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
    backgroundImage: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&q=80&w=1920',
  },
  {
    id: 4,
    name: 'Offre 4 (Sur mesure)',
    subtitle: 'Kaba vous ouvre le marché togolais. Dites à vos clients que vous vendez maintenant au Togo.',
    description: 'Nous vous faisons une offre sur mesure, adaptée à vos réalités.',
    longDescription:
      'Vous avez des volumes importants ou des besoins atypiques (UEMOA, retours complexes) ? Nous concevons une offre personnalisée.',
    price: 'Sur devis',
    priceDetails: [
      { label: 'Volume important', value: 'Tarif spécial' },
      { label: 'Zone UEMOA', value: 'Sur demande' },
      { label: 'Gestion retours', value: 'Personnalisée' },
    ],
    features: [
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
    title: 'Point de Vente Physique',
    description: 'Vos clients récupèrent leurs commandes chez nous. Notre local est le vôtre.',
  },
];

export const faqItems = [
  {
    value: 'item-1',
    question: 'Comment envoyer mes commandes à Kaba ?',
    answer:
      'Dès que vos publicités génèrent des commandes, vous avez la possibilité de nous connecter à votre tableau de bord Shopify, un fichier Excel en ligne, via WhatsApp, ou par tout autre moyen.',
  },
  {
    value: 'item-2',
    question: 'Comment expédier mes stocks ?',
    answer:
      'Kaba dispose de partenaires de transport terrestre en Afrique de l\'Ouest. Selon votre pays d\'expédition, nous vous recommandons un transporteur fiable. Les frais sont à votre charge.',
  },
  {
    value: 'item-3',
    question: 'Comment retirer l’argent de mes ventes ?',
    answer:
      'Lorsque vos clients paient à l’arrivée, le montant est crédité sur votre portefeuille. Vous pouvez demander un retrait à tout moment via Mobile Money ou tout autre moyen.',
  },
  {
    value: 'item-4',
    question: 'Y’a-t-il d’autres frais de service ?',
    answer:
      'Oui, pour la récupération de votre stock et l’acheminement à notre entrepôt, des frais de 5 000 FCFA s\'appliquent.',
  },
  {
    value: 'item-5',
    question: 'Kaba fait-il le service client ?',
    answer:
      'Oui, Kaba s’occupe du service client de 1er niveau (renseignements produits, transmission des plaintes et suggestions).',
  },
  {
    value: 'item-6',
    question: 'Puis-je retirer mon stock à tout moment ?',
    answer: 'Votre stock peut vous être réexpédié à n’importe quel moment, à vos frais.',
  },
  {
    value: 'item-7',
    question: 'Comment suivre mon activité ?',
    answer:
      'Nous mettons à disposition l\'appli Kaba Partners permettant de suivre livraisons et chiffre d\'affaires. Un point journalier WhatsApp est aussi effectué.',
  },
  {
    value: 'item-8',
    question: 'Quels sont les horaires de livraison ?',
    answer:
      'Nous livrons du lundi au dimanche, de 07h30 à 17h30 (sauf jour de l\'An et Noël). Les commandes reçues après 17h30 sont reportées au lendemain.',
  },
  {
    value: 'item-9',
    question: 'Kaba livre-t-il partout au Togo ?',
    answer:
      'Nous livrons directement à Lomé et ses environs. Pour les autres régions, nous expédions les colis via nos partenaires de transport.',
  },
  {
    value: 'item-10',
    question: 'Kaba fournit-il des emballages ?',
    answer: 'Oui, nous proposons des emballages standards en trois formats : petit, moyen et grand.',
  },
  {
    value: 'item-11',
    question: 'Quelle est la garantie juridique ?',
    answer:
      'Un contrat est signé avec chaque partenaire, définissant les responsabilités. Kaba garantit la sécurité de vos stocks (hors cas de force majeure).',
  },
];

export const testimonials = [
  {
    quote: "Agréablement surpris par les délais de remboursement. Très belle expérience, la meilleure jusqu’ici.",
    author: "Ecodex",
    location: "Abidjan, Côte d’Ivoire"
  },
  {
    quote: "Avec Kaba, j’ai pu commercialiser mes articles jusqu’à atteindre 3.000.000 FCFA. Demeurant à Cotonou, je fais mes publicités à Lomé et Kaba livre mes clients.",
    author: "Africa Gadget",
    location: "Cotonou, Bénin"
  },
  {
    quote: "Nous utilisons Kaba comme partenaire de stockage et de livraison depuis 1 an maintenant. Nous touchons le marché togolais, étant en côte d’ivoire grâce à eux. Ils sont réactifs et formidables.",
    author: "Noyara",
    location: "Abidjan, Côte d’Ivoire"
  },
  {
    quote: "Kaba est la meilleure des choses qui pouvait nous arriver. Nous arrivons à augmenter notre chiffre d’affaires en vendant au Togo, grâce à Kaba.",
    author: "Africa Top Santé",
    location: "Cotonou, Bénin"
  },
  {
    quote: "Nous avons pu commercialiser nos scanners OBD sur le marché togolais, grâce à Kaba. La gestion des commandes est parfaite et le remboursement, parfait.",
    author: "Burkina Buy",
    location: "Ouagadougou, Burkina Faso"
  }
];
