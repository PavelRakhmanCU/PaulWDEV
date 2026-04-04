// Cycling typewriter-style tag: types each phrase, pauses, deletes, repeats; click reloads on home or goes home elsewhere.
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PHRASES = ['<Paul Rakhman>', 'Click to reload the page'];

const Header = () => {
  const [displayText, setDisplayText] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    let cancelled = false;
    let phraseIdx = 0;
    let charIdx = 0;
    let typing = true;
    let timeoutId;

    const TYPE_MS = 52;
    const DELETE_MS = 34;
    const PAUSE_END = 2200;
    const PAUSE_BETWEEN = 500;

    const schedule = (ms, fn) => {
      timeoutId = window.setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const step = () => {
      const full = PHRASES[phraseIdx];
      if (typing) {
        if (charIdx < full.length) {
          charIdx += 1;
          setDisplayText(full.slice(0, charIdx));
          schedule(TYPE_MS, step);
        } else {
          schedule(PAUSE_END, () => {
            typing = false;
            step();
          });
        }
      } else if (charIdx > 0) {
        charIdx -= 1;
        setDisplayText(full.slice(0, charIdx));
        schedule(DELETE_MS, step);
      } else {
        phraseIdx = (phraseIdx + 1) % PHRASES.length;
        typing = true;
        schedule(PAUSE_BETWEEN, step);
      }
    };

    setDisplayText('');
    schedule(PAUSE_BETWEEN, step);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  const handleTagClick = () => {
    if (isHome) {
      try {
        window.location.reload();
      } catch {
        navigate('/', { replace: true });
      }
      return;
    }
    navigate('/', { replace: false });
  };

  return (
    <header className="site-header">
      <button
        type="button"
        className="site-header__tag"
        onClick={handleTagClick}
        aria-label={isHome ? 'Reload the page' : 'Go to home page'}
      >
        <span className="site-header__tag-line">
          <span className="site-header__tag-text">{displayText}</span>
          <span className="site-header__cursor" aria-hidden>
            |
          </span>
        </span>
      </button>
    </header>
  );
};

export default Header;
