import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | IoSalvoLaTuaCasa</title>
        <meta name="description" content="Informativa sulla privacy e trattamento dei dati personali di IoSalvoLaTuaCasa." />
        <link rel="canonical" href="https://www.iosalvolatuacasa.it/privacy" />
      </Helmet>

      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose prose-slate">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
              
              <p className="text-muted-foreground mb-6">
                Ultimo aggiornamento: Gennaio 2025
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Titolare del trattamento</h2>
              <p className="text-muted-foreground mb-4">
                Il titolare del trattamento dei dati personali è IoSalvoLaTuaCasa, 
                con sede legale in Via Carbone 39, 90151 Palermo (PA).
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Tipologia di dati raccolti</h2>
              <p className="text-muted-foreground mb-4">
                I dati personali raccolti attraverso questo sito includono:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Dati identificativi: nome, cognome</li>
                <li>Dati di contatto: email, numero di telefono</li>
                <li>Dati relativi all'immobile: comune, indirizzo (se fornito)</li>
                <li>Dati di navigazione: cookie tecnici e analitici</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. Finalità del trattamento</h2>
              <p className="text-muted-foreground mb-4">
                I dati vengono trattati per le seguenti finalità:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Rispondere alle richieste di consulenza</li>
                <li>Fornire i servizi richiesti</li>
                <li>Adempiere ad obblighi di legge</li>
                <li>Con il consenso esplicito, inviare comunicazioni informative</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. Base giuridica</h2>
              <p className="text-muted-foreground mb-4">
                Il trattamento dei dati si basa sul consenso dell'interessato (art. 6, par. 1, lett. a GDPR) 
                e sull'esecuzione di misure precontrattuali (art. 6, par. 1, lett. b GDPR).
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Conservazione dei dati</h2>
              <p className="text-muted-foreground mb-4">
                I dati personali saranno conservati per il tempo strettamente necessario al 
                raggiungimento delle finalità per cui sono stati raccolti, nel rispetto degli 
                obblighi di legge applicabili.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Diritti dell'interessato</h2>
              <p className="text-muted-foreground mb-4">
                L'interessato ha diritto di:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Accedere ai propri dati personali</li>
                <li>Richiedere la rettifica o la cancellazione</li>
                <li>Limitare il trattamento</li>
                <li>Opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Per esercitare tali diritti, contattare: privacy@iosalvolatuacasa.it
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Sicurezza</h2>
              <p className="text-muted-foreground mb-4">
                Adottiamo misure tecniche e organizzative adeguate per proteggere i dati 
                personali da accessi non autorizzati, perdita o distruzione.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Contatti</h2>
              <p className="text-muted-foreground mb-4">
                Per qualsiasi domanda relativa alla presente Privacy Policy, contattare:<br />
                Email: privacy@iosalvolatuacasa.it<br />
                Telefono: 091 454582
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Privacy;
