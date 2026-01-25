import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Cookie = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | IoSalvoLaTuaCasa</title>
        <meta name="description" content="Informativa sull'utilizzo dei cookie del sito IoSalvoLaTuaCasa." />
        <link rel="canonical" href="https://www.iosalvolatuacasa.it/cookie" />
      </Helmet>

      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose prose-slate">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
              
              <p className="text-muted-foreground mb-6">
                Ultimo aggiornamento: Gennaio 2025
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Cosa sono i cookie</h2>
              <p className="text-muted-foreground mb-4">
                I cookie sono piccoli file di testo che i siti visitati inviano al browser 
                dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi 
                siti alla successiva visita.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Tipologie di cookie utilizzati</h2>
              
              <h3 className="text-lg font-medium mt-6 mb-3">Cookie tecnici</h3>
              <p className="text-muted-foreground mb-4">
                Sono necessari per il corretto funzionamento del sito e non richiedono 
                il consenso dell'utente. Includono cookie di navigazione e cookie funzionali.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3">Cookie analitici</h3>
              <p className="text-muted-foreground mb-4">
                Utilizziamo Google Analytics per raccogliere informazioni anonime e aggregate 
                sull'utilizzo del sito. Questi cookie ci aiutano a capire come i visitatori 
                interagiscono con il sito.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3">Cookie di profilazione</h3>
              <p className="text-muted-foreground mb-4">
                Potremmo utilizzare cookie di terze parti per finalità di remarketing e 
                pubblicità mirata. Questi cookie vengono installati solo previo consenso 
                dell'utente.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Gestione dei cookie</h2>
              <p className="text-muted-foreground mb-4">
                L'utente può gestire le preferenze sui cookie attraverso le impostazioni 
                del proprio browser. La disabilitazione dei cookie tecnici potrebbe 
                compromettere la corretta navigazione del sito.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Cookie di terze parti</h2>
              <p className="text-muted-foreground mb-4">
                Il sito può contenere link a siti di terze parti con proprie cookie policy. 
                Non siamo responsabili delle pratiche di raccolta dati di tali siti.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Contatti</h2>
              <p className="text-muted-foreground mb-4">
                Per qualsiasi domanda relativa alla presente Cookie Policy, contattare:<br />
                Email: privacy@iosalvolatuacasa.it
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Cookie;
