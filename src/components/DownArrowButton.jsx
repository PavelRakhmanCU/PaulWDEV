// Scrolls to the next section; glow pulse via CSS (see .down-arrow-btn in App.css).
import { FaChevronCircleDown } from 'react-icons/fa';

const DownArrowButton = ({ targetId = 'cta' }) => {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button
      type="button"
      className="down-arrow-btn"
      onClick={handleClick}
      aria-label="Scroll to the next section"
    >
      <FaChevronCircleDown aria-hidden />
    </button>
  );
};

export default DownArrowButton;
