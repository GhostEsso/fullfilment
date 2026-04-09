'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ClipboardCopy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SuggestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  suggestions: { names: string[]; descriptions: string[] } | null;
  onApply: (type: 'name' | 'description', value: string) => void;
}

export function SuggestionModal({
  isOpen,
  onClose,
  suggestions,
  onApply,
}: SuggestionModalProps) {
  const { toast } = useToast();
  if (!suggestions) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: 'Copié dans le presse-papiers!' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Suggestions de contenu IA</DialogTitle>
          <DialogDescription>
            Voici quelques suggestions générées par l'IA pour améliorer votre
            marketing.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4 max-h-[60vh] overflow-y-auto pr-4">
          <div>
            <h3 className="font-semibold mb-2">Noms d'offres suggérés</h3>
            <div className="space-y-3">
              {suggestions.names.map((name, i) => (
                <div key={`name-${i}`} className="flex items-center justify-between gap-2 p-3 rounded-md border bg-muted/50">
                  <p className="text-sm">{name}</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(name)}
                      aria-label="Copier"
                    >
                      <ClipboardCopy className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onApply('name', name)}
                    >
                      Appliquer
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold mb-2">Descriptions suggérées</h3>
            <div className="space-y-3">
              {suggestions.descriptions.map((desc, i) => (
                <div key={`desc-${i}`} className="flex items-start justify-between gap-2 p-3 rounded-md border bg-muted/50">
                  <p className="text-sm">{desc}</p>
                   <div className="flex gap-2 flex-shrink-0">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(desc)}
                      aria-label="Copier"
                    >
                      <ClipboardCopy className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onApply('description', desc)}
                    >
                      Appliquer
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Fermer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
