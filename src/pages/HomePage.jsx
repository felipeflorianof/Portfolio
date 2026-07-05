import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ExperienceSection } from "../components/ExperienceSection";
import { SiteNav } from "../components/SiteNav";
import { useApp } from "../context/AppContext";
import { portfolioCards } from "../data/projects";
import { useContactHighlight } from "../hooks/useContactHighlight";
import { useInView } from "../hooks/useInView";
import { useNavigateWithFade } from "../hooks/useNavigateWithFade";
import { usePageFadeIn } from "../hooks/usePageFadeIn";

export function HomePage() {
  const { t } = useApp();
  const navigateWithFade = useNavigateWithFade();
  const location = useLocation();
  const footerRef = useRef(null);
  const applyContactHighlight = useContactHighlight(footerRef);

  const [quoteRef, quoteInView, setQuoteInView] = useInView();
  const [portfolioRef, portfolioInView] = useInView();
  const [experienceRef, experienceInView] = useInView();

  usePageFadeIn();

  useEffect(() => {
    if (typeof history !== "undefined" && history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (location.state?.scrollToPortfolio) {
      requestAnimationFrame(() => {
        const el = document.getElementById("portfolio");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      window.history.replaceState({}, "");
      return;
    }

    const hash = window.location.hash;
    if (hash === "#work-intro") {
      requestAnimationFrame(() => {
        const el = document.getElementById("work-intro");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setQuoteInView(true);
        }
      });
      return;
    }

    if (hash !== "#portfolio" && hash !== "#contact") {
      window.scrollTo(0, 0);
    }
  }, [location.state, setQuoteInView]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash !== "#work-intro") return;
      const el = document.getElementById("work-intro");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setQuoteInView(true);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [setQuoteInView]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const landing = document.querySelector(".hero-landing");
      if (landing) landing.classList.add("hero-loaded");
      if (window.scrollY < 8) setQuoteInView(true);
    });
  }, [setQuoteInView]);

  return (
    <main>
      <div className="hero-landing">
        <section id="hero" className="hero">
          <SiteNav onContactRepeat={() => window.setTimeout(applyContactHighlight, 150)} />
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          <h1 className="hero-title">{t.heroTitle}</h1>
          <a href="#work-intro" className="hero-cta scroll-link">
            {t.heroCta}
          </a>
        </section>

        <section
          id="work-intro"
          ref={quoteRef}
          className={`quote-section${quoteInView ? " in-view" : ""}`}
        >
          <p className="site-quote">{t.heroQuote}</p>
        </section>
      </div>

      <section
        id="portfolio"
        ref={portfolioRef}
        className={`portfolio-section${portfolioInView ? " in-view" : ""}`}
      >
        <h2 className="portfolio-heading">{t.portfolioHeading}</h2>
        <div className="projects-grid">
          {portfolioCards.map((card) => (
            <a
              key={card.slug}
              href={`/work/${card.slug}`}
              className={`project-card ${card.cardClass} project-card-link`}
              onClick={(e) => {
                e.preventDefault();
                navigateWithFade(`/work/${card.slug}`);
              }}
            >
              <div className={`project-image-wrap ${card.wrapClass}`}>
                <img className="project-image" src={card.image} alt={card.alt} />
                <div className="project-info">
                  <span className="project-title">{t[card.titleKey]}</span>
                  <span className="project-tech">{t[card.techKey]}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="portfolio-hint">{t.portfolioHint}</p>
      </section>

      <ExperienceSection sectionRef={experienceRef} inView={experienceInView} />

      <a href="#hero" id="back-to-top" className="back-to-top scroll-link">
        {t.backToTop}
      </a>

      <footer id="contact" ref={footerRef} className="site-footer">
        <span className="footer-name">Felipe Fontes</span>
        <a
          href="https://www.linkedin.com/in/felipeflorianofontes/"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          className="footer-link"
        >
          LinkedIn
        </a>
        <a href="mailto:felipeflorianof@gmail.com" className="footer-link" aria-label="Email">
          Gmail
        </a>
      </footer>
    </main>
  );
}
