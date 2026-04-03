// Mobile-only control for the bottom navigation sheet (see App.css — hidden from md breakpoint up).
import { CgMenuGridO } from 'react-icons/cg';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const ToggleSwitch = () => {
  const { activator, setActivator } = useContext(GlobalContext);

  return (
    <button
      type="button"
      className={`toggle-switch ${activator ? 'toggle-switch--active' : ''}`}
      onClick={() => setActivator(!activator)}
      aria-expanded={activator}
      aria-controls="site-navigation"
      aria-label={activator ? 'Close menu' : 'Open menu'}
    >
      <CgMenuGridO aria-hidden />
    </button>
  );
};

export default ToggleSwitch;
