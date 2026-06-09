import { Helmet } from 'react-helmet-async';
import { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    title: 'Algorithm Development',
    subtitle: 'TensorFlow, PyTorch',
    items: [
      { name: 'TensorFlow', score: 88 },
      { name: 'PyTorch', score: 84 },
      { name: 'Physiological Feature Engineering', score: 90 },
      { name: 'ECG/EEG Classification Pipelines', score: 87 },
    ],
  },
  {
    title: 'Medical Standards',
    subtitle: 'ISO 14971, IEC 62304',
    items: [
      { name: 'ISO 14971 Risk Management', score: 89 },
      { name: 'IEC 62304 Lifecycle', score: 83 },
      { name: 'FDA 510(k) Validation Traceability', score: 84 },
      { name: 'Clinical Reliability and Variability Reporting', score: 91 },
    ],
  },
  {
    title: 'Data Engineering & Cloud',
    subtitle: 'GCP, Docker, Python',
    items: [
      { name: 'Python & Scientific Stack', score: 94 },
      { name: 'GCP Data Workflows for Research', score: 76 },
      { name: 'Dockerized Experiment Environments', score: 72 },
      { name: 'Clinical Data Integrity Tooling', score: 86 },
    ],
  },
  {
    title: 'Research & Analytics',
    subtitle: 'EEG/ECG, Statistical Inference',
    items: [
      { name: 'EEG Auditory Attention Decoding', score: 79 },
      { name: 'ECG Arrhythmia Investigation', score: 93 },
      { name: 'Inter-rater Variability Analysis', score: 88 },
      { name: 'XAI-driven Clinical Error Analysis', score: 82 },
    ],
  },
];

const SkillMeter = ({ name, score, active }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-xs text-slate-300 sm:text-sm">
      <span>{name}</span>
      <span className="font-medium text-cyan-200">{score}%</span>
    </div>
    <div className="h-2.5 rounded-full bg-slate-800">
      <div
        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 shadow-[0_0_14px_rgba(45,212,191,0.55)] transition-all duration-1000"
        style={{ width: active ? `${score}%` : '0%' }}
      />
    </div>
  </div>
);

const Skills = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.24 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="space-y-6 py-6 sm:py-10">
      <Helmet>
        <title>Skills | Manjitha Kularatne</title>
        <meta
          name="description"
          content="Interactive skill matrix for biomedical AI, regulatory standards, cloud engineering, and clinical analytics."
        />
        <link rel="canonical" href="https://manjithadulana98.github.io/skills" />
      </Helmet>

      <div>
        <h2 className="section-title">Skill Matrix</h2>
        <p className="section-subtitle">
          Domain-specific competencies across biomedical model development, safety standards,
          clinical data tooling, and translational research analytics.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="glass-panel p-5 sm:p-6">
            <h3 className="font-cyber text-base text-cyan-100 sm:text-lg">{group.title}</h3>
            <p className="mt-1 text-sm text-teal-200/90">{group.subtitle}</p>
            <div className="mt-5 space-y-4">
              {group.items.map((item) => (
                <SkillMeter key={item.name} name={item.name} score={item.score} active={active} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
