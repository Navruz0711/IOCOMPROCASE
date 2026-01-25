import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Non sapevo da dove iniziare. Mi hanno guidato passo dopo passo, con chiarezza e senza mai farmi sentire giudicato.',
      author: 'Marco L.',
      location: 'Palermo',
      context: 'Situazione risolta con saldo e stralcio',
    },
    {
      quote: 'Pensavo di dover perdere tutto. Grazie al loro intervento sono riuscito a mantenere la casa e a chiudere i debiti.',
      author: 'Giuseppe R.',
      location: 'Marsala',
      context: 'Procedura pre-asta gestita',
    },
    {
      quote: 'La riservatezza è stata fondamentale per me. Nessuno della mia famiglia sapeva nulla, e loro hanno rispettato questo.',
      author: 'Anna M.',
      location: 'Trapani',
      context: 'Consulenza riservata completata',
    },
  ];

  const caseStudy = {
    situation: 'Debito bancario di €180.000, immobile con valore stimato €140.000, asta già programmata.',
    strategy: 'Negoziazione diretta con la banca per saldo e stralcio prima dell\'asta.',
    result: 'Debito chiuso a €95.000, procedura sospesa, proprietario ha potuto vendere privatamente.',
    note: 'Ogni caso è unico. I risultati dipendono dalle specifiche circostanze.',
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="divider-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chi ci ha <span className="text-accent">scelto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Storie vere di persone che hanno trovato una via d'uscita.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map(({ quote, author, location, context }) => (
            <div key={author} className="card-premium">
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-foreground mb-6 italic">"{quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{author}</p>
                <p className="text-sm text-muted-foreground">{location}</p>
                <p className="text-xs text-accent mt-1">{context}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Esempio di caso gestito
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <p className="text-accent text-sm font-medium mb-2">SITUAZIONE</p>
                <p className="text-primary-foreground/80 text-sm">{caseStudy.situation}</p>
              </div>
              <div>
                <p className="text-accent text-sm font-medium mb-2">STRATEGIA</p>
                <p className="text-primary-foreground/80 text-sm">{caseStudy.strategy}</p>
              </div>
              <div>
                <p className="text-accent text-sm font-medium mb-2">RISULTATO</p>
                <p className="text-primary-foreground/80 text-sm">{caseStudy.result}</p>
              </div>
            </div>

            <p className="text-center text-xs text-primary-foreground/50 border-t border-primary-foreground/10 pt-4">
              {caseStudy.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
