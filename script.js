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

    "meta.title.home": "your name // portfolio",
    "meta.title.projects": "projects // your name",
    "meta.title.resume": "resume // your name",
    "meta.title.about": "about // your name",
    "meta.title.contact": "contact // your name",
    "meta.title.styleguide": "styleguide // your name",
    "meta.desc.home": "portfolio of your name — software developer.",
    "meta.desc.styleguide": "design system for the portfolio: color tokens, typography and components.",

    "home.eyebrow": "~/your-name",
    "home.heroTitle": "hi, i'm your name.<br>software developer.",
    "home.lede": "i build tools and applications focused on automation, data, and lean interfaces. this space gathers my projects, experience, and ways to reach me.",
    "home.linkProjects": "view projects ->",
    "home.linkResume": "view resume ->",
    "home.linkContact": "get in touch ->",
    "home.stackHeading": "02 / stack",

    "projects.heading": "01 / projects[3]",
    "projects.intro": "click any item in the list to open the repository on github.",
    "projects.desc1": "structured automation for web scraping and real-time market monitoring.",
    "projects.desc2": "digital and algorithmic platform for cataloging and querying medical data.",
    "projects.desc3": "brief project description — replace this text with a real summary of what it does and what problem it solves.",

    "resume.heading": "01 / resume",
    "resume.download": "&#8681; download resume.pdf",
    "resume.expHeading": "02 / experience[2]",
    "resume.job1Title": "software developer",
    "resume.job1Date": "2024 — present",
    "resume.job1Org": "company name",
    "resume.job1Desc": "brief description of responsibilities and results achieved in this role. keep it to one or two objective sentences.",
    "resume.job2Title": "development intern",
    "resume.job2Date": "2022 — 2024",
    "resume.job2Org": "previous company name",
    "resume.job2Desc": "brief description of responsibilities and results achieved in this role.",
    "resume.eduHeading": "03 / education[1]",
    "resume.eduTitle": "bachelor's in computer science",
    "resume.eduDate": "2020 — 2024",
    "resume.eduOrg": "institution name",
    "resume.skillsHeading": "04 / skills",
    "resume.skillsLang": "languages",
    "resume.skillsTools": "tools",
    "resume.skillsFrameworks": "frameworks",

    "about.heading": "01 / about me",
    "about.title": "who writes this code.",
    "about.p1": "replace this paragraph with your own introduction: who you are, where you studied or worked, and what brought you to programming. keep a direct tone — one or two sentences are enough for the first paragraph.",
    "about.p2": "a second paragraph can talk about your interests outside work, the values that guide how you build software, or the kind of problem you most enjoy solving.",
    "about.interestsHeading": "02 / interests",
    "about.tag1": "#automation",
    "about.tag2": "#data",
    "about.tag3": "#open-source",
    "about.tag4": "#tui-design",

    "contact.heading": "01 / direct contact",
    "contact.labelLocation": "location",
    "contact.valueLocation": "your city, country",
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

    "meta.title.home": "seu nome // portfólio",
    "meta.title.projects": "projetos // seu nome",
    "meta.title.resume": "curriculo // seu nome",
    "meta.title.about": "sobre // seu nome",
    "meta.title.contact": "contato // seu nome",
    "meta.title.styleguide": "styleguide // seu nome",
    "meta.desc.home": "portfólio de seu nome — desenvolvedor(a) de software.",
    "meta.desc.styleguide": "design system do portfólio: tokens de cor, tipografia e componentes.",

    "home.eyebrow": "~/seu-nome",
    "home.heroTitle": "ola, sou seu nome.<br>desenvolvedor(a) de software.",
    "home.lede": "construo ferramentas e aplicações com foco em automação, dados e interfaces enxutas. este espaço reúne meus projetos, experiência e formas de contato.",
    "home.linkProjects": "ver projetos ->",
    "home.linkResume": "ver curriculo ->",
    "home.linkContact": "falar comigo ->",
    "home.stackHeading": "02 / stack",

    "projects.heading": "01 / projetos[3]",
    "projects.intro": "clique em qualquer item da lista para abrir o repositório no github.",
    "projects.desc1": "automação estruturada em web scraping e monitorização de mercado em tempo real.",
    "projects.desc2": "plataforma digital e algorítmica para catalogação e consulta de dados médicos.",
    "projects.desc3": "breve descrição do projeto — troque este texto pelo resumo real do que ele faz e qual problema resolve.",

    "resume.heading": "01 / curriculo",
    "resume.download": "&#8681; baixar curriculo.pdf",
    "resume.expHeading": "02 / experiencia[2]",
    "resume.job1Title": "desenvolvedor(a) de software",
    "resume.job1Date": "2024 — atual",
    "resume.job1Org": "nome da empresa",
    "resume.job1Desc": "breve descrição das responsabilidades e resultados alcançados nessa posição. use uma ou duas frases objetivas.",
    "resume.job2Title": "estagiario(a) de desenvolvimento",
    "resume.job2Date": "2022 — 2024",
    "resume.job2Org": "nome da empresa anterior",
    "resume.job2Desc": "breve descrição das responsabilidades e resultados alcançados nessa posição.",
    "resume.eduHeading": "03 / formacao[1]",
    "resume.eduTitle": "bacharelado em ciencia da computacao",
    "resume.eduDate": "2020 — 2024",
    "resume.eduOrg": "nome da instituicao",
    "resume.skillsHeading": "04 / habilidades",
    "resume.skillsLang": "linguagens",
    "resume.skillsTools": "ferramentas",
    "resume.skillsFrameworks": "frameworks",

    "about.heading": "01 / sobre mim",
    "about.title": "quem escreve este codigo.",
    "about.p1": "troque este parágrafo pela sua própria apresentação: quem você é, onde estudou ou trabalhou, e o que te trouxe até a programação. mantenha um tom direto — uma ou duas frases já bastam para o primeiro parágrafo.",
    "about.p2": "um segundo parágrafo pode falar sobre seus interesses fora do trabalho, valores que guiam como você constrói software, ou o tipo de problema que mais gosta de resolver.",
    "about.interestsHeading": "02 / interesses",
    "about.tag1": "#automacao",
    "about.tag2": "#dados",
    "about.tag3": "#codigo-aberto",
    "about.tag4": "#tui-design",

    "contact.heading": "01 / contato direto",
    "contact.labelLocation": "local",
    "contact.valueLocation": "sua cidade, brasil",
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