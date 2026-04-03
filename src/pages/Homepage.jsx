import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import MyExpertise from '../components/MyExpertise';
import MyWorks from '../components/MyWorks';

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <CTA />
      <MyExpertise />
      <MyWorks />
    </Layout>
  );
};

export default Homepage;
