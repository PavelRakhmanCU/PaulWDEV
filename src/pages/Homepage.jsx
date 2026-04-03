import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import MyExpertise from '../components/MyExpertise';
import MyWorks from '../components/MyWorks';
import DownloadCV from '../components/DownloadCV';

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <CTA />
      <MyExpertise />
      <MyWorks />
      <DownloadCV />
    </Layout>
  );
};

export default Homepage;
