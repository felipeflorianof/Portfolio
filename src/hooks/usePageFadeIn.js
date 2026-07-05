import { useEffect } from "react";

export function usePageFadeIn() {
  useEffect(() => {
    document.body.classList.add("fade-in-load");
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.remove("fade-in-load");
      });
    });
    return () => cancelAnimationFrame(id);
  }, []);
}
