export function FlagIcon({ lang }) {
  if (lang === "pt") {
    return (
      <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
        <rect width="20" height="14" fill="#009739" />
        <path d="M10 0L20 7 10 14 0 7z" fill="#FEDD00" />
        <circle cx="10" cy="7" r="3.2" fill="#012169" />
      </svg>
    );
  }

  if (lang === "fr") {
    return (
      <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
        <rect width="6.67" height="14" fill="#002395" />
        <rect x="6.67" width="6.66" height="14" fill="#fff" />
        <rect x="13.33" width="6.67" height="14" fill="#ED2939" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
      <rect width="20" height="14" fill="#B22234" />
      <rect y="1.08" width="20" height="1.08" fill="#fff" />
      <rect y="2.16" width="20" height="1.08" fill="#B22234" />
      <rect y="3.24" width="20" height="1.08" fill="#fff" />
      <rect y="4.32" width="20" height="1.08" fill="#B22234" />
      <rect y="5.4" width="20" height="1.08" fill="#fff" />
      <rect y="6.48" width="20" height="1.08" fill="#B22234" />
      <rect y="7.56" width="20" height="1.08" fill="#fff" />
      <rect y="8.64" width="20" height="1.08" fill="#B22234" />
      <rect y="9.72" width="20" height="1.08" fill="#fff" />
      <rect y="10.8" width="20" height="1.08" fill="#B22234" />
      <rect y="11.88" width="20" height="1.08" fill="#fff" />
      <rect width="8" height="7.56" fill="#3C3B6E" />
    </svg>
  );
}
