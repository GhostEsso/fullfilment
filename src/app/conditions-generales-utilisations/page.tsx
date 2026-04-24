import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CGU - Conditions Générales d\'Utilisation | Kaba Fulfillment',
  description: 'Conditions Générales d\'Utilisation et de Vente (CGUV) de l\'application Kaba.',
};

export default function CGUPage() {
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
              <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Contrat Utilisateur</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 font-headline">
              Conditions <span className="text-primary underline decoration-white/10 underline-offset-8">Générales</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-2xl">
              Conditions Générales d'Utilisation et de Vente (CGUV) régissant l'utilisation de la plateforme Kaba.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-slate prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            
            <div className="mb-12 p-8 bg-primary/5 border border-primary/10 rounded-3xl">
              <p className="text-slate-900 font-bold m-0 italic">
                Merci de lire attentivement les Conditions Générales d’Utilisation et de Vente ci-dessous, avant de passer commande de quelque produit ou service sur l’application KABA. En passant des commandes sur ladite application, quel que soit le moyen utilisé, vous acceptez de vous soumettre à ces Conditions Générales d’utilisation et de Vente (CGUV).
              </p>
            </div>

            <div className="space-y-16">
              
              <section id="section1">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm">01</span>
                  Présentation de KABA
                </h2>
                <p>
                  Kaba est une application qui permet la commande et la livraison de menus restaurants, mise au point par <strong>KABA DELIVERY SARL</strong>. L’application a été conçue dans le dessein de permettre à toute personne de pouvoir commander des menus restaurants dans des établissements gastronomiques partenaires, et de se les faire livrer à toute adresse, par des livreurs professionnels.
                </p>
              </section>

              <section id="section2">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm">02</span>
                  Définition des termes
                </h2>
                <ul className="space-y-4">
                  <li><strong>2.1. “Accord”</strong> se réfère à ces Conditions Générales d’utilisation et de Vente (CGUV), la politique de confidentialité, les informations de paiement, et tout bien qui vous est livré ;</li>
                  <li><strong>2.2. “Politique de Confidentialité”</strong>, nous entendons la politique accessible via notre application, qui détaille la façon dont nous collectons et conservons vos informations personnelles ;</li>
                  <li><strong>2.3. “vous”, “votre”, et “vos”</strong> se réfèrent à vous, la personne ayant téléchargé l’application et passant commande pour un bien ou un service que nous y proposons. L’accès à Kaba par un quelconque autre moyen vous lie également à ces Conditions Générales de Vente ;</li>
                  <li><strong>2.4. “nous”, “notre”, “nos” et “Kaba”</strong> se réfèrent à l’entreprise ;</li>
                  <li><strong>2.5. “Produits” et “biens”</strong> se réfèrent à tous les produits que nous proposons à la vente sur notre application soit en fonction d’une durée déterminée, ou indéterminée selon la disponibilité desdits biens au niveau de nos restaurants partenaires ;</li>
                  <li><strong>2.6. “Service” ou “Services”</strong> se réfèrent à tous les services que nous proposons ou qui sont suggérées via notre application ;</li>
                  <li><strong>2.7. “Restaurant partenaire”</strong> est un tiers, qui a accepté de coopérer avec l’entreprise dans le but de préparer des menus restaurants aux clients, utilisateurs de l’application ;</li>
                  <li><strong>2.8. “Livraison de repas”</strong> se réfère à des biens périssables (menus de nos restaurants partenaires) et desquels, ils assument l’entière responsabilité en ce qui concerne leur processus de préparation ;</li>
                  <li><strong>2.9. “Plateforme”</strong> se réfère à notre application mobile ou quelque autre plateforme que nous choisirons pour vous proposer des biens et des services.</li>
                </ul>
              </section>

              <section id="section3">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm">03</span>
                  Commander
                </h2>
                <div className="space-y-4">
                  <p><strong>3.1.</strong> Tout contrat pour la commande de repas sur notre application se fait entre vous et le Restaurant partenaire ; et tout contact se fait entre vous et KABA, qui est un intermédiaire entre le restaurant partenaire et le client, pour les intérêts des deux parties. Vous acceptez, après le téléchargement de notre application, créer un compte et de nous apporter les informations utiles pour jouir de nos services. Vous acceptez les fournir à chaque fois que vous manifesterez votre envie de passer une commande. Lorsque vous passez une commande, assurez-vous que ces informations sont exactes et à jour.</p>
                  <p><strong>3.2.</strong> Si vous choisissez de payer avec l’un des moyens de paiement proposés sur l’application (Flooz, T-Money etc.), vous garantissez que vous en êtes le titulaire légal et propriétaire des fonds qui y sont liés. Vous garantissez également que vous avez les fonds nécessaires pour effectuer le paiement. Vous pouvez contracter les Services seulement en tant qu’acteur principal.</p>
                  <p><strong>3.3.</strong> Lorsque vous passez une commande sur notre application, nous vous demandons de fournir un numéro de téléphone, une adresse et un mot de passe. Vous devez vous assurer de conserver ces données, personnelles, et de ne point les communiquer à un tiers.</p>
                  <p><strong>3.4.</strong> Toute commande passée sur notre plateforme est sujette à la disponibilité, la capacité de livraison, et à son acceptation par le restaurant partenaire et KABA. Une fois la commande passée en ligne, une notification vous est envoyée vous informant de la validation ou de l’acceptation ou non de votre commande. D’autres notifications vous seront envoyées au fur et à mesure pour vous informer du traitement de votre commande.</p>
                  <p><strong>3.5.</strong> Avant que vous ne validiez votre commande, les détails (Mini facture) de cette dernière, vous sont proposés afin d’en assurer l’exactitude. Les frais de livraison dont vous êtes redevables vous sont aussi présentés en fonction de votre distance, avant chaque validation et paiement.</p>
                </div>
              </section>

              <section id="section4">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm">04</span>
                  Prix & Paiements
                </h2>
                <div className="space-y-4">
                  <p><strong>4.1.</strong> Tout contrat pour l’achat de repas via notre application se fait entre vous et le Restaurant partenaire ; en ce qui concerne la livraison et services connexes offerts par notre plateforme, le contrat se fait entre vous et KABA. Vous acceptez de nous fournir des informations exactes, et de vous assurer de leur exactitude au moment de passer une commande.</p>
                  <p><strong>4.2.</strong> Tous les prix des menus restaurants affichés sur la plateforme sont exacts au moment de leur publication. Ces prix peuvent subir des modifications selon le bon vouloir de nos partenaires. KABA a la responsabilité de les faire figurer sur la plateforme avec leurs prix normaux ou leurs prix de promotion.</p>
                  <p><strong>4.5.</strong> Le prix total pour la livraison de repas, et les produits et services commandés, vous seront affichés au moment de passer votre commande. Le paiement se fait par deux principaux moyens : Flooz ou T-Money et aussi par espèces avec appoint (le client doit avoir la somme exacte).</p>
                  <p><strong>4.8.</strong> Kaba Delivery assume l’entière part de responsabilité qui lui revient sur les transactions. La société garantit aux utilisateurs la sécurité des fonds via les systèmes de paiement dématérialisé (T-Money et Flooz via PayGate).</p>
                </div>
              </section>

              <section id="section5">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm">05</span>
                  Livraison
                </h2>
                <div className="space-y-4">
                  <p><strong>5.1.</strong> La livraison est faite par les livreurs de KABA. Kaba est responsable de ses services de livraison. Une durée normale et raisonnable de 30 minutes est visée. KABA est dans l’obligation de vous informer d’une quelconque impossibilité due à un cas de force majeure.</p>
                  <p><strong>5.3.</strong> Les utilisateurs sont tenus d’être toujours disponibles (physiquement et par téléphone). Après un délai d’attente de 7 minutes, si le client est injoignable, les frais de livraison et le prix de la commande ne sont pas remboursables.</p>
                  <p><strong>5.4.</strong> À chaque commande, un mot code servant de mot de passe est généré. À la livraison, ce mot code est demandé au client pour des raisons de sécurité. Sans ce mot code, votre commande ne saurait vous être remise.</p>
                </div>
              </section>

              <section id="section7">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm">07</span>
                  Réclamations
                </h2>
                <p>
                  Nous prenons les réclamations très au sérieux. Merci d’envoyer vos réclamations à <a href="mailto:contact@kabafulfillment.com">contact@kabafulfillment.com</a> ou en contactant directement notre service clientèle. Les réclamations doivent concerner directement nos services de livraison. Toute réclamation liée à une faute du restaurant partenaire sera redirigée vers ce dernier.
                </p>
              </section>

              <section id="section8">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm">08</span>
                  Limitation de responsabilité
                </h2>
                <p>
                  KABA n’est pas responsable des préjudices (intoxication, maladie, etc.) causés par une mauvaise préparation d’un restaurant. Kaba met à disposition des emballages scellés pour garantir l’intégrité des produits jusqu’à la livraison.
                </p>
              </section>

              <section id="section10">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm">10</span>
                  Litiges
                </h2>
                <p>
                  Ces CGUV sont régies par les lois togolaises. Les Parties s’engagent, lors d’un litige, à user des voies de l’amiable et de l’arbitrage avant toute saisine d’un tribunal compétent à <strong>Lomé, Togo</strong>.
                </p>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
