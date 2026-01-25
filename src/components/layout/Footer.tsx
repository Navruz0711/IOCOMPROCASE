import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                SALVA<span className="text-accent">laTua</span>CASA
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Consulenza specializzata per chi affronta procedure di pignoramento immobiliare. 
              Un team dedicato per trovare la soluzione migliore.
            </p>
            <p className="mt-4 text-sm text-primary-foreground/50">
              Parte del gruppo Retecasa
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigazione</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/chi-siamo', label: 'Chi siamo' },
                { href: '/come-ti-aiutiamo', label: 'Come ti aiutiamo' },
                { href: '/cosa-ti-proponiamo', label: 'Cosa ti proponiamo' },
                { href: '/contatti', label: 'Contatti' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <div className="text-sm text-primary-foreground/70">
                  <p className="font-medium text-primary-foreground">Palermo</p>
                  <p>Via Carbone 39, Partanna Mondello</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <div className="text-sm text-primary-foreground/70">
                  <p className="font-medium text-primary-foreground">Marsala</p>
                  <p>Via Carlo Cattaneo 42</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:091454582" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    091 454582
                  </a>
                  <span className="text-primary-foreground/50 mx-2">|</span>
                  <a href="tel:0923083108" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    0923 083108
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  Lun-Ven 9:00-13:00 / 16:00-19:00
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Informazioni legali</h4>
            <ul className="space-y-2">
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/cookie', label: 'Cookie Policy' },
                { href: '/disclaimer', label: 'Disclaimer' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} IoSalvoLaTuaCasa. Tutti i diritti riservati.
            </p>
            <p className="text-xs text-primary-foreground/40 max-w-md text-center md:text-right">
              Le informazioni presenti su questo sito hanno scopo puramente informativo e non 
              costituiscono consulenza legale o finanziaria.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
