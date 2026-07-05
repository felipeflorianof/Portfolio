export const projects = {
  manutencao: {
    pt: {
      title: "Claro Controle de frotas",
      tech: "Laravel · PHP",
      techLine: "Front-end e Back-end construído com Laravel · PHP.",
      image: "/assets/riseshot-17731932181513871.png",
      description:
        "Sistema interno para controle da frota de veículos da empresa. Gerencia a frota de carros da Claro em quase todos os estados do Nordeste. O projeto me foi passado para manter em funcionamento: manutenção, correção de bugs e ajustes. Atuo sozinho em front-end, back-end e banco de dados.",
    },
    en: {
      title: "Claro Fleet control system",
      tech: "Laravel · PHP",
      techLine: "Front-end and Back-end built with Laravel · PHP.",
      image: "/assets/riseshot-17731932181513871.png",
      description:
        "Internal system for managing the company's vehicle fleet. It handles Claro's car fleet across almost all states in Brazil's Northeast. I was brought in to keep it running: maintenance, bug fixes, and improvements. I work on it alone, covering front-end, back-end, and database.",
    },
    fr: {
      title: "Claro Système de gestion de flotte",
      tech: "Laravel · PHP",
      techLine: "Front-end et Back-end construit avec Laravel · PHP.",
      image: "/assets/riseshot-17731932181513871.png",
      description:
        "Système interne de gestion de la flotte de véhicules. Il gère la flotte automobile de Claro dans presque tous les États du Nord-Est du Brésil. Le projet m'a été confié pour le maintenir en état de marche : maintenance, corrections de bugs et ajustements. J'interviens seul sur le front-end, le back-end et la base de données.",
    },
  },
  equipe: {
    pt: {
      title: "Claro Marketplace PME",
      tech: "Angular",
      image: "/assets/claro-marketplace-pme.png",
      description:
        "Atuo como desenvolvedor front-end neste projeto em equipe, com foco em interfaces em Angular. O sistema nasceu em WordPress e foi migrado para Angular. É uma plataforma de autoatendimento para empresas e representantes comprarem produtos e serviços da Claro e de parceiros. O layout segue a identidade visual da Claro, com adaptações que dão cara própria ao produto e simplificam a jornada de compra. O código segue boas práticas de SEO.",
    },
    en: {
      title: "Claro Marketplace PME",
      tech: "Angular",
      image: "/assets/claro-marketplace-pme.png",
      description:
        "I work as a front-end developer on this team project, building interfaces in Angular. The product started on WordPress and was later migrated to Angular. It's a self-service platform where businesses and company representatives can easily buy products and services from Claro and its partners. The layout follows Claro's visual identity, with adaptations that give the product its own look and simplify the buying journey. The code follows solid SEO practices.",
    },
    fr: {
      title: "Claro Marketplace PME",
      tech: "Angular",
      image: "/assets/claro-marketplace-pme.png",
      description:
        "Je travaille en tant que développeur front-end sur ce projet d'équipe, sur les interfaces en Angular. Le produit a d'abord été développé sur WordPress puis migré vers Angular. C'est une plateforme en libre-service permettant aux entreprises et représentants d'acheter facilement des produits et services Claro et de ses partenaires. La maquette respecte l'identité visuelle de Claro, avec des adaptations qui donnent au produit sa propre identité et simplifient le parcours d'achat. Le code respecte les bonnes pratiques SEO.",
    },
  },
  umanager: {
    pt: {
      title: "uManager",
      tech: "Angular",
      image: "/assets/umanager-dashboard.png",
      description:
        "Atuo como desenvolvedor front-end no uManager, um sistema interno para criação e gerenciamento de produtos. A plataforma também exibe status de progresso de compras feitas pelos usuários, permite gestão desses usuários e oferece visualização de métricas para acompanhamento do negócio.",
    },
    en: {
      title: "uManager",
      tech: "Angular",
      image: "/assets/umanager-dashboard.png",
      description:
        "I work as a front-end developer on uManager, an internal system for creating and managing products. The platform also shows purchase progress status for user orders, supports user management, and provides metric dashboards for business monitoring.",
    },
    fr: {
      title: "uManager",
      tech: "Angular",
      image: "/assets/umanager-dashboard.png",
      description:
        "Je travaille en tant que développeur front-end sur uManager, un système interne de création et de gestion de produits. La plateforme affiche également l'état d'avancement des achats des utilisateurs, permet la gestion de ces utilisateurs et propose la visualisation de métriques pour le suivi de l'activité.",
    },
  },
  parceiros: {
    pt: {
      title: "Portal de Parceiros",
      tech: "Angular",
      image: "/assets/portal-parceiros.png",
      description:
        "Atuo como desenvolvedor front-end neste Portal de Parceiros do ecossistema do Marketplace PME. Nele, os parceiros podem cadastrar e gerenciar seus próprios produtos dentro do marketplace da Claro, com mais autonomia para oferta e vendas. O fluxo inclui uma esteira de avaliação da submissão do parceiro e do produto, garantindo governança antes da publicação.",
    },
    en: {
      title: "Partner Portal",
      tech: "Angular",
      image: "/assets/portal-parceiros.png",
      description:
        "I work as a front-end developer on this Partner Portal within the Marketplace PME ecosystem. It allows partners to create and manage their own product listings inside Claro's marketplace, giving them more autonomy to offer and sell. The flow includes a review pipeline for both partner submissions and products before publication.",
    },
    fr: {
      title: "Portail Partenaires",
      tech: "Angular",
      image: "/assets/portal-parceiros.png",
      description:
        "Je travaille en tant que développeur front-end sur ce Portail Partenaires de l'écosystème Marketplace PME. Il permet aux partenaires de créer et de gérer leurs propres produits dans la marketplace de Claro, avec davantage d'autonomie pour la mise en vente. Le processus comprend une chaîne d'évaluation des soumissions du partenaire et des produits avant publication.",
    },
  },
};

export const projectSlugToKey = {
  "marketplace-pme": "equipe",
  "fleet-control": "manutencao",
  umanager: "umanager",
  "partner-portal": "parceiros",
};

export const portfolioCards = [
  {
    slug: "marketplace-pme",
    titleKey: "project1Title",
    techKey: "project1Tech",
    image: "/assets/claro-marketplace-pme.png",
    alt: "Claro Marketplace PME — soluções digitais em múltiplos dispositivos",
    cardClass: "project-card--claro",
    wrapClass: "project-image-wrap--claro",
  },
  {
    slug: "fleet-control",
    titleKey: "project2Title",
    techKey: "project2Tech",
    image: "/assets/riseshot-17731932181513871.png",
    alt: "Claro Controle de frotas — tela de administração",
    cardClass: "project-card--frotas",
    wrapClass: "project-image-wrap--frotas",
  },
  {
    slug: "umanager",
    titleKey: "project3Title",
    techKey: "project3Tech",
    image: "/assets/umanager-dashboard.png",
    alt: "uManager — sistema interno de gestão de produtos e usuários",
    cardClass: "project-card--umanager",
    wrapClass: "project-image-wrap--umanager",
  },
  {
    slug: "partner-portal",
    titleKey: "project4Title",
    techKey: "project4Tech",
    image: "/assets/portal-parceiros.png",
    alt: "Portal de Parceiros — cadastro de produtos no marketplace da Claro",
    cardClass: "project-card--partners",
    wrapClass: "project-image-wrap--partners",
  },
];

export function resolveProjectKey(slug) {
  if (projectSlugToKey[slug]) return projectSlugToKey[slug];
  if (projects[slug]) return slug;
  return "equipe";
}
