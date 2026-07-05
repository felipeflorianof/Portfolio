import { useApp } from "../context/AppContext";
import { experienceByLang } from "../data/experience";

function CompanyLogo({ entry }) {
  if (entry.logo) {
    return <img className="exp-logo" src={entry.logo} alt={entry.company} />;
  }

  return (
    <div
      className="exp-logo exp-logo--placeholder"
      style={{ backgroundColor: entry.logoColor }}
      aria-hidden="true"
    >
      {entry.logoInitials}
    </div>
  );
}

function ExperienceEntry({ entry, remoteLabel }) {
  const role = entry.roles[0];

  return (
    <article className="exp-entry">
      <div className="exp-entry-logo">
        <CompanyLogo entry={entry} />
      </div>

      <div className="exp-entry-body">
        <div className="exp-company-block">
          <h3 className="exp-company-name">{entry.company}</h3>
          <p className="exp-meta-line">
            {entry.employment} · {remoteLabel}
          </p>
        </div>

        <span className="exp-role-marker" aria-hidden="true" />
        <div className="exp-role-text">
          <h4 className="exp-role-title">{role.title}</h4>
          <p className="exp-dates">{role.dates}</p>
        </div>
      </div>
    </article>
  );
}

export function ExperienceSection({ sectionRef, inView }) {
  const { lang, t } = useApp();
  const experience = experienceByLang[lang] ?? experienceByLang.en;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`experience-section${inView ? " in-view" : ""}`}
    >
      <h2 className="experience-heading">{t.experienceHeading}</h2>
      <div className="experience-card">
        {experience.entries.map((entry, index) => (
          <div key={entry.id}>
            <ExperienceEntry entry={entry} remoteLabel={experience.remoteLabel} />
            {index < experience.entries.length - 1 && <hr className="exp-divider" />}
          </div>
        ))}
      </div>
    </section>
  );
}
