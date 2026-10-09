import { useState } from 'react';
import { Code2, Play, Terminal, Send } from 'lucide-react';
import { PRACTICAL_STEPS } from '../data/courseData';

interface TaskRecord {
  id: number;
  titulo: string;
  materia: string;
  completada: boolean;
  fecha_creacion: string;
}

export default function PracticalApplicationSection() {
  const [activeStep, setActiveStep] = useState(0);

  // Simulated REST API interactive state
  const [tasks, setTasks] = useState<TaskRecord[]>([
    { id: 1, titulo: "Ver tutorial de Supabase de Fazt Code", materia: "Informática", completada: true, fecha_creacion: "2026-10-08T10:00:00Z" },
    { id: 2, titulo: "Diseñar tabla 'tareas' en PostgreSQL", materia: "Informática", completada: true, fecha_creacion: "2026-10-08T11:30:00Z" },
    { id: 3, titulo: "Probar endpoints REST con cabeceras apikey", materia: "Informática", completada: false, fecha_creacion: "2026-10-08T14:15:00Z" }
  ]);

  const [requestMethod, setRequestMethod] = useState<'GET' | 'POST'>('GET');
  const [endpointUrl, setEndpointUrl] = useState('/rest/v1/tareas?completada=eq.false');
  const [newTaskTitle, setNewTaskTitle] = useState('Publicar informe en la web');
  const [httpResponse, setHttpResponse] = useState<{
    status: number;
    statusText: string;
    timeMs: number;
    data: unknown;
  }>({
    status: 200,
    statusText: 'OK',
    timeMs: 42,
    data: [
      { id: 3, titulo: "Probar endpoints REST con cabeceras apikey", materia: "Informática", completada: false, fecha_creacion: "2026-10-08T14:15:00Z" }
    ]
  });

  const handleExecuteRequest = () => {
    if (requestMethod === 'GET') {
      if (endpointUrl.includes('eq.false')) {
        const filtered = tasks.filter(t => !t.completada);
        setHttpResponse({
          status: 200,
          statusText: 'OK',
          timeMs: 38,
          data: filtered
        });
      } else if (endpointUrl.includes('eq.true')) {
        const filtered = tasks.filter(t => t.completada);
        setHttpResponse({
          status: 200,
          statusText: 'OK',
          timeMs: 41,
          data: filtered
        });
      } else {
        setHttpResponse({
          status: 200,
          statusText: 'OK',
          timeMs: 35,
          data: tasks
        });
      }
    } else {
      // POST
      const newId = tasks.length + 1;
      const createdItem: TaskRecord = {
        id: newId,
        titulo: newTaskTitle || 'Nueva tarea creada',
        materia: 'Informática',
        completada: false,
        fecha_creacion: new Date().toISOString()
      };
      setTasks(prev => [...prev, createdItem]);
      setHttpResponse({
        status: 201,
        statusText: 'Created',
        timeMs: 65,
        data: [createdItem]
      });
      setNewTaskTitle('');
    }
  };

  return (
    <section id="practica" className="py-14 bg-[#05112c] border-y border-[#1e3a8a]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e275c] border border-[#38bdf8]/40 text-[#38bdf8] text-xs font-bold mb-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>SECCIÓN 04 · APLICACIÓN PRÁCTICA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Procedimiento Técnico y Simulador REST
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl font-medium">
            Paso a paso de cómo se implementa lo aprendido en el tutorial y una consola para probar solicitudes HTTP en vivo.
          </p>
        </div>

        {/* Step by step guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-start">
          {/* Step tabs */}
          <div className="lg:col-span-5 space-y-2.5">
            {PRACTICAL_STEPS.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                  activeStep === idx
                    ? 'bg-[#0e275c] border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                    : 'bg-[#0a1c44]/80 border-[#1e3a8a] hover:border-[#38bdf8]/50 hover:bg-[#0c2254] text-slate-300'
                }`}
              >
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-black text-xs shrink-0 ${
                  activeStep === idx ? 'bg-[#38bdf8] text-[#040d21]' : 'bg-[#061536] text-slate-400 border border-[#1e3a8a]'
                }`}>
                  {step.number}
                </span>
                <div>
                  <h3 className={`text-sm font-bold ${activeStep === idx ? 'text-white' : 'text-slate-200'}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium line-clamp-1 mt-0.5">
                    {step.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Step Detail Card */}
          <div className="lg:col-span-7 bg-[#0a1c44] rounded-3xl p-6 sm:p-8 border-2 border-[#1e3a8a] shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#1e3a8a] mb-4">
              <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-wider">
                Paso {PRACTICAL_STEPS[activeStep].number} de 04
              </span>
              <span className="text-xs font-semibold text-slate-300 bg-[#061536] px-3 py-1 rounded-full border border-[#1e3a8a]">
                Tutorial de Fazt Code
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-white mb-2">
              {PRACTICAL_STEPS[activeStep].title}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed font-normal mb-4">
              {PRACTICAL_STEPS[activeStep].description}
            </p>

            {/* Code Box */}
            <div className="rounded-2xl overflow-hidden border border-[#1e3a8a] bg-[#040c1e] text-slate-200">
              <div className="bg-[#071536] px-4 py-2 border-b border-[#1e3a8a] flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Código de implementación</span>
                </div>
                <span className="text-[10px] text-[#38bdf8]">JavaScript / SQL</span>
              </div>
              <pre className="p-4 text-xs font-mono overflow-x-auto text-[#7dd3fc] leading-relaxed">
                <code>{PRACTICAL_STEPS[activeStep].codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Live Interactive REST API Tester */}
        <div className="bg-[#0a1c44] rounded-3xl p-6 sm:p-8 border-2 border-[#38bdf8]/60 shadow-[0_0_35px_rgba(56,189,248,0.15)]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#1e3a8a]">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#38bdf8] uppercase tracking-wider mb-1">
                <Play className="w-3.5 h-3.5 text-[#38bdf8]" />
                Simulador de Pruebas en Vivo
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Consola Interactiva de Consultas REST a Supabase
              </h3>
            </div>
            <span className="text-xs font-bold text-slate-300 bg-[#061536] px-3 py-1.5 rounded-xl border border-[#1e3a8a]">
              PostgreSQL & PostgREST
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Request controls */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                  Método y Endpoint REST
                </label>
                <div className="flex rounded-xl overflow-hidden border border-[#1e3a8a]">
                  <select
                    value={requestMethod}
                    onChange={(e) => {
                      const method = e.target.value as 'GET' | 'POST';
                      setRequestMethod(method);
                      if (method === 'POST') {
                        setEndpointUrl('/rest/v1/tareas');
                      } else {
                        setEndpointUrl('/rest/v1/tareas?completada=eq.false');
                      }
                    }}
                    className="bg-[#1d4ed8] text-white font-bold text-xs px-3 py-2.5 outline-hidden cursor-pointer"
                  >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                  </select>
                  <input
                    type="text"
                    value={endpointUrl}
                    onChange={(e) => setEndpointUrl(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs font-mono bg-[#061536] text-white outline-hidden"
                  />
                </div>
              </div>

              {/* Preset buttons */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Preajustes rápidos del tutorial:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => {
                      setRequestMethod('GET');
                      setEndpointUrl('/rest/v1/tareas?select=*');
                    }}
                    className="px-2.5 py-1 text-[11px] font-semibold bg-[#061536] hover:bg-[#0e275c] hover:text-[#38bdf8] text-slate-300 rounded-lg border border-[#1e3a8a] cursor-pointer"
                  >
                    GET todas (?select=*)
                  </button>
                  <button
                    onClick={() => {
                      setRequestMethod('GET');
                      setEndpointUrl('/rest/v1/tareas?completada=eq.false');
                    }}
                    className="px-2.5 py-1 text-[11px] font-semibold bg-[#061536] hover:bg-[#0e275c] hover:text-[#38bdf8] text-slate-300 rounded-lg border border-[#1e3a8a] cursor-pointer"
                  >
                    GET pendientes (?completada=eq.false)
                  </button>
                  <button
                    onClick={() => {
                      setRequestMethod('GET');
                      setEndpointUrl('/rest/v1/tareas?completada=eq.true');
                    }}
                    className="px-2.5 py-1 text-[11px] font-semibold bg-[#061536] hover:bg-[#0e275c] hover:text-[#38bdf8] text-slate-300 rounded-lg border border-[#1e3a8a] cursor-pointer"
                  >
                    GET completadas (?completada=eq.true)
                  </button>
                  <button
                    onClick={() => {
                      setRequestMethod('POST');
                      setEndpointUrl('/rest/v1/tareas');
                    }}
                    className="px-2.5 py-1 text-[11px] font-semibold bg-[#0e275c] text-[#38bdf8] rounded-lg border border-[#38bdf8]/40 cursor-pointer font-bold"
                  >
                    POST nueva tarea
                  </button>
                </div>
              </div>

              {/* POST Body if POST is selected */}
              {requestMethod === 'POST' && (
                <div className="p-3.5 rounded-xl bg-[#061433] border border-[#1e3a8a] space-y-2">
                  <label className="text-xs font-bold text-slate-200 block">
                    Cuerpo JSON a enviar (Body):
                  </label>
                  <input
                    type="text"
                    placeholder="Título de la nueva tarea..."
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-[#1e3a8a] bg-[#040c1e] text-white outline-hidden focus:border-[#38bdf8]"
                  />
                  <span className="text-[10px] text-slate-400 font-mono block">
                    {JSON.stringify({ titulo: newTaskTitle || '...', completada: false })}
                  </span>
                </div>
              )}

              {/* Simulated Headers */}
              <div className="p-3 rounded-xl bg-[#061433] border border-[#1e3a8a] text-[11px] font-mono space-y-1 text-slate-400">
                <p className="font-bold text-[#38bdf8]">Cabeceras enviadas:</p>
                <p className="truncate">apikey: eyJhbGciOiJIUzI1NiI...</p>
                <p className="truncate">Authorization: Bearer eyJhbGci...</p>
              </div>

              <button
                onClick={handleExecuteRequest}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all border border-[#38bdf8]/40"
              >
                <Send className="w-4 h-4" />
                Ejecutar Petición HTTP al Endpoint
              </button>
            </div>

            {/* Response Console */}
            <div className="lg:col-span-7 bg-[#040c1e] rounded-2xl p-4 border border-[#1e3a8a] text-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#1e3a8a] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                      httpResponse.status === 200 || httpResponse.status === 201
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {httpResponse.status} {httpResponse.statusText}
                    </span>
                    <span className="text-slate-400">{httpResponse.timeMs}ms</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">Respuesta de PostgREST</span>
                </div>

                <div className="mt-3">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-1">
                    JSON devuelto:
                  </span>
                  <pre className="p-3 bg-[#061536] rounded-xl text-xs font-mono overflow-x-auto text-[#7dd3fc] max-h-60 leading-relaxed border border-[#1e3a8a]">
                    <code>{JSON.stringify(httpResponse.data, null, 2)}</code>
                  </pre>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1e3a8a] flex items-center justify-between text-[11px] text-slate-400">
                <span>Tabla: <strong className="text-white">tareas</strong> en PostgreSQL</span>
                <span className="text-[#38bdf8]">Autenticación con anon key</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
