const projects = {
    manutencao: {
        pt: {
            title: "Controle de frotas",
            tech: "SQL · Laravel · PHP",
            image: "https://picsum.photos/800/450?random=1",
            description: "Sistema interno de controle de frotas de veículos da empresa. Passado para mim com o foco em fazer funcionar: manutenção, correção de bugs e ajustes. Atuo sozinho no back-end. Stack: SQL, Laravel e PHP puro."
        },
        en: {
            title: "Fleet control system",
            tech: "SQL · Laravel · PHP",
            image: "https://picsum.photos/800/450?random=1",
            description: "Internal vehicle fleet control system for the company. Handed to me with a \"make it work\" focus: maintenance, bug fixes, and adjustments. I work on it alone on the back-end. Stack: SQL, Laravel, and plain PHP."
        }
    },
    equipe: {
        pt: {
            title: "Marketplace PME",
            tech: "Angular · TypeScript",
            image: "https://picsum.photos/800/450?random=2",
            description: "Marketplace para pequenas e médias empresas (PME), com centenas de milhares de usuários (100k+). Projeto em equipe. Atuo no front-end: interfaces em Angular com TypeScript, participando do desenho da solução, desenvolvimento e entrega."
        },
        en: {
            title: "Marketplace PME",
            tech: "Angular · TypeScript",
            image: "https://picsum.photos/800/450?random=2",
            description: "Marketplace for small and medium businesses (SMB), with 100k+ users. Team project. I work on the front-end: Angular with TypeScript, involved in solution design, development, and delivery."
        }
    }
};

const backLabel = { pt: "← Voltar ao portfolio", en: "← Back to portfolio" };

function getParam() {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("p");
    return projects[p] ? p : "equipe";
}

function getLang() {
    return document.documentElement.lang.startsWith("en") ? "en" : "pt";
}

function setLang(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    if (typeof localStorage !== "undefined") localStorage.setItem("portfolio-lang", lang);
}

function render(projectKey) {
    const key = projects[projectKey] ? projectKey : "equipe";
    const lang = getLang();
    const data = projects[key][lang];

    document.getElementById("work-title").textContent = data.title;
    document.getElementById("work-tech").textContent = data.tech;
    document.getElementById("work-image").src = data.image;
    document.getElementById("work-image").alt = data.title;
    document.getElementById("work-description").textContent = data.description;
    document.getElementById("work-back").textContent = backLabel[lang];
    document.title = data.title + " — Felipe Fontes";
}

function init() {
    const savedLang = typeof localStorage !== "undefined" && localStorage.getItem("portfolio-lang");
    if (savedLang === "en" || savedLang === "pt") setLang(savedLang);

    const languageEn = document.getElementById("language-en");
    const languagePt = document.getElementById("language-pt");

    languageEn.addEventListener("click", function () {
        setLang("en");
        languageEn.classList.add("active-language");
        languagePt.classList.remove("active-language");
        render(getParam());
    });
    languagePt.addEventListener("click", function () {
        setLang("pt");
        languagePt.classList.add("active-language");
        languageEn.classList.remove("active-language");
        render(getParam());
    });

    if (getLang() === "en") {
        languageEn.classList.add("active-language");
        languagePt.classList.remove("active-language");
    } else {
        languagePt.classList.add("active-language");
        languageEn.classList.remove("active-language");
    }

    render(getParam());
}

init();
