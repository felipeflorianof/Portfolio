import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { SiteNav } from "../components/SiteNav";
import { useApp } from "../context/AppContext";
import { projects, resolveProjectKey } from "../data/projects";
import { useContactHighlight } from "../hooks/useContactHighlight";
import { useNavigateWithFade } from "../hooks/useNavigateWithFade";
import { usePageFadeIn } from "../hooks/usePageFadeIn";

export function WorkPage() {
  const { slug } = useParams();
  const { lang, t } = useApp();
  const navigateWithFade = useNavigateWithFade();
  const footerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [lightboxAlt, setLightboxAlt] = useState("");

  const applyContactHighlight = useContactHighlight(footerRef);
  usePageFadeIn();

  const projectKey = resolveProjectKey(slug);
  const project = projects[projectKey];
  const data = project[lang] || project.en;

  const techLine =
    data.techLine != null ? data.techLine : `${t.builtWith} ${data.tech}.`;

  useEffect(() => {
    document.title = `${data.title} — Felipe Fontes`;
    window.scrollTo(0, 0);
  }, [data.title]);

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen]);

  const openLightbox = () => {
    setLightboxSrc(data.image);
    setLightboxAlt(data.title);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <>
      <header className="site-header site-header--minimal">
        <SiteNav onContactRepeat={() => window.setTimeout(applyContactHighlight, 150)} />
      </header>

      <main className="work-main">
        <a
          href="/"
          className="work-back"
          onClick={(e) => {
            e.preventDefault();
            navigateWithFade("/", { state: { scrollToPortfolio: true } });
          }}
        >
          {t.backLabel}
        </a>
        <article className="work-article">
          <h1 className="work-title">{data.title}</h1>
          <p className="work-description">{data.description}</p>
          <p className="work-tech">{techLine}</p>
          <img
            className="work-image"
            src={data.image}
            alt={data.title}
            onClick={openLightbox}
          />
        </article>
      </main>

      <footer id="contact" ref={footerRef} className="site-footer work-page-footer">
        <a href="#top" className="work-back-to-top">
          {t.backToTop}
        </a>
        <div className="site-footer__contact-block">
          <span className="footer-name">Felipe Fontes</span>
          <a
            href="https://www.linkedin.com/in/felipeflorianofontes/"
            target="_blank"
            rel="noopener"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a href="mailto:felipeflorianof@gmail.com" className="footer-link">
            Gmail
          </a>
        </div>
      </footer>

      <div
        className={`work-lightbox${lightboxOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Imagem ampliada"
        aria-hidden={!lightboxOpen}
      >
        <div className="work-lightbox__backdrop" onClick={closeLightbox} />
        <div className="work-lightbox__content">
          <img className="work-lightbox__image" src={lightboxSrc} alt={lightboxAlt} />
          <button
            ref={closeBtnRef}
            type="button"
            className="work-lightbox__close"
            aria-label="Fechar"
            onClick={closeLightbox}
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
}
