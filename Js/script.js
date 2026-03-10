if (typeof history !== "undefined" && history.scrollRestoration) history.scrollRestoration = "manual";
var savedScrollY = null;
(function () {
    var hash = window.location.hash;
    if (hash) {
        var m = hash.match(/^#scroll=(\d+)$/);
        if (m) {
            var n = parseInt(m[1], 10);
            if (!isNaN(n) && n >= 0) savedScrollY = n;
        }
    }
    if (savedScrollY !== null && typeof history !== "undefined" && history.replaceState) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
    }
})();
if (!savedScrollY) window.scrollTo(0, 0);

const languageEn = document.getElementById("language-en");
const languageFr = document.getElementById("language-fr");
const languagePt = document.getElementById("language-pt");

const texts = {
    pt: {
        heroTitle: "Oi, sou o Felipe Fontes",
        heroSubtitle: "Engenheiro de software",
        heroCta: "Ver meus trabalhos",
        heroQuote: "Gosto que o meu ficou um pouco descentralizado. Tem wabi-sabi.",
        navPortfolio: "Portfolio",
        portfolioHeading: "Trabalhos em destaque",
        project1Title: "Claro Marketplace PME",
        project1Tech: "Angular",
        project2Title: "Claro Controle de frotas",
        project2Tech: "Front · Back · SQL · Laravel · PHP",
        projectCardCta: "Clique para saber mais",
        experienceHeading: "Experiência",
        experienceRole: "Desenvolvedor de Software · Claro",
        experienceDuration: " · +3 anos",
        experienceDescription: "Desenvolvimento e evolução de sistemas corporativos em ambiente de grande escala. Responsável por interfaces em Angular, APIs e integrações em PHP/Laravel e modelagem de dados com SQL. Atuação em decisões técnicas, qualidade de código e entrega de valor em time.",
        backToTop: "↑ Voltar ao topo",
    },
    en: {
        heroTitle: "Hi, I'm Felipe Fontes",
        heroSubtitle: "Software Engineer",
        heroCta: "See my work",
        heroQuote: "I like how mine's a little off-center. It's got wabi-sabi.",
        navPortfolio: "Portfolio",
        portfolioHeading: "Featured work",
        project1Title: "Claro Marketplace PME",
        project1Tech: "Angular",
        project2Title: "Claro Fleet control system",
        project2Tech: "Front · Back · SQL · Laravel · PHP",
        projectCardCta: "Click to learn more",
        experienceHeading: "Experience",
        experienceRole: "Software Developer · Claro",
        experienceDuration: " · 3+ years",
        experienceDescription: "Design and evolution of corporate systems in large-scale environments. Ownership of Angular front-ends, PHP/Laravel APIs and integrations, and SQL data modeling. Involved in technical decisions, code quality, and delivery as part of the team.",
        backToTop: "↑ Back to top",
    },
    fr: {
        heroTitle: "Bonjour, je suis Felipe Fontes",
        heroSubtitle: "Ingénieur logiciel",
        heroCta: "Voir mes réalisations",
        heroQuote: "J'aime que le mien soit un peu décentré. Il a du wabi-sabi.",
        navPortfolio: "Portfolio",
        portfolioHeading: "Réalisations",
        project1Title: "Claro Marketplace PME",
        project1Tech: "Angular",
        project2Title: "Claro Système de gestion de flotte",
        project2Tech: "Front · Back · SQL · Laravel · PHP",
        projectCardCta: "Cliquez pour en savoir plus",
        experienceHeading: "Expérience",
        experienceRole: "Développeur de logiciels · Claro",
        experienceDuration: " · +3 ans",
        experienceDescription: "Conception et évolution de systèmes d'entreprise à grande échelle. Responsable des interfaces Angular, des API et intégrations PHP/Laravel, et de la modélisation des données en SQL. Impliqué dans les décisions techniques, la qualité du code et la livraison en équipe.",
        backToTop: "↑ Retour en haut",
    },
};

function updateText(language) {
    const t = texts[language];
    document.querySelector(".hero-subtitle").textContent = t.heroSubtitle;
    document.querySelector(".hero-title").textContent = t.heroTitle;
    document.querySelector(".hero-cta").textContent = t.heroCta;
    document.querySelectorAll("[data-i18n='heroQuote']").forEach(function (el) { el.textContent = t.heroQuote; });
    document.querySelectorAll("[data-i18n='navPortfolio']").forEach((el) => (el.textContent = t.navPortfolio));
    document.querySelectorAll("[data-i18n='portfolioHeading']").forEach((el) => (el.textContent = t.portfolioHeading));
    document.querySelectorAll("[data-i18n='project1Title']").forEach((el) => (el.textContent = t.project1Title));
    document.querySelectorAll("[data-i18n='project1Tech']").forEach((el) => (el.textContent = t.project1Tech));
    document.querySelectorAll("[data-i18n='project2Title']").forEach((el) => (el.textContent = t.project2Title));
    document.querySelectorAll("[data-i18n='project2Tech']").forEach((el) => (el.textContent = t.project2Tech));
    document.querySelectorAll("[data-i18n='projectCardCta']").forEach((el) => (el.textContent = t.projectCardCta));
    document.querySelector(".experience-heading").textContent = t.experienceHeading;
    document.querySelector(".experience-role strong").textContent = t.experienceRole;
    document.querySelectorAll("[data-i18n='experienceDuration']").forEach(function (el) { el.textContent = t.experienceDuration; });
    document.querySelector(".experience-description").textContent = t.experienceDescription;
    document.getElementById("back-to-top").textContent = t.backToTop;
}

var langButtons = { en: languageEn, fr: languageFr, pt: languagePt };

function setActiveButton(activeLang) {
    Object.keys(langButtons).forEach(function (key) {
        var btn = langButtons[key];
        if (btn) btn.classList.toggle("active-language", key === activeLang);
    });
}

function setLanguage(lang) {
    if (!texts[lang]) lang = "en";
    updateText(lang);
    setActiveButton(lang);
    try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
}

languageEn.addEventListener("click", function () { setLanguage("en"); this.blur(); });
if (languageFr) languageFr.addEventListener("click", function () { setLanguage("fr"); this.blur(); });
languagePt.addEventListener("click", function () { setLanguage("pt"); this.blur(); });

// Init: usa o idioma salvo (ex.: vindo da página work) ou padrão EN
var savedLang = null;
try { savedLang = localStorage.getItem("portfolio-lang"); } catch (e) {}
setLanguage(savedLang === "fr" || savedLang === "pt" ? savedLang : "en");

// Dispara a animação de entrada do hero (após o texto estar preenchido)
requestAnimationFrame(function () {
    var hero = document.querySelector(".hero");
    if (hero) hero.classList.add("hero-loaded");
});

// Fade in ao carregar; restaura scroll ao voltar do work (após load para Netlify/CDN)
requestAnimationFrame(function () {
    requestAnimationFrame(function () {
        document.body.classList.remove("fade-in-load");
        if (savedScrollY != null) window.scrollTo(0, savedScrollY);
        else window.scrollTo(0, 0);
    });
});
window.addEventListener("load", function () {
    if (savedScrollY != null) {
        window.scrollTo(0, savedScrollY);
        setTimeout(function () { window.scrollTo(0, savedScrollY); }, 50);
    } else window.scrollTo(0, 0);
});

// Fade out ao clicar em link para work.html
document.addEventListener("click", function (e) {
    var a = e.target.closest("a[href*='work.html']");
    if (!a || a.target === "_blank" || a.host !== window.location.host) return;
    e.preventDefault();
    var scrollY = Math.round(window.scrollY);
    var url = a.href.indexOf("?") >= 0 ? a.href + "&from_scroll=" + scrollY : a.href + "?from_scroll=" + scrollY;
    document.body.classList.add("page-fade-out");
    setTimeout(function () { window.location.href = url; }, 260);
});

// Animação ao rolar: seções entram quando aparecem na tela
(function () {
    var sections = document.querySelectorAll(".quote-section, .portfolio-section, .experience-section");
    if (!sections.length) return;
    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) entry.target.classList.add("in-view");
            });
        },
        { rootMargin: "0px 0px -80px 0px", threshold: 0.1 }
    );
    sections.forEach(function (el) { observer.observe(el); });
})();
