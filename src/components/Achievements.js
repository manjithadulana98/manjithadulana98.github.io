import { Helmet } from 'react-helmet-async';
import ieeeEMBSMoratuwaLogo from './logos/EMBS_UOM.jpg';
import ieeeEMBSSriLankaLogo from './logos/EMBS_SL.jpg';
import ypLogo from './logos/IEEE_YP.jpg';

const keyItems = [
  {
    title: 'Conjunctival and Retinal Dataset Contribution',
    detail:
      'Published IEEE DataPort contribution supporting diabetes-related vascular imaging and automated analysis research.',
    tag: 'IEEE DataPort',
  },
  {
    title: 'IEEE Electronic Design Competition',
    detail: 'Runners-up recognition for integrated biomedical hardware and software solutioning.',
    tag: 'Competition',
  },
  {
    title: 'Thinkwave 4.0 Eye Screening',
    detail: 'Runners-up achievement for intelligent eye screening innovation challenge.',
    tag: 'Innovation',
  },
];

const leadership = [
  { name: 'IEEE EMBS Moratuwa', role: 'Chairman (2022-2023)', logo: ieeeEMBSMoratuwaLogo },
  { name: 'IEEE EMBS Sri Lanka', role: 'Webmaster (2025)', logo: ieeeEMBSSriLankaLogo },
  { name: 'IEEE Young Professionals', role: 'Industry and Webmaster Roles', logo: ypLogo },
];

const Achievements = () => (
  <section className="space-y-6 py-6 sm:py-10">
    <Helmet>
      <title>Highlights | Manjitha Kularatne</title>
      <meta
        name="description"
        content="Highlights, research contributions, and IEEE leadership milestones by Manjitha Kularatne."
      />
      <link rel="canonical" href="https://manjithadulana98.github.io/achievements" />
    </Helmet>

    <div>
      <h2 className="section-title">Highlights & Contributions</h2>
      <p className="section-subtitle">Key research outcomes, technical competitions, and global engineering community leadership.</p>
    </div>

    <div className="grid gap-4 lg:grid-cols-3">
      {keyItems.map((item) => (
        <article key={item.title} className="glass-panel p-5 sm:p-6">
          <span className="chip">{item.tag}</span>
          <h3 className="mt-3 font-cyber text-sm text-cyan-100 sm:text-base">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.detail}</p>
        </article>
      ))}
    </div>

    <article className="glass-panel p-5 sm:p-6">
      <h3 className="font-cyber text-base text-cyan-100 sm:text-lg">Leadership and Volunteering</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((item) => (
          <div key={item.name} className="rounded-xl border border-cyan-300/20 bg-slate-950/70 p-4">
            <img src={item.logo} alt={item.name} className="h-16 w-16 rounded-lg object-cover" />
            <p className="mt-3 text-sm font-semibold text-cyan-100">{item.name}</p>
            <p className="text-xs text-slate-300">{item.role}</p>
          </div>
        ))}
      </div>
    </article>
  </section>
);

export default Achievements;
