// const translations = {
//     pt: {
//         cv: "Visualizar CV",
//         inicio: "Início",
//         projetos: "Projetos",
//         sobre: "Sobre",

//         titulo: "Olá, eu sou o Kevin!",
//         subtitulo: "Desenvolvedor Full Stack",

//         tituloProjetos: "Projetos",
//         projetoTitulo: "Portal Vagas Freelancer",
//         projetoDesc: "Repositório privado | Deploy abaixo",
//         repo: "Repositório Github",
//         deploy: "Deploy do projeto",

//         sobreTitulo: "Sobre Mim",
//         sobreTexto: "Sou desenvolvedor web focado em aplicações modernas.",

//         footer: "2026 © Kevin Rezende"
//     },

//     en: {
//         cv: "View Resume",
//         inicio: "Home",
//         projetos: "Projects",
//         sobre: "About",

//         titulo: "Hi, I'm Kevin!",
//         subtitulo: "Full Stack Developer",

//         tituloProjetos: "Projects",
//         projetoTitulo: "Job Portal",
//         projetoDesc: "Private repo | Live demo below",
//         repo: "Github Repository",
//         deploy: "Live Demo",

//         sobreTitulo: "About Me",
//         sobreTexto: "Web developer focused on modern applications.",

//         footer: "2026 © Kevin Rezende"
//     }
// };

// function changeLanguage(lang) {
//     document.querySelectorAll("[data-key]").forEach(el => {
//         const key = el.getAttribute("data-key");

//         if (translations[lang][key]) {
//             el.innerText = translations[lang][key];
//         }
//     });

//     localStorage.setItem("lang", lang);

//     document.getElementById("langBtn").innerText =
//         lang === "pt" ? "EN" : "PT";
// }

// function toggleLanguage() {
//     const current = localStorage.getItem("lang") || "pt";
//     changeLanguage(current === "pt" ? "en" : "pt");
// }

// changeLanguage(localStorage.getItem("lang") || "pt");

// function changeLanguage(lang) {
//     document.querySelectorAll("[data-key]").forEach(el => {
//         const key = el.getAttribute("data-key");
//         el.innerText = translations[lang][key];
//     });

//     localStorage.setItem("lang", lang);

//     document.getElementById("langBtn").innerText =
//         lang === "pt" ? "EN" : "PT";
// }

// function toggleLanguage() {
//     const current = localStorage.getItem("lang") || "pt";
//     const newLang = current === "pt" ? "en" : "pt";
//     changeLanguage(newLang);
// }

// changeLanguage(localStorage.getItem("lang") || "pt");

// function toggleLanguage() {
//     const current = localStorage.getItem("lang") || "pt";
//     const newLang = current === "pt" ? "en" : "pt";

//     changeLanguage(newLang);
// }

// function changeLanguage(lang) {
//     const elements = document.querySelectorAll("[data-key]");

//     elements.forEach(el => {
//         const key = el.getAttribute("data-key");
//         el.innerText = translations[lang][key];
//     });

//     localStorage.setItem("lang", lang);

//     // Atualiza texto do botão
//     const btn = document.getElementById("langBtn");
//     btn.innerText = lang === "pt" ? "EN" : "PT";
// }

// const savedLang = localStorage.getItem("lang") || "pt";
// changeLanguage(savedLang);