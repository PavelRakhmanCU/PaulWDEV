// Primary navigation. Desktop: top bar. Mobile: slides up from the bottom when the toggle activates (see App.css).
import { FaHome, FaEnvelope, FaInfo, FaImages, FaDownload } from 'react-icons/fa';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const NavBar = () => {
  const { activator, setActivator } = useContext(GlobalContext);

  const closeIfMobile = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches) {
      setActivator(false);
    }
  };

  const linkData = [
    { type: 'route', route: '/', name: 'Home', icon: <FaHome aria-hidden /> },
    { type: 'route', route: '/contact', name: 'Contact', icon: <FaEnvelope aria-hidden /> },
    { type: 'route', route: '/works', name: 'Works', icon: <FaImages aria-hidden /> },
    { type: 'route', route: '/about', name: 'About', icon: <FaInfo aria-hidden /> },
    {
      type: 'download',
      href: '/CV_Paul_Rakhman.pdf',
      downloadFileName: 'CV_Paul_Rakhman.pdf',
      name: 'Download CV',
      icon: <FaDownload aria-hidden />,
    },
  ];

  return (
    <nav
      id="site-navigation"
      className={`navbar ${activator ? 'navbar--open' : ''}`}
      aria-label="Main navigation"
    >
      <ul className="navbar__list">
        {linkData.map((link) => (
          <li
            key={link.type === 'route' ? link.route : link.href}
            className="navbar__item"
          >
            {link.type === 'route' ? (
              <NavLink
                to={link.route}
                end={link.route === '/'}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
                onClick={closeIfMobile}
              >
                <span className="navbar__icon">{link.icon}</span>
                <span className="navbar__label">{link.name}</span>
              </NavLink>
            ) : (
              <a
                className="navbar__link navbar__link--download"
                href={link.href}
                download={link.downloadFileName}
                onClick={closeIfMobile}
              >
                <span className="navbar__icon">{link.icon}</span>
                <span className="navbar__label">{link.name}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
