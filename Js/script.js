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
        greeting: "Olá Mundo 🧛🏽‍♂️, Meu nome é Felipe;",
        about: "Desenvolvedor de software apaixonado por criar soluções robustas e escaláveis. Trabalho remotamente desde março de 2023, integrando conhecimento técnico e práticas modernas para construir projetos de alto impacto.",
        experienceTitle: "Experiência Profissional",
        company: "Desenvolvedor de Software - Tempo Integral",
        description: "Na Claro, atuo no desenvolvimento de sistemas usando tecnologias essenciais como PHP com WordPress e Laravel, além de Java com Spring Boot. Tenho uma base sólida em SQL e foco na construção de soluções eficientes para ambientes dinâmicos e de grande escala. Minha experiência me permite unir desempenho e funcionalidade em projetos que fazem a diferença.",
        top_footer_text: "Confira minha entrevista com o jornal",
    },
    en: {
        greeting: "Hello World 🧛🏽‍♂️, My name is Felipe;",
        about: "Software developer passionate about creating robust and scalable solutions. I've been working remotely since March 2023, integrating technical knowledge and modern practices to build high-impact projects.",
        experienceTitle: "Professional Experience",
        company: "Software Developer - Full Time",
        description: "At Claro, I work on system development using essential technologies like PHP with WordPress and Laravel, as well as Java with Spring Boot. I have a strong foundation in SQL and focus on building efficient solutions for dynamic and large-scale environments. My experience enables me to combine performance and functionality in projects that make a difference.",
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
});

languagePt.addEventListener("click", function () {
    updateText("pt");
    setActiveButton(languagePt, languageEn);
});

updateText("en");
setActiveButton(languageEn, languagePt, );