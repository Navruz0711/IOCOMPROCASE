import ContactForm from '../forms/ContactForm';

const LeadFormSection = () => {
  return (
    <section className="section-padding bg-background" id="contattaci">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="divider-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Richiedi una valutazione <span className="text-accent">gratuita</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Compila il modulo: un nostro consulente ti ricontatterà entro 12 ore 
              per capire insieme la tua situazione.
            </p>
          </div>

          <div className="card-premium">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
