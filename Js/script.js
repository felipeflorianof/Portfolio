const languageEn = document.getElementById("language-en");
const languagePt = document.getElementById("language-pt");

const texts = {
    pt: {
        heroTitle: "Oi, sou o Felipe Fontes",
        heroSubtitle: "Engenheiro de software",
        heroCta: "Ver meus trabalhos",
        navPortfolio: "Portfolio",
        portfolioHeading: "Trabalhos em destaque",
        project1Title: "Marketplace PME",
        project1Tech: "Angular · TypeScript",
        project2Title: "Controle de frotas",
        project2Tech: "SQL · Laravel · PHP",
        experienceHeading: "Experiência",
        experienceRole: "Desenvolvedor de Software · Claro",
        experienceDescription: "Desenvolvimento e evolução de sistemas corporativos em ambiente de grande escala. Responsável por interfaces em Angular, APIs e integrações em PHP/Laravel e modelagem de dados com SQL. Atuação em decisões técnicas, qualidade de código e entrega de valor em time.",
        backToTop: "↑ Voltar ao topo",
    },
    en: {
        heroTitle: "Hi, I'm Felipe Fontes",
        heroSubtitle: "Software Engineer",
        heroCta: "See my work",
        navPortfolio: "Portfolio",
        portfolioHeading: "Featured work",
        project1Title: "Marketplace PME",
        project1Tech: "Angular · TypeScript",
        project2Title: "Fleet control system",
        project2Tech: "SQL · Laravel · PHP",
        experienceHeading: "Experience",
        experienceRole: "Software Developer · Claro",
        experienceDescription: "Design and evolution of corporate systems in large-scale environments. Ownership of Angular front-ends, PHP/Laravel APIs and integrations, and SQL data modeling. Involved in technical decisions, code quality, and delivery as part of the team.",
        backToTop: "↑ Back to top",
    },
};

function updateText(language) {
    const t = texts[language];
    document.querySelector(".hero-subtitle").textContent = t.heroSubtitle;
    document.querySelector(".hero-title").textContent = t.heroTitle;
    document.querySelector(".hero-cta").textContent = t.heroCta;
    document.querySelectorAll("[data-i18n='navPortfolio']").forEach((el) => (el.textContent = t.navPortfolio));
    document.querySelectorAll("[data-i18n='portfolioHeading']").forEach((el) => (el.textContent = t.portfolioHeading));
    document.querySelectorAll("[data-i18n='project1Title']").forEach((el) => (el.textContent = t.project1Title));
    document.querySelectorAll("[data-i18n='project1Tech']").forEach((el) => (el.textContent = t.project1Tech));
    document.querySelectorAll("[data-i18n='project2Title']").forEach((el) => (el.textContent = t.project2Title));
    document.querySelectorAll("[data-i18n='project2Tech']").forEach((el) => (el.textContent = t.project2Tech));
    document.querySelector(".experience-heading").textContent = t.experienceHeading;
    document.querySelector(".experience-role strong").textContent = t.experienceRole;
    document.querySelector(".experience-description").textContent = t.experienceDescription;
    document.getElementById("back-to-top").textContent = t.backToTop;
}

function setActiveButton(activeButton, inactiveButton) {
    activeButton.classList.add("active-language");
    inactiveButton.classList.remove("active-language");
}

function setLanguage(lang) {
    updateText(lang);
    setActiveButton(
        lang === "en" ? languageEn : languagePt,
        lang === "en" ? languagePt : languageEn
    );
    try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
}

languageEn.addEventListener("click", function () {
    setLanguage("en");
    this.blur();
});

languagePt.addEventListener("click", function () {
    setLanguage("pt");
    this.blur();
});

// Init: usa o idioma salvo (ex.: vindo da página work) ou padrão EN
var savedLang = null;
try { savedLang = localStorage.getItem("portfolio-lang"); } catch (e) {}
setLanguage(savedLang === "pt" ? "pt" : "en");

// Dispara a animação de entrada do hero (após o texto estar preenchido)
requestAnimationFrame(function () {
    var hero = document.querySelector(".hero");
    if (hero) hero.classList.add("hero-loaded");
});
