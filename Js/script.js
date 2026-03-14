if (typeof history !== "undefined" && history.scrollRestoration) history.scrollRestoration = "manual";
if (window.location.hash !== "#portfolio") window.scrollTo(0, 0);

const langTrigger = document.getElementById("lang-trigger");
const langDropdown = document.getElementById("lang-dropdown-menu");
const currentLangFlag = document.getElementById("current-lang-flag");
const fontDecrease = document.getElementById("font-decrease");
const fontIncrease = document.getElementById("font-increase");

function setCurrentFlag(lang) {
    var t = document.getElementById("flag-" + lang);
    if (t && currentLangFlag) currentLangFlag.innerHTML = t.outerHTML;
}
const FONT_SIZE_KEY = "portfolio-font-size";
const MIN_FONT = 80;
const MAX_FONT = 140;
const FONT_STEP = 10;

const texts = {
    pt: {
        heroTitle: "Oi, sou o Felipe Fontes",
        heroSubtitle: "Engenheiro de software",
        heroCta: "Ver meus trabalhos",
        heroQuote: "Gosto que o meu ficou um pouco descentralizado. Tem wabi-sabi.",
        navPortfolio: "Portfolio",
        navLanguage: "Idioma",
        navContact: "Fale comigo",
        portfolioHeading: "Trabalhos em destaque",
        project1Title: "Claro Marketplace PME",
        project1Tech: "Angular",
        project2Title: "Claro Controle de frotas",
        project2Tech: "Front · Back · SQL · Laravel · PHP",
        projectCardCta: "Clique para saber mais",
        portfolioHint: "Clique em uma imagem para ver mais detalhes sobre o projeto.",
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
        navLanguage: "Language",
        navContact: "Contact me",
        portfolioHeading: "Featured work",
        project1Title: "Claro Marketplace PME",
        project1Tech: "Angular",
        project2Title: "Claro Fleet control system",
        project2Tech: "Front · Back · SQL · Laravel · PHP",
        projectCardCta: "Click to learn more",
        portfolioHint: "Click on an image to see more details about the project.",
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
        navLanguage: "Langue",
        navContact: "Me contacter",
        portfolioHeading: "Réalisations",
        project1Title: "Claro Marketplace PME",
        project1Tech: "Angular",
        project2Title: "Claro Système de gestion de flotte",
        project2Tech: "Front · Back · SQL · Laravel · PHP",
        projectCardCta: "Cliquez pour en savoir plus",
        portfolioHint: "Cliquez sur une image pour voir plus de détails sur le projet.",
        experienceHeading: "Expérience",
        experienceRole: "Développeur de logiciels · Claro",
        experienceDuration: " · +3 ans",
        experienceDescription: "Conception et évolution de systèmes d'entreprise à grande échelle. Responsable des interfaces Angular, des API et intégrations PHP/Laravel, et de la modélisation des données en SQL. Impliqué dans les décisions techniques, la qualité du code et la livraison en équipe.",
        backToTop: "↑ Retour en haut",
    },
};

function updateText(language) {
    const t = texts[language];
    var el;
    if ((el = document.querySelector(".hero-subtitle"))) el.textContent = t.heroSubtitle;
    if ((el = document.querySelector(".hero-title"))) el.textContent = t.heroTitle;
    if ((el = document.querySelector(".hero-cta"))) el.textContent = t.heroCta;
    document.querySelectorAll("[data-i18n='heroQuote']").forEach(function (e) { e.textContent = t.heroQuote; });
    document.querySelectorAll("[data-i18n='navPortfolio']").forEach(function (e) { e.textContent = t.navPortfolio; });
    document.querySelectorAll("[data-i18n='navLanguage']").forEach(function (e) { e.textContent = t.navLanguage; });
    document.querySelectorAll("[data-i18n='navContact']").forEach(function (e) { e.textContent = t.navContact; });
    var langTriggerBtn = document.getElementById("lang-trigger");
    if (langTriggerBtn) langTriggerBtn.setAttribute("aria-label", t.navLanguage);
    document.querySelectorAll("[data-i18n='portfolioHeading']").forEach(function (e) { e.textContent = t.portfolioHeading; });
    document.querySelectorAll("[data-i18n='project1Title']").forEach(function (e) { e.textContent = t.project1Title; });
    document.querySelectorAll("[data-i18n='project1Tech']").forEach(function (e) { e.textContent = t.project1Tech; });
    document.querySelectorAll("[data-i18n='project2Title']").forEach(function (e) { e.textContent = t.project2Title; });
    document.querySelectorAll("[data-i18n='project2Tech']").forEach(function (e) { e.textContent = t.project2Tech; });
    document.querySelectorAll("[data-i18n='projectCardCta']").forEach(function (e) { e.textContent = t.projectCardCta; });
    document.querySelectorAll("[data-i18n='portfolioHint']").forEach(function (e) { e.textContent = t.portfolioHint; });
    if ((el = document.querySelector(".experience-heading"))) el.textContent = t.experienceHeading;
    if ((el = document.querySelector(".experience-role strong"))) el.textContent = t.experienceRole;
    document.querySelectorAll("[data-i18n='experienceDuration']").forEach(function (e) { e.textContent = t.experienceDuration; });
    if ((el = document.querySelector(".experience-description"))) el.textContent = t.experienceDescription;
    if ((el = document.getElementById("back-to-top"))) el.textContent = t.backToTop;
    setCurrentFlag(language);
}

function setLanguage(lang) {
    if (!texts[lang]) lang = "en";
    updateText(lang);
    try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
    closeLangDropdown();
}

function openLangDropdown() {
    if (langTrigger && langDropdown) {
        langTrigger.closest(".lang-dropdown").classList.add("open");
        langTrigger.setAttribute("aria-expanded", "true");
        langDropdown.setAttribute("aria-hidden", "false");
    }
}

function closeLangDropdown() {
    if (langTrigger && langDropdown) {
        langTrigger.closest(".lang-dropdown").classList.remove("open");
        langTrigger.setAttribute("aria-expanded", "false");
        langDropdown.setAttribute("aria-hidden", "true");
    }
}

if (langTrigger) {
    langTrigger.addEventListener("click", function (e) {
        e.stopPropagation();
        var isOpen = this.closest(".lang-dropdown").classList.contains("open");
        if (isOpen) closeLangDropdown(); else openLangDropdown();
    });
}

if (langDropdown) {
    langDropdown.querySelectorAll(".lang-option").forEach(function (opt) {
        opt.addEventListener("click", function () {
            var lang = this.getAttribute("data-lang");
            if (lang) setLanguage(lang);
            this.blur();
        });
    });
}

document.addEventListener("click", function () { closeLangDropdown(); });
if (langTrigger) langTrigger.closest(".lang-dropdown").addEventListener("click", function (e) { e.stopPropagation(); });

function getFontSize() {
    try {
        var n = parseInt(localStorage.getItem(FONT_SIZE_KEY), 10);
        return isNaN(n) ? 100 : Math.max(MIN_FONT, Math.min(MAX_FONT, n));
    } catch (e) { return 100; }
}

function setFontSize(percent) {
    percent = Math.max(MIN_FONT, Math.min(MAX_FONT, percent));
    document.documentElement.style.fontSize = percent + "%";
    try { localStorage.setItem(FONT_SIZE_KEY, String(percent)); } catch (e) {}
}

if (fontDecrease) fontDecrease.addEventListener("click", function () { setFontSize(getFontSize() - FONT_STEP); this.blur(); });
if (fontIncrease) fontIncrease.addEventListener("click", function () { setFontSize(getFontSize() + FONT_STEP); this.blur(); });

// Init: usa o idioma salvo (ex.: vindo da página work) ou padrão EN
var savedLang = null;
try { savedLang = localStorage.getItem("portfolio-lang"); } catch (e) {}
setLanguage(savedLang === "fr" || savedLang === "pt" ? savedLang : "en");
setFontSize(getFontSize());

function applyContactHighlight() {
    if (window.location.hash !== "#contact") return;
    var footer = document.getElementById("contact");
    if (!footer) return;
    footer.classList.remove("site-footer--highlight");
    footer.offsetHeight;
    window.setTimeout(function () {
        footer.classList.add("site-footer--highlight");
        window.setTimeout(function () { footer.classList.remove("site-footer--highlight"); }, 4200);
    }, 900);
}
applyContactHighlight();
window.addEventListener("hashchange", applyContactHighlight);
document.querySelectorAll('a[href="#contact"]').forEach(function (link) {
    link.addEventListener("click", function () {
        if (window.location.hash === "#contact") window.setTimeout(applyContactHighlight, 150);
    });
});

try {
    if (sessionStorage.getItem("scrollToPortfolio")) {
        sessionStorage.removeItem("scrollToPortfolio");
        requestAnimationFrame(function () {
            var el = document.getElementById("portfolio");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }
} catch (e) {}

// Dispara a animação de entrada do hero (após o texto estar preenchido)
requestAnimationFrame(function () {
    var hero = document.querySelector(".hero");
    if (hero) hero.classList.add("hero-loaded");
});

// Fade in ao carregar
requestAnimationFrame(function () {
    requestAnimationFrame(function () {
        document.body.classList.remove("fade-in-load");
    });
});

// Fade out ao clicar em link para work.html
document.addEventListener("click", function (e) {
    var a = e.target.closest("a[href*='work.html']");
    if (!a || a.target === "_blank" || a.host !== window.location.host) return;
    e.preventDefault();
    document.body.classList.add("page-fade-out");
    setTimeout(function () { window.location.href = a.href; }, 260);
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
