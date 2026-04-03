import { useEffect } from 'react';

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

const WorkLightbox = ({ work, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!work) return null;

  const tags = parseTech(work.tech);
  const projectUrl =
    work.projectUrl != null && String(work.projectUrl).trim() !== ''
      ? String(work.projectUrl).trim()
      : '';
  const hasUrl = projectUrl.length > 0;

  return (
    <div
      className="work-lightbox"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="work-lightbox__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="work-lightbox-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="work-lightbox__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="work-lightbox__media">
          <div className="work-lightbox__frame">
            <img className="work-lightbox__img" src={work.imageURL} alt={work.title} />
          </div>
        </div>
        <div className="work-lightbox__content">
          <h3 id="work-lightbox-title" className="work-lightbox__title">
            {work.title}
          </h3>
          <p className="work-lightbox__caption">{work.caption}</p>
          {work.description ? (
            <p className="work-lightbox__description">{work.description}</p>
          ) : null}
          {tags.length > 0 && (
            <ul className="work-lightbox__tech">
              {tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
          {hasUrl ? (
            <a
              className="work-lightbox__cta"
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="work-lightbox__cta-label">View website</span>
            </a>
          ) : (
            <button type="button" className="work-lightbox__cta work-lightbox__cta--disabled" disabled>
              <span className="work-lightbox__cta-label">View website</span>
            </button>
          )}
          {!hasUrl && (
            <p className="work-lightbox__hint">Link will be added when the project is deployed.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkLightbox;
