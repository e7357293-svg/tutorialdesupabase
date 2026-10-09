import { ArrowUp, School } from 'lucide-react';
import { STUDENT_INFO } from '../data/courseData';

export default function PageFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030a1c] text-white py-12 border-t-2 border-[#1e3a8a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1e3a8a]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-black uppercase tracking-widest text-[#38bdf8] flex items-center gap-1.5">
                <School className="w-4 h-4 text-[#38bdf8]" />
                {STUDENT_INFO.institution}
              </span>
            </div>
            <h3 className="text-xl font-black text-white">
              «{STUDENT_INFO.title}»
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-1">
              Desarrollo de cuestionario y análisis técnico sobre Supabase y REST API (Fazt Code)
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* RGB indicators */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#071536] border border-[#1e3a8a] text-[11px] font-mono text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1d4ed8]" title="Azul RGB" />
              <span>Azul</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" title="Celeste RGB" />
              <span>Celeste</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" title="Gris Claro RGB" />
              <span>Gris</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#0a1c44] hover:bg-[#1d4ed8] text-white border border-[#1e3a8a] transition-colors cursor-pointer"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>
            <span>Institución: </span>
            <strong className="text-white font-bold">{STUDENT_INFO.institution}</strong>
          </div>
          <div>
            <span>Página web académica · HTML5 & CSS adaptable</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
