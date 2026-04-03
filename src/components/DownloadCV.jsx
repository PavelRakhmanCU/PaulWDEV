import { FaDownload } from 'react-icons/fa';

const DownloadCV = () => {
  return (
    <section className="download-cv" aria-labelledby="download-cv-heading">
      <h2 id="download-cv-heading" className="download-cv__title">
        Résumé
      </h2>
      <a className="download-cv-btn" href="/cv.pdf" download>
        <FaDownload aria-hidden />
        <span>Download CV</span>
      </a>
    </section>
  );
};

export default DownloadCV;
