import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'final_cta',
      });
    }
    window.open(
      'https://wa.me/39091454582?text=Buongiorno, vorrei richiedere una consulenza gratuita.',
      '_blank'
    );
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto a fare il primo passo?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-4 max-w-xl mx-auto">
            Una valutazione gratuita e senza impegno è l'inizio per capire le tue reali opzioni.
          </p>
          <p className="text-accent text-sm font-medium mb-8">
            Riservatezza totale. Risposta entro 12 ore.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contatti" className="btn-accent text-base px-8 py-4">
              Richiedi consulenza gratuita
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button onClick={handleWhatsAppClick} className="btn-whatsapp text-base px-8 py-4">
              <MessageCircle className="w-5 h-5" />
              Scrivici su WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
