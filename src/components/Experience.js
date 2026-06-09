import { Helmet } from 'react-helmet-async';

const experiences = [
  {
    role: 'Biomedical Research Engineer',
    company: 'Synergen Technology Labs',
    duration: 'Jul 2023 - Present',
    location: 'Sri Lanka',
    highlights: [
      'Develop and validate AI-assisted ECG systems for arrhythmia detection and clinical reliability analysis.',
      'Perform inter-rater variability studies, episode adjudication analytics, and protocol design for regulated evidence packages.',
      'Contribute to DFMEA, software risk controls, and traceability artifacts aligned with FDA 510(k), ISO 14971, and ISO 13485.',
    ],
    stack: ['ECG Analytics', 'Clinical Validation', 'Python', 'SaMD Risk Documentation'],
  },
  {
    role: 'Trainee R&D Biomedical Engineer',
    company: 'Effective Solutions - Jendo Health',
    duration: 'Sep 2020 - Aug 2021',
    location: 'Sri Lanka',
    highlights: [
      'Built PPG/ECG signal processing workflows for wearable cardiac monitoring products.',
      'Benchmarked firmware and MATLAB outputs to support verification, calibration consistency, and signal-quality acceptance.',
      'Supported communication protocol and product-level integration testing with companion mobile applications.',
    ],
    stack: ['Signal Processing', 'Embedded Validation', 'MATLAB', 'Device QA'],
  },
];

const Experience = () => (
  <section className="space-y-6 py-6 sm:py-10">
    <Helmet>
      <title>Experience | Manjitha Kularatne</title>
      <meta
        name="description"
        content="Professional experience building biomedical AI and clinically validated signal processing solutions."
      />
      <link rel="canonical" href="https://manjithadulana98.github.io/experience" />
    </Helmet>

    <div>
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">Clinical AI engineering, biosignal systems, and regulated development practices.</p>
    </div>

    <div className="space-y-4">
      {experiences.map((item) => (
        <article key={item.role} className="glass-panel p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-cyber text-base text-cyan-100 sm:text-lg">{item.role}</h3>
              <p className="text-sm font-medium text-teal-200">{item.company}</p>
              <p className="mt-1 text-xs text-slate-400">{item.location}</p>
            </div>
            <span className="chip">{item.duration}</span>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {item.highlights.map((point) => (
              <li key={point} className="rounded-lg border border-cyan-300/15 bg-slate-950/60 p-3">
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.stack.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
