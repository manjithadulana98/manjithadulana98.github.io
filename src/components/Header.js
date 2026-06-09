import { Helmet } from 'react-helmet-async';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const focusAreas = [
  'AI-Assisted Arrhythmia Validation',
  'Explainable AI for EEG/ECG',
  'Clinical-Grade Signal Analytics',
  'SaMD Risk and Regulatory Documentation',
  'Physician-Centered Model Interpretability',
];

const Header = () => {
  return (
    <section className="space-y-8 py-8 sm:py-12">
      <Helmet>
        <title>Manjitha Kularatne | Biomedical Engineer & Data Scientist</title>
        <meta
          name="description"
          content="Cybernetic portfolio of Manjitha Kularatne, Biomedical Research Engineer and Data Scientist specializing in explainable clinical AI and biosignal systems."
        />
        <link rel="canonical" href="https://manjithadulana98.github.io/" />
      </Helmet>

      <div className="glass-panel relative overflow-hidden p-6 sm:p-10">
        <div className="absolute -right-24 top-0 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -left-28 bottom-0 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-5">
            <p className="chip">Biomedical AI Systems | Sri Lanka</p>
            <h1 className="font-cyber text-3xl leading-tight text-cyan-100 sm:text-5xl">
              Manjitha Kularatne
            </h1>
            <p className="text-base text-cyan-200/90 sm:text-xl">
              <ReactTyped
                strings={[
                  'Research Biomedical Engineer',
                  'Clinical AI Validation Specialist',
                  'Data Scientist for Healthcare Signals',
                  'Explainable AI (XAI) for Cardiology and Neurotech',
                ]}
                typeSpeed={45}
                backSpeed={26}
                loop
              />
            </p>
            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I bridge biomedical engineering and artificial intelligence to design clinically dependable
              systems for ECG and EEG signal interpretation. My work focuses on explainable AI (XAI),
              physiological time-series intelligence, and regulatory-grade validation workflows. I specialize
              in translating model outputs into physician-readable evidence through episode-level adjudication,
              sensitivity-focused analysis, inter-rater reliability reporting, and traceable risk controls for
              real-world healthcare deployment.
            </p>

            <div className="flex flex-wrap gap-2">
              {focusAreas.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:manjitha456@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/20"
              >
                <MdEmail /> Email
              </a>
              <a
                href="https://linkedin.com/in/manjitha-kularatne"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
              <a
                href="https://github.com/manjithadulana98"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-300/30 bg-slate-900/75 p-6 shadow-[0_0_32px_rgba(56,189,248,0.15)]">
            <h2 className="font-cyber text-lg text-cyan-200">System Snapshot</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p className="rounded-xl border border-cyan-300/20 bg-slate-950/80 p-3">
                M.Sc. Data Science and AI candidate, University of Moratuwa.
              </p>
              <p className="rounded-xl border border-cyan-300/20 bg-slate-950/80 p-3">
                Biomedical Research Engineer at Synergen Technology Labs.
              </p>
              <p className="rounded-xl border border-cyan-300/20 bg-slate-950/80 p-3">
                Focus: AFIB, ventricular tachycardia, pause events, and interpretable model diagnostics.
              </p>
              <p className="rounded-xl border border-cyan-300/20 bg-slate-950/80 p-3">
                Standards lens: FDA 510(k), ISO 14971, ISO 13485, and IEC 62304 aligned deliverables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
