import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getDocLang, getSavedLang, texts } from "../data/i18n";

const FONT_SIZE_KEY = "portfolio-font-size";
const MIN_FONT = 80;
const MAX_FONT = 140;
const FONT_STEP = 10;

const AppContext = createContext(null);

function readFontSize() {
  try {
    const n = parseInt(localStorage.getItem(FONT_SIZE_KEY), 10);
    return Number.isNaN(n) ? 100 : Math.max(MIN_FONT, Math.min(MAX_FONT, n));
  } catch {
    return 100;
  }
}

export function AppProvider({ children }) {
  const [lang, setLangState] = useState(getSavedLang);
  const [fontSize, setFontSizeState] = useState(readFontSize);

  const setLang = useCallback((next) => {
    const value = texts[next] ? next : "en";
    setLangState(value);
    try {
      localStorage.setItem("portfolio-lang", value);
    } catch {
      /* ignore */
    }
  }, []);

  const clampAndStoreFont = (percent) => {
    const clamped = Math.max(MIN_FONT, Math.min(MAX_FONT, percent));
    try {
      localStorage.setItem(FONT_SIZE_KEY, String(clamped));
    } catch {
      /* ignore */
    }
    return clamped;
  };

  const decreaseFont = useCallback(() => {
    setFontSizeState((prev) => clampAndStoreFont(prev - FONT_STEP));
  }, []);

  const increaseFont = useCallback(() => {
    setFontSizeState((prev) => clampAndStoreFont(prev + FONT_STEP));
  }, []);

  useEffect(() => {
    document.documentElement.lang = getDocLang(lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: texts[lang],
      fontSize,
      decreaseFont,
      increaseFont,
    }),
    [lang, setLang, fontSize, decreaseFont, increaseFont],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
