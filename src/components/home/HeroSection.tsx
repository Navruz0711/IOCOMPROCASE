import { Link } from 'react-router-dom';
import { MessageCircle, Shield, Users, Building2 } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'hero_section',
      });
    }
    window.open(
      'https://wa.me/39091454582?text=Buongiorno, vorrei informazioni sui vostri servizi.',
      '_blank'
    );
  };

  const trustBadges = [
    { icon: Shield, label: 'Avvocati specializzati' },
    { icon: Users, label: 'Consulente dedicato' },
    { icon: Building2, label: 'Rete Retecasa' },
  ];

  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-charcoal-light opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-16 md:py-24">
          <div className="max-w-3xl">
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              Ti stanno per pignorare{' '}
              <span className="text-accent">la casa?</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-2xl animate-fade-in-up delay-100">
              Parla con un team specializzato: ti aiutiamo a capire cosa fare 
              e quali opzioni reali hai per proteggere la tua situazione.
            </p>

            {/* Trust line */}
            <p className="text-sm text-accent font-medium mb-8 animate-fade-in-up delay-200">
              Ti ricontattiamo entro 12 ore. Riservatezza totale.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-300">
              <Link to="/contatti" className="btn-accent text-base px-8 py-4">
                Richiedi consulenza gratuita
              </Link>
              <button onClick={handleWhatsAppClick} className="btn-whatsapp text-base px-8 py-4">
                <MessageCircle className="w-5 h-5" />
                Scrivici su WhatsApp
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-sm"
                >
                  <Icon className="w-4 h-4 text-accent" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-accent/3 rounded-full blur-2xl" />
    </section>
  );
};

export default HeroSection;
