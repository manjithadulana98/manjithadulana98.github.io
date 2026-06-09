import { Helmet } from 'react-helmet-async';

const researchProjects = [
  {
    title: 'Auditory Attention Decoding for Hearing Aids',
    summary:
      'Investigating EEG-based selective attention decoding with interpretable attention-maps and channel-level attribution for trustworthy hearing-assistive intelligence.',
    tags: ['EEG', 'XAI', 'Auditory Neuroscience', 'Neural Decoding'],
    demo: '#',
    paper: '#',
    status: 'In Progress',
  },
  {
    title: 'Ventricular Tachycardia Detection Algorithms',
    summary:
      'Designing sensitivity-focused detection and adjudication workflows for ventricular arrhythmia episodes in AI-assisted ECG systems with reliability tracking and reviewer agreement analytics.',
    tags: ['ECG', 'Clinical Validation', 'Arrhythmia AI', 'Inter-rater Reliability'],
    demo: '#',
    paper: '#',
    status: 'Clinical Validation',
  },
  {
    title: 'Retinal-Scleral Biomarker Intelligence',
    summary:
      'Computer vision pipeline for vascular biomarker extraction and diabetic risk profiling from conjunctival and retinal image modalities.',
    tags: ['Medical Imaging', 'Vascular Biomarkers', 'Python', 'Dataset Engineering'],
    demo: 'https://github.com/manjithadulana98/fundus-hybrid-segmentation',
    paper: 'https://ieee-dataport.org/documents/conjunctival-and-retinal-images-healthy-subjects-and-subjects-diabetes',
    status: 'Published Dataset',
  },
];

const structureBlueprint = [
  'ResearchPortfolioSection',
  'ResearchCard',
  'ProjectBadges',
  'TechnicalLinks',
  'EvidenceTimeline',
  'DatasetArtifacts',
];

const Projects = () => (
  <section className="space-y-6 py-6 sm:py-10">
    <Helmet>
      <title>Research Portfolio | Manjitha Kularatne</title>
      <meta
        name="description"
        content="Current biomedical AI research portfolio including auditory attention decoding and ventricular tachycardia detection initiatives."
      />
      <link rel="canonical" href="https://manjithadulana98.github.io/projects" />
    </Helmet>

    <div>
      <h2 className="section-title">Research Portfolio</h2>
      <p className="section-subtitle">
        Active deep-tech projects in cardiology AI, neuroengineering, and medical imaging for clinically credible healthcare systems.
      </p>
    </div>

    <div className="grid gap-4 lg:grid-cols-3">
      {researchProjects.map((project) => (
        <article key={project.title} className="glass-panel flex h-full flex-col p-5 sm:p-6">
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="font-cyber text-sm text-cyan-100 sm:text-base">{project.title}</h3>
            <span className="chip shrink-0">{project.status}</span>
          </div>

          <p className="text-sm leading-relaxed text-slate-300">{project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-teal-300/35 bg-teal-300/10 px-3 py-1 text-xs text-teal-100">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-300/50 bg-cyan-300/15 px-3 py-1.5 text-xs font-medium text-cyan-100 transition hover:bg-cyan-300/25"
            >
              Live Demo
            </a>
            <a
              href={project.paper}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-teal-300/45 bg-teal-300/10 px-3 py-1.5 text-xs font-medium text-teal-100 transition hover:bg-teal-300/20"
            >
              Technical Paper
            </a>
          </div>
        </article>
      ))}
    </div>

    <article className="glass-panel p-5 sm:p-6">
      <h3 className="font-cyber text-base text-cyan-100 sm:text-lg">Future-Proof Component Structure</h3>
      <p className="mt-2 text-sm text-slate-300">
        Recommended composable architecture for scaling project cards, artifacts, and publication updates:
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {structureBlueprint.map((item) => (
          <div key={item} className="rounded-lg border border-cyan-300/20 bg-slate-950/70 px-3 py-2 text-xs text-cyan-100">
            {item}
          </div>
        ))}
      </div>
    </article>
  </section>
);

export default Projects;
