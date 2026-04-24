import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Kaba Fulfillment',
  description: 'Consultez notre politique de confidentialité pour comprendre comment Kaba Fulfillment protège vos données personnelles.',
};

export default function Confidentialite() {
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
              <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Protection des Données</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 font-headline">
              Politique de <span className="text-primary underline decoration-white/10 underline-offset-8">Confidentialité</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-2xl">
              Votre vie privée est notre priorité. Découvrez comment nous collectons, utilisons et protégeons vos informations personnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-slate prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <div className="space-y-12">
              
              <section id="informations">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
                  Collecte et Exactitude
                </h2>
                <p>
                  Là où nous vous demandons des informations pour vous livrer les produits et services, vous acceptez de nous donner lesdites informations, complètes et exactes.
                </p>
              </section>

              <section id="utilisation">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
                  Utilisation des Données
                </h2>
                <p>
                  Vous nous autorisez à utiliser, stocker ou traiter vos informations personnelles afin de vous livrer les produits et/ou services commandés, et à des fins « marketing », de production de statistiques et de contrôle.
                </p>
              </section>

              <section id="droits">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">3</span>
                  Vos Droits d'Accès
                </h2>
                <p>
                  Vous avez le droit de demander une copie des informations personnelles ou tout autre information que nous possédons sur vous. Merci de nous contacter à l'adresse <a href="mailto:infos@kabafulfillment.com">infos@kabafulfillment.com</a> si vous souhaitez recevoir ces informations.
                </p>
              </section>

              <section id="engagement">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">4</span>
                  Respect de l'Anonymat
                </h2>
                <p>
                  Nous nous interdisons d’utiliser vos données personnelles à des fins contraires à notre activité et qui peuvent vous nuire. Kaba s’engage, à travers cet accord, à respecter l’anonymat de vos données personnelles.
                </p>
              </section>

              <section id="tiers">
                <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">5</span>
                  Partenaires Télécoms
                </h2>
                <p>
                  Nous vous informons que certaines de vos informations sont stockées dans la base de données des opérateurs de téléphonie mobile Togocel et Moov, dans le cadre de l'utilisation de nos services.
                </p>
              </section>

              <section id="paiement" className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 mb-6">
                  Sécurité des Paiements
                </h2>
                <p className="mb-6">
                  Nos portails de paiement mobile protègent notre activité commerciale en ligne contre toute tentative de fraude, vos transactions sont donc aussi protégées.
                </p>
                <p>
                  La sécurité étant primordiale, <strong>Paygate</strong> (Principal partenaire et portail de paiement mobile de Kaba) assure à toutes les étapes que :
                </p>
                <ul className="grid md:grid-cols-2 gap-4 list-none pl-0 mt-6">
                  <li className="bg-white p-4 rounded-xl shadow-sm border border-slate-50 text-sm font-medium">
                    Numéros de téléphone encryptés
                  </li>
                  <li className="bg-white p-4 rounded-xl shadow-sm border border-slate-50 text-sm font-medium">
                    Communications SSL/TLS (HTTPS)
                  </li>
                  <li className="bg-white p-4 rounded-xl shadow-sm border border-slate-50 text-sm font-medium">
                    Protection contre les injections SQL
                  </li>
                  <li className="bg-white p-4 rounded-xl shadow-sm border border-slate-50 text-sm font-medium">
                    Sauvegardes incrémentales et répliquées
                  </li>
                </ul>
                <p className="mt-8 text-xs text-slate-400 italic">
                  Source : <a href="https://www.paygateglobal.com/guide" target="_blank" rel="noopener noreferrer">PayGate Global Guide</a>
                </p>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
