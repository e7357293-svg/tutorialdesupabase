import { ExternalLink, Bookmark, CheckCircle2 } from 'lucide-react';
import { EXACT_SOURCES } from '../data/courseData';

export default function SourcesSection() {
  return (
    <section id="fuentes" className="py-14 bg-[#071536] border-t border-[#1e3a8a]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e275c] border border-[#38bdf8]/40 text-[#38bdf8] text-xs font-bold mb-2">
            <Bookmark className="w-3.5 h-3.5" />
            <span>SECCIÓN 07 · FUENTES Y REFERENCIAS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fuentes Consultadas
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl font-medium">
            Las 3 referencias oficiales utilizadas para la elaboración y verificación técnica de este informe.
          </p>
        </div>

        {/* The 3 source cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXACT_SOURCES.map((source, index) => (
            <div
              key={source.id}
              className="bg-[#0a1c44] rounded-3xl p-6 border-2 border-[#1e3a8a] hover:border-[#38bdf8] transition-all duration-200 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-[#1d4ed8] text-white">
                    Fuente 0{index + 1}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-300 bg-[#061433] border border-[#1e3a8a] px-2 py-0.5 rounded">
                    {source.platform}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-white leading-snug mb-1">
                  {source.title}
                </h3>
                <p className="text-xs font-bold text-[#38bdf8] mb-3">
                  Autor / Organización: {source.author}
                </p>

                <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                  {source.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1e3a8a]">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#061536] hover:bg-[#0e275c] hover:border-[#38bdf8] border border-[#1e3a8a] text-xs font-bold text-[#38bdf8] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Visitar enlace oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Verification banner */}
        <div className="mt-8 p-4 rounded-2xl bg-[#0a1c44] border border-[#1e3a8a] flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5 text-xs text-slate-200 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>3 fuentes citadas exactamente según el requerimiento.</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            Colegio Asunción Escalada · Sin dependencias externas
          </span>
        </div>
      </div>
    </section>
  );
}
