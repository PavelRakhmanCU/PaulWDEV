// Animated tag: alternates between name and reload hint; click reloads the page.
import { useEffect, useState } from 'react';

const Header = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPhase((p) => (p + 1) % 2);
    }, 3800);
    return () => window.clearInterval(id);
  }, []);

  const label = phase === 0 ? '<Paul Rakhman>' : 'Click to reload the page';

  return (
    <header className="site-header">
      <button
        type="button"
        className="site-header__tag"
        onClick={() => window.location.reload()}
        aria-label="Reload the page"
      >
        <span className="site-header__tag-text" key={label}>
          {label}
        </span>
      </button>
    </header>
  );
};

export default Header;
