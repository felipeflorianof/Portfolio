import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { FlagIcon } from "./FlagIcon";

const LANG_OPTIONS = [
  { code: "pt", label: "PT-BR" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export function SiteNav({ className = "site-nav site-nav--hero", onContactRepeat }) {
  const { lang, setLang, t, decreaseFont, increaseFont } = useApp();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <nav className={className}>
      <a
        href="#contact"
        className="nav-contact scroll-link"
        onClick={() => {
          if (window.location.hash === "#contact") {
            onContactRepeat?.();
          }
        }}
      >
        {t.navContact}
      </a>
      <div className="nav-controls">
        <div className="text-size-controls">
          <button
            type="button"
            className="text-size-btn"
            aria-label="Diminuir tamanho do texto"
            onClick={(e) => {
              decreaseFont();
              e.currentTarget.blur();
            }}
          >
            A-
          </button>
          <button
            type="button"
            className="text-size-btn"
            aria-label="Aumentar tamanho do texto"
            onClick={(e) => {
              increaseFont();
              e.currentTarget.blur();
            }}
          >
            A+
          </button>
        </div>
        <div
          className={`lang-dropdown${open ? " open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="lang-dropdown-trigger"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-label={t.navLanguage}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="lang-flag lang-flag-svg" aria-hidden="true">
              <FlagIcon lang={lang} />
            </span>
            <span className="lang-label">{t.navLanguage}</span>
            <span className="lang-chevron" aria-hidden="true">
              ▼
            </span>
          </button>
          <ul
            className="lang-dropdown-menu"
            role="listbox"
            aria-hidden={!open}
          >
            {LANG_OPTIONS.map((opt) => (
              <li
                key={opt.code}
                className="lang-option"
                role="option"
                tabIndex={0}
                onClick={() => {
                  setLang(opt.code);
                  setOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLang(opt.code);
                    setOpen(false);
                  }
                }}
              >
                <span className="lang-flag lang-flag-svg">
                  <FlagIcon lang={opt.code} />
                </span>{" "}
                {opt.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
