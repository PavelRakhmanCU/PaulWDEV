const parseTech = (tech) => {
  if (Array.isArray(tech)) return tech;
  if (typeof tech === 'string') {
    return tech
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
  }
  return [];
};

const GalleryItem = ({ work, onOpen }) => {
  const tags = parseTech(work.tech);

  const handleActivate = () => {
    onOpen?.(work);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleActivate();
    }
  };

  return (
    <article
      className="gallery-item gallery-item--interactive"
      tabIndex={0}
      role="button"
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      aria-label={`Open details for ${work.title}`}
    >
      <div className="gallery-item__thumb">
        <div className="gallery-item__frame">
          <img
            className="gallery-item__img"
            src={work.imageURL}
            alt={work.title}
            loading="lazy"
          />
        </div>
      </div>
      <div className="gallery-item__body">
        <h3 className="gallery-item__title">{work.title}</h3>
        <p className="gallery-item__caption">{work.caption}</p>
        <ul className="gallery-item__tech">
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default GalleryItem;
