// Primary navigation. Desktop: top bar. Mobile: slides up from the bottom when the toggle activates (see App.css).
import { FaHome, FaEnvelope, FaInfo, FaImages } from 'react-icons/fa';
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
    { route: '/', name: 'Home', icon: <FaHome aria-hidden /> },
    { route: '/contact', name: 'Contact', icon: <FaEnvelope aria-hidden /> },
    { route: '/works', name: 'Works', icon: <FaImages aria-hidden /> },
    { route: '/about', name: 'About', icon: <FaInfo aria-hidden /> },
  ];

  return (
    <nav
      id="site-navigation"
      className={`navbar ${activator ? 'navbar--open' : ''}`}
      aria-label="Main navigation"
    >
      <ul className="navbar__list">
        {linkData.map((link) => (
          <li key={link.route} className="navbar__item">
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
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
