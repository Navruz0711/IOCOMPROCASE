import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/chi-siamo', label: 'Chi siamo' },
    { href: '/come-ti-aiutiamo', label: 'Come ti aiutiamo' },
    { href: '/cosa-ti-proponiamo', label: 'Cosa ti proponiamo' },
    { href: '/contatti', label: 'Contatti' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/39091454582?text=Buongiorno, vorrei informazioni sui vostri servizi.', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
              SALVA<span className="text-accent">laTua</span>CASA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleWhatsAppClick}
              className="btn-whatsapp text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
            <Link to="/contatti" className="btn-accent text-sm">
              Consulenza gratuita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                    isActive(link.href)
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
              <button onClick={handleWhatsAppClick} className="btn-whatsapp justify-center">
                <MessageCircle className="w-5 h-5" />
                Scrivici su WhatsApp
              </button>
              <Link
                to="/contatti"
                onClick={() => setIsMenuOpen(false)}
                className="btn-accent justify-center"
              >
                Consulenza gratuita
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
