import { Helmet } from 'react-helmet-async';

const education = [
  {
    title: 'M.Sc. in Data Science and Artificial Intelligence',
    institution: 'University of Moratuwa',
    years: '2025 - Present',
    note: 'Focus on advanced machine learning, deep learning, statistical inference, and explainable analytics for EEG attention decoding.',
  },
  {
    title: 'B.Sc. in Biomedical Engineering (Entrepreneurship Minor)',
    institution: 'University of Moratuwa',
    years: '2018 - 2023',
    note: "Second Class Upper Division, CGPA 3.57/4.2. Core grounding in biosignal processing, medical imaging, embedded systems, and biomedical instrumentation.",
  },
  {
    title: 'G.C.E Advanced Level',
    institution: "St. Peter's College, Colombo",
    years: '2004 - 2017',
    note: 'Z-score 2.083, Island Rank 319, District Rank 98.',
  },
];

const Education = () => (
  <section className="space-y-6 py-6 sm:py-10">
    <Helmet>
      <title>Education | Manjitha Kularatne</title>
      <meta
        name="description"
        content="Academic journey in biomedical engineering and data science, including current postgraduate AI studies."
      />
      <link rel="canonical" href="https://manjithadulana98.github.io/education" />
    </Helmet>

    <div>
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">Training at the intersection of engineering medicine and intelligent systems.</p>
    </div>

    <div className="space-y-4">
      {education.map((item) => (
        <article key={item.title} className="glass-panel p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-cyber text-base text-cyan-100 sm:text-lg">{item.title}</h3>
            <span className="chip">{item.years}</span>
          </div>
          <p className="mt-1 text-sm font-medium text-teal-200">{item.institution}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.note}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Education;
