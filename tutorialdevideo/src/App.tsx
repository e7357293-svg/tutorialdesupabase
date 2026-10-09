import { useState, useEffect } from 'react';
import HeaderNav from './components/HeaderNav';
import StudentHeader from './components/StudentHeader';
import IntroductionSection from './components/IntroductionSection';
import KeyConceptsSection from './components/KeyConceptsSection';
import QuestionnaireSection from './components/QuestionnaireSection';
import PracticalApplicationSection from './components/PracticalApplicationSection';
import VisualDiagramsSection from './components/VisualDiagramsSection';
import PersonalConclusionSection from './components/PersonalConclusionSection';
import SourcesSection from './components/SourcesSection';
import PageFooter from './components/PageFooter';
import InvisibleSoundListener from './components/InvisibleSoundListener';

export default function App() {
  const [activeSection, setActiveSection] = useState('encabezado');

  useEffect(() => {
    const sections = [
      'encabezado',
      'introduccion',
      'conceptos',
      'cuestionario',
      'practica',
      'recursos-visuales',
      'conclusion',
      'fuentes'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px'
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#040d21] text-slate-100 flex flex-col font-sans selection:bg-[#38bdf8] selection:text-[#040d21]">
      {/* Invisible elevator audio listener: no UI rendered, sound starts automatically on first interaction */}
      <InvisibleSoundListener />

      {/* Navigation Bar in deep blue glass */}
      <HeaderNav activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Encabezado: Colegio Asunción Escalada & Título */}
        <StudentHeader />

        {/* Sección 1: Introducción y Observación */}
        <IntroductionSection />

        {/* Sección 2: 5 Conceptos Clave */}
        <KeyConceptsSection />

        {/* Sección 3: Cuestionario Resuelto (12 Preguntas) */}
        <QuestionnaireSection />

        {/* Sección 4: Aplicación Práctica y Simulador REST */}
        <PracticalApplicationSection />

        {/* Sección 5: Recursos Visuales y Diagramas */}
        <VisualDiagramsSection />

        {/* Sección 6: Conclusión Personal */}
        <PersonalConclusionSection />

        {/* Sección 7: Fuentes (Exactamente 3 Enlaces) */}
        <SourcesSection />
      </main>

      {/* Pie de página con Colegio Asunción Escalada */}
      <PageFooter />
    </div>
  );
}
