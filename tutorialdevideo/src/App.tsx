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
      <InvisibleSoundListener />
      <HeaderNav activeSection={activeSection} />

      <main className="flex-1">
        <StudentHeader />
        <IntroductionSection />
        <KeyConceptsSection />
        <QuestionnaireSection />
        <PracticalApplicationSection />
        <VisualDiagramsSection />
        <PersonalConclusionSection />
        <SourcesSection />
      </main>

      <PageFooter />
    </div>
  );
}
