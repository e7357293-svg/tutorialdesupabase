import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Layers, HelpCircle, Code2, Network, HeartHandshake, ExternalLink, School } from 'lucide-react';

interface HeaderNavProps {
  activeSection: string;
}

export default function HeaderNav({ activeSection }: HeaderNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#encabezado', label: 'Inicio', icon: School },
    { href: '#introduccion', label: 'Introducción', icon: BookOpen },
    { href: '#conceptos', label: 'Conceptos', icon: Layers },
    { href: '#cuestionario', label: 'Cuestionario (12)', icon: HelpCircle },
    { href: '#practica', label: 'Práctica REST', icon: Code2 },
    { href: '#recursos-visuales', label: 'Diagramas', icon: Network },
    { href: '#conclusion', label: 'Conclusión', icon: HeartHandshake },
    { href: '#fuentes', label: 'Fuentes (3)', icon: ExternalLink },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-[#06122c]/95 backdrop-blur-md shadow-2xl border-b border-[#1e3a8a]/70'
            : 'py-3.5 bg-[#071330]/80 backdrop-blur-sm border-b border-[#1e3a8a]/40'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / School Badge */}
          <a
            href="#encabezado"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1d4ed8] to-[#38bdf8] flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:scale-105 transition-transform border border-[#38bdf8]/40">
              <School className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#38bdf8] block">
                Colegio Asunción Escalada
              </span>
              <span className="text-sm font-extrabold text-white group-hover:text-[#38bdf8] transition-colors">
                «Lo que aprendí del video»
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0b1d44]/90 p-1.5 rounded-full border border-[#1e3a8a] shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] text-white shadow-md shadow-[#0284c7]/40 border border-[#38bdf8]/30'
                      : 'text-slate-300 hover:text-white hover:bg-[#152e66]'
                  }`}
                >
                  <link.icon className="w-3.5 h-3.5" />
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* RGB Palette pill & mobile menu */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-300 bg-[#091b40] px-3 py-1.5 rounded-full border border-[#1e3a8a]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1d4ed8] shadow-[0_0_6px_#1d4ed8]" title="Azul RGB" />
              <span>Azul</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]" title="Celeste RGB" />
              <span>Celeste</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" title="Gris Claro RGB" />
              <span>Gris</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#0e2558] text-white hover:bg-[#1a3d8b] border border-[#1e3a8a] transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-3 bg-[#0a1b3f] rounded-2xl shadow-2xl border border-[#1e3a8a] grid grid-cols-2 gap-2 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-200 hover:bg-[#1e3a8a] hover:text-[#38bdf8] transition-colors"
              >
                <link.icon className="w-4 h-4 text-[#38bdf8]" />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
