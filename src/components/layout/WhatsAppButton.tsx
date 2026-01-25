import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    // Analytics tracking hook placeholder
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'floating_button',
      });
    }
    
    window.open(
      'https://wa.me/39091454582?text=Buongiorno, vorrei informazioni sui vostri servizi per situazioni di pignoramento.',
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
