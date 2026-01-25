import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: 'Quanto costa la consulenza iniziale?',
      answer: 'La prima consulenza è completamente gratuita e senza impegno. Serve a noi per capire la tua situazione e a te per valutare se possiamo aiutarti. Solo dopo questa fase iniziale, se decidi di procedere, ti presenteremo un preventivo trasparente.',
    },
    {
      question: 'Posso contattarvi anche se la procedura è già avviata?',
      answer: 'Assolutamente sì. Anzi, in molti casi interveniamo proprio quando la procedura è già in corso. Prima ci contatti, più margine di manovra avremo, ma anche a procedura avanzata ci sono spesso opzioni percorribili.',
    },
    {
      question: 'Posso restare in casa durante e dopo la procedura?',
      answer: 'Dipende dalla soluzione adottata. Con il Rent to Buy, ad esempio, puoi continuare ad abitare nell\'immobile mentre lavori per riacquistarlo. Ogni caso va valutato singolarmente.',
    },
    {
      question: 'Quanto tempo serve per risolvere la situazione?',
      answer: 'I tempi variano molto: da poche settimane a diversi mesi, a seconda della complessità del caso, del tipo di procedura e della disponibilità dei creditori a negoziare. Ti daremo stime realistiche dopo l\'analisi iniziale.',
    },
    {
      question: 'Che documenti servono per la prima valutazione?',
      answer: 'Per una valutazione accurata sono utili: atto di pignoramento (se già notificato), visura catastale, estratto conto del mutuo, documentazione dei debiti. Non preoccuparti se non hai tutto: possiamo iniziare anche con informazioni parziali.',
    },
    {
      question: 'Cosa cambia tra pre-asta e asta?',
      answer: 'La pre-asta è la fase precedente la vendita forzata, durante la quale ci sono più margini per negoziare e trovare soluzioni alternative. Una volta fissata l\'asta, i tempi si restringono ma le opzioni non scompaiono del tutto.',
    },
    {
      question: 'Trattate direttamente con banche e creditori?',
      answer: 'Sì, il nostro team si occupa di tutte le trattative con banche, finanziarie e altri creditori. Tu non dovrai confrontarti direttamente con loro, a meno che non lo desideri.',
    },
    {
      question: 'È un servizio legale?',
      answer: 'Offriamo consulenza specializzata in procedure esecutive immobiliari, supportata da avvocati esperti nel settore. Tuttavia, non sostituiamo la rappresentanza legale formale quando richiesta dalla procedura.',
    },
    {
      question: 'Gestite anche altre città oltre Palermo e Marsala?',
      answer: 'I nostri uffici sono a Palermo e Marsala, ma grazie alla rete Retecasa possiamo assistere clienti in tutta la Sicilia e, in molti casi, anche in altre regioni italiane.',
    },
    {
      question: 'Come trattate i miei dati personali?',
      answer: 'La tua privacy è una priorità assoluta. Tutti i dati sono trattati in conformità al GDPR e non vengono mai condivisi con terzi senza il tuo consenso esplicito. Puoi leggere la nostra Privacy Policy per tutti i dettagli.',
    },
  ];

  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="divider-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Domande <span className="text-accent">frequenti</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Le risposte alle domande più comuni. Se non trovi quello che cerchi, contattaci.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-premium"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
