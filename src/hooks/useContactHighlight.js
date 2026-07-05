import { useCallback, useEffect } from "react";

export function useContactHighlight(targetRef, highlightClass = "site-footer--highlight") {
  const applyHighlight = useCallback(() => {
    if (window.location.hash !== "#contact") return;
    const footer = targetRef.current;
    if (!footer) return;

    const target = footer.querySelector(".site-footer__contact-block") || footer;
    target.classList.remove(highlightClass);
    // eslint-disable-next-line no-unused-expressions
    target.offsetHeight;
    window.setTimeout(() => {
      target.classList.add(highlightClass);
      window.setTimeout(() => target.classList.remove(highlightClass), 4200);
    }, 900);
  }, [targetRef, highlightClass]);

  useEffect(() => {
    applyHighlight();
    window.addEventListener("hashchange", applyHighlight);
    return () => window.removeEventListener("hashchange", applyHighlight);
  }, [applyHighlight]);

  return applyHighlight;
}
