// spec-01 // interações mínimas: reveal ao rolar + i18n (en/pt, default en)

const translations = {
  en: {
    "nav.home": "-> home",
    "nav.projects": "-> projects",
    "nav.resume": "-> resume",
    "nav.about": "-> about",
    "nav.contact": "-> contact",
    "nav.styleguide": "-> styleguide",

    "footer.tagline": "built with syntax, not svgs.",
    "footer.backHome": "-> home",

    "meta.title.home": "joão gabriel // portfolio",
    "meta.title.projects": "projects // joão gabriel",
    "meta.title.resume": "resume // joão gabriel",
    "meta.title.about": "about // joão gabriel",
    "meta.title.contact": "contact // joão gabriel",
    "meta.title.styleguide": "styleguide // joão gabriel",
    "meta.desc.home": "portfolio of joão gabriel — software and data developer.",
    "meta.desc.styleguide": "design system for the portfolio: color tokens, typography and components.",

    "home.eyebrow": "~/joao-gabriel",
    "home.heroTitle": "hi, i'm joão gabriel.<br>data & software developer.",
    "home.lede": "I build tools and applications to solve problems and bring ideas to life.. this space gathers my projects, experience, and ways to reach me.",
    "home.linkProjects": "view projects ->",
    "home.linkResume": "view resume ->",
    "home.linkContact": "get in touch ->",
    "home.stackHeading": "02 / stack",

    "projects.heading": "-/ projects[5]",
    "projects.intro": "click any item in the list to open the repository on github.",
    "projects.desc1": "structured automation for web scraping and real-time market monitoring.",
    "projects.desc2": "digital and algorithmic platform for cataloging and querying medical data.",
    "projects.desc3": "real estate data scraping with playwright, mapping properties and using machine learning to predict fair prices via heatmaps.",
    "projects.desc4": "poker equity calculator built in python using monte carlo simulation algorithms.",
    "projects.desc5": "automated news scraper that uses sentiment analysis to evaluate positive or negative impacts on target companies.",

    "resume.heading": "01 / resume",
    "resume.download": "&#8681; download resume.pdf",
    "resume.expHeading": "02 / experience[1]",
    "resume.job1Title": "it intern (data & development)",
    "resume.job1Date": "aug 2025 — abr 2026",
    "resume.job1Org": "banco do brasil",
    "resume.job1Desc": "Optimization and maintenance of critical systems in PHP and Java, ensuring high performance.Development of applications and dashboards, as well as database modeling and SQL scripts.Task automation using IBM RPA, troubleshooting, and business-integrated technical support.",
    "resume.job2Title": "full stack dev",
    "resume.job2Date": "jun 2024 — apr 2025",
    "resume.job2Org": "universidade positivo (pit)",
    "resume.job2Desc": "Mobile development using Flutter and SQLite, applying Clean Architecture and modularity.UX research and Product Discovery, resulting in a prototype awarded 3rd place at ePIC.Agile management with Scrum, ensuring continuous delivery and detailed technical documentation.Scalable, layered code architecture prepared for future integrations and new modules.",
    "resume.eduHeading": "03 / education[1]",
    "resume.eduTitle": "bachelor's in computer science",
    "resume.eduDate": "2020 — 2027",
    "resume.eduOrg": "universidade positivo",
    "resume.skillsHeading": "04 / skills",
    "resume.skillsLang": "languages",
    "resume.skillsTools": "tools",
    "resume.skillsFrameworks": "frameworks",

    "about.heading": "01 / about me",
    "about.title": "who writes this code.",
    "about.p1": "I am a Computer Science student. I focus on solving problems and generating ideas through practical applications using mathematics and computing.",
    "about.p2": "Outside of work, I divide my time between studying, literature and comics, games, and poker.",
    "about.interestsHeading": "02 / interests",
    "about.tag1": "#automation",
    "about.tag2": "#data-science",
    "about.tag3": "#machine-learning",
    "about.tag4": "#web-scraping",

    "contact.heading": "01 / direct contact",
    "contact.labelLocation": "location",
    "contact.valueLocation": "curitiba, brazil",
    "contact.formHeading": "02 / send a message",
    "contact.formIntro": "the form below opens your email app with the message pre-filled — there's no backend on this page.",
    "contact.labelName": "name",
    "contact.labelYourEmail": "your email",
    "contact.labelMessage": "message",
    "contact.submit": "send ->",

    "styleguide.lede": "a live reference of the tokens and components used in this portfolio — everything you see here is real css, not an image. copy the values straight from the source if you need to reuse them.",
    "styleguide.colorsHeading": "01 / color palette (tokens)",
    "styleguide.swatch1Desc": "global background",
    "styleguide.swatch2Desc": "blocks & highlights",
    "styleguide.swatch3Desc": "active text",
    "styleguide.swatch4Desc": "metadata",
    "styleguide.swatch5Desc": "hover states",
    "styleguide.typeHeading": "02 / typography",
    "styleguide.specimenH2Sample": "01 / content section",
    "styleguide.specimenBodySample": "running text in lowercase, 1rem, 1.6 line height.",
    "styleguide.codeTypeComment": "/* global typography tokens */",
    "styleguide.navHeading": "03 / structural navigation",
    "styleguide.navCaption": "arrows indicate logical directory flow; underline animates on hover",
    "styleguide.navDemo1": "-> /about",
    "styleguide.navDemo2": "-> /projects",
    "styleguide.tagsHeading": "04 / data delimiters (tags)",
    "styleguide.tagsCaption": "native syntax characters replace graphical badges",
    "styleguide.listHeading": "05 / list item (content array)",
    "styleguide.listDemoDesc": "linear display with no box outlines or shadows.",
    "styleguide.formHeading": "06 / buttons and form fields",
    "styleguide.formCaption": "default, focus and hover states follow the same controlled contrast",
    "styleguide.fieldLabel": "sample field",
    "styleguide.fieldPlaceholder": "type something",
    "styleguide.motionHeading": "07 / motion",
    "styleguide.motionDesc": "page entrances use fade + a slight vertical shift (0.5s). sections below the fold reveal as they enter the viewport via intersectionobserver. everything respects <code>prefers-reduced-motion</code>.",
    "styleguide.codeMotionComment": "/* entrance animation */"
  },

  pt: {
    "nav.home": "-> inicio",
    "nav.projects": "-> projetos",
    "nav.resume": "-> curriculo",
    "nav.about": "-> sobre",
    "nav.contact": "-> contato",
    "nav.styleguide": "-> styleguide",

    "footer.tagline": "construído com sintaxe, não com svgs.",
    "footer.backHome": "-> inicio",

    "meta.title.home": "joão gabriel // portfólio",
    "meta.title.projects": "projetos // joão gabriel",
    "meta.title.resume": "curriculo // joão gabriel",
    "meta.title.about": "sobre // joão gabriel",
    "meta.title.contact": "contato // joão gabriel",
    "meta.title.styleguide": "styleguide // joão gabriel",
    "meta.desc.home": "portfólio de joão gabriel — desenvolvedor de software e dados.",
    "meta.desc.styleguide": "design system do portfólio: tokens de cor, tipografia e componentes.",

    "home.eyebrow": "~/joao-gabriel",
    "home.heroTitle": "olá, sou joão gabriel.<br>desenvolvedor de dados e software.",
    "home.lede": "construo ferramentas e aplicações buscando resolver problemas e concretizar ideias. este espaço reúne meus projetos e experiências e como entrar em contato comigo.",
    "home.linkProjects": "ver projetos ->",
    "home.linkResume": "ver curriculo ->",
    "home.linkContact": "falar comigo ->",
    "home.stackHeading": "02 / stack",

    "projects.heading": "01 / projetos[5]",
    "projects.intro": "clique em qualquer item da lista para abrir o repositório no github.",
    "projects.desc1": "automação estruturada em web scraping e monitorização de mercado em tempo real.",
    "projects.desc2": "plataforma digital e algorítmica para catalogação e consulta de dados médicos.",
    "projects.desc3": "raspagem de imóveis com playwright e uso de machine learning para prever preços ideais exibidos em mapas de calor.",
    "projects.desc4": "calculadora de equidade de poker em python utilizando algoritmos de simulação de monte carlo.",
    "projects.desc5": "scraper de notícias com análise de sentimento (nlp) para avaliar os impactos mercadológicos positivos ou negativos em empresas.",

    "resume.heading": "01 / curriculo",
    "resume.download": "&#8681; baixar curriculo.pdf",
    "resume.expHeading": "02 / experiencia[1]",
    "resume.job1Title": "estagiário de desenvolvimento e analise de dados",
    "resume.job1Date": "ago 2025 — apr 2026",
    "resume.job1Org": "banco do brasil",
    "resume.job1Desc": "Otimização e manutenção de sistemas críticos em PHP e Java, garantindo alta performance.Desenvolvimento de aplicações e dashboards, além de modelagem e scripts SQL.Automação de tarefas com IBM RPA, troubleshooting e suporte técnico integrado ao negócio",
    "resume.job2Title": "full stack dev",
    "resume.job2Date": "jun 2024 — apr 2025",
    "resume.job2Org": "universidade positivo (pit)",
    "resume.job2Desc": "Desenvolvimento mobile em Flutter com SQLite, aplicando Clean Architecture e modularidade.Pesquisa de UX e Product Discovery, criando protótipo premiado com o 3º lugar no ePIC.Gestão ágil com Scrum, assegurando entregas contínuas e documentação técnica detalhada.Arquitetura de código escalável em camadas, preparada para futuras integrações e módulos.",
    "resume.eduHeading": "03 / formacao[1]",
    "resume.eduTitle": "bacharelado em ciência da computação",
    "resume.eduDate": "2020 — 2027",
    "resume.eduOrg": "universidade positivo",
    "resume.skillsHeading": "04 / habilidades",
    "resume.skillsLang": "linguagens",
    "resume.skillsTools": "ferramentas",
    "resume.skillsFrameworks": "frameworks",

    "about.heading": "01 / sobre mim",
    "about.title": "quem escreve este codigo.",
    "about.p1": "sou estudante de ciência da computação. foco em solucionar problemas e gerar ideias por meio de aplicações praticas por meio da matematica e da computação.",
    "about.p2": "fora do trabalho, divido meu tempo entre estudos literatura e HQs , games e poker.",
    "about.interestsHeading": "02 / interesses",
    "about.tag1": "#automacao",
    "about.tag2": "#dados",
    "about.tag3": "#machine-learning",
    "about.tag4": "#desenvolvimento",

    "contact.heading": "01 / contato direto",
    "contact.labelLocation": "local",
    "contact.valueLocation": "curitiba, brasil",
    "contact.formHeading": "02 / enviar mensagem",
    "contact.formIntro": "o formulário abaixo abre seu aplicativo de e-mail com a mensagem pré-preenchida — não há backend nesta página.",
    "contact.labelName": "nome",
    "contact.labelYourEmail": "seu email",
    "contact.labelMessage": "mensagem",
    "contact.submit": "enviar ->",

    "styleguide.lede": "referência viva dos tokens e componentes usados neste portfólio — tudo o que você vê aqui é css real, não uma imagem. copie os valores diretamente do código-fonte se precisar reutilizá-los.",
    "styleguide.colorsHeading": "01 / paleta de cores (tokens)",
    "styleguide.swatch1Desc": "fundo geral",
    "styleguide.swatch2Desc": "blocos e realces",
    "styleguide.swatch3Desc": "texto ativo",
    "styleguide.swatch4Desc": "metadados",
    "styleguide.swatch5Desc": "estados de hover",
    "styleguide.typeHeading": "02 / tipografia",
    "styleguide.specimenH2Sample": "01 / secao de conteudo",
    "styleguide.specimenBodySample": "texto corrido em minúsculas, 1rem, altura de linha 1.6.",
    "styleguide.codeTypeComment": "/* tokens globais de tipografia */",
    "styleguide.navHeading": "03 / navegação estrutural",
    "styleguide.navCaption": "setas indicam fluxo lógico de diretório; sublinhado anima no hover",
    "styleguide.navDemo1": "-> /sobre",
    "styleguide.navDemo2": "-> /projetos",
    "styleguide.tagsHeading": "04 / delimitadores de dados (tags)",
    "styleguide.tagsCaption": "caracteres sintáticos nativos substituem badges gráficos",
    "styleguide.listHeading": "05 / item de lista (array de conteúdo)",
    "styleguide.listDemoDesc": "exibição linear sem contornos de caixa ou sombras.",
    "styleguide.formHeading": "06 / botões e campos de formulário",
    "styleguide.formCaption": "estado padrão, foco e hover seguem o mesmo contraste controlado",
    "styleguide.fieldLabel": "campo de exemplo",
    "styleguide.fieldPlaceholder": "digite algo",
    "styleguide.motionHeading": "07 / movimento",
    "styleguide.motionDesc": "entradas de página usam fade + leve deslocamento vertical (0.5s). seções abaixo da dobra revelam ao entrar na tela via intersectionobserver. tudo respeita <code>prefers-reduced-motion</code>.",
    "styleguide.codeMotionComment": "/* animação de entrada */"
  }
};

const LANG_KEY = "site-lang";

function applyLang(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined) return;

    const attr = el.getAttribute("data-i18n-attr");
    if (attr) {
      el.setAttribute(attr, value);
    } else if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll(".lang-opt").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.langSet === lang);
  });

  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (e) {
    /* localStorage indisponível — segue sem persistir */
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // idioma: default en, com preferência salva sobrepondo
  let saved = null;
  try {
    saved = localStorage.getItem(LANG_KEY);
  } catch (e) {
    /* ignora */
  }
  applyLang(saved === "pt" ? "pt" : "en");

  document.querySelectorAll(".lang-opt").forEach((opt) => {
    opt.addEventListener("click", () => applyLang(opt.dataset.langSet));
  });

  // reveal ao rolar
  const targets = document.querySelectorAll("[data-animate]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
});