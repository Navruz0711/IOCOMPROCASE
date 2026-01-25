import { Link } from 'react-router-dom';
import { Target, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';

const PillarsSection = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Specializzazione',
      description: 'Ci occupiamo esclusivamente di procedure esecutive immobiliari.',
      bullets: [
        'Conoscenza approfondita delle dinamiche di pignoramento e asta',
        'Esperienza consolidata in saldo e stralcio',
        'Approccio integrato: legale + immobiliare',
      ],
      link: '/come-ti-aiutiamo',
    },
    {
      icon: UserCheck,
      title: 'Unico interlocutore',
      description: 'Un consulente dedicato ti segue dall\'inizio alla fine.',
      bullets: [
        'Niente rimbalzi tra uffici diversi',
        'Comunicazione chiara e costante',
        'Sempre informato su ogni sviluppo',
      ],
      link: '/come-ti-aiutiamo',
    },
    {
      icon: ShieldCheck,
      title: 'Eviti errori irreversibili',
      description: 'Ti guidiamo per non compromettere le tue opzioni.',
      bullets: [
        'Analisi preliminare completa della situazione',
        'Valutazione di tutte le alternative possibili',
        'Nessuna decisione affrettata',
      ],
      link: '/come-ti-aiutiamo',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="divider-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perché scegliere <span className="text-accent">noi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tre pilastri che fanno la differenza quando la situazione richiede 
            competenza, velocità e discrezione.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map(({ icon: Icon, title, description, bullets, link }) => (
            <div key={title} className="card-premium group hover:shadow-premium-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-muted-foreground mb-4">{description}</p>
              
              <ul className="space-y-2 mb-6">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <Link
                to={link}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
              >
                Scopri come
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
