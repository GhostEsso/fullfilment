'use server';

import {
  generateOfferDescription,
  type GenerateOfferDescriptionInput,
  type GenerateOfferDescriptionOutput,
} from '@/ai/flows/generate-offer-description';

type ActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };

export async function generateOfferDescriptionAction(
  input: GenerateOfferDescriptionInput
): Promise<ActionResult<GenerateOfferDescriptionOutput>> {
  try {
    const output = await generateOfferDescription(input);
    return { success: true, data: output };
  } catch (error) {
    console.error('Error generating offer description:', error);
    // In a real app, you might want to log this error to a monitoring service
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
