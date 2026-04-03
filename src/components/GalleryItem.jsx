import React from 'react';

const GalleryItem = ({ work }) => {
  return (
    <article className="gallery-item">
      <div className="gallery-item__thumb" aria-hidden />
      <div className="gallery-item__body">
        <h3 className="gallery-item__title">{work.title}</h3>
        <p className="gallery-item__blurb">{work.blurb}</p>
        <ul className="gallery-item__tech">
          {work.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default GalleryItem;
