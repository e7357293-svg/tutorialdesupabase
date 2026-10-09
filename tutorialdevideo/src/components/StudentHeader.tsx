import { School, Video, Sparkles, Database, Globe2 } from 'lucide-react';
import { STUDENT_INFO } from '../data/courseData';

export default function StudentHeader() {
  return (
    <section id="encabezado" className="pt-28 pb-14 relative overflow-hidden bg-gradient-to-b from-[#040d21] via-[#071536] to-[#091b42]">
      {/* Background ambient lighting in RGB Azul & Celeste */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-gradient-to-tr from-[#1d4ed8]/25 via-[#38bdf8]/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1d4ed8]/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tag: Institution only */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0e275c]/90 border border-[#38bdf8]/40 text-[#38bdf8] text-xs font-black tracking-wider shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <School className="w-4 h-4 text-[#38bdf8]" />
            <span>{STUDENT_INFO.institution.toUpperCase()}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a1c44] border border-[#1e3a8a] text-[11px] font-mono text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>OBSERVACIÓN Y CUESTIONARIO · REST API & POSTGRESQL</span>
          </div>
        </div>

        {/* Hero Card Container */}
        <div className="bg-[#0a1c44]/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border-2 border-[#1e3a8a] shadow-[0_20px_50px_rgba(2,132,199,0.2)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#38bdf8]/15 via-[#1d4ed8]/15 to-transparent pointer-events-none rounded-bl-full" />

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#38bdf8] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
              <span>Informe de Aprendizaje</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-md">
              «{STUDENT_INFO.title}»
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl">
              Conceptos fundamentales, análisis y cuestionario resuelto de 12 preguntas sobre el tutorial{' '}
              <strong className="text-white font-extrabold">«Supabase, Tutorial Práctico y Overview (REST API)»</strong> de{' '}
              <span className="text-[#38bdf8] font-bold">Fazt Code</span>.
            </p>
          </div>

          {/* Quick Info Grid - Institution Card */}
          <div className="mt-8 pt-8 border-t border-[#1e3a8a] grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#061536]/90 p-4 rounded-2xl border border-[#1e3a8a] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#1d4ed8] text-white flex items-center justify-center shrink-0 shadow-[0_0_12px_#1d4ed8]">
                <School className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Institución
                </span>
                <p className="text-sm font-black text-white">{STUDENT_INFO.institution}</p>
              </div>
            </div>

            <div className="bg-[#061536]/90 p-4 rounded-2xl border border-[#1e3a8a] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#0284c7] text-white flex items-center justify-center shrink-0 shadow-[0_0_12px_#0284c7]">
                <Database className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Enfoque Técnico
                </span>
                <p className="text-sm font-black text-white">PostgreSQL & BaaS Cloud</p>
              </div>
            </div>

            <div className="bg-[#061536]/90 p-4 rounded-2xl border border-[#1e3a8a] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#0e275c] text-[#38bdf8] flex items-center justify-center shrink-0 border border-[#38bdf8]/40">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Consumo de Datos
                </span>
                <p className="text-sm font-black text-white">REST API Autogenerada</p>
              </div>
            </div>
          </div>

          {/* YouTube Video Quick Bar */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#0d265e] via-[#091f4d] to-[#061536] border border-[#1e3a8a] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/90 text-white flex items-center justify-center shrink-0 shadow-md">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-300 font-semibold">Video Analizado:</p>
                <p className="text-sm font-bold text-white">
                  Supabase, Tutorial Práctico y Overview (REST API) — Fazt Code
                </p>
              </div>
            </div>

            <a
              href={STUDENT_INFO.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] hover:opacity-95 text-white font-bold text-xs shadow-md transition-all border border-[#38bdf8]/40 cursor-pointer"
            >
              <Video className="w-4 h-4" />
              Ver video en YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
