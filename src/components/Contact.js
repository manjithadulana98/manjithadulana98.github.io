import { Helmet } from 'react-helmet-async';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const links = [
  {
    label: 'manjitha456@gmail.com',
    href: 'mailto:manjitha456@gmail.com',
    icon: <MdEmail className="text-lg" />,
  },
  {
    label: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/manjitha-kularatne',
    icon: <FaLinkedinIn className="text-lg" />,
  },
  {
    label: 'GitHub Profile',
    href: 'https://github.com/manjithadulana98',
    icon: <FaGithub className="text-lg" />,
  },
];

const Contact = () => (
  <section className="space-y-6 py-6 sm:py-10">
    <Helmet>
      <title>Contact | Manjitha Kularatne</title>
      <meta
        name="description"
        content="Connect with Manjitha Kularatne for collaborations in biomedical AI, signal processing, and healthcare analytics."
      />
      <link rel="canonical" href="https://manjithadulana98.github.io/contact" />
    </Helmet>

    <div>
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">Open to collaboration on clinical AI, biosignal research, and high-impact healthcare data initiatives.</p>
    </div>

    <article className="glass-panel max-w-2xl p-5 sm:p-6">
      <div className="space-y-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-cyan-300/20 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-100"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-400/10 text-cyan-200">
              {link.icon}
            </span>
            {link.label}
          </a>
        ))}
      </div>
    </article>
  </section>
);

export default Contact;
