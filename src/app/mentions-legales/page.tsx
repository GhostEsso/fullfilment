import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | Kaba Fulfillment',
  description: 'Mentions légales et conditions d\'utilisation du site Kaba Fulfillment.',
};

export default function MentionsLegales() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-slate-800/50 rounded-tr-full blur-[80px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Documents Légaux</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 font-headline">
              Mentions <span className="text-primary underline decoration-white/10 underline-offset-8">Légales</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-2xl">
              Informations légales relatives à l'utilisation du site kabafulfillment.com et à l'identité de l'entreprise SARL KABA DELIVERY.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-slate prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <div className="space-y-12">
              
              <div id="edition">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
                  Édition du site
                </h2>
                <p>
                  En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <a href="https://kabafulfillment.com/">https://kabafulfillment.com/</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:
                </p>
                <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                  <p><strong>Propriétaire du site :</strong> KABA DELIVERY</p>
                  <p><strong>Contact :</strong> contact@kabafulfillment.com | 92109474</p>
                  <p><strong>Adresse :</strong> 28BP56.</p>
                  <p><strong>Identification de l'entreprise :</strong> SARL KABA DELIVERY au capital social de 24427€</p>
                  <p><strong>SIREN :</strong> - RCS ou RM : TG-LOM 2018B2001</p>
                  <p><strong>CGU :</strong> <a href="https://kabafulfillment.com/conditions-generales-utilisations#CGU">Lien vers les CGU</a></p>
                  <p><strong>Directeur de la publication :</strong> KABA DELIVERY - Contact : 90628725.</p>
                  <p><strong>Hébergeur :</strong> Cloudfront <a href="https://aws.amazon.com/fr/cloudfront/">https://aws.amazon.com/fr/cloudfront/</a></p>
                  <p><strong>Délégué à la protection des données :</strong> Ulrich ABIGUIME - <a href="mailto:a.ulrich@kabafulfillment.com">a.ulrich@kabafulfillment.com</a></p>
                </div>
              </div>

              <div id="propriete">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
                  Propriété intellectuelle et contrefaçons
                </h2>
                <p>
                  KABA DELIVERY est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
                </p>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de KABA DELIVERY.
                </p>
                <p>
                  Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
              </div>

              <div id="responsabilite">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">3</span>
                  Limitations de responsabilité
                </h2>
                <p>
                  KABA DELIVERY ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site <a href="https://kabafulfillment.com">https://kabafulfillment.com</a>.
                </p>
                <p>
                  KABA DELIVERY décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur <a href="https://kabafulfillment.com">https://kabafulfillment.com</a>.
                </p>
                <p>
                  KABA DELIVERY s’engage à sécuriser au mieux le site <a href="https://kabafulfillment.com">https://kabafulfillment.com</a>, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.
                </p>
                <p>
                  Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. KABA DELIVERY se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.
                </p>
                <p>
                  Le cas échéant, KABA DELIVERY se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).
                </p>
              </div>

              <div id="donnees">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">4</span>
                  CNIL et gestion des données personnelles
                </h2>
                <p>
                  Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site <a href="https://kabafulfillment.com">https://kabafulfillment.com</a> dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : Ulrich ABIGUIME - <a href="mailto:a.ulrich@kabafulfillment.com">a.ulrich@kabafulfillment.com</a>.
                </p>
                <p>
                  Pour plus d'informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire...), lisez notre <a href="https://kabafulfillment.com/conditions-generales-utilisations#CGU">Charte de Confidentialité</a>.
                </p>
              </div>

              <div id="cookies">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">5</span>
                  Liens hypertextes et cookies
                </h2>
                <p>
                  Le site <a href="https://kabafulfillment.com">https://kabafulfillment.com</a> contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers <a href="https://kabafulfillment.com">https://kabafulfillment.com/</a>.
                </p>
                <p>
                  La navigation sur le site <a href="https://kabafulfillment.com">https://kabafulfillment.com</a> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.
                </p>
                <p>
                  Un "cookie" est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple.
                </p>
                <p>
                  Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.
                </p>
                <p>
                  Les cookies sont enregistrés pour une durée maximale de 1 mois.
                </p>
                <p>
                  Pour plus d'informations sur la façon dont nous faisons usage des cookies, lisez notre <a href="https://kabafulfillment.com/conditions-generales-utilisations#CGU">Politique de Cookies</a>.
                </p>
              </div>

              <div id="droit">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">6</span>
                  Droit applicable et attribution de juridiction
                </h2>
                <p>
                  Tout litige en relation avec l’utilisation du site <a href="https://kabafulfillment.com">https://kabafulfillment.com</a> est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de <strong>Lomé, Togo</strong>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
