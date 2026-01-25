import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { 
  Target, UserCheck, ShieldCheck, FileText, Phone, 
  Users, Scale, Building2, AlertCircle, Clock, 
  CheckCircle, ArrowRight, MessageCircle
} from 'lucide-react';

const ComeTiAiutiamo = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Specializzazione esclusiva',
      description: 'Ci occupiamo solo di procedure esecutive immobiliari. Questa focalizzazione ci permette di conoscere ogni dettaglio, ogni scappatoia, ogni opportunità che altri potrebbero non vedere.',
      points: [
        'Conoscenza approfondita della normativa specifica',
        'Relazioni consolidate con tribunali e professionisti del settore',
        'Approccio integrato: legale + immobiliare + finanziario',
        'Aggiornamento costante su giurisprudenza e prassi',
      ],
    },
    {
      icon: UserCheck,
      title: 'Un unico interlocutore',
      description: 'Dal primo contatto alla chiusura del caso, hai sempre lo stesso consulente dedicato. Non dovrai ripetere la tua storia decine di volte a persone diverse.',
      points: [
        'Referente sempre raggiungibile e aggiornato',
        'Comunicazioni chiare e tempestive',
        'Coordinamento interno trasparente',
        'Nessun "rimbalzo" tra uffici',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Eviti errori irreversibili',
      description: 'Nella fretta e nella pressione, è facile commettere errori che precludono soluzioni. Noi ti guidiamo per mantenere aperte tutte le opzioni.',
      points: [
        'Analisi completa prima di qualsiasi decisione',
        'Valutazione di ogni alternativa possibile',
        'Attenzione alle scadenze procedurali',
        'Protezione da mosse controproducenti',
      ],
    },
  ];

  const whatWeHandle = [
    'Analisi della situazione debitoria complessiva',
    'Verifica dello stato della procedura esecutiva',
    'Valutazione immobiliare e di mercato',
    'Contatti e negoziazioni con creditori',
    'Preparazione documentale completa',
    'Coordinamento con avvocati e professionisti',
    'Ricerca investitori o acquirenti',
    'Gestione iter burocratico e procedurale',
  ];

  const earlySignals = [
    { icon: FileText, text: 'Hai ricevuto un atto di precetto o pignoramento' },
    { icon: AlertCircle, text: 'La banca ha revocato il fido o chiesto il rientro' },
    { icon: Clock, text: 'Sei in ritardo con le rate del mutuo da più mesi' },
    { icon: Scale, text: 'Hai ricevuto comunicazioni da recupero crediti' },
    { icon: Building2, text: 'L\'immobile è stato pignorato ma l\'asta non è ancora fissata' },
  ];

  const mistakes = [
    {
      mistake: 'Ignorare le comunicazioni',
      consequence: 'Le scadenze corrono anche se non rispondi. Perdi tempo prezioso.',
    },
    {
      mistake: 'Affidarsi a intermediari non specializzati',
      consequence: 'Soluzioni generiche o tardive che non risolvono il problema.',
    },
    {
      mistake: 'Vendere sottocosto in emergenza',
      consequence: 'Potresti ottenere molto di più con una gestione strategica.',
    },
    {
      mistake: 'Firmare accordi senza consulenza',
      consequence: 'Rischi di accettare condizioni sfavorevoli o rinunciare a diritti.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Come Ti Aiutiamo | Consulenza Pignoramento | IoSalvoLaTuaCasa</title>
        <meta
          name="description"
          content="Specializzazione, consulente dedicato, protezione da errori: scopri come ti assistiamo nelle procedure di pignoramento e pre-asta. Consulenza gratuita."
        />
        <link rel="canonical" href="https://www.iosalvolatuacasa.it/come-ti-aiutiamo" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Come ti <span className="text-accent">aiutiamo</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-4">
                Un approccio strutturato che unisce competenza legale, 
                conoscenza del mercato immobiliare e sensibilità umana.
              </p>
              <p className="text-primary-foreground/60">
                Ogni fase del nostro intervento è pensata per darti chiarezza, 
                protezione e le migliori possibilità di soluzione.
              </p>
            </div>
          </div>
        </section>

        {/* Three Pillars - Deep Dive */}
        {pillars.map((pillar, index) => (
          <section
            key={pillar.title}
            className={`section-padding ${index % 2 === 0 ? 'bg-background' : 'bg-cream-dark'}`}
          >
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center">
                      <pillar.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{pillar.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{pillar.description}</p>
                    <ul className="space-y-3">
                      {pillar.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* What we handle */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Cosa gestiamo per te</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {whatWeHandle.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-primary-foreground/5 rounded-lg p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* When to contact us */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <div className="divider-gold mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Quando contattarci</h2>
                <p className="text-muted-foreground">
                  Prima ci contatti, più margine di manovra avrai. Ecco alcuni segnali 
                  che indicano che è il momento giusto per una valutazione:
                </p>
              </div>

              <div className="space-y-4">
                {earlySignals.map(({ icon: Icon, text }, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link to="/contatti" className="btn-accent">
                  Richiedi valutazione gratuita
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Common mistakes */}
        <section className="section-padding-sm bg-cream-dark">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Errori da evitare
              </h2>
              <div className="space-y-4">
                {mistakes.map(({ mistake, consequence }, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-5">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">{mistake}</p>
                        <p className="text-muted-foreground text-sm">{consequence}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Hai domande sulla tua situazione?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contattaci senza impegno. Ti rispondiamo entro 12 ore.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contatti" className="btn-accent">
                  Consulenza gratuita
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  onClick={() => window.open('https://wa.me/39091454582', '_blank')}
                  className="btn-whatsapp"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ComeTiAiutiamo;
