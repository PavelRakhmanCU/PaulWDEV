import Layout from '../components/Layout';
import MyWorks from '../components/MyWorks';

const WorksPage = () => {
  return (
    <Layout>
      <section className="page-section page-section--compact">
        <h1 className="page-section__title">Works</h1>
      </section>
      <MyWorks />
    </Layout>
  );
};

export default WorksPage;
