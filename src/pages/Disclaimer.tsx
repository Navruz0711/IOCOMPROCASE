import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | IoSalvoLaTuaCasa</title>
        <meta name="description" content="Disclaimer e note legali del sito IoSalvoLaTuaCasa." />
        <link rel="canonical" href="https://www.iosalvolatuacasa.it/disclaimer" />
      </Helmet>

      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose prose-slate">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Disclaimer</h1>
              
              <p className="text-muted-foreground mb-6">
                Ultimo aggiornamento: Gennaio 2025
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Scopo informativo</h2>
              <p className="text-muted-foreground mb-4">
                Le informazioni contenute in questo sito web hanno scopo puramente informativo 
                e divulgativo. Non costituiscono e non devono essere interpretate come 
                consulenza legale, finanziaria o professionale di alcun tipo.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Non sostituzione della consulenza professionale</h2>
              <p className="text-muted-foreground mb-4">
                I contenuti di questo sito non sostituiscono in alcun modo la consulenza 
                di un avvocato, commercialista o altro professionista qualificato. Ogni 
                situazione è unica e richiede una valutazione personalizzata.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Nessuna garanzia di risultato</h2>
              <p className="text-muted-foreground mb-4">
                I risultati delle procedure descritte dipendono da numerosi fattori specifici 
                di ogni singolo caso, tra cui:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>La situazione debitoria complessiva</li>
                <li>Lo stato della procedura esecutiva</li>
                <li>La disponibilità dei creditori a negoziare</li>
                <li>Il valore effettivo dell'immobile</li>
                <li>I tempi di intervento</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Non possiamo garantire esiti specifici o risultati determinati. 
                Ogni caso viene valutato singolarmente e presentato con le reali possibilità di successo.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Limitazione di responsabilità</h2>
              <p className="text-muted-foreground mb-4">
                IoSalvoLaTuaCasa non sarà responsabile per eventuali danni diretti o indiretti 
                derivanti dall'uso delle informazioni contenute in questo sito o dall'affidamento 
                su di esse senza una preventiva consulenza professionale.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Aggiornamento delle informazioni</h2>
              <p className="text-muted-foreground mb-4">
                Ci impegniamo a mantenere le informazioni presenti sul sito accurate e aggiornate, 
                ma non possiamo garantire la completezza o l'attualità dei contenuti in ogni momento. 
                La normativa in materia può cambiare e le informazioni potrebbero non riflettere 
                le ultime novità legislative.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">Contatti</h2>
              <p className="text-muted-foreground mb-4">
                Per qualsiasi chiarimento relativo al presente Disclaimer, contattare:<br />
                Email: info@iosalvolatuacasa.it<br />
                Telefono: 091 454582
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Disclaimer;
