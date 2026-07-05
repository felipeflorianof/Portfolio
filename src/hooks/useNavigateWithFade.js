import { useNavigate } from "react-router-dom";

export function useNavigateWithFade() {
  const navigate = useNavigate();

  return (to, options) => {
    document.body.classList.add("page-fade-out");
    window.setTimeout(() => navigate(to, options), 260);
  };
}
