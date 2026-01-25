import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/forms/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contatti = () => {
  const offices = [
    {
      city: 'Palermo',
      address: 'Via Carbone 39, zona Partanna Mondello',
      phone: '091 454582',
      phoneLink: 'tel:091454582',
    },
    {
      city: 'Marsala',
      address: 'Via Carlo Cattaneo 42',
      phone: '0923 083108',
      phoneLink: 'tel:0923083108',
    },
  ];

  const handlePhoneClick = (phoneLink: string, city: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click', {
        event_category: 'engagement',
        event_label: city,
      });
    }
    window.location.href = phoneLink;
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'contact_page',
      });
    }
    window.open(
      'https://wa.me/39091454582?text=Buongiorno, vorrei richiedere una consulenza gratuita.',
      '_blank'
    );
  };

  return (
    <>
      <Helmet>
        <title>Contatti | Consulenza Pignoramento Palermo Marsala | IoSalvoLaTuaCasa</title>
        <meta
          name="description"
          content="Contattaci per una consulenza gratuita sul pignoramento. Uffici a Palermo e Marsala. Rispondiamo entro 12 ore. Riservatezza garantita."
        />
        <link rel="canonical" href="https://www.iosalvolatuacasa.it/contatti" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "IoSalvoLaTuaCasa",
            "image": "",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Via Carbone 39",
                "addressLocality": "Palermo",
                "addressRegion": "PA",
                "postalCode": "90151",
                "addressCountry": "IT"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Via Carlo Cattaneo 42",
                "addressLocality": "Marsala",
                "addressRegion": "TP",
                "postalCode": "91025",
                "addressCountry": "IT"
              }
            ],
            "telephone": ["+39-091-454582", "+39-0923-083108"],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "13:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "16:00",
                "closes": "19:00"
              }
            ]
          })}
        </script>
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground section-padding-sm">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-accent">Contattaci</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-2">
                Il primo passo verso una soluzione inizia da qui.
              </p>
              <p className="text-accent font-medium">
                Rispondiamo entro 12 ore. Riservatezza totale garantita.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Richiedi una consulenza gratuita
                </h2>
                <p className="text-muted-foreground mb-8">
                  Compila il modulo con i tuoi dati. Un nostro consulente ti contatterà 
                  entro 12 ore per fissare un appuntamento, anche telefonico.
                </p>
                <div className="card-premium">
                  <ContactForm />
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">I nostri uffici</h2>
                
                <div className="space-y-6 mb-8">
                  {offices.map((office) => (
                    <div key={office.city} className="card-premium">
                      <h3 className="text-lg font-semibold mb-4">{office.city}</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{office.address}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                          <button
                            onClick={() => handlePhoneClick(office.phoneLink, office.city)}
                            className="text-foreground font-medium hover:text-accent transition-colors"
                          >
                            {office.phone}
                          </button>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Hours */}
                <div className="card-premium mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-accent" />
                    <h3 className="text-lg font-semibold">Orari di apertura</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Lunedì - Venerdì: 9:00 - 13:00 / 16:00 - 19:00
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="bg-primary text-primary-foreground rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Preferisci WhatsApp?</h3>
                  <p className="text-primary-foreground/70 text-sm mb-4">
                    Scrivici direttamente: rispondiamo rapidamente anche su WhatsApp.
                  </p>
                  <button onClick={handleWhatsAppClick} className="btn-whatsapp w-full justify-center">
                    <MessageCircle className="w-5 h-5" />
                    Scrivici su WhatsApp
                  </button>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 bg-muted rounded-lg h-64 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">
                    Mappa interattiva (da implementare con Google Maps)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contatti;
