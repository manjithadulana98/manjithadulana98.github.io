import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Education', path: '/education' },
  { label: 'Experience', path: '/experience' },
  { label: 'Research', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Highlights', path: '/achievements' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-cyan-300/20 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="font-cyber text-xs tracking-[0.2em] text-cyan-300 sm:text-sm">
          MK::DEEPTECH
        </Link>
        <ul className="flex max-w-[78vw] items-center gap-1 overflow-x-auto whitespace-nowrap pb-1 text-sm sm:gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`rounded-full px-3 py-1.5 transition ${
                    isActive
                      ? 'border border-cyan-300/60 bg-cyan-300/15 text-cyan-100 shadow-[0_0_18px_rgba(56,189,248,0.3)]'
                      : 'border border-transparent text-slate-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-100'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
