import { useState } from 'react';
import { Layers, Database, ShieldCheck, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import { FUNDAMENTAL_CONCEPTS } from '../data/courseData';

export default function KeyConceptsSection() {
  const [selectedConcept, setSelectedConcept] = useState<string>(FUNDAMENTAL_CONCEPTS[0].id);

  const active = FUNDAMENTAL_CONCEPTS.find((c) => c.id === selectedConcept) || FUNDAMENTAL_CONCEPTS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'baas':
        return Layers;
      case 'postgresql':
        return Database;
      case 'postgrest':
        return Cpu;
      case 'api-keys-rls':
        return ShieldCheck;
      case 'crud-json':
        return Cpu;
      default:
        return Layers;
    }
  };

  return (
    <section id="conceptos" className="py-14 bg-[#05112c] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e275c] border border-[#38bdf8]/40 text-[#38bdf8] text-xs font-bold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>SECCIÓN 02 · CONCEPTOS FUNDAMENTALES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Los 5 Conceptos Clave del Material
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl font-medium">
            Resumen de las 5 ideas principales explicadas en el video sobre bases de datos y desarrollo web.
          </p>
        </div>

        {/* Concept selector tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {FUNDAMENTAL_CONCEPTS.map((concept, idx) => {
            const Icon = getIcon(concept.id);
            const isSelected = selectedConcept === concept.id;
            return (
              <button
                key={concept.id}
                onClick={() => setSelectedConcept(concept.id)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border-2 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#0e275c] border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.25)] -translate-y-0.5'
                    : 'bg-[#091b42]/80 border-[#1e3a8a] hover:border-[#38bdf8]/60 hover:bg-[#0c2254] text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md ${
                    isSelected ? 'bg-[#38bdf8] text-[#040d21]' : 'bg-[#061536] text-slate-400 border border-[#1e3a8a]'
                  }`}>
                    0{idx + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#38bdf8]' : 'text-slate-400'}`} />
                </div>
                <div>
                  <h3 className={`text-xs font-black line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {concept.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-semibold block mt-0.5">
                    {concept.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Concept Deep Dive Card */}
        <div className="bg-[#0a1c44] rounded-3xl p-6 sm:p-10 border-2 border-[#1e3a8a] shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#1e3a8a]">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#38bdf8] block">
                {active.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {active.name}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#061536] border border-[#1e3a8a] text-xs font-bold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
              Concepto Clave del Tutorial
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Definición */}
            <div className="bg-[#061433] p-5 rounded-2xl border border-[#1e3a8a]">
              <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-xs uppercase tracking-wider mb-2">
                <CheckCircle className="w-4 h-4" />
                <span>¿Qué es?</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {active.definition}
              </p>
            </div>

            {/* Cómo funciona */}
            <div className="bg-[#061433] p-5 rounded-2xl border border-[#1e3a8a]">
              <div className="flex items-center gap-2 text-[#0284c7] font-bold text-xs uppercase tracking-wider mb-2">
                <ArrowRight className="w-4 h-4 text-[#38bdf8]" />
                <span className="text-[#38bdf8]">¿Cómo funciona?</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {active.howItWorks}
              </p>
            </div>

            {/* Por qué es importante */}
            <div className="bg-[#061433] p-5 rounded-2xl border border-[#1e3a8a]">
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
                <span className="text-[#38bdf8]">¿Por qué sirve?</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {active.importance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
