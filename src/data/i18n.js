export const texts = {
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
    project3Title: "uManager",
    project3Tech: "Angular",
    project4Title: "Portal de Parceiros",
    project4Tech: "Angular",
    projectCardCta: "Clique para saber mais",
    portfolioHint: "Clique em uma imagem para ver mais detalhes sobre o projeto.",
    experienceHeading: "Experiência",
    backToTop: "↑ Voltar ao topo",
    backLabel: "← Voltar ao portfolio",
    builtWith: "Construído com",
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
    project3Title: "uManager",
    project3Tech: "Angular",
    project4Title: "Partner Portal",
    project4Tech: "Angular",
    projectCardCta: "Click to learn more",
    portfolioHint: "Click on an image to see more details about the project.",
    experienceHeading: "Experience",
    backToTop: "↑ Back to top",
    backLabel: "← Back to portfolio",
    builtWith: "Built with",
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
    project3Title: "uManager",
    project3Tech: "Angular",
    project4Title: "Portail Partenaires",
    project4Tech: "Angular",
    projectCardCta: "Cliquez pour en savoir plus",
    portfolioHint: "Cliquez sur une image pour voir plus de détails sur le projet.",
    experienceHeading: "Expérience",
    backToTop: "↑ Retour en haut",
    backLabel: "← Retour au portfolio",
    builtWith: "Construit avec",
  },
};

export function getDocLang(lang) {
  if (lang === "en") return "en";
  if (lang === "fr") return "fr";
  return "pt-BR";
}

export function getSavedLang() {
  try {
    const saved = localStorage.getItem("portfolio-lang");
    return saved === "fr" || saved === "pt" ? saved : "en";
  } catch {
    return "en";
  }
}
