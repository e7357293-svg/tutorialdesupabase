import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Film, CheckSquare, MessageSquare } from 'lucide-react';
import { QUESTIONNAIRE_QUESTIONS, QuestionItem } from '../data/courseData';

export default function QuestionnaireSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [expandedIds, setExpandedIds] = useState<number[]>([1, 2, 5, 6]);

  const categories = ['Todas', ...Array.from(new Set(QUESTIONNAIRE_QUESTIONS.map(q => q.category)))];

  const filteredQuestions = QUESTIONNAIRE_QUESTIONS.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fullAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.materialExample.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedIds(QUESTIONNAIRE_QUESTIONS.map((q) => q.id));
  };

  const collapseAll = () => {
    setExpandedIds([]);
  };

  return (
    <section id="cuestionario" className="py-14 bg-[#071536] border-y border-[#1e3a8a]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e275c] border border-[#38bdf8]/40 text-[#38bdf8] text-xs font-bold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>SECCIÓN 03 · CUESTIONARIO RESUELTO (12/12)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Respuestas a las 12 Preguntas del Video
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl font-medium">
              Desarrollo completo de cada consigna con ejemplos directos del tutorial de Fazt Code.
            </p>
          </div>

          {/* Quick expand/collapse controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="px-3.5 py-1.5 rounded-xl bg-[#0a1c44] border border-[#1e3a8a] text-xs font-bold text-[#38bdf8] hover:bg-[#0e275c] transition-colors cursor-pointer"
            >
              Expandir todas
            </button>
            <button
              onClick={collapseAll}
              className="px-3.5 py-1.5 rounded-xl bg-[#0a1c44] border border-[#1e3a8a] text-xs font-bold text-slate-400 hover:bg-[#0e275c] transition-colors cursor-pointer"
            >
              Colapsar todas
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#0a1c44] p-4 rounded-2xl border border-[#1e3a8a] shadow-lg mb-6 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por pregunta o concepto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs font-semibold bg-[#061536] border border-[#1e3a8a] rounded-xl text-white placeholder-slate-400 focus:outline-hidden focus:border-[#38bdf8]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] text-white shadow-md border border-[#38bdf8]/40'
                    : 'bg-[#061536] text-slate-300 hover:bg-[#0d265e] border border-[#1e3a8a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Questions Accordion List */}
        <div className="space-y-4">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 bg-[#0a1c44] rounded-2xl border border-[#1e3a8a]">
              <p className="text-slate-400 font-bold text-sm">No se encontraron preguntas para tu búsqueda.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('Todas'); }}
                className="mt-2 text-xs text-[#38bdf8] font-bold underline cursor-pointer"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            filteredQuestions.map((item: QuestionItem) => {
              const isExpanded = expandedIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className={`bg-[#0a1c44] rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.15)]'
                      : 'border-[#1e3a8a] hover:border-[#38bdf8]/50'
                  }`}
                >
                  {/* Question Header Button */}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full text-left p-5 flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1d4ed8] to-[#38bdf8] text-white font-mono font-black text-xs flex items-center justify-center shrink-0 shadow-[0_0_10px_#1d4ed8] mt-0.5">
                        {item.id < 10 ? `0${item.id}` : item.id}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#38bdf8] bg-[#0e275c] border border-[#38bdf8]/30 px-2 py-0.5 rounded-md">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug">
                          {item.question}
                        </h3>
                        {!isExpanded && (
                          <p className="text-xs text-slate-400 font-medium line-clamp-1 mt-1.5">
                            {item.summaryAnswer}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="p-1.5 rounded-lg bg-[#061536] text-[#38bdf8] border border-[#1e3a8a] shrink-0 mt-1">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="px-5 pb-6 pt-2 border-t border-[#1e3a8a] space-y-4">
                      {/* Full Answer */}
                      <div className="p-4 rounded-xl bg-[#061433] border border-[#1e3a8a]">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#38bdf8] uppercase tracking-wider mb-2">
                          <MessageSquare className="w-3.5 h-3.5 text-[#38bdf8]" />
                          <span>Respuesta:</span>
                        </div>
                        <p className="text-sm text-slate-200 leading-relaxed font-normal">
                          {item.fullAnswer}
                        </p>
                      </div>

                      {/* Material Example */}
                      <div className="p-4 rounded-xl bg-[#071942] border border-[#1e3a8a]">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#7dd3fc] uppercase tracking-wider mb-2">
                          <Film className="w-3.5 h-3.5 text-[#38bdf8]" />
                          <span>Ejemplo del video:</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                          {item.materialExample}
                        </p>
                      </div>

                      {/* Key takeaway bullet points */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                          Puntos destacados:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.keyPoints.map((point, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-[#061536] p-2.5 rounded-lg border border-[#1e3a8a]"
                            >
                              <CheckSquare className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
