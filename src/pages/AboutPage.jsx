import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <section className="page-section" id="about">
        <h1 className="page-section__title">About</h1>
        <p className="page-section__lead">
          Full-stack web developer building structured, maintainable interfaces with a sci-fi edge.
        </p>
      </section>
    </Layout>
  );
};

export default AboutPage;
