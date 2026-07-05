import { Navigate, useSearchParams } from "react-router-dom";
import { projectSlugToKey, projects } from "../data/projects";

export function LegacyWorkRedirect() {
  const [params] = useSearchParams();
  const slug = params.get("project") || params.get("p") || "marketplace-pme";

  if (projectSlugToKey[slug]) {
    return <Navigate to={`/work/${slug}`} replace />;
  }
  if (projects[slug]) {
    const mapped = Object.entries(projectSlugToKey).find(([, key]) => key === slug);
    return <Navigate to={`/work/${mapped ? mapped[0] : "marketplace-pme"}`} replace />;
  }
  return <Navigate to="/work/marketplace-pme" replace />;
}
