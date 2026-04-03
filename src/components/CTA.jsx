// Primary action: navigate to the contact route.
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="cta" id="cta" aria-labelledby="cta-heading">
      <h2 id="cta-heading" className="cta__heading">
        Start a project
      </h2>
      <p className="cta__copy">Tell me about your product, stack, and timeline.</p>
      <button
        type="button"
        className="cta-btn"
        onClick={() => navigate('/contact')}
      >
        Contact
      </button>
    </section>
  );
};

export default CTA;
