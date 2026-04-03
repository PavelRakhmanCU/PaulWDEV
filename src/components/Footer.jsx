// Fixed footer: year, email, LinkedIn, scroll-to-top.
import { FaLinkedin } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getUTCFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <p className="site-footer__copy">&copy; {currentYear} Paul Rakhman. All rights reserved.</p>
        <a className="site-footer__link" href="mailto:hello@example.com">
          hello@example.com
        </a>
      </div>
      <div className="site-footer__row site-footer__row--split">
        <a
          className="site-footer__link site-footer__link--inline"
          href="https://www.linkedin.com/in/pavel-rakhman-412189187"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin aria-hidden />
          <span>LinkedIn</span>
        </a>
        <button type="button" className="site-footer__top" onClick={scrollTop} aria-label="Back to top">
          <FaArrowUp aria-hidden />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
