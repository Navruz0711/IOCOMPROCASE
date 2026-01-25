import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { HandCoins, Home, Key, CheckCircle, AlertCircle, ArrowRight, MessageCircle } from 'lucide-react';

const CosaTiProponiamo = () => {
  const offers = [
    {
      id: 'saldo-stralcio',
      icon: HandCoins,
      title: 'Azzeramento debiti',
      subtitle: 'Saldo e stralcio / Trattativa con creditori',
      description: 'Negoziamo con i tuoi creditori (banche, finanziarie, privati) per chiudere la posizione debitoria a condizioni sostenibili, spesso inferiori all\'importo originario.',
      forWho: 'Per chi vuole liberarsi dei debiti, chiudere definitivamente la situazione e ripartire senza il peso delle pendenze.',
      benefits: [
        'Possibilità di chiudere il debito pagando meno del dovuto',
        'Estinzione delle procedure esecutive',
        'Cancellazione dalle centrali rischi (nei tempi previsti)',
        'Nessuna asta, nessuna svendita forzata',
        'Riservatezza totale verso terzi',
      ],
      steps: [
        'Analisi completa della situazione debitoria',
        'Valutazione del valore reale dell\'immobile',
        'Proposta di saldo e stralcio ai creditori',
        'Negoziazione delle condizioni',
        'Formalizzazione dell\'accordo',
        'Chiusura procedura e liberazione',
      ],
      documents: [
        'Atto di pignoramento e/o precetto',
        'Conteggio estintivo del mutuo',
        'Visura catastale e ipotecaria',
        'Estratti conto debiti',
      ],
      risks: 'Il successo dipende dalla disponibilità dei creditori a negoziare. Ogni caso è valutato singolarmente e non possiamo garantire esiti specifici.',
    },
    {
      id: 'acquistiamo-noi',
      icon: Home,
      title: 'Acquistiamo noi il tuo immobile',
      subtitle: 'E tu ci guadagni',
      description: 'Acquistiamo direttamente il tuo immobile prima che vada all\'asta, permettendoti di ottenere un prezzo migliore rispetto alla vendita forzata e di gestire la situazione con dignità.',
      forWho: 'Per chi preferisce vendere e ricavare liquidità piuttosto che subire l\'asta. Ideale se non hai interesse a restare nell\'immobile.',
      benefits: [
        'Prezzo superiore a quello dell\'asta giudiziaria',
        'Tempi certi e più rapidi',
        'Eviti lo stigma dell\'asta pubblica',
        'Possibilità di negoziare la data di rilascio',
        'Liquidità immediata dopo la chiusura',
      ],
      steps: [
        'Valutazione dell\'immobile e della procedura',
        'Proposta di acquisto preliminare',
        'Accordo con i creditori per il saldo',
        'Rogito notarile',
        'Pagamento e consegna',
        'Chiusura di tutte le pendenze',
      ],
      documents: [
        'Documentazione catastale completa',
        'Atto di provenienza dell\'immobile',
        'Situazione ipotecaria aggiornata',
        'Conteggi debiti in essere',
      ],
      risks: 'Il prezzo offerto dipende dalle condizioni del mercato e dello stato dell\'immobile. La proposta viene sempre presentata in modo trasparente.',
    },
    {
      id: 'rent-to-buy',
      icon: Key,
      title: 'Acquistiamo e te la ridiamo',
      subtitle: 'Rent to Buy – Rimani in casa',
      description: 'Acquistiamo l\'immobile per bloccare la procedura esecutiva, ma ti offriamo un percorso per riacquistarlo nel tempo attraverso un contratto di affitto con riscatto.',
      forWho: 'Per chi vuole assolutamente restare nella propria casa e ha la prospettiva di poterla riacquistare nel medio termine.',
      benefits: [
        'Continui ad abitare nella tua casa',
        'Stop immediato alla procedura esecutiva',
        'Canone mensile che si trasforma in acconto',
        'Prezzo di riacquisto bloccato',
        'Tempo per riorganizzare la tua situazione economica',
      ],
      steps: [
        'Valutazione della fattibilità economica',
        'Acquisto dell\'immobile da parte nostra',
        'Stipula contratto di rent to buy',
        'Pagamento canone mensile',
        'Esercizio dell\'opzione di riacquisto',
        'Rogito finale e ritorno della proprietà',
      ],
      documents: [
        'Documentazione immobiliare completa',
        'Documentazione reddituale per valutare sostenibilità',
        'Situazione debitoria totale',
        'Eventuali garanzie disponibili',
      ],
      risks: 'Il percorso richiede costanza nei pagamenti e disciplina. Se non eserciti il riscatto, perdi gli acconti versati. Valutiamo insieme la fattibilità reale prima di procedere.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Soluzioni Pignoramento: Saldo Stralcio, Rent to Buy | IoSalvoLaTuaCasa</title>
        <meta
          name="description"
          content="Tre soluzioni per il tuo pignoramento: saldo e stralcio, vendita diretta, rent to buy. Scopri quale fa per te. Consulenza gratuita a Palermo e Marsala."
        />
        <link rel="canonical" href="https://www.iosalvolatuacasa.it/cosa-ti-proponiamo" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cosa ti <span className="text-accent">proponiamo</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-4">
                Tre percorsi diversi per affrontare la tua situazione. 
                Ti aiutiamo a scegliere quello più adatto al tuo caso specifico.
              </p>
              <p className="text-primary-foreground/60">
                Ogni situazione è unica: durante la consulenza gratuita valutiamo insieme 
                quale soluzione ha più possibilità di successo per te.
              </p>
            </div>
          </div>
        </section>

        {/* Offers */}
        {offers.map((offer, index) => (
          <section
            key={offer.id}
            id={offer.id}
            className={`section-padding ${index % 2 === 0 ? 'bg-background' : 'bg-cream-dark'}`}
          >
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <offer.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{offer.title}</h2>
                    <p className="text-accent font-medium">{offer.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-muted-foreground mb-8">{offer.description}</p>

                {/* For Who */}
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-5 mb-8">
                  <p className="font-semibold text-foreground mb-1">Per chi è indicato</p>
                  <p className="text-muted-foreground">{offer.forWho}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Benefits */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Vantaggi principali</h3>
                    <ul className="space-y-3">
                      {offer.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Steps */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Come funziona</h3>
                    <ol className="space-y-3">
                      {offer.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Documents */}
                <div className="bg-card border border-border rounded-lg p-5 mb-6">
                  <h3 className="text-base font-semibold mb-3">Documenti utili per iniziare</h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {offer.documents.map((doc, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Risks / Notes */}
                <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{offer.risks}</p>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <Link to="/contatti" className="btn-accent">
                    Valuta questa soluzione — consulenza gratuita
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Final CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Non sai quale soluzione fa per te?
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                È normale. Ogni situazione è diversa e spesso la soluzione migliore 
                emerge solo dopo un'analisi approfondita. Contattaci per una 
                valutazione gratuita e senza impegno.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contatti" className="btn-accent">
                  Richiedi valutazione gratuita
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

export default CosaTiProponiamo;
