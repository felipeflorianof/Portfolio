import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LegacyWorkRedirect } from "./pages/LegacyWorkRedirect";
import { WorkPage } from "./pages/WorkPage";

function BodyClassManager() {
  const location = useLocation();
  const isWork = location.pathname.startsWith("/work");

  useEffect(() => {
    document.body.classList.remove("page-fade-out", "work-page", "fade-in-load");
    if (isWork) {
      document.body.classList.add("work-page");
      document.body.id = "top";
    } else {
      document.body.classList.remove("work-page");
      document.body.removeAttribute("id");
    }
  }, [isWork, location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <BodyClassManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<WorkPage />} />
        <Route path="/work.html" element={<LegacyWorkRedirect />} />
      </Routes>
    </>
  );
}
