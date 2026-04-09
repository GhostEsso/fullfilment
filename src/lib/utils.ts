import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// CSS filter to tint black SVG icons to KABA brand color #CD1F45
export const ICON_COLOR_FILTER =
  'brightness(0) saturate(100%) invert(20%) sepia(90%) saturate(2200%) hue-rotate(325deg) brightness(105%)';

export const WHATSAPP_NUMBER = '22892109474'; // Updated according to standard if needed, but user said 228 92 10 94 74
export const WHATSAPP_URL = 'https://wa.me/22892109474';

export function getWhatsAppLink(offerName?: string) {
  const baseUrl = 'https://wa.me/22892109474';
  
  // Extract number if it follows "Offre X" pattern, otherwise use full name
  const displayOffer = offerName?.replace(/Offre\s+/i, '') || '';
  
  const message = offerName 
    ? `Bonjour KABA, pour le service Fulfillment, je souhaite en savoir plus sur l'offre: ${displayOffer}`
    : `Bonjour KABA, je souhaite en savoir plus sur vos services de Fulfillment.`;
    
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
