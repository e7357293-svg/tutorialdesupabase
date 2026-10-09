import { useState } from 'react';
import { Play, Sparkles, CheckCircle2, Compass, ExternalLink } from 'lucide-react';
import { INTRODUCTION_TEXT } from '../data/courseData';

export default function IntroductionSection() {
  const [showVideoEmbed, setShowVideoEmbed] = useState(false);

  return (
    <section id="introduccion" className="py-14 bg-[#071536] border-y border-[#1e3a8a]/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e275c] border border-[#38bdf8]/40 text-[#38bdf8] text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>SECCIÓN 01 · OBSERVACIÓN Y SÍNTESIS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Introducción al Contenido del Video
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl font-medium">
            Resumen de lo que enseña Fazt Code a lo largo de su tutorial de Supabase.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Student summary */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-[#0a1c44] p-6 sm:p-8 rounded-3xl border-2 border-[#1e3a8a] shadow-xl space-y-5">
              <div className="flex items-center gap-2.5 text-[#38bdf8]">
                <h3 className="font-extrabold text-lg sm:text-xl text-white">
                  ¿De qué trata este tutorial?
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {INTRODUCTION_TEXT.briefSummary}
              </p>

              <div className="p-4 rounded-2xl bg-[#061433] border border-[#1e3a8a]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                  Lo que más me llamó la atención
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {INTRODUCTION_TEXT.whatStoodOut}
                </p>
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Ejes fundamentales observados en el video:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <li className="flex items-start gap-2.5 text-xs font-semibold text-slate-200 bg-[#061536] p-3 rounded-xl border border-[#1e3a8a]">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>PostgreSQL administrado visualmente</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs font-semibold text-slate-200 bg-[#061536] p-3 rounded-xl border border-[#1e3a8a]">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                    <span>REST API autogenerada con PostgREST</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs font-semibold text-slate-200 bg-[#061536] p-3 rounded-xl border border-[#1e3a8a]">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>Seguridad de doble llave (anon / service)</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs font-semibold text-slate-200 bg-[#061536] p-3 rounded-xl border border-[#1e3a8a]">
                    <CheckCircle2 className="w-4 h-4 text-[#1d4ed8] shrink-0 mt-0.5" />
                    <span>Consultas HTTP con cURL y JavaScript</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Video card & player */}
          <div className="lg:col-span-5">
            <div className="bg-[#0a1c44] rounded-3xl p-5 border-2 border-[#1e3a8a] shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                  Material de Estudio
                </span>
                <span className="text-[11px] font-semibold bg-[#0e275c] text-sky-200 px-2.5 py-0.5 rounded-full border border-[#1e3a8a]">
                  YouTube · Fazt Code
                </span>
              </div>

              {showVideoEmbed ? (
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner border border-[#1e3a8a]">
                  <iframe
                    src="https://www.youtube.com/embed/pi33WDrgfpI?autoplay=1"
                    title="Supabase Tutorial Fazt Code"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              ) : (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden group shadow-inner border border-[#1e3a8a] bg-slate-950">
                  <img
                    src="https://i.ytimg.com/vi/pi33WDrgfpI/hqdefault.jpg"
                    alt="Miniatura del video de Fazt Code sobre Supabase"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040d21] via-[#040d21]/40 to-transparent flex flex-col justify-end p-4">
                    <button
                      onClick={() => setShowVideoEmbed(true)}
                      className="inline-flex items-center gap-2 self-center px-4 py-2.5 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] hover:opacity-90 text-white font-bold text-xs shadow-[0_0_20px_rgba(2,132,199,0.5)] transition-transform hover:scale-105 cursor-pointer mb-2 border border-[#38bdf8]/40"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      Reproducir video aquí
                    </button>
                    <p className="text-white text-xs font-bold line-clamp-2 text-center drop-shadow-md">
                      Supabase, Tutorial Práctico y Overview (REST API)
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-4 space-y-2 text-xs text-slate-300 font-medium">
                <div className="flex justify-between py-1.5 border-b border-[#1e3a8a]">
                  <span className="text-slate-400">Canal:</span>
                  <strong className="text-white">Fazt Code</strong>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1e3a8a]">
                  <span className="text-slate-400">Tema:</span>
                  <strong className="text-white">Supabase, PostgreSQL & REST API</strong>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Enlace directo:</span>
                  <a
                    href="https://www.youtube.com/watch?v=pi33WDrgfpI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38bdf8] hover:underline font-bold flex items-center gap-1"
                  >
                    Abrir en YouTube <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
