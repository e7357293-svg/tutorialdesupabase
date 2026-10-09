import { HeartHandshake, CheckCircle2, Lightbulb, Compass, Award } from 'lucide-react';

export default function PersonalConclusionSection() {
  return (
    <section id="conclusion" className="py-14 bg-[#05112c] border-t border-[#1e3a8a]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e275c] border border-[#38bdf8]/40 text-[#38bdf8] text-xs font-bold mb-2">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>SECCIÓN 06 · REFLEXIÓN FINAL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conclusión y Lo que me Dejó el Video
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl font-medium">
            Mi balance sobre lo aprendido y cómo cambia la forma de encarar proyectos de programación.
          </p>
        </div>

        {/* Big Reflective Card */}
        <div className="bg-[#0a1c44] rounded-3xl p-6 sm:p-10 border-2 border-[#1e3a8a] shadow-xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-[#1e3a8a]">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1d4ed8] to-[#38bdf8] flex items-center justify-center text-white shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">
                Reflexión sobre el uso de Supabase
              </h3>
              <p className="text-xs text-[#38bdf8] font-bold">
                Colegio Asunción Escalada
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-200 leading-relaxed font-normal">
            <div className="space-y-4">
              <p>
                Sinceramente, ver este tutorial me abrió bastante los ojos sobre cómo se programan páginas web hoy en día. Antes de ver el video de Fazt, siempre que pensaba en conectar una base de datos a una aplicación me imaginaba horas y horas configurando servidores en mi máquina, peleando con paquetes que no instalan y escribiendo archivos gigantescos llenos de rutas y controladores para cada tabla.
              </p>
              <p>
                Supabase me demostró que se puede hacer todo mucho más directo y sin tantas vueltas. Lo que más me gustó es que no te obliga a usar bases de datos raras: tenés PostgreSQL con tablas bien armadas, donde los datos quedan ordenados y seguros, pero con la gran ventaja de que las direcciones para consultar y guardar cosas se crean solas en internet.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Pensando en los proyectos prácticos del colegio, esto es una ayuda tremenda. Si nos piden armar una aplicación para gestionar notas, préstamos de libros o cualquier sistema escolar, ya no hace falta perder semanas enteras con el backend. Puedo armar la base en un ratito y enfocarme de lleno en que la página se vea bien, ande rápido y sea cómoda de usar.
              </p>
              <p>
                Además, me quedó muy grabado el tema de la seguridad. Fazt repite varias veces que no hay que descuidar las reglas de RLS ni compartir claves de administrador. Saber que la rapidez no sirve de nada si dejás la base de datos abierta para que cualquiera te la borre es una de las cosas más importantes que me llevo de todo este trabajo.
              </p>
            </div>
          </div>

          {/* 3 Key Takeaways in Card Footer */}
          <div className="mt-6 pt-6 border-t border-[#1e3a8a] grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#061433] border border-[#1e3a8a]">
              <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-xs uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ahorro de Tiempo</span>
              </div>
              <p className="text-xs text-slate-300 font-normal">
                Tener la base y la API lista en 5 minutos para concentrarse en la interfaz y el diseño.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#061433] border border-[#1e3a8a]">
              <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-xs uppercase tracking-wider mb-1">
                <Lightbulb className="w-4 h-4" />
                <span>Base de Datos SQL Real</span>
              </div>
              <p className="text-xs text-slate-300 font-normal">
                PostgreSQL con tablas ordenadas y seguras sin quedar atrapado en servicios cerrados.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#061433] border border-[#1e3a8a]">
              <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider mb-1">
                <Compass className="w-4 h-4 text-[#38bdf8]" />
                <span className="text-[#38bdf8]">Atención a la Seguridad</span>
              </div>
              <p className="text-xs text-slate-300 font-normal">
                Uso correcto de llaves públicas y activación obligatoria de reglas de acceso (RLS).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
