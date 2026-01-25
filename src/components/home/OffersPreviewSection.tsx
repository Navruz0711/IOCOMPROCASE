import { Link } from 'react-router-dom';
import { ArrowRight, HandCoins, Home, Key } from 'lucide-react';

const OffersPreviewSection = () => {
  const offers = [
    {
      id: 'saldo-stralcio',
      icon: HandCoins,
      title: 'Azzeramento debiti',
      subtitle: 'Saldo e stralcio / Trattativa',
      description: 'Negozieremo con i tuoi creditori per chiudere la posizione debitoria a condizioni sostenibili.',
      forWho: 'Per chi vuole liberarsi dei debiti e ripartire.',
      highlight: 'Possibilità di chiudere il debito pagando meno del dovuto',
    },
    {
      id: 'acquistiamo-noi',
      icon: Home,
      title: 'Acquistiamo noi',
      subtitle: 'E ci guadagni',
      description: 'Acquistiamo l\'immobile prima dell\'asta, permettendoti di ottenere un margine economico.',
      forWho: 'Per chi preferisce vendere e ricavare liquidità.',
      highlight: 'Eviti la svalutazione dell\'asta giudiziaria',
    },
    {
      id: 'rent-to-buy',
      icon: Key,
      title: 'Acquistiamo e te la ridiamo',
      subtitle: 'Rent to Buy',
      description: 'Compriamo l\'immobile e ti offriamo un percorso per riacquistarlo nel tempo.',
      forWho: 'Per chi vuole restare in casa e riacquistarla.',
      highlight: 'Continui ad abitare nella tua casa',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="divider-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Le soluzioni che <span className="text-accent">proponiamo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ogni situazione è diversa. Ti presentiamo le opzioni più adatte al tuo caso specifico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {offers.map(({ id, icon: Icon, title, subtitle, description, forWho, highlight }) => (
            <div
              key={id}
              className="relative bg-card rounded-lg border border-border overflow-hidden group hover:shadow-premium-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-primary p-6 text-primary-foreground">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-primary-foreground/70 text-sm">{subtitle}</p>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{description}</p>
                
                <div className="bg-accent/10 rounded-md p-3 mb-4">
                  <p className="text-sm font-medium text-foreground">{forWho}</p>
                </div>

                <p className="text-sm text-accent font-medium mb-6">
                  ✓ {highlight}
                </p>

                <Link
                  to={`/cosa-ti-proponiamo#${id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  Scopri i dettagli
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/cosa-ti-proponiamo" className="btn-outline">
            Scopri tutte le soluzioni
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OffersPreviewSection;
