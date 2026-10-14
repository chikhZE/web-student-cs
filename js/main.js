const languages = {
  fr: {
    home: "Accueil",
    about: "À propos",
    navHeading: "ESPACE ÉTUDIANT",
    languageLabel: "Langue",
    breadcrumb: "ESPACE ÉTUDIANT",
    motto: "Fait pour apprendre, construit pour avancer.",
    footerProgram: "INFORMATIQUE L1",
    welcomeEyebrow: "VOTRE ESPACE DE TRAVAIL",
    welcomeTitle: "Salut, futur·e",
    welcomeHighlight: "informaticien·ne.",
    welcomeDescription: "Tout pour réussir votre première année à l'USTHB, au même endroit. Cours, vidéos et ressources pour accompagner votre parcours.",
    explore: "Explorer les modules",
    announcements: "Dernières annonces",
    announcementsDescription: "Les nouvelles de votre espace étudiant.",
    subjects: "Vos matières",
    subjectsDescription: "Accédez rapidement aux ressources de chaque module.",
    newsCount: count => `${count} actualités`,
    resourcesCount: count => `${count} ressources`,
    videoTab: "Vidéos",
    documentTab: "Documents",
    linksTab: "Liens utiles",
    semesterShort: "Semestre 1",
    videoCount: count => `${count} vidéo(s)`,
    documentCount: count => `${count} document(s)`,
    resourceCount: count => `${count} ressource(s)`,
    inModule: "dans ce module",
    videoType: "VIDÉO · COURS",
    documentType: "DOCUMENT · PDF",
    linkType: "LIEN UTILE",
    videoAction: "Regarder la vidéo",
    documentAction: "Ouvrir le PDF",
    linkAction: "Ouvrir la ressource",
    unavailable: "Fichier à configurer",
    noResourcesTitle: "Aucune ressource pour le moment",
    noResourcesDescription: "Les ressources de ce type seront publiées ici.",
    videoUnavailable: "Ajoutez une URL de vidéo YouTube valide dans js/main.js.",
    documentUnavailable: "Le document n'est pas encore configuré. Ajoutez son chemin dans js/main.js.",
    linkUnavailable: "Le lien n'est pas encore configuré. Ajoutez son URL dans js/main.js.",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    linkNewTab: "Ouvre dans un nouvel onglet",
    introTag: "IMPORTANT",
    algoTag: "ALGORITHMIQUE",
    campusTag: "CAMPUS",
    aboutEyebrow: "À PROPOS DU PROJET",
    aboutTitle: "Un espace pensé pour apprendre.",
    aboutDescription: "Campus L1 accompagne les étudiants de première année Informatique à l'USTHB avec un accès simple aux ressources du semestre.",
    developerLabel: "DÉVELOPPEUR",
    developerTitle: "Développeur de la plateforme",
    developerDescription: "Retrouvez mon profil et mes projets sur mon portfolio, ou contactez-moi directement par e-mail.",
    portfolioLabel: "Visiter mon portfolio",
    emailLabel: "M'écrire par e-mail",
    issueTitle: "Un problème ou un bug ?",
    issueDescription: "Si vous rencontrez un problème ou repérez un bug sur la plateforme, contactez-moi directement par e-mail ou via mon profil développeur. Je vous répondrai dès que possible.",
    contactEmail: "E-mail",
    contactPortfolio: "BESOIN D'AIDE"
  },
  en: {
    home: "Home",
    about: "About",
    navHeading: "STUDENT SPACE",
    languageLabel: "Language",
    breadcrumb: "STUDENT SPACE",
    motto: "Built for learning. Made for progress.",
    footerProgram: "COMPUTER SCIENCE L1",
    welcomeEyebrow: "YOUR STUDY SPACE",
    welcomeTitle: "Hello, future",
    welcomeHighlight: "computer scientist.",
    welcomeDescription: "Everything you need for your first year at USTHB, all in one place. Courses, videos, and resources to support your studies.",
    explore: "Explore modules",
    announcements: "Latest announcements",
    announcementsDescription: "News and updates from your student space.",
    subjects: "Your modules",
    subjectsDescription: "Quick access to resources for every module.",
    newsCount: count => `${count} updates`,
    resourcesCount: count => `${count} resources`,
    videoTab: "Videos",
    documentTab: "Documents",
    linksTab: "Useful links",
    semesterShort: "Semester 1",
    videoCount: count => `${count} video(s)`,
    documentCount: count => `${count} document(s)`,
    resourceCount: count => `${count} resource(s)`,
    inModule: "in this module",
    videoType: "LECTURE · VIDEO",
    documentType: "DOCUMENT · PDF",
    linkType: "USEFUL LINK",
    videoAction: "Watch video",
    documentAction: "Open PDF",
    linkAction: "Open resource",
    unavailable: "File not configured",
    noResourcesTitle: "No resources yet",
    noResourcesDescription: "Resources of this type will appear here.",
    videoUnavailable: "Add a valid YouTube video URL in js/main.js.",
    documentUnavailable: "This document is not configured yet. Add its path in js/main.js.",
    linkUnavailable: "This link is not configured yet. Add its URL in js/main.js.",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    linkNewTab: "Opens in a new tab",
    introTag: "WELCOME",
    algoTag: "ALGORITHMS",
    campusTag: "CAMPUS",
    aboutEyebrow: "ABOUT THIS PROJECT",
    aboutTitle: "A space designed for learning.",
    aboutDescription: "Campus L1 supports first-year Computer Science students at USTHB with easy access to semester resources.",
    developerLabel: "DEVELOPER",
    developerTitle: "Platform developer",
    developerDescription: "Visit my portfolio to explore my profile and projects, or get in touch directly by email.",
    portfolioLabel: "Visit my portfolio",
    emailLabel: "Send me an email",
    issueTitle: "Found an issue or bug?",
    issueDescription: "If you run into a problem or spot a bug on the platform, contact me directly by email or through my developer profile. I’ll get back to you as soon as I can.",
    contactEmail: "Email",
    contactPortfolio: "NEED HELP"
  }
};

const modules = [
  { id: "algo", short: { fr: "Algo", en: "Algo" }, name: { fr: "Algorithmique", en: "Algorithms" }, icon: "⌘", color: "#69d879", count: "01" },
  { id: "cri", short: { fr: "CRI / STRM", en: "CRI / STRM" }, name: { fr: "Architecture des ordinateurs / Systèmes", en: "Computer Architecture / Systems" }, icon: "▤", color: "#e2a574", count: "02" },
  { id: "mp", short: { fr: "MP", en: "MP" }, name: { fr: "Mathématiques et Physique", en: "Mathematics and Physics" }, icon: "∑", color: "#9e8be8", count: "03" },
  { id: "analyse", short: { fr: "Analyse", en: "Analysis" }, name: { fr: "Analyse", en: "Analysis" }, icon: "∫", color: "#70b9ed", count: "04" },
  { id: "algebre", short: { fr: "Algèbre", en: "Algebra" }, name: { fr: "Algèbre", en: "Algebra" }, icon: "△", color: "#e58aa8", count: "05" },
  { id: "tic", short: { fr: "TIC", en: "ICT" }, name: { fr: "Technologies de l'information", en: "Information and Communication Technology" }, icon: "⌘", color: "#e5cc6d", count: "06" }
];

// Edit this list to publish announcements. Each item supports bilingual content.
const announcements = [

  {
    tag: { fr: "IMPORTANT", en: "IMPORTANT" },
    color: "#D0342C",
    date: "2026-10-14",
    title: { fr: "Nous avons un cours demain !", en: "We have a lesson tomorrow!" },
    description: {
      fr: "Demain à 8 h 30, nous avons un cours de MP ; vous trouverez le lien de la réunion dans la section MP.",
      en: "Tomorrow at 8:30 AM, we have an MP lesson; you will find the meeting link in the MP section."
    },
    destination: { page: "mp", tab: "link" }
  },
  {
    tag: { fr: "IMPORTANT", en: "WELCOME" },
    color: "",
    date: "2026-10-13",
    title: { fr: "Bienvenue en première année !", en: "Welcome to your first year!" },
    description: {
      fr: "Retrouvez ici vos cours, TD et ressources pour bien démarrer votre année à l'USTHB.",
      en: "Find your courses, tutorials, and resources here to get your year at USTHB off to a great start."
    }
  },

  {
    tag: { fr: "ALGORITHMIQUE", en: "ALGORITHMS" },
    color: "",
    date: "2026-10-13",
    title: { fr: "Supports du cours disponibles", en: "Course materials are available" },
    description: {
      fr: "Les premières ressources d'algorithmique sont en ligne. Consultez l'espace du module.",
      en: "The first algorithms resources are online. Visit the module page to explore them."
    },
    destination: { page: "algo", tab: "pdf" }
  },
  {
    tag: { fr: "CAMPUS", en: "CAMPUS" },
    color: "",
    date: "2026-10-13",
    title: { fr: "Votre espace de cours", en: "Your course space" },
    description: {
      fr: "Consultez les pages de vos modules pour retrouver les vidéos, documents et liens utiles du semestre.",
      en: "Visit your module pages to find this semester's videos, documents, and useful links."
    }
  },
  {
    tag: { fr: "SUPPORT", en: "SUPPORT" },
    color: "",
    date: "2026-10-13",
    title: { fr: "Aidez-nous à améliorer le site.", en: "Help us improve the website." },
    description: {
      fr: "Pour toute suggestion, critique ou erreur constatée sur le site, veuillez contacter l'équipe d'assistance via la section « À propos ».",
      en: "For any suggestions, criticisms, or errors you find on the site, please contact the support team through the About section."
    },
    destination: { page: "about" }
  },

];

// Admin-managed catalog: add, edit, or remove entries here. Set url to a real
// YouTube video URL, PDF path, or web address; relative asset paths are
// resolved from index.html. Videos must use a YouTube watch/embed URL.
const resources = {
  algo: [
    //{ type: "video", title: { fr: "Introduction à l'algorithmique", en: "Introduction to Algorithms" }, description: { fr: "Les bases : algorithmes, variables et premières instructions.", en: "The basics: algorithms, variables, and your first instructions." }, duration: "18:24", url: "" },
    { type: "pdf", title: { fr: "Introduction au module Initiation à l’algorithmique", en: "Introduction to the 'Introduction to Algorithms' module" }, description: { fr: "", en: "" }, url: "assets/algo/pdfs/S1_Intro_GLE_11OCT26.pdf"},
    { type: "pdf", title: { fr: "Chapitre 1 : Introduction à l'informatique", en: "Chapter 1: Introduction to Computer Science" }, description: { fr: "", en: "" }, url: "assets/algo/pdfs/S2_Intro_ALGO_11OCT26.pdf" },
    { type: "link", title: { fr: "Site officiel", en: "Official Website" }, description: { fr: "Le site officiel du professeure", en: "The official website of the professor" }, url: "https://sites.google.com/view/algo-s2-2026/home" }
  ],
  cri: [
    //{ type: "video", title: { fr: "Les composants d'un ordinateur", en: "Computer Components" }, description: { fr: "Découvrez les éléments essentiels d'une architecture informatique.", en: "Explore the essential components of computer architecture." }, duration: "22:10", url: "" },
    { type: "pdf", title: { fr: "STRUCTURE DE LA MACHINE 1", en: "MACHINE STRUCTURE 1" }, description: { fr: "", en: "" }, url: "assets/cri-strm/pdfs/STRM1_Chapter1_Part1_OUAZAR.pdf" },
  ],
  mp: [
    { type: "link", title: { fr: "Lien vers la leçon", en: "lesson link" }, description: { fr: "Le cours de jeudi commence à 8 h 30 du matin.", en: "The Thursday lesson begins at 8:30 AM." }, url: "https://meet.google.com/aui-trzf-syj?hs=224" }
  ],
  analyse: [
    //{ type: "link", title: { fr: "Desmos — calculatrice graphique", en: "Desmos — Graphing Calculator" }, description: { fr: "Explorez et représentez des fonctions en ligne.", en: "Explore and plot functions online." }, url: "https://www.desmos.com/calculator?lang=fr" }
  ],
  algebre: [
    //{ type: "link", title: { fr: "Open Logic Project", en: "Open Logic Project" }, description: { fr: "Ressources libres pour étudier la logique.", en: "Open resources for studying logic." }, url: "https://openlogicproject.org/" }
  ],
  tic: [
    //{ type: "link", title: { fr: "MDN Web Docs", en: "MDN Web Docs" }, description: { fr: "Documentation de référence pour apprendre les technologies web.", en: "Reference documentation for learning web technologies." }, url: "https://developer.mozilla.org/fr/" }
  ]
};

const navItems = [{ id: "home", icon: "⌂" }, ...modules.map(module => ({ id: module.id, icon: module.icon })), { id: "about", icon: "◎" }];
const pageContent = document.getElementById("page-content");
const primaryNav = document.getElementById("primary-nav");
const breadcrumb = document.getElementById("breadcrumb");
const savedLanguage = localStorage.getItem("preferred_language");
let language = savedLanguage === "en" ? "en" : "fr";
let activePage = "home";
let activeTab = "video";

function text(value) {
  return typeof value === "string" ? value : value[language];
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function getModule(id) {
  return modules.find(module => module.id === id);
}

function updateStaticLabels() {
  const copy = languages[language];
  document.documentElement.lang = language;
  document.title = language === "fr" ? "Campus L1 — Informatique USTHB" : "Campus L1 — Computer Science USTHB";
  document.getElementById("today-label").textContent = new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date());
  document.querySelector(".language-switch").setAttribute("aria-label", copy.languageLabel);
  document.getElementById("sidebar").setAttribute("aria-label", copy.navHeading);
  document.getElementById("sidebar-label").textContent = copy.navHeading;
  document.getElementById("footer-motto").textContent = copy.motto;
  document.getElementById("footer-program").textContent = copy.footerProgram;
  document.getElementById("menu-toggle").setAttribute("aria-label", document.body.classList.contains("menu-open") ? copy.menuClose : copy.menuOpen);
  document.querySelectorAll("[data-language]").forEach(button => {
    const selected = button.dataset.language === language;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function setMenuOpen(isOpen) {
  document.body.classList.toggle("menu-open", isOpen);
  const menuToggle = document.getElementById("menu-toggle");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? languages[language].menuClose : languages[language].menuOpen);
}

function renderNavigation() {
  primaryNav.innerHTML = navItems.map(item => {
    const module = getModule(item.id);
    const label = module ? text(module.short) : item.id === "about" ? languages[language].about : languages[language].home;
    return `<a class="nav-link${activePage === item.id ? " is-active" : ""}" href="#${item.id}"${activePage === item.id ? ' aria-current="page"' : ""}>
      <span class="nav-icon" aria-hidden="true">${item.icon}</span><span>${escapeHtml(label)}</span>${module ? `<span class="nav-count">${module.count}</span>` : ""}
    </a>`;
  }).join("");
}

function renderHome() {
  const copy = languages[language];
  pageContent.innerHTML = `
    <section class="welcome-banner">
      <div class="welcome-copy">
        <span class="eyebrow">${copy.welcomeEyebrow}</span>
        <h1>${copy.welcomeTitle} <span>${copy.welcomeHighlight}</span></h1>
        <p>${copy.welcomeDescription}</p>
        <button class="button button-primary" type="button" data-action="open-module" data-module="algo">${copy.explore} <span aria-hidden="true">→</span></button>
      </div>
      <div class="welcome-code" aria-hidden="true">
        <div class="code-top"><i></i><i></i><i></i></div>
        <p class="code-line"><span class="muted">// ${language === "fr" ? "année" : "year"} 2026–27</span></p>
        <p class="code-line"><span class="blue">const</span> parcours = <span class="green">"Informatique"</span>;</p>
        <p class="code-line"><span class="blue">const</span> niveau = <span class="green">"L1"</span>;</p>
        <p class="code-line"><span class="blue">while</span> (motivation) { <span class="green">learn()</span>; }</p>
      </div>
    </section>
    <section aria-labelledby="announcements-heading">
      <div class="section-heading"><div><h2 id="announcements-heading">${copy.announcements}</h2><p>${copy.announcementsDescription}</p></div><span class="text-link">${copy.newsCount(announcements.length)}</span></div>
      <div class="announcement-grid">${announcements.map(item => {
        const destination = item.destination;
        const style = item.color ? ` style="background-color: ${escapeHtml(item.color)}"` : "";
        const content = `
          <div class="announcement-meta"><span class="tag">${escapeHtml(text(item.tag))}</span><time>${new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${item.date}T12:00:00`))}</time></div>
          <h3>${escapeHtml(text(item.title))}</h3><p>${escapeHtml(text(item.description))}</p>`;
        return destination
          ? `<a class="announcement-card" href="#${escapeHtml(destination.page)}" data-action="open-announcement" data-page="${escapeHtml(destination.page)}" data-tab="${escapeHtml(destination.tab || "video")}"${style}>${content}</a>`
          : `<article class="announcement-card"${style}>${content}</article>`;
      }).join("")}
      </div>
    </section>
    <section class="home-subjects" aria-labelledby="subjects-heading">
      <div class="section-heading"><div><h2 id="subjects-heading">${copy.subjects}</h2><p>${copy.subjectsDescription}</p></div></div>
      <div class="subjects-grid">${renderSubjectCards()}</div>
    </section>`;
}

function renderAbout() {
  const copy = languages[language];
  const email = "chikhtouamizineeddine@gmail.com";
  const portfolio = "https://chikhze.github.io/portfolio/";
  pageContent.innerHTML = `
    <section class="about-page">
      <header class="about-heading">
        <span class="eyebrow">${copy.aboutEyebrow}</span>
        <h1>${copy.aboutTitle}</h1>
        <p>${copy.aboutDescription}</p>
      </header>
      <div class="about-grid">
        <article class="about-card developer-card">
          <div class="about-card-icon" aria-hidden="true">&lt;/&gt;</div>
          <span class="about-label">${copy.developerLabel}</span>
          <h2>${copy.developerTitle}</h2>
          <p>${copy.developerDescription}</p>
          <div class="about-links">
            <a class="button button-primary" href="${portfolio}" target="_blank" rel="noopener noreferrer">${copy.portfolioLabel}<span aria-hidden="true">↗</span></a>
            <a class="button button-quiet" href="mailto:${email}">${copy.emailLabel}<span aria-hidden="true">→</span></a>
          </div>
        </article>
        <article class="about-card issue-card">
          <span class="issue-icon" aria-hidden="true">!</span>
          <span class="about-label">${copy.contactPortfolio}</span>
          <h2>${copy.issueTitle}</h2>
          <p>${copy.issueDescription}</p>
          <a class="contact-email" href="mailto:${email}"><span aria-hidden="true">✉</span>${email}</a>
        </article>
      </div>
    </section>`;
}

function renderSubjectCards() {
  const copy = languages[language];
  return modules.map(module => `
    <button class="subject-card" style="--subject-accent:${module.color}" type="button" data-action="open-module" data-module="${module.id}">
      <span class="subject-icon" aria-hidden="true">${module.icon}</span>
      <span class="subject-info"><strong>${escapeHtml(text(module.short))}</strong><small>${copy.resourcesCount(resources[module.id].length)}</small></span>
      <span class="subject-arrow" aria-hidden="true">↗</span>
    </button>`).join("");
}

function getResourceHref(resource) {
  if (!resource.url) return "";
  let url;
  try {
    url = new URL(resource.url, document.baseURI);
  } catch {
    return "";
  }

  if (resource.type === "video") {
    if (!["http:", "https:"].includes(url.protocol)) return "";
    const host = url.hostname.toLowerCase();
    const shortLink = host === "youtu.be" || host === "www.youtu.be";
    const youtubeHost = [
      "youtube.com", "www.youtube.com", "m.youtube.com", "music.youtube.com",
      "youtube-nocookie.com", "www.youtube-nocookie.com"
    ].includes(host);
    if (shortLink) return url.pathname.split("/").filter(Boolean).length ? url.href : "";
    if (!youtubeHost) return "";
    if (url.pathname === "/watch" && url.searchParams.has("v")) return url.href;
    if (/^\/(embed|shorts|live)\/[^/]+/.test(url.pathname)) return url.href;
    return "";
  }

  if (resource.type === "pdf") {
    return ["http:", "https:", "file:"].includes(url.protocol) ? url.href : "";
  }

  return ["http:", "https:"].includes(url.protocol) ? url.href : "";
}

function resourceAction(resource) {
  const copy = languages[language];
  const label = resource.type === "video" ? copy.videoAction : resource.type === "pdf" ? copy.documentAction : copy.linkAction;
  const href = getResourceHref(resource);
  if (!href) {
    const message = resource.type === "video"
      ? copy.videoUnavailable
      : resource.type === "pdf" ? copy.documentUnavailable : copy.linkUnavailable;
    return `<span class="resource-action is-unavailable" aria-disabled="true" title="${message}">${copy.unavailable}</span>`;
  }

  return `<a class="resource-action" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">→</span></a>`;
}

function renderResourceCard(resource) {
  const copy = languages[language];
  const typeLabel = resource.type === "video" ? copy.videoType : resource.type === "pdf" ? copy.documentType : copy.linkType;
  const meta = `<div class="resource-topline"><span class="resource-type">${typeLabel}</span><span class="resource-date">${copy.semesterShort}</span></div>`;
  const details = `<div class="resource-body">${meta}<h3>${escapeHtml(text(resource.title))}</h3><p>${escapeHtml(text(resource.description))}</p>${resourceAction(resource)}</div>`;
  if (resource.type === "video") {
    const videoUrl = getResourceHref(resource);
    const previewContent = `<span class="preview-symbol" aria-hidden="true">&lt;/&gt;</span>
      <span class="play-button${videoUrl ? "" : " is-disabled"}" aria-hidden="true">▶</span>
      ${resource.duration ? `<span class="video-duration">${escapeHtml(resource.duration)}</span>` : ""}`;
    const preview = videoUrl
      ? `<a class="video-preview video-preview-link" href="${escapeHtml(videoUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(text(resource.title))} — ${escapeHtml(copy.videoAction)}">${previewContent}</a>`
      : `<div class="video-preview" aria-label="${escapeHtml(text(resource.title))}">${previewContent}</div>`;
    return `<article class="resource-card">${preview}${details}</article>`;
  }
  const icon = resource.type === "pdf" ? "▤" : "↗";
  return `<article class="resource-card"><div class="resource-icon ${resource.type}" aria-hidden="true">${icon}</div>${details}</article>`;
}

function renderModule() {
  const module = getModule(activePage);
  const copy = languages[language];
  const allResources = resources[module.id];
  const tabs = [
    { id: "video", label: copy.videoTab, icon: "▷" },
    { id: "pdf", label: copy.documentTab, icon: "▤" },
    { id: "link", label: copy.linksTab, icon: "↗" }
  ].map(tab => ({
    ...tab,
    count: allResources.filter(resource => resource.type === tab.id).length
  }));
  const filteredResources = allResources.filter(resource => resource.type === activeTab);
  const resourceCount = activeTab === "video" ? copy.videoCount(filteredResources.length) : activeTab === "pdf" ? copy.documentCount(filteredResources.length) : copy.resourceCount(filteredResources.length);
  pageContent.innerHTML = `
    <section class="module-header" style="--subject-accent:${module.color}">
      <div class="module-title-group"><span class="module-icon" aria-hidden="true">${module.icon}</span><div><h1>${escapeHtml(text(module.short))}</h1><p>${escapeHtml(text(module.name))}<span>·</span>${copy.semesterShort}</p></div></div>
      <div class="tabs" role="tablist" aria-label="${language === "fr" ? "Types de ressources" : "Resource types"}">${tabs.map(tab => `
        <button class="tab-button" id="tab-${tab.id}" role="tab" type="button" aria-selected="${activeTab === tab.id}" aria-controls="resource-panel" data-action="select-tab" data-tab="${tab.id}">
          <span aria-hidden="true">${tab.icon}</span>${tab.label}<span class="tab-count">${tab.count}</span>
        </button>`).join("")}
      </div>
    </section>
    <section id="resource-panel" role="tabpanel" aria-labelledby="tab-${activeTab}">
      <div class="module-toolbar"><p><strong>${resourceCount}</strong> ${copy.inModule}</p></div>
      <div class="resource-grid">${filteredResources.length ? filteredResources.map(renderResourceCard).join("") : `
        <div class="resource-empty"><span aria-hidden="true">${activeTab === "video" ? "▷" : activeTab === "pdf" ? "▤" : "↗"}</span><strong>${copy.noResourcesTitle}</strong><p>${copy.noResourcesDescription}</p></div>`}
      </div>
    </section>`;
}

function renderPage() {
  const copy = languages[language];
  setMenuOpen(false);
  const module = getModule(activePage);
  const pageLabel = module ? text(module.short) : activePage === "about" ? copy.about : copy.home;
  breadcrumb.innerHTML = `<span>${copy.breadcrumb}</span><b>/</b><strong>${escapeHtml(pageLabel)}</strong>`;
  updateStaticLabels();
  renderNavigation();
  if (module) renderModule();
  else if (activePage === "about") renderAbout();
  else renderHome();
}

function navigateTo(pageId,tap = "video") {
  activePage = pageId === "home" || pageId === "about" || getModule(pageId) ? pageId : "home";
  activeTab = ["video", "pdf", "link"].includes(tap) ? tap : "video";
  history.replaceState(null, "", `#${activePage}`);
  renderPage();
}

primaryNav.addEventListener("click", event => {
  const link = event.target.closest("a.nav-link");
  if (!link) return;
  event.preventDefault();
  navigateTo(link.hash.slice(1));
});

pageContent.addEventListener("click", event => {
  const control = event.target.closest("[data-action]");
  if (!control) return;
  if (control.dataset.action === "open-announcement") {
    event.preventDefault();
    navigateTo(control.dataset.page, control.dataset.tab);
  } else if (control.dataset.action === "open-module") {
    navigateTo(control.dataset.module);
  } else if (control.dataset.action === "select-tab") {
    activeTab = control.dataset.tab;
    renderModule();
  }
});

document.querySelector(".language-switch").addEventListener("click", event => {
  const button = event.target.closest("[data-language]");
  if (!button || button.dataset.language === language) return;
  language = button.dataset.language;
  localStorage.setItem("preferred_language", language);
  renderPage();
});

document.getElementById("menu-toggle").addEventListener("click", () => {
  setMenuOpen(!document.body.classList.contains("menu-open"));
});

document.getElementById("sidebar-scrim").addEventListener("click", () => setMenuOpen(false));

document.addEventListener("keydown", event => {
  if (event.key === "Escape") setMenuOpen(false);
});

window.addEventListener("hashchange", () => navigateTo(window.location.hash.slice(1)));

activePage = window.location.hash.slice(1);
if (activePage !== "home" && activePage !== "about" && !getModule(activePage)) activePage = "home";
renderPage();
