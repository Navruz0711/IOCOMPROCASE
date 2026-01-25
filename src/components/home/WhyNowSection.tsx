import { Clock, AlertTriangle, TrendingDown } from 'lucide-react';

const WhyNowSection = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Il tempo è un fattore decisivo',
      description: 'Nelle procedure di pignoramento, ogni giorno conta. Prima ci contatti, più opzioni hai a disposizione.',
    },
    {
      icon: TrendingDown,
      title: 'I margini si riducono',
      description: 'Man mano che la procedura avanza, le possibilità di negoziazione con i creditori diminuiscono sensibilmente.',
    },
    {
      icon: AlertTriangle,
      title: 'L\'improvvisazione costa cara',
      description: 'Errori procedurali o decisioni affrettate possono precludere soluzioni che erano ancora possibili.',
    },
  ];

  return (
    <section className="section-padding-sm bg-cream-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perché agire <span className="text-accent">ora</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Capire la propria situazione il prima possibile non è allarmismo: 
              è l'unico modo per valutare concretamente tutte le opzioni disponibili.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card-premium text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-primary/5 border border-primary/10 rounded-lg text-center">
            <p className="text-foreground font-medium">
              "Meglio capire subito la situazione, anche se sembra complessa. 
              È il primo passo verso una soluzione concreta."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
