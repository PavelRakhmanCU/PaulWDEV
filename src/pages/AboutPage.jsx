import Layout from '../components/Layout';

const PORTRAIT_URL =
  'https://res.cloudinary.com/dicvjx88i/image/upload/v1775261696/1000006209_yvzqop.jpg';

const STORY_PARAGRAPHS = [
  'Greetings, traveler 🌌',
  "I'm Paul, web developer and digital scavenger. Welcome to my terminal – where code meets creativity.",
  "Survivor of the coding wasteland. Post-apocalypse, I resurrect websites. By day, I craft digital spaces for rebels and creators. By night, I'm glued to code, a synthwave soundtrack blasting.",
  'Born in the ruins of university (2006), I rebooted my journey in 2021, mastering the art of pixels and logic. Now, I build for tattoo artists, construction crews, and language warriors.',
  'When offline: shredding keys, chasing guitar notes, or devouring fantasy tomes.',
  'Ready to build something rad?',
];

const AboutPage = () => {
  return (
    <Layout>
      <section className="about-page page-section" id="about" aria-labelledby="about-page-title">
        <h1 id="about-page-title" className="about-page__title">
          About me
        </h1>
        <div className="about-page__layout">
          <figure className="about-page__figure">
            <div className="about-page__frame">
              <img
                className="about-page__img"
                src={PORTRAIT_URL}
                alt="Paul Rakhman"
                loading="lazy"
              />
            </div>
            <figcaption className="about-page__caption">Digital scavenger / web developer</figcaption>
          </figure>
          <div className="about-page__story">
            {STORY_PARAGRAPHS.map((text, i) => (
              <p key={i} className="about-page__p">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
