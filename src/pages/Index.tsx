import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import LeadFormSection from '@/components/home/LeadFormSection';
import WhyNowSection from '@/components/home/WhyNowSection';
import PillarsSection from '@/components/home/PillarsSection';
import ProcessSection from '@/components/home/ProcessSection';
import OffersPreviewSection from '@/components/home/OffersPreviewSection';
import TrustSection from '@/components/home/TrustSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import FinalCTASection from '@/components/home/FinalCTASection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Salvare Casa dal Pignoramento | Consulenza Gratuita | IoSalvoLaTuaCasa</title>
        <meta
          name="description"
          content="Ti stanno per pignorare la casa? Consulenza specializzata gratuita per procedure esecutive, saldo e stralcio, pre-asta. Palermo e Marsala. Risposta entro 12 ore."
        />
        <meta
          name="keywords"
          content="pignoramento casa, salvare casa dall'asta, pre-asta, saldo e stralcio, procedure esecutive immobiliari, rent to buy, Palermo, Marsala"
        />
        <link rel="canonical" href="https://www.iosalvolatuacasa.it/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Salvare Casa dal Pignoramento | Consulenza Gratuita" />
        <meta property="og:description" content="Ti stanno per pignorare la casa? Consulenza specializzata gratuita. Rispondiamo entro 12 ore." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iosalvolatuacasa.it/" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "IoSalvoLaTuaCasa",
            "url": "https://www.iosalvolatuacasa.it",
            "description": "Consulenza specializzata per procedure di pignoramento immobiliare"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "IoSalvoLaTuaCasa",
            "url": "https://www.iosalvolatuacasa.it",
            "logo": "https://www.iosalvolatuacasa.it/logo.png",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+39-091-454582",
                "contactType": "customer service",
                "areaServed": "IT",
                "availableLanguage": "Italian"
              }
            ],
            "sameAs": []
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "IoSalvoLaTuaCasa - Palermo",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Via Carbone 39",
              "addressLocality": "Palermo",
              "addressRegion": "PA",
              "postalCode": "90151",
              "addressCountry": "IT"
            },
            "telephone": "+39-091-454582",
            "openingHours": ["Mo-Fr 09:00-13:00", "Mo-Fr 16:00-19:00"]
          })}
        </script>
      </Helmet>

      <Layout>
        <HeroSection />
        <LeadFormSection />
        <WhyNowSection />
        <PillarsSection />
        <ProcessSection />
        <OffersPreviewSection />
        <TrustSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </Layout>
    </>
  );
};

export default Index;
