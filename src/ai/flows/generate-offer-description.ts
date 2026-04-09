'use server';
/**
 * @fileOverview A Genkit flow for generating marketing copy suggestions for service offer names and descriptions.
 *
 * - generateOfferDescription - A function that handles the generation of marketing copy suggestions.
 * - GenerateOfferDescriptionInput - The input type for the generateOfferDescription function.
 * - GenerateOfferDescriptionOutput - The return type for the generateOfferDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateOfferDescriptionInputSchema = z.object({
  companyName: z.string().describe('The name of the company, e.g., KABA DELIVERY.'),
  companyDescription: z
    .string()
    .describe('A brief description of the company and its services, e.g., "Solutions de stockage, gestion de commandes et livraison pour les e-commerçants et marques de la zone UEMOA."'),
  serviceOfferDetails: z
    .string()
    .describe('Specific details about the service offer for which to generate copy, e.g., "Name: Offre 1, Subtitle: Stockage & Livraison GRATUITE, Description: 2700 FCFA par livraison. Idéal pour les e-commerçants souhaitant inclure les frais dans leur prix de vente."'),
  existingOfferName: z
    .string()
    .optional()
    .describe('The current name of the service offer, if refining existing copy.'),
  existingDescription: z
    .string()
    .optional()
    .describe('The current description of the service offer, if refining existing copy.'),
  marketingGoal: z
    .string()
    .optional()
    .describe('The primary goal for the marketing copy, e.g., "attract e-commerce sellers", "highlight cost savings". Defaults to "create compelling marketing copy".'),
  tone: z
    .string()
    .optional()
    .describe('The desired tone for the copy, e.g., "premium, confident, efficient", "playful and modern". Defaults to "premium, confident, efficient".'),
});
export type GenerateOfferDescriptionInput = z.infer<typeof GenerateOfferDescriptionInputSchema>;

const GenerateOfferDescriptionOutputSchema = z.object({
  suggestedOfferNames: z
    .array(z.string())
    .describe('An array of 3-5 suggested, engaging names for the service offer.'),
  suggestedDescriptions: z
    .array(z.string())
    .describe('An array of 3-5 suggested, compelling marketing descriptions for the service offer.'),
});
export type GenerateOfferDescriptionOutput = z.infer<typeof GenerateOfferDescriptionOutputSchema>;

export async function generateOfferDescription(
  input: GenerateOfferDescriptionInput
): Promise<GenerateOfferDescriptionOutput> {
  return generateOfferDescriptionFlow(input);
}

const generateOfferDescriptionPrompt = ai.definePrompt({
  name: 'generateOfferDescriptionPrompt',
  input: { schema: GenerateOfferDescriptionInputSchema },
  output: { schema: GenerateOfferDescriptionOutputSchema },
  prompt: `You are an expert marketing copywriter for a logistics and fulfillment company in Africa named {{{companyName}}}.
Your goal is to generate compelling and engaging marketing copy for a service offer.
The company's core business is: {{{companyDescription}}}

Here are the specific details about the service offer:
{{{serviceOfferDetails}}}

{{#if existingOfferName}}
The current offer name is: "{{{existingOfferName}}}"
{{/if}}
{{#if existingDescription}}
The current description is: "{{{existingDescription}}}"
{{/if}}

Your task is to generate 3-5 varied suggestions for:
1.  **Service Offer Names**: Short, catchy, and professional names.
2.  **Service Descriptions**: Compelling and concise marketing paragraphs (2-3 sentences each) that highlight the benefits and appeal to e-commerce sellers and brands in the UEMOA zone.

The marketing goal is to "{{{marketingGoal}}}" and the tone should be "{{{tone}}}".
Ensure the suggestions are suitable for a premium, single-page parallax website.
Focus on highlighting the unique selling points and value proposition of the service offer.`,
});

const generateOfferDescriptionFlow = ai.defineFlow(
  {
    name: 'generateOfferDescriptionFlow',
    inputSchema: GenerateOfferDescriptionInputSchema,
    outputSchema: GenerateOfferDescriptionOutputSchema,
  },
  async (input) => {
    const promptInput = {
      ...input,
      marketingGoal: input.marketingGoal || 'create compelling marketing copy',
      tone: input.tone || 'premium, confident, efficient',
    };
    const { output } = await generateOfferDescriptionPrompt(promptInput);
    return output!;
  }
);
