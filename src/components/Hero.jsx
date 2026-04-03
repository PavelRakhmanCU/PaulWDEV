// Full-width hero: name, role, and down control to scroll to the next section.
import DownArrowButton from './DownArrowButton';

const Hero = () => {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <p className="hero__eyebrow">Portfolio</p>
        <h1 id="hero-title" className="hero__title">
          Paul Rakhman
        </h1>
        <p className="hero__subtitle">Full-stack web developer</p>
        <p className="hero__tagline">
          Structured interfaces, resilient systems, and interfaces with a terminal-era edge.
        </p>
      </div>
      <DownArrowButton targetId="cta" />
    </section>
  );
};

export default Hero;
