// Layout wraps shared chrome (header, nav, footer) and main content. Mobile nav is toggled via GlobalContext; desktop nav stays visible with no toggle.
import { useContext } from 'react';
import Header from './Header';
import NavBar from './Navbar';
import ToggleSwitch from './ToggleSwitch';
import Footer from './Footer';
import { GlobalContext } from '../context/GlobalContext';

const Layout = ({ children }) => {
  const { activator, setActivator } = useContext(GlobalContext);

  return (
    <div className="layout">
      <Header />
      <NavBar />
      <button
        type="button"
        className={`layout__nav-overlay${activator ? ' layout__nav-overlay--visible' : ''}`}
        aria-label="Close navigation"
        tabIndex={activator ? 0 : -1}
        onClick={() => setActivator(false)}
      />
      <main className="layout__main">{children}</main>
      <Footer />
      <ToggleSwitch />
    </div>
  );
};

export default Layout;
