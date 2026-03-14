const projects = {
    manutencao: {
        pt: {
            title: "Claro Controle de frotas",
            tech: "Laravel · PHP",
            techLine: "Front-end e Back-end construído com Laravel · PHP.",
            image: "assets/riseshot-17731932181513871.png",
            description: "Sistema interno para controle da frota de veículos da empresa. Gerencia a frota de carros da Claro em quase todos os estados do Nordeste. O projeto me foi passado para manter em funcionamento: manutenção, correção de bugs e ajustes. Atuo sozinho em front-end, back-end e banco de dados."
        },
        en: {
            title: "Claro Fleet control system",
            tech: "Laravel · PHP",
            techLine: "Front-end and Back-end built with Laravel · PHP.",
            image: "assets/riseshot-17731932181513871.png",
            description: "Internal system for managing the company's vehicle fleet. It handles Claro's car fleet across almost all states in Brazil's Northeast. I was brought in to keep it running: maintenance, bug fixes, and improvements. I work on it alone, covering front-end, back-end, and database."
        },
        fr: {
            title: "Claro Système de gestion de flotte",
            tech: "Laravel · PHP",
            techLine: "Front-end et Back-end construit avec Laravel · PHP.",
            image: "assets/riseshot-17731932181513871.png",
            description: "Système interne de gestion de la flotte de véhicules. Il gère la flotte automobile de Claro dans presque tous les États du Nord-Est du Brésil. Le projet m'a été confié pour le maintenir en état de marche : maintenance, corrections de bugs et ajustements. J'interviens seul sur le front-end, le back-end et la base de données."
        }
    },
    equipe: {
        pt: {
            title: "Claro Marketplace PME",
            tech: "Angular",
            image: "assets/claro-marketplace-pme.png",
            description: "Atuo como desenvolvedor front-end neste projeto em equipe, com foco em interfaces em Angular. O sistema nasceu em WordPress e foi migrado para Angular. É uma plataforma de autoatendimento para empresas e representantes comprarem produtos e serviços da Claro e de parceiros. O layout segue a identidade visual da Claro, com adaptações que dão cara própria ao produto e simplificam a jornada de compra. O código segue boas práticas de SEO."
        },
        en: {
            title: "Claro Marketplace PME",
            tech: "Angular",
            image: "assets/claro-marketplace-pme.png",
            description: "I work as a front-end developer on this team project, building interfaces in Angular. The product started on WordPress and was later migrated to Angular. It's a self-service platform where businesses and company representatives can easily buy products and services from Claro and its partners. The layout follows Claro's visual identity, with adaptations that give the product its own look and simplify the buying journey. The code follows solid SEO practices."
        },
        fr: {
            title: "Claro Marketplace PME",
            tech: "Angular",
            image: "assets/claro-marketplace-pme.png",
            description: "Je travaille en tant que développeur front-end sur ce projet d'équipe, sur les interfaces en Angular. Le produit a d'abord été développé sur WordPress puis migré vers Angular. C'est une plateforme en libre-service permettant aux entreprises et représentants d'acheter facilement des produits et services Claro et de ses partenaires. La maquette respecte l'identité visuelle de Claro, avec des adaptations qui donnent au produit sa propre identité et simplifient le parcours d'achat. Le code respecte les bonnes pratiques SEO."
        }
    }
};

const backLabel = { pt: "← Voltar ao portfolio", en: "← Back to portfolio", fr: "← Retour au portfolio" };
const backToTopLabel = { pt: "↑ Voltar ao topo", en: "↑ Back to top", fr: "↑ Retour en haut" };
const builtWithLabel = { pt: "Construído com", en: "Built with", fr: "Construit avec" };
const langLabel = { pt: "Idioma", en: "Language", fr: "Langue" };
const contactLabel = { pt: "Fale comigo", en: "Contact me", fr: "Me contacter" };
const FONT_SIZE_KEY = "portfolio-font-size";
const MIN_FONT = 80;
const MAX_FONT = 140;
const FONT_STEP = 10;

var projectSlugToKey = { "marketplace-pme": "equipe", "fleet-control": "manutencao" };

function getParam() {
    const params = new URLSearchParams(window.location.search);
    var slug = params.get("project") || params.get("p");
    if (projectSlugToKey[slug]) return projectSlugToKey[slug];
    if (projects[slug]) return slug;
    return "equipe";
}

function getLang() {
    var lang = document.documentElement.lang;
    if (lang.startsWith("fr")) return "fr";
    if (lang.startsWith("en")) return "en";
    return "pt";
}

function setLang(lang) {
    var docLang = lang === "en" ? "en" : lang === "fr" ? "fr" : "pt-BR";
    document.documentElement.lang = docLang;
    if (typeof localStorage !== "undefined") localStorage.setItem("portfolio-lang", lang);
}

function render(projectKey) {
    const key = projects[projectKey] ? projectKey : "equipe";
    const lang = getLang();
    const project = projects[key];
    const data = project[lang] || project.en;

    document.getElementById("work-title").textContent = data.title;
    document.getElementById("work-description").textContent = data.description;
    document.getElementById("work-tech").textContent = data.techLine != null ? data.techLine : (builtWithLabel[lang] || builtWithLabel.en) + " " + data.tech + ".";
    var workImg = document.getElementById("work-image");
    workImg.src = data.image;
    workImg.alt = data.title;
    var backEl = document.getElementById("work-back");
    backEl.textContent = backLabel[lang];
    var basePath = window.location.pathname.replace(/\/[^/]*$/, "") || "/";
    var indexUrl = basePath === "/" ? "/" : basePath + "/";
    backEl.href = indexUrl;
    var backToTopEl = document.getElementById("work-back-to-top");
    if (backToTopEl) backToTopEl.textContent = backToTopLabel[lang] || backToTopLabel.en;
    document.title = data.title + " — Felipe Fontes";
}

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

function updateLangTrigger(lang) {
    var flagEl = document.getElementById("current-lang-flag");
    var t = document.getElementById("flag-" + lang);
    if (flagEl && t) flagEl.innerHTML = t.outerHTML;
    var label = langLabel[lang] || langLabel.en;
    var labelEl = document.querySelector(".lang-label");
    if (labelEl) labelEl.textContent = label;
    var btn = document.getElementById("lang-trigger");
    if (btn) btn.setAttribute("aria-label", label);
    var contactText = contactLabel[lang] || contactLabel.en;
    document.querySelectorAll("[data-i18n='navContact']").forEach(function (el) { el.textContent = contactText; });
}

function openLangDropdown() {
    var trigger = document.getElementById("lang-trigger");
    var menu = document.getElementById("lang-dropdown-menu");
    if (trigger && menu) {
        trigger.closest(".lang-dropdown").classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
        menu.setAttribute("aria-hidden", "false");
    }
}

function closeLangDropdown() {
    var trigger = document.getElementById("lang-trigger");
    var menu = document.getElementById("lang-dropdown-menu");
    if (trigger && menu) {
        trigger.closest(".lang-dropdown").classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
    }
}

function init() {
    const savedLang = typeof localStorage !== "undefined" && localStorage.getItem("portfolio-lang");
    if (savedLang === "en" || savedLang === "fr" || savedLang === "pt") setLang(savedLang);

    setFontSize(getFontSize());
    updateLangTrigger(getLang());

    var langTrigger = document.getElementById("lang-trigger");
    var langDropdown = document.getElementById("lang-dropdown-menu");
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
                if (lang) {
                    setLang(lang);
                    updateLangTrigger(lang);
                    render(getParam());
                }
                closeLangDropdown();
                this.blur();
            });
        });
    }
    var dropdownEl = langTrigger && langTrigger.closest(".lang-dropdown");
    if (dropdownEl) dropdownEl.addEventListener("click", function (e) { e.stopPropagation(); });
    document.addEventListener("click", closeLangDropdown);

    var fontDecrease = document.getElementById("font-decrease");
    var fontIncrease = document.getElementById("font-increase");
    if (fontDecrease) fontDecrease.addEventListener("click", function () { setFontSize(getFontSize() - FONT_STEP); this.blur(); });
    if (fontIncrease) fontIncrease.addEventListener("click", function () { setFontSize(getFontSize() + FONT_STEP); this.blur(); });

    render(getParam());

    // Lightbox: clique na imagem grande abre em tela cheia
    var lightbox = document.getElementById("work-lightbox");
    var lightboxImg = document.getElementById("work-lightbox-image");
    var lightboxClose = document.getElementById("work-lightbox-close");
    var lightboxBackdrop = lightbox && lightbox.querySelector(".work-lightbox__backdrop");

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onLightboxKeydown);
    }

    function onLightboxKeydown(e) {
        if (e.key === "Escape") closeLightbox();
    }

    var workImageEl = document.getElementById("work-image");
    if (workImageEl) {
        workImageEl.addEventListener("click", function () {
            if (!lightbox || !lightboxImg) return;
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.classList.add("is-open");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", onLightboxKeydown);
            if (lightboxClose) lightboxClose.focus();
        });
    }
    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);

    function applyContactHighlight() {
        if (window.location.hash !== "#contact") return;
        var footer = document.getElementById("contact");
        if (!footer) return;
        var target = footer.querySelector(".site-footer__contact-block") || footer;
        target.classList.remove("site-footer--highlight");
        target.offsetHeight;
        window.setTimeout(function () {
            target.classList.add("site-footer--highlight");
            window.setTimeout(function () { target.classList.remove("site-footer--highlight"); }, 4200);
        }, 900);
    }
    applyContactHighlight();
    window.addEventListener("hashchange", applyContactHighlight);
    document.querySelectorAll('a[href="#contact"]').forEach(function (link) {
        link.addEventListener("click", function () {
            if (window.location.hash === "#contact") window.setTimeout(applyContactHighlight, 150);
        });
    });

    // Fade in ao carregar
    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            document.body.classList.remove("fade-in-load");
        });
    });

    // Fade out ao clicar em link para index
    document.addEventListener("click", function (e) {
        var a = e.target.closest("a[href*='index.html'], a.work-back");
        if (!a || a.target === "_blank") return;
        var href = (a.getAttribute("href") || a.href || "").split("#")[0];
        var isBack = a.id === "work-back" || a.classList.contains("work-back");
        var goesToIndex = isBack || (href && (href.indexOf("index.html") !== -1 || href === "/" || href.slice(-1) === "/"));
        if (!goesToIndex) return;
        if (a.origin && a.origin !== window.location.origin) return;
        e.preventDefault();
        if (isBack) try { sessionStorage.setItem("scrollToPortfolio", "1"); } catch (err) {}
        document.body.classList.add("page-fade-out");
        var targetHref = a.getAttribute("href") || a.href;
        setTimeout(function () { window.location.href = targetHref; }, 260);
    });
}

init();
