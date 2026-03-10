const projects = {
    manutencao: {
        pt: {
            title: "Claro Controle de frotas",
            tech: "Laravel · PHP",
            techLine: "Front-end e Back-end construído com Laravel · PHP.",
            image: "https://picsum.photos/800/450?random=1",
            description: "Sistema interno de controle de frotas de veículos da empresa. Passado para mim com o foco em fazer funcionar: manutenção, correção de bugs e ajustes. Atuo sozinho em front-end, back-end e banco de dados."
        },
        en: {
            title: "Claro Fleet control system",
            tech: "Laravel · PHP",
            techLine: "Front-end and Back-end built with Laravel · PHP.",
            image: "https://picsum.photos/800/450?random=1",
            description: "Internal vehicle fleet control system for the company. Handed to me with a \"make it work\" focus: maintenance, bug fixes, and adjustments. I work on it alone across front-end, back-end, and database."
        },
        fr: {
            title: "Claro Système de gestion de flotte",
            tech: "Laravel · PHP",
            techLine: "Front-end et Back-end construit avec Laravel · PHP.",
            image: "https://picsum.photos/800/450?random=1",
            description: "Système interne de gestion de flotte de véhicules pour l'entreprise. Confié avec l'objectif de maintenir le système en état de marche : maintenance, corrections et ajustements. J'interviens seul sur le front-end, le back-end et la base de données."
        }
    },
    equipe: {
        pt: {
            title: "Claro Marketplace PME",
            tech: "Angular",
            image: "https://picsum.photos/800/450?random=2",
            description: "Atuo como desenvolvedor front-end neste projeto em equipe, com foco em interfaces em Angular. O produto foi inicialmente construído em WordPress e depois migrado para Angular. O objetivo do produto é criar um ambiente de autoatendimento em que donos de negócio ou representantes de empresas possam comprar com facilidade produtos e serviços da Claro e de parceiros. O layout foi pensado para seguir a identidade visual da Claro, com adaptações que dão identidade própria ao produto e enxugam a jornada de venda. A escolha de planos e serviços é facilitada por um carrinho que processa as solicitações automaticamente. Todo o código foi escrito em linha com boas práticas de SEO, éticas e eficazes."
        },
        en: {
            title: "Claro Marketplace PME",
            tech: "Angular",
            image: "https://picsum.photos/800/450?random=2",
            description: "I work as a front-end developer on this team project, building interfaces in Angular. The product was initially built on WordPress and later migrated to Angular. The product goal is to create a self-service platform where business owners or company representatives can easily purchase products and services from Claro and its partners. The layout was designed to align with Claro's existing visual identity, with adaptations that give the product its own style and streamline the sales journey. Plan and service selection is supported by a shopping cart that processes requests automatically. All code is written in line with ethical, effective SEO practices."
        },
        fr: {
            title: "Claro Marketplace PME",
            tech: "Angular",
            image: "https://picsum.photos/800/450?random=2",
            description: "J'interviens en tant que développeur front-end sur ce projet d'équipe, avec un focus sur les interfaces en Angular. Le produit a d'abord été construit sur WordPress puis migré vers Angular. L'objectif du produit est de créer un environnement en libre-service où les chefs d'entreprise ou représentants d'entreprises puissent acheter facilement des produits et services Claro et de ses partenaires. La mise en page a été conçue pour s'aligner sur l'identité visuelle de Claro, avec des adaptations qui donnent au produit son propre style et simplifient le parcours de vente. Le choix des forfaits et des services est facilité par un panier qui traite les demandes automatiquement. Tout le code est rédigé en accord avec des pratiques SEO éthiques et efficaces."
        }
    }
};

const backLabel = { pt: "← Voltar ao portfolio", en: "← Back to portfolio", fr: "← Retour au portfolio" };
const backToTopLabel = { pt: "↑ Voltar ao topo", en: "↑ Back to top", fr: "↑ Retour en haut" };
const builtWithLabel = { pt: "Construído com", en: "Built with", fr: "Construit avec" };
const FONT_SIZE_KEY = "portfolio-font-size";
const MIN_FONT = 80;
const MAX_FONT = 140;
const FONT_STEP = 10;

function getParam() {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");
    return projects[p] ? p : "equipe";
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
    const data = projects[key][lang] || projects[key].en;

    document.getElementById("work-title").textContent = data.title;
    document.getElementById("work-description").textContent = data.description;
    document.getElementById("work-tech").textContent = data.techLine != null ? data.techLine : (builtWithLabel[lang] || builtWithLabel.en) + " " + data.tech + ".";
    document.getElementById("work-image").src = data.image;
    document.getElementById("work-image").alt = data.title;
    var backEl = document.getElementById("work-back");
    backEl.textContent = backLabel[lang];
    var basePath = window.location.pathname.replace(/\/[^/]*$/, "") || "/";
    var indexUrl = basePath === "/" ? "/" : basePath + "/";
    backEl.href = indexUrl + "#portfolio";
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
        document.body.classList.add("page-fade-out");
        var targetHref = a.getAttribute("href") || a.href;
        setTimeout(function () { window.location.href = targetHref; }, 260);
    });
}

init();
