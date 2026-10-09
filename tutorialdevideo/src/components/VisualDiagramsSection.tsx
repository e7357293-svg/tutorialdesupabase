import { useState } from 'react';
import { Network, Database, Shield, Server, Laptop, Key, Check, X } from 'lucide-react';

export default function VisualDiagramsSection() {
  const [selectedDiagram, setSelectedDiagram] = useState<'architecture' | 'schema' | 'security'>('architecture');

  return (
    <section id="recursos-visuales" className="py-14 bg-[#071536]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e275c] border border-[#38bdf8]/40 text-[#38bdf8] text-xs font-bold mb-2">
            <Network className="w-3.5 h-3.5" />
            <span>SECCIÓN 05 · RECURSOS VISUALES Y ESQUEMAS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Esquemas Visuales de Funcionamiento
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl font-medium">
            Representaciones visuales que sintetizan el funcionamiento técnico expuesto por Fazt Code en el tutorial.
          </p>
        </div>

        {/* Diagram selector tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          <button
            onClick={() => setSelectedDiagram('architecture')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              selectedDiagram === 'architecture'
                ? 'bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] text-white shadow-lg border border-[#38bdf8]/40'
                : 'bg-[#0a1c44] text-slate-300 border border-[#1e3a8a] hover:bg-[#0e275c]'
            }`}
          >
            <Server className="w-4 h-4 text-[#38bdf8]" />
            Diagrama 1: Arquitectura BaaS vs Tradicional
          </button>
          <button
            onClick={() => setSelectedDiagram('schema')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              selectedDiagram === 'schema'
                ? 'bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] text-white shadow-lg border border-[#38bdf8]/40'
                : 'bg-[#0a1c44] text-slate-300 border border-[#1e3a8a] hover:bg-[#0e275c]'
            }`}
          >
            <Database className="w-4 h-4 text-[#38bdf8]" />
            Diagrama 2: Estructura de Tabla PostgreSQL
          </button>
          <button
            onClick={() => setSelectedDiagram('security')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              selectedDiagram === 'security'
                ? 'bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] text-white shadow-lg border border-[#38bdf8]/40'
                : 'bg-[#0a1c44] text-slate-300 border border-[#1e3a8a] hover:bg-[#0e275c]'
            }`}
          >
            <Shield className="w-4 h-4 text-[#38bdf8]" />
            Diagrama 3: Matriz de Seguridad y RLS
          </button>
        </div>

        {/* Diagram 1: Architecture comparison */}
        {selectedDiagram === 'architecture' && (
          <div className="bg-[#0a1c44] rounded-3xl p-6 sm:p-10 border-2 border-[#1e3a8a] shadow-xl space-y-8 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                Comparativa de Flujos: Servidor Manual vs Supabase
              </h3>
              <p className="text-sm text-slate-300 font-medium">
                Fazt explica que con Supabase desaparece la necesidad de escribir controladores y rutas manuales.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Modelo tradicional */}
              <div className="p-6 rounded-2xl bg-[#061433] border border-[#1e3a8a]">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1e3a8a]">
                  <h4 className="text-sm font-extrabold text-slate-300 uppercase tracking-wider">
                    1. Enfoque Tradicional (Manual)
                  </h4>
                  <span className="text-[11px] font-bold text-red-400 bg-red-950/60 border border-red-800 px-2 py-0.5 rounded">
                    Lento de montar
                  </span>
                </div>

                <div className="flex flex-col gap-3 font-mono text-xs">
                  <div className="p-3 bg-[#0a1c44] rounded-xl border border-[#1e3a8a] flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-slate-400 shrink-0" />
                    <div>
                      <strong className="block text-white">Cliente (Frontend)</strong>
                      <span className="text-slate-400 text-[11px]">React, Vue o HTML</span>
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-400">
                    <span className="text-[11px]">↓ Petición HTTP manual</span>
                  </div>

                  <div className="p-3 bg-red-950/30 rounded-xl border border-red-900/60 flex items-center gap-3">
                    <Server className="w-5 h-5 text-red-400 shrink-0" />
                    <div>
                      <strong className="block text-red-300">Servidor Node.js / Express</strong>
                      <span className="text-red-400 text-[11px]">Rutas, ORM, CORS y Auth manual</span>
                    </div>
                  </div>

                  <div className="flex justify-center text-slate-400">
                    <span className="text-[11px]">↓ Conexión TCP / Pool</span>
                  </div>

                  <div className="p-3 bg-[#0a1c44] rounded-xl border border-[#1e3a8a] flex items-center gap-3">
                    <Database className="w-5 h-5 text-slate-400 shrink-0" />
                    <div>
                      <strong className="block text-white">Base de Datos</strong>
                      <span className="text-slate-400 text-[11px]">Servidor SQL configurado a mano</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modelo Supabase */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0c2356] to-[#07183e] border-2 border-[#38bdf8]/70 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1e3a8a]">
                  <h4 className="text-sm font-extrabold text-[#38bdf8] uppercase tracking-wider">
                    2. Enfoque Supabase (BaaS)
                  </h4>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                    Listo en minutos
                  </span>
                </div>

                <div className="flex flex-col gap-3 font-mono text-xs">
                  <div className="p-3 bg-[#08183c] rounded-xl border border-[#38bdf8]/30 flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-[#38bdf8] shrink-0" />
                    <div>
                      <strong className="block text-white">Cliente (Frontend Web / App)</strong>
                      <span className="text-slate-300 text-[11px]">Llama directo con anon_key</span>
                    </div>
                  </div>

                  <div className="flex justify-center text-[#38bdf8]">
                    <span className="text-[11px] font-bold">↓ REST / JSON directo</span>
                  </div>

                  <div className="p-3 bg-[#0e2c6e] rounded-xl border border-[#38bdf8] flex items-center gap-3 shadow-md">
                    <Server className="w-5 h-5 text-[#38bdf8] shrink-0" />
                    <div>
                      <strong className="block text-white">PostgREST (Motor Supabase)</strong>
                      <span className="text-sky-200 text-[11px]">Genera endpoints instantáneos</span>
                    </div>
                  </div>

                  <div className="flex justify-center text-[#38bdf8]">
                    <span className="text-[11px] font-bold">↓ Políticas de RLS</span>
                  </div>

                  <div className="p-3 bg-[#1d4ed8] text-white rounded-xl flex items-center gap-3 shadow-lg border border-[#38bdf8]/50">
                    <Database className="w-5 h-5 text-[#38bdf8] shrink-0" />
                    <div>
                      <strong className="block text-white">PostgreSQL Real</strong>
                      <span className="text-sky-200 text-[11px]">Tablas estructuradas con máxima integridad</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Diagram 2: PostgreSQL Schema */}
        {selectedDiagram === 'schema' && (
          <div className="bg-[#0a1c44] rounded-3xl p-6 sm:p-10 border-2 border-[#1e3a8a] shadow-xl space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                Anatomía de la Tabla Creada en el Table Editor
              </h3>
              <p className="text-sm text-slate-300 font-medium">
                Representación visual del esquema de base de datos relacional modelado en el tutorial de Fazt.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#1e3a8a]">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0e275c] text-white uppercase text-[11px] font-bold tracking-wider border-b border-[#1e3a8a]">
                  <tr>
                    <th className="p-3.5 text-[#38bdf8]">Columna</th>
                    <th className="p-3.5">Tipo de Dato SQL</th>
                    <th className="p-3.5">Restricción</th>
                    <th className="p-3.5">Valor por Defecto</th>
                    <th className="p-3.5">Propósito en el Video</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e3a8a] font-mono text-slate-200 bg-[#061433]">
                  <tr className="hover:bg-[#0a1c44]">
                    <td className="p-3.5 font-bold text-[#38bdf8]">id</td>
                    <td className="p-3.5">bigint (int8)</td>
                    <td className="p-3.5 font-bold text-emerald-400">PRIMARY KEY</td>
                    <td className="p-3.5 text-slate-400">identity autoincrement</td>
                    <td className="p-3.5 font-sans">Identificador numérico único de la tarea</td>
                  </tr>
                  <tr className="hover:bg-[#0a1c44]">
                    <td className="p-3.5 font-bold text-white">name / titulo</td>
                    <td className="p-3.5">text</td>
                    <td className="p-3.5 font-bold text-amber-400">NOT NULL</td>
                    <td className="p-3.5 text-slate-500">—</td>
                    <td className="p-3.5 font-sans">Texto descriptivo de la tarea</td>
                  </tr>
                  <tr className="hover:bg-[#0a1c44]">
                    <td className="p-3.5 font-bold text-white">is_complete</td>
                    <td className="p-3.5">boolean</td>
                    <td className="p-3.5 text-slate-400">Nullable</td>
                    <td className="p-3.5 font-bold text-[#38bdf8]">false</td>
                    <td className="p-3.5 font-sans">Estado para filtrar pendientes o hechas</td>
                  </tr>
                  <tr className="hover:bg-[#0a1c44]">
                    <td className="p-3.5 font-bold text-white">created_at</td>
                    <td className="p-3.5">timestamptz</td>
                    <td className="p-3.5 font-bold text-slate-300">DEFAULT now()</td>
                    <td className="p-3.5 text-slate-400">now()</td>
                    <td className="p-3.5 font-sans">Marca de tiempo para ordenar cronológicamente</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Diagram 3: Security & RLS Matrix */}
        {selectedDiagram === 'security' && (
          <div className="bg-[#0a1c44] rounded-3xl p-6 sm:p-10 border-2 border-[#1e3a8a] shadow-xl space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                Matriz de Seguridad: Llaves de Acceso y RLS
              </h3>
              <p className="text-sm text-slate-300 font-medium">
                Diferencias clave explicadas en el video entre la anon_key pública y la service_role secreta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Anon Key */}
              <div className="p-6 rounded-2xl bg-[#061433] border-2 border-[#38bdf8]/50 space-y-3">
                <div className="flex items-center gap-2 text-[#38bdf8]">
                  <Key className="w-5 h-5" />
                  <h4 className="font-extrabold text-base text-white">
                    Anon Public Key (Cliente Web)
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Diseñada para incrustarse en el código de React o HTML. Cualquiera puede verla al inspeccionar el código fuente.
                </p>
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Segura solo si Row Level Security (RLS) está activo</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Respeta las políticas de usuario autenticado</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-400">
                    <X className="w-4 h-4 shrink-0" />
                    <span>Peligrosa si dejas tablas públicas sin reglas</span>
                  </div>
                </div>
              </div>

              {/* Service Role Key */}
              <div className="p-6 rounded-2xl bg-[#061433] border-2 border-[#1d4ed8] space-y-3">
                <div className="flex items-center gap-2 text-[#38bdf8]">
                  <Shield className="w-5 h-5" />
                  <h4 className="font-extrabold text-base text-white">
                    Service Role Secret Key (Solo Servidor)
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Llave maestra con permisos totales de administrador (Superuser). Jamás debe incluirse en el frontend.
                </p>
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Salta todas las restricciones de RLS</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-400">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Solo para tareas administrativas en backend</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-400 font-bold">
                    <X className="w-4 h-4 shrink-0" />
                    <span>NUNCA ponerla en GitHub público o en el cliente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
