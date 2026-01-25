import { MessageSquare, Search, Lightbulb, FileText, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Contatto',
      description: 'Ci contatti tramite form, WhatsApp o telefono. Riservatezza garantita.',
    },
    {
      number: '02',
      icon: Search,
      title: 'Analisi preliminare',
      description: 'Esaminiamo la tua situazione: debiti, procedura in corso, tempi disponibili.',
    },
    {
      number: '03',
      icon: Lightbulb,
      title: 'Strategia',
      description: 'Ti presentiamo le opzioni realistiche per il tuo caso specifico.',
    },
    {
      number: '04',
      icon: FileText,
      title: 'Gestione pratica',
      description: 'Coordiniamo documenti, creditori e iter procedurale al posto tuo.',
    },
    {
      number: '05',
      icon: CheckCircle,
      title: 'Soluzione',
      description: 'Chiusura dei debiti e, dove possibile, un percorso per la tua abitazione.',
    },
  ];

  const requiredDocs = [
    'Atto di pignoramento (se già notificato)',
    'Visura catastale dell\'immobile',
    'Estratto conto mutuo',
    'Documentazione debiti in essere',
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Come funziona
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Un percorso chiaro in 5 step, dalla prima telefonata alla soluzione finale.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary-foreground/20 hidden md:block" />

            <div className="space-y-8">
              {steps.map(({ number, icon: Icon, title, description }, index) => (
                <div key={number} className="relative flex gap-6 md:gap-8">
                  {/* Step indicator */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                      <Icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent font-bold text-sm">{number}</span>
                      <h3 className="text-xl font-semibold">{title}</h3>
                    </div>
                    <p className="text-primary-foreground/70">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What you need */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-4">
              Cosa preparare per la prima chiamata
            </h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Non è obbligatorio, ma se hai questi documenti la valutazione sarà più precisa:
            </p>
            <ul className="space-y-2">
              {requiredDocs.map((doc, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-primary-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
