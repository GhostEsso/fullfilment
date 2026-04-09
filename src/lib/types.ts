export interface ServiceOffer {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  price: string;
  priceDetails: {
    label: string;
    value: string;
  }[];
  features: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  }[];
  backgroundImage: string;
}
