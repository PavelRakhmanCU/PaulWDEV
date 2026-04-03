// Project grid from `myWorksData`; click opens lightbox with mockup, caption, and optional live link.
import { useCallback, useState } from 'react';
import { myWorksData } from '../data/myWorksData';
import GalleryItem from './GalleryItem';
import WorkLightbox from './WorkLightbox';

const MyWorks = () => {
  const [activeWork, setActiveWork] = useState(null);
  const closeLightbox = useCallback(() => setActiveWork(null), []);

  return (
    <section className="my-works" id="works" aria-labelledby="works-heading">
      <h2 id="works-heading" className="my-works__title">
        My works
      </h2>
      <div className="my-works-grid">
        {myWorksData.map((item) => (
          <GalleryItem key={item.id} work={item} onOpen={setActiveWork} />
        ))}
      </div>
      {activeWork && <WorkLightbox work={activeWork} onClose={closeLightbox} />}
    </section>
  );
};

export default MyWorks;
