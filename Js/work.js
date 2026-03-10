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
    document.getElementById("work-back").textContent = backLabel[lang];
    var backToTopEl = document.getElementById("work-back-to-top");
    if (backToTopEl) backToTopEl.textContent = backToTopLabel[lang] || backToTopLabel.en;
    document.title = data.title + " — Felipe Fontes";
}

function init() {
    const savedLang = typeof localStorage !== "undefined" && localStorage.getItem("portfolio-lang");
    if (savedLang === "en" || savedLang === "fr" || savedLang === "pt") setLang(savedLang);

    const languageEn = document.getElementById("language-en");
    const languageFr = document.getElementById("language-fr");
    const languagePt = document.getElementById("language-pt");
    const langButtons = { en: languageEn, fr: languageFr, pt: languagePt };

    function setActive(lang) {
        Object.keys(langButtons).forEach(function (key) {
            var btn = langButtons[key];
            if (btn) btn.classList.toggle("active-language", key === lang);
        });
    }

    languageEn.addEventListener("click", function () { setLang("en"); setActive("en"); render(getParam()); });
    if (languageFr) languageFr.addEventListener("click", function () { setLang("fr"); setActive("fr"); render(getParam()); });
    languagePt.addEventListener("click", function () { setLang("pt"); setActive("pt"); render(getParam()); });

    setActive(getLang());
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
        var href = a.getAttribute("href");
        if (!href || href.indexOf("index.html") === -1) return;
        if (a.origin && a.origin !== window.location.origin) return;
        e.preventDefault();
        document.body.classList.add("page-fade-out");
        setTimeout(function () { window.location.href = a.href; }, 260);
    });
}

init();
