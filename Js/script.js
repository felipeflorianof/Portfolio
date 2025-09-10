const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    const slideContainer = document.getElementById("slide-container");

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    items[currentItem].classList.add("current-item");
  });
});

const languageEn = document.getElementById("language-en");
const languagePt = document.getElementById("language-pt");

const texts = {
    pt: {
        greeting: "Olá Mundo, Me chamo Felipe;",
        about: "Desenvolvedor de software apaixonado por criar soluções robustas e escaláveis. Trabalho remotamente desde 2023, integrando conhecimento técnico e práticas modernas para construir projetos de alto impacto.",
        experienceTitle: "Experiência Profissional",
        company: "Desenvolvedor de Software - Tempo Integral",
        description: "Na Claro, especializo-me em desenvolvimento de sistemas, entregando soluções de alto desempenho para ambientes dinâmicos e de grande escala. Minha expertise em Angular permite criar aplicações front-end responsivas e centradas no usuário, que se integram perfeitamente aos sistemas back-end. Utilizo PHP com WordPress e Laravel para construir soluções server-side robustas e escaláveis, enquanto minha proficiência em SQL garante uma gestão de dados eficiente e desempenho otimizado. Com um forte foco em Angular para desenvolver interfaces dinâmicas e intuitivas, crio soluções impactantes que impulsionam o sucesso dos negócios.",
        top_footer_text: "Confira minha entrevista com o jornal",
    },
    en: {
        greeting: "Hello World, I'm Felipe;",
        about: "Software developer passionate about creating robust and scalable solutions. I've been working remotely since 2023, integrating technical knowledge and modern practices to build high-impact projects.",
        experienceTitle: "Professional Experience",
        company: "Software Developer - Full Time",
        description: "At Claro, I specialize in system development, delivering high-performance solutions for dynamic, large-scale environments. My expertise in Angular allows me to craft responsive, user-centric front-end applications that seamlessly integrate with back-end systems. I leverage PHP with WordPress and Laravel to build robust, scalable server-side solutions, while my proficiency in SQL ensures efficient data management and optimized performance. With a strong focus on Angular for creating dynamic and intuitive user interfaces, I develop impactful solutions that drive business success.",
        top_footer_text: "Check out my interview with the newspaper",
    }
};

function updateText(language) {
    document.querySelector(".typing-animation").textContent = texts[language].greeting;
    document.querySelector("section:nth-of-type(1) p").textContent = texts[language].about;
    document.querySelector("section:nth-of-type(2) h2").textContent = texts[language].experienceTitle;
    document.querySelector("section:nth-of-type(2) p:nth-of-type(2)").textContent = texts[language].company;
    document.querySelector("section:nth-of-type(2) p:nth-of-type(4)").textContent = texts[language].description;
    document.querySelector("#top_footer_text p").innerHTML = `${texts[language].top_footer_text} <a href="https://g1.globo.com/tecnologia/noticia/2022/05/10/ja-entrei-pensando-em-ganhar-em-dolar-estudantes-falam-sobre-os-primeiros-passos-na-area-de-ti.ghtml" target="_blank">G1</a> 👈🏽`;
}

function setActiveButton(activeButton, inactiveButton) {
    activeButton.classList.add("active-language");
    inactiveButton.classList.remove("active-language");
}

languageEn.addEventListener("click", function () {
    updateText("en");
    setActiveButton(languageEn, languagePt);
    this.blur();
});

languagePt.addEventListener("click", function () {
    updateText("pt");
    setActiveButton(languagePt, languageEn);
    this.blur();
});

updateText("en");
setActiveButton(languageEn, languagePt, );