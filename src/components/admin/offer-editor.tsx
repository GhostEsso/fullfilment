'use client';

import * as React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Wand2, Loader2, PlusCircle, Trash2 } from 'lucide-react';

import type { ServiceOffer } from '@/lib/types';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { generateOfferDescriptionAction } from '@/app/actions';
import { SuggestionModal } from '@/components/admin/suggestion-modal';

const offerSchema = z.object({
  id: z.number(),
  name: z.string().min(1, 'Le nom est requis.'),
  subtitle: z.string().min(1, 'Le sous-titre est requis.'),
  description: z.string().min(1, 'La description courte est requise.'),
  longDescription: z.string().min(1, 'La description longue est requise.'),
  price: z.string().min(1, 'Le prix est requis.'),
});

const formSchema = z.object({
  offers: z.array(offerSchema),
});

type FormData = z.infer<typeof formSchema>;

interface OfferEditorProps {
  initialOffers: ServiceOffer[];
}

export function OfferEditor({ initialOffers }: OfferEditorProps) {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = React.useState<number | null>(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState<{
    names: string[];
    descriptions: string[];
  } | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      offers: initialOffers,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'offers',
  });

  const onSubmit = (data: FormData) => {
    console.log('Updated offers:', data.offers);
    toast({
      title: 'Offres sauvegardées',
      description: 'Les modifications ont été enregistrées avec succès.',
    });
  };

  const handleGenerate = async (index: number) => {
    setIsGenerating(index);
    const offer = form.getValues(`offers.${index}`);
    const result = await generateOfferDescriptionAction({
      companyName: 'KABA DELIVERY',
      companyDescription:
        'Solutions de stockage, gestion de commandes et livraison pour les e-commerçants et marques de la zone UEMOA.',
      serviceOfferDetails: `Name: ${offer.name}, Subtitle: ${offer.subtitle}, Description: ${offer.price}. ${offer.description}`,
      existingOfferName: offer.name,
      existingDescription: offer.longDescription,
    });

    if (result.success && result.data) {
      setSuggestions({
        names: result.data.suggestedOfferNames,
        descriptions: result.data.suggestedDescriptions,
      });
      setModalOpen(true);
    } else {
      toast({
        variant: 'destructive',
        title: 'Erreur de génération',
        description:
          result.error ||
          "Impossible de générer des suggestions pour le moment.",
      });
    }
    setIsGenerating(null);
  };

  const applySuggestion = (type: 'name' | 'description', value: string) => {
    if (isGenerating !== null) {
      if (type === 'name') {
        form.setValue(`offers.${isGenerating}.name`, value);
      } else {
        form.setValue(`offers.${isGenerating}.longDescription`, value);
      }
      setModalOpen(false);
      toast({
        title: 'Suggestion appliquée!',
      });
    }
  };


  return (
    <>
      <SuggestionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        suggestions={suggestions}
        onApply={applySuggestion}
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-6">
            {fields.map((field, index) => (
              <Card key={field.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Offre #{index + 1}</CardTitle>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name={`offers.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom de l'offre</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`offers.${index}.subtitle`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sous-titre</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`offers.${index}.price`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prix</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`offers.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description courte (pour carte tarif)</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={2} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`offers.${index}.longDescription`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description longue (pour Hero)</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Textarea {...field} rows={4} className="pr-12" />
                          </FormControl>
                          <Button
                            type="button"
                            size="icon"
                            variant="ghost"
                            className="absolute top-2 right-2"
                            onClick={() => handleGenerate(index)}
                            disabled={isGenerating === index}
                          >
                            {isGenerating === index ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Wand2 className="h-4 w-4" />
                            )}
                            <span className="sr-only">Générer suggestions</span>
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
          <Separator />
          <div className="flex justify-between items-center">
            <Button
              type="button"
              variant="outline"
              onClick={() => append({ id: Date.now(), name: '', subtitle: '', description: '', longDescription: '', price: '' })}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Ajouter une offre
            </Button>
            <Button type="submit">Sauvegarder les changements</Button>
          </div>
        </form>
      </Form>
    </>
  );
}
