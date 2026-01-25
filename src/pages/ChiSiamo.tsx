import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Shield, Eye, Zap, Award, Users, Scale, Handshake, ArrowRight } from 'lucide-react';

const ChiSiamo = () => {
  const values = [
    { icon: Shield, title: 'Riservatezza', description: 'La tua situazione rimane strettamente confidenziale. Nessun giudizio, solo soluzioni.' },
    { icon: Eye, title: 'Trasparenza', description: 'Ti spieghiamo tutto: opzioni, costi, tempi, rischi. Nessuna sorpresa.' },
    { icon: Award, title: 'Competenza', description: 'Anni di esperienza specifica in procedure esecutive immobiliari.' },
    { icon: Zap, title: 'Velocità', description: 'Sappiamo che il tempo è fondamentale. Agiamo con tempestività.' },
  ];

  const teamAreas = [
    {
      icon: Scale,
      title: 'Area Legale',
      description: 'Avvocati specializzati in diritto esecutivo e procedure concorsuali. Gestiscono negoziazioni, opposizioni e tutela legale.',
    },
    {
      icon: Users,
      title: 'Consulenza Dedicata',
      description: 'Consulenti esperti che ti seguono personalmente dall\'inizio alla fine. Un unico punto di contatto, sempre disponibile.',
    },
    {
      icon: Handshake,
      title: 'Partner & Rete',
      description: 'Grazie a Retecasa (200+ uffici), abbiamo accesso a investitori, periti e professionisti su tutto il territorio.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Chi Siamo | IoSalvoLaTuaCasa - Specialisti Pignoramento Immobiliare</title>
        <meta
          name="description"
          content="Un team specializzato in procedure esecutive immobiliari. Avvocati, consulenti e la rete Retecasa al tuo servizio. Palermo e Marsala."
        />
        <link rel="canonical" href="https://www.iosalvolatuacasa.it/chi-siamo" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Chi <span className="text-accent">siamo</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-4">
                Un team dedicato che unisce competenza legale, esperienza immobiliare 
                e sensibilità umana per aiutarti a trovare una via d'uscita.
              </p>
              <p className="text-primary-foreground/60">
                Non siamo un'agenzia generica. Siamo specialisti che ogni giorno 
                lavorano esclusivamente su casi come il tuo.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="divider-gold mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">La nostra missione</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Aiutare famiglie e individui a trovare una soluzione concreta e rispettosa 
                quando si trovano ad affrontare situazioni di difficoltà economica legate 
                alla propria casa.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <p className="text-foreground italic">
                  "Ogni persona merita di essere ascoltata senza giudizio e guidata 
                  con competenza verso le migliori opzioni disponibili."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding-sm bg-cream-dark">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">I nostri valori</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="card-premium text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Structure */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="divider-gold mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">La nostra struttura</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Un'organizzazione pensata per offrirti supporto completo su ogni aspetto della tua situazione.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamAreas.map(({ icon: Icon, title, description }) => (
                <div key={title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why not generic lawyer */}
        <section className="section-padding-sm bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Perché non basta un avvocato generico
              </h2>
              <div className="space-y-4 text-primary-foreground/80">
                <p>
                  Le procedure esecutive immobiliari sono un campo altamente specialistico. 
                  Un legale generico, per quanto competente, potrebbe non conoscere tutte 
                  le sfumature e le opportunità che solo l'esperienza quotidiana su questi 
                  casi può insegnare.
                </p>
                <p>
                  Inoltre, la componente immobiliare è fondamentale: conoscere il mercato, 
                  avere accesso a investitori, saper valutare rapidamente le opzioni di vendita 
                  o riacquisto richiede competenze che vanno oltre il puro ambito legale.
                </p>
                <p>
                  Noi uniamo entrambe le dimensioni in un unico team coordinato, 
                  permettendoti di risparmiare tempo, denaro e stress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Vuoi conoscerci meglio?</h2>
              <p className="text-muted-foreground mb-8">
                La prima consulenza è gratuita. Raccontaci la tua situazione 
                e scopri come possiamo aiutarti.
              </p>
              <Link to="/contatti" className="btn-accent">
                Richiedi consulenza gratuita
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ChiSiamo;
