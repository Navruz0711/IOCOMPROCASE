import { Shield, Lock, UserCheck, Building2 } from 'lucide-react';

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Building2,
      title: 'Parte del gruppo Retecasa',
      description: 'Una rete consolidata con oltre 200 uffici in Italia e all\'estero. Competenza immobiliare e radicamento territoriale.',
    },
    {
      icon: Lock,
      title: 'Riservatezza totale',
      description: 'La tua situazione rimane strettamente confidenziale. Trattiamo ogni caso con la massima discrezione.',
    },
    {
      icon: UserCheck,
      title: 'Consulente dedicato',
      description: 'Un unico referente che ti segue dall\'inizio alla fine, sempre raggiungibile e aggiornato sul tuo caso.',
    },
    {
      icon: Shield,
      title: 'Team legale specializzato',
      description: 'Avvocati esperti in procedure esecutive immobiliari lavorano in sinergia con i nostri consulenti.',
    },
  ];

  return (
    <section className="section-padding-sm bg-cream-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Affidabilità e <span className="text-accent">competenza</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Non siamo un'agenzia qualunque. Siamo specialisti con una struttura solida alle spalle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
