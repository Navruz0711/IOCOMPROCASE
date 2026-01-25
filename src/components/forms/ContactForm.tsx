import { useState, FormEvent } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

interface FormData {
  nome: string;
  telefono: string;
  email: string;
  comune: string;
  indirizzo: string;
  privacy: boolean;
  marketing: boolean;
  honeypot: string;
}

interface ContactFormProps {
  variant?: 'default' | 'dark';
}

const ContactForm = ({ variant = 'default' }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefono: '',
    email: '',
    comune: '',
    indirizzo: '',
    privacy: false,
    marketing: false,
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.nome.trim() || formData.nome.length < 2) {
      newErrors.nome = 'Inserisci il tuo nome completo';
    }
    if (!formData.telefono.trim() || !/^[0-9+\s-]{8,15}$/.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Inserisci un numero di telefono valido';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un indirizzo email valido';
    }
    if (!formData.comune.trim()) {
      newErrors.comune = 'Inserisci il comune dell\'immobile';
    }
    if (!formData.privacy) {
      newErrors.privacy = 'È necessario accettare la privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    // In production, this would send to a backend
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Analytics tracking placeholder
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'lead',
        event_label: 'contact_form',
      });
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const isDark = variant === 'dark';

  if (isSubmitted) {
    return (
      <div className={`text-center py-12 ${isDark ? 'text-primary-foreground' : ''}`}>
        <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-accent' : 'bg-accent/20'} flex items-center justify-center mx-auto mb-6`}>
          <CheckCircle className={`w-8 h-8 ${isDark ? 'text-accent-foreground' : 'text-accent'}`} />
        </div>
        <h3 className="text-2xl font-semibold mb-3">Grazie per averci contattato</h3>
        <p className={`${isDark ? 'text-primary-foreground/70' : 'text-muted-foreground'} max-w-md mx-auto`}>
          Ti ricontatteremo entro 12 ore per fissare la tua consulenza gratuita. 
          Riservatezza totale garantita.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot - hidden from users */}
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => handleChange('honeypot', e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className={`form-label ${isDark ? 'text-primary-foreground' : ''}`}>
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="nome"
            value={formData.nome}
            onChange={(e) => handleChange('nome', e.target.value)}
            className={`form-input ${errors.nome ? 'border-destructive' : ''} ${isDark ? 'bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50' : ''}`}
            placeholder="Mario Rossi"
            maxLength={100}
          />
          {errors.nome && <p className="text-sm text-destructive mt-1">{errors.nome}</p>}
        </div>

        <div>
          <label htmlFor="telefono" className={`form-label ${isDark ? 'text-primary-foreground' : ''}`}>
            Telefono *
          </label>
          <input
            type="tel"
            id="telefono"
            value={formData.telefono}
            onChange={(e) => handleChange('telefono', e.target.value)}
            className={`form-input ${errors.telefono ? 'border-destructive' : ''} ${isDark ? 'bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50' : ''}`}
            placeholder="+39 333 1234567"
            maxLength={20}
          />
          {errors.telefono && <p className="text-sm text-destructive mt-1">{errors.telefono}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={`form-label ${isDark ? 'text-primary-foreground' : ''}`}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`form-input ${errors.email ? 'border-destructive' : ''} ${isDark ? 'bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50' : ''}`}
          placeholder="mario.rossi@email.com"
          maxLength={255}
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="comune" className={`form-label ${isDark ? 'text-primary-foreground' : ''}`}>
            Comune dell'immobile *
          </label>
          <input
            type="text"
            id="comune"
            value={formData.comune}
            onChange={(e) => handleChange('comune', e.target.value)}
            className={`form-input ${errors.comune ? 'border-destructive' : ''} ${isDark ? 'bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50' : ''}`}
            placeholder="es. Palermo"
            maxLength={100}
          />
          {errors.comune && <p className="text-sm text-destructive mt-1">{errors.comune}</p>}
        </div>

        <div>
          <label htmlFor="indirizzo" className={`form-label ${isDark ? 'text-primary-foreground' : ''}`}>
            Indirizzo immobile (opzionale)
          </label>
          <input
            type="text"
            id="indirizzo"
            value={formData.indirizzo}
            onChange={(e) => handleChange('indirizzo', e.target.value)}
            className={`form-input ${isDark ? 'bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50' : ''}`}
            placeholder="Via Roma 123"
            maxLength={200}
          />
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <label className={`flex items-start gap-3 cursor-pointer ${isDark ? 'text-primary-foreground' : ''}`}>
          <input
            type="checkbox"
            checked={formData.privacy}
            onChange={(e) => handleChange('privacy', e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-input accent-accent"
          />
          <span className={`text-sm ${isDark ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
            Ho letto e accetto la{' '}
            <a href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </a>{' '}
            e autorizzo il trattamento dei miei dati personali. *
          </span>
        </label>
        {errors.privacy && <p className="text-sm text-destructive">{errors.privacy}</p>}

        <label className={`flex items-start gap-3 cursor-pointer ${isDark ? 'text-primary-foreground' : ''}`}>
          <input
            type="checkbox"
            checked={formData.marketing}
            onChange={(e) => handleChange('marketing', e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-input accent-accent"
          />
          <span className={`text-sm ${isDark ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
            Acconsento a ricevere comunicazioni informative (opzionale)
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-accent text-base py-4 mt-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Invio in corso...
          </>
        ) : (
          'VOGLIO ESSERE CONTATTATO'
        )}
      </button>

      <p className={`text-center text-xs ${isDark ? 'text-primary-foreground/50' : 'text-muted-foreground'}`}>
        Nessun impegno. Dati trattati con riservatezza (GDPR).
      </p>
    </form>
  );
};

export default ContactForm;
