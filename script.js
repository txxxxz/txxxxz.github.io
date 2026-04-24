/*
  Personal site data and configuration live in this file.
  Update links, profile details, and bilingual copy here instead of editing HTML.
*/

const SITE_CONFIG = {
  brandMark: "CZ",
  links: {
    email: "mailto:chendi_zhou@163.com",
    github: "https://github.com/txxxxz",
    linkedin: "",
    resume: "",
  },
};

/*
  The page is written as a research statement rather than a resume.
  To change the narrative, edit SITE_CONTENT.en / SITE_CONTENT.zh below.
*/
const SITE_CONTENT = {
  en: {
    meta: {
      title: "Chendi Zhou - Research Profile",
      description:
        "Chendi Zhou - research profile on LLM systems, diffusion language models, code generation, agent workflows, and AI evaluation.",
    },
    brand: {
      name: "Chendi Zhou",
      role: "Research profile",
    },
    nav: [
      { id: "profile", label: "Profile" },
      { id: "research", label: "Research" },
      { id: "projects", label: "Cases" },
      { id: "experience", label: "Bio" },
      { id: "skills", label: "Methods" },
      { id: "thinking", label: "Notes" },
    ],
    languageSwitchLabel: "Language switcher",
    backToTop: "Back to top",
    backToTopShort: "Top",
    hero: {
      eyebrow: "Research profile for academic review contexts",
      name: "Chendi Zhou / 周晨迪",
      titleLines: [
        "LLM Systems",
        "Diffusion Language Models",
        "Agent Workflows",
      ],
      abstractTitle: "Abstract",
      abstract:
        "I am an MSc Computer Science student at The University of Hong Kong. My current research interests are LLM systems, diffusion language models for code generation, agent workflows, retrieval-augmented systems, and evaluation of controllability, efficiency, and safety. I am especially interested in how model behavior changes once generation is embedded in workflows with tools, retrieval, memory, permissions, and human-facing interfaces.",
      actions: [
        { label: "Email", key: "email", primary: true },
        { label: "GitHub", key: "github" },
      ],
      notes: [
        { label: "Affiliation", value: "MSc Computer Science, The University of Hong Kong" },
        { label: "Lab", value: "HKU NLP Lab, Research Assistant" },
        { label: "Research interests", value: "LLM systems; dLLM; code generation; agent safety; RAG; evaluation" },
        { label: "Background", value: "BEng Internet of Things Engineering, BUPT" },
      ],
    },
    statement: {
      kicker: "01 / Profile",
      title: "I study language model systems as combinations of models, decoding procedures, tools, retrieval, and human constraints.",
      paragraphs: [
        "My broad interest is in the systems layer around modern language models. A model's capability is only one part of system behavior; generation is also shaped by decoding, context construction, retrieval quality, tool access, latency, memory, and user interaction.",
        "This perspective connects my current work on diffusion language models with my prototype work on AI-assisted learning and contextual explanation. In both cases, the core question is how to make model outputs more grounded, controllable, efficient, and useful under realistic constraints.",
        "For academic review contexts, I would describe my areas as LLM systems, code generation, diffusion language models, agent workflows, retrieval-augmented generation, and human-centered evaluation of AI systems.",
      ],
      margin: {
        title: "Academic background",
        lines: [
          "MSc Computer Science, HKU",
          "BEng Internet of Things Engineering, BUPT",
          "Coursework: LLM, NLP, Deep Learning, Network Security",
        ],
      },
    },
    question: {
      kicker: "02 / Current research",
      title: "Current work: diffusion language models for code generation.",
      paragraphs: [
        "At HKU NLP Lab, I am working as a Research Assistant on exploratory research around diffusion language models for code generation. The work focuses on decoding strategies, generation quality, inference efficiency, and the trade-off between controllability and performance.",
        "The research question is practical as well as methodological: decoding strategy, inference cost, generation quality, and controllability are coupled. More control can introduce additional cost; faster inference can change quality; evaluation should capture properties beyond binary success.",
        "This line of work also informs my interest in agent systems. Once a language model is embedded in a workflow with tools, the boundary between model-level generation control and system-level safety becomes less clean.",
      ],
      margin: {
        title: "Research keywords",
        lines: [
          "Diffusion language models",
          "Code generation",
          "Decoding and inference",
          "Evaluation and controllability",
        ],
      },
    },
    systems: {
      kicker: "03 / Research-oriented prototypes",
      title: "I use prototypes to make system-level research questions concrete.",
      intro:
        "The following systems are research-oriented prototypes rather than portfolio demos. I use them to study context construction, retrieval, explanation, user attention, and workflow design in applied LLM systems.",
      cases: [
        {
          name: "DeepTutor",
          subtitle:
            "A multi-agent learning system prototype for structured knowledge construction.",
          paragraphs: [
            "DeepTutor extends an open-source multi-agent tutoring framework with structured note generation, mock exams, knowledge cards, and mind-map modules. The goal is to move beyond single-turn tutoring toward durable learning artifacts.",
            "The technically interesting component is a hierarchical RAG pipeline for long course materials. Page-range indexing and image-aligned note generation help reduce the gap between fluent summarization and grounded learning notes.",
            "The resulting workflow connects knowledge management, practice, research, and output. I view it as a prototype for studying how educational AI systems should organize retrieval, generation, and learner feedback.",
          ],
          margin: [
            "Multi-Agent",
            "RAG",
            "Structured Notes",
            "FastAPI",
            "LLM",
            "Learning Systems",
          ],
        },
        {
          name: "LinguaLens",
          subtitle:
            "A contextual explanation prototype for cross-cultural video understanding.",
          paragraphs: [
            "LinguaLens studies a different form of grounding: subtitles often preserve literal meaning while losing slang, cultural references, and contextual metaphors. The system explores how LLMs can provide situated explanations without forcing users to leave the viewing context.",
            "The interaction design separates Quick Explain and Deep Explain. This distinction makes latency and interruption visible design variables rather than hidden implementation details.",
            "The prototype combines a Chrome Extension, FastAPI, LLM calls, RAG / online retrieval, DOM extraction, OCR fallback, caching, source display, history, and latency tracking. It is useful as a compact case study in explanation quality, trust, and user attention.",
          ],
          margin: [
            "Chrome Extension",
            "FastAPI",
            "LLM",
            "RAG",
            "OCR",
            "HCI",
          ],
        },
      ],
    },
    context: {
      kicker: "04 / Prior technical context",
      title: "Industry experience shaped how I think about deployment constraints.",
      paragraphs: [
        "At Cambricon, I followed recent LLM papers and inference optimization directions, tested models across NVIDIA GPU and Cambricon hardware environments, and wrote technical investigation notes for model adaptation decisions. This made deployment and hardware constraints more concrete.",
        "At DiDi, I participated in homepage feature iterations, requirement analysis, PRD writing, technical review, testing, release follow-up, and cross-functional coordination. This experience made me more attentive to reliability, edge cases, and communication across engineering boundaries.",
        "These contexts are secondary to my research direction, but they affect how I evaluate AI systems: I care not only about capability, but also about reproducibility, latency, adaptation cost, and whether the system can be inspected by others.",
      ],
      margin: {
        title: "Prior contexts",
        lines: [
          "Cambricon, AI Platform Intern",
          "DiDi, Product Intern",
          "LLM paper tracking / model testing",
          "PRD / testing / release follow-up",
        ],
      },
    },
    methods: {
      kicker: "05 / Methods",
      title: "Methods and technical scope.",
      paragraphs: [
        "I usually move from a research question to a small controlled prototype. This makes assumptions visible: what data structure is needed, where latency appears, how retrieval changes model behavior, and where evaluation should be inserted.",
        "The recurring technical scope includes Python, Java, SQL, LLM systems, NLP, RAG, diffusion language models, FastAPI-style services, evaluation design, and interface prototyping for human-AI interaction.",
      ],
      terms: [
        "Python",
        "Java",
        "SQL",
        "LLM",
        "NLP",
        "RAG",
        "dLLM",
        "FastAPI",
        "Evaluation",
        "HCI",
        "System Prototyping",
      ],
    },
    position: {
      kicker: "06 / Research position",
      title: "The research question I want to keep pursuing.",
      paragraphs: [
        "I am interested in AI systems where model capability, tool use, retrieval, interface design, and safety constraints interact with each other.",
        "I believe future language model research will increasingly require system-level evaluation: not only whether a model can produce an answer, but how it behaves inside workflows with memory, permissions, tools, and human feedback.",
        "My near-term goal is to keep building research prototypes that make these interactions measurable, especially around diffusion language models, code generation, agent workflows, and learning systems.",
      ],
    },
    footer: {
      name: "Chendi Zhou",
      note: "Built for GitHub Pages",
      emailLabel: "Email",
    },
  },
  zh: {
    meta: {
      title: "周晨迪 - Research Profile",
      description:
        "周晨迪的学术主页，关注 LLM 系统、diffusion language models、代码生成、agent workflow 与 AI evaluation。",
    },
    brand: {
      name: "周晨迪",
      role: "Research profile",
    },
    nav: [
      { id: "profile", label: "Profile" },
      { id: "research", label: "Research" },
      { id: "projects", label: "Cases" },
      { id: "experience", label: "Bio" },
      { id: "skills", label: "Methods" },
      { id: "thinking", label: "Notes" },
    ],
    languageSwitchLabel: "语言切换",
    backToTop: "返回顶部",
    backToTopShort: "顶部",
    hero: {
      eyebrow: "面向学术场景的 research profile",
      name: "Chendi Zhou / 周晨迪",
      titleLines: [
        "LLM Systems",
        "Diffusion Language Models",
        "Agent Workflows",
      ],
      abstractTitle: "Abstract",
      abstract:
        "我目前在香港大学攻读计算机科学硕士，研究兴趣包括 LLM systems、diffusion language models for code generation、agent workflows、retrieval-augmented systems，以及围绕 controllability、efficiency 和 safety 的系统评估。我尤其关注模型进入带有工具、检索、记忆、权限和人机界面的 workflow 后，行为如何发生变化。",
      actions: [
        { label: "Email", key: "email", primary: true },
        { label: "GitHub", key: "github" },
      ],
      notes: [
        { label: "Affiliation", value: "MSc Computer Science, The University of Hong Kong" },
        { label: "Lab", value: "HKU NLP Lab, Research Assistant" },
        { label: "Research interests", value: "LLM systems; dLLM; code generation; agent safety; RAG; evaluation" },
        { label: "Background", value: "BEng Internet of Things Engineering, BUPT" },
      ],
    },
    statement: {
      kicker: "01 / Profile",
      title: "我把语言模型系统看作模型、解码过程、工具、检索和人类约束的组合。",
      paragraphs: [
        "我的主要兴趣在现代语言模型周围的 systems layer。模型能力只是系统行为的一部分；生成结果同样受到 decoding、上下文构造、检索质量、工具访问、时延、记忆和用户交互的影响。",
        "这个视角把我当前关于 diffusion language models 的研究和 AI-assisted learning、contextual explanation 等原型工作连接起来。它们共同关心的是如何在真实约束下让模型输出更 grounded、更可控、更高效，也更容易评估。",
        "如果放在学术评审语境中，我会把自己的方向概括为 LLM systems、code generation、diffusion language models、agent workflows、retrieval-augmented generation 和 human-centered evaluation of AI systems。",
      ],
      margin: {
        title: "Academic background",
        lines: [
          "MSc Computer Science, HKU",
          "BEng Internet of Things Engineering, BUPT",
          "Coursework: LLM, NLP, Deep Learning, Network Security",
        ],
      },
    },
    question: {
      kicker: "02 / Current research",
      title: "Current work: diffusion language models for code generation.",
      paragraphs: [
        "在 HKU NLP Lab，我作为 Research Assistant 参与 diffusion language model 方向的探索性研究，场景主要围绕代码生成。工作重点包括 decoding strategies、generation quality、inference efficiency，以及 controllability 和 performance 之间的 trade-off。",
        "这个问题既是方法问题，也是系统问题：decoding strategy、inference cost、generation quality 和 controllability 是耦合的。更强的控制可能带来额外成本，更快的推理可能改变质量，evaluation 也不应该只停留在 binary success。",
        "这条线也连接到 agent systems。当语言模型被嵌入带有工具的 workflow 后，模型层面的 generation control 和系统层面的 safety boundary 会变得更难分开。",
      ],
      margin: {
        title: "Research keywords",
        lines: [
          "Diffusion language models",
          "Code generation",
          "Decoding and inference",
          "Evaluation and controllability",
        ],
      },
    },
    systems: {
      kicker: "03 / Research-oriented prototypes",
      title: "我用原型把系统层面的研究问题具体化。",
      intro:
        "下面两个系统不作为商业产品展示，而是作为 research-oriented prototypes：它们帮助我观察 LLM 系统中的 context construction、retrieval、explanation、user attention 和 workflow design。",
      cases: [
        {
          name: "DeepTutor",
          subtitle: "A multi-agent learning system prototype for structured knowledge construction.",
          paragraphs: [
            "DeepTutor 基于一个开源 multi-agent tutoring framework，并扩展了结构化笔记生成、Mock Exam、知识卡片和思维导图等模块。目标是让 tutoring 不停留在一次性回答，而是产生可复用的学习对象。",
            "其中更有研究意味的是长课件上的 hierarchical RAG pipeline。Page-range indexing 和 image-aligned note generation 可以缓解 fluent summarization 和 grounded learning notes 之间的差距。",
            "系统最终形成 knowledge management、practice、research 和 output 的工作流。我把它视为研究 educational AI systems 中 retrieval、generation 和 learner feedback 如何组织的原型。",
          ],
          margin: [
            "Multi-Agent",
            "RAG",
            "Structured Notes",
            "FastAPI",
            "LLM",
            "Learning Systems",
          ],
        },
        {
          name: "LinguaLens",
          subtitle: "A contextual explanation prototype for cross-cultural video understanding.",
          paragraphs: [
            "LinguaLens 关注另一种 grounding：字幕通常能保留字面意思，却会丢失俚语、文化引用和语境隐喻。系统探索 LLM 如何在不迫使用户离开观看上下文的情况下提供 situated explanations。",
            "交互上我把解释拆成 Quick Explain 和 Deep Explain。这个拆分让 latency 和 interruption 成为显性的系统设计变量。",
            "原型结合 Chrome Extension、FastAPI、LLM、RAG / online retrieval、DOM extraction、OCR fallback、caching、source display、history 和 latency tracking。它可以作为解释质量、信任和用户注意力之间关系的小型 case study。",
          ],
          margin: [
            "Chrome Extension",
            "FastAPI",
            "LLM",
            "RAG",
            "OCR",
            "HCI",
          ],
        },
      ],
    },
    context: {
      kicker: "04 / Prior technical context",
      title: "工业经历让我更重视 deployment constraints。",
      paragraphs: [
        "在寒武纪，我跟踪大模型论文与推理优化方向，参与模型在 NVIDIA GPU 与寒武纪自研硬件上的测试对比，并输出技术调研与测试结论。这让我对部署、硬件适配和推理成本有了更具体的认识。",
        "在滴滴，我参与 App 首页核心业务需求迭代，覆盖需求分析、PRD 编写、技术细评、测试走查、上线跟进和跨团队协作。这段经历让我更关注 reliability、edge cases 和工程边界之间的沟通成本。",
        "这些经历不是我的主要研究方向，但它们影响了我评价 AI 系统的方式：我不只关心 capability，也关心 reproducibility、latency、adaptation cost，以及系统能否被别人检查和复现。",
      ],
      margin: {
        title: "相关上下文",
        lines: [
          "寒武纪，AI Platform Intern",
          "LLM paper tracking / model testing",
          "DiDi，Product Intern",
          "PRD / testing / release follow-up",
        ],
      },
    },
    methods: {
      kicker: "05 / Methods",
      title: "Methods and technical scope.",
      paragraphs: [
        "我通常会从一个研究问题走到一个小型可控原型。原型会暴露很多纸面讨论不容易看到的假设：数据结构应该如何设计，时延在哪里出现，检索如何改变模型行为，evaluation 应该插在哪里。",
        "反复出现的技术范围包括 Python、Java、SQL、LLM systems、NLP、RAG、diffusion language models、FastAPI-style services、evaluation design，以及面向 human-AI interaction 的界面原型。",
      ],
      terms: [
        "Python",
        "Java",
        "SQL",
        "LLM",
        "NLP",
        "RAG",
        "dLLM",
        "FastAPI",
        "Evaluation",
        "HCI",
        "System Prototyping",
      ],
    },
    position: {
      kicker: "06 / Research position",
      title: "我希望持续追的问题。",
      paragraphs: [
        "我关注的是模型能力、工具调用、检索、界面设计和安全约束如何共同影响一个 AI 系统。",
        "我认为未来语言模型研究会越来越需要 system-level evaluation：不只是模型能不能给出答案，也包括它在带有 memory、permissions、tools 和 human feedback 的 workflow 中如何表现。",
        "短期内，我希望继续围绕 diffusion language models、code generation、agent workflows 和 learning systems 做能让这些交互变得可测量的 research prototypes。",
      ],
    },
    footer: {
      name: "周晨迪",
      note: "Built for GitHub Pages",
      emailLabel: "Email",
    },
  },
};

const sectionTargets = {
  hero: document.querySelector("[data-hero-copy]"),
  heroPanel: document.querySelector("[data-hero-panel]"),
  nav: document.querySelector("[data-nav-list]"),
  profile: document.querySelector("[data-profile-section]"),
  research: document.querySelector("[data-research-section]"),
  projects: document.querySelector("[data-projects-section]"),
  experience: document.querySelector("[data-experience-section]"),
  skills: document.querySelector("[data-skills-section]"),
  thinking: document.querySelector("[data-thinking-section]"),
  footer: document.querySelector("[data-footer-section]"),
};

const languageButtons = [...document.querySelectorAll("[data-lang-choice]")];
const backToTopButton = document.querySelector("[data-back-to-top]");
const backToTopLabel = document.querySelector("[data-back-to-top-label]");
const revealElements = [...document.querySelectorAll(".reveal")];
const brandMarkElement = document.querySelector("[data-brand-mark]");
const brandNameElement = document.querySelector("[data-brand-name]");
const brandRoleElement = document.querySelector("[data-brand-role]");

let activeLanguage = getInitialLanguage();

function getInitialLanguage() {
  const stored = window.localStorage.getItem("preferred-language");
  if (stored === "en" || stored === "zh") {
    return stored;
  }

  return "en";
}

function updateLanguageButtons(lang) {
  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langChoice === lang);
  });
}

function renderParagraphs(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function renderMarginNote(note) {
  if (!note) {
    return "";
  }

  const lines = Array.isArray(note) ? note : note.lines;
  const title = Array.isArray(note) ? "Keywords" : note.title;

  return `
    <aside class="margin-note">
      <div class="margin-title">${title}</div>
      <ul>
        ${lines.map((line) => `<li>${line}</li>`).join("")}
      </ul>
    </aside>
  `;
}

function createActionLink(action) {
  const href = SITE_CONFIG.links[action.key] || "#";
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.endsWith(".pdf");

  return `
    <a
      class="action-button ${action.primary ? "is-primary" : ""}"
      href="${href}"
      ${isExternal ? 'target="_blank" rel="noreferrer"' : ""}
    >
      <span>${action.label}</span>
      <span aria-hidden="true">-></span>
    </a>
  `;
}

function renderHero(content) {
  sectionTargets.hero.innerHTML = `
    <div class="eyebrow">${content.hero.eyebrow}</div>
    <p class="hero-name">${content.hero.name}</p>
    <h1 class="hero-title">
      ${content.hero.titleLines.map((line) => `<span>${line}</span>`).join("")}
    </h1>
    <div class="abstract-block">
      <div class="abstract-label">${content.hero.abstractTitle}</div>
      <p>${content.hero.abstract}</p>
    </div>
    <div class="hero-actions">
      ${content.hero.actions.map(createActionLink).join("")}
    </div>
  `;

  sectionTargets.heroPanel.innerHTML = `
    <aside class="margin-note hero-note">
      <div class="margin-title">${content.hero.name}</div>
      <ul>
        ${content.hero.notes
          .map(
            (note) => `
              <li>
                <span>${note.label}</span>
                <strong>${note.value}</strong>
              </li>
            `
          )
          .join("")}
      </ul>
    </aside>
  `;
}

function renderNavigation(content) {
  sectionTargets.nav.innerHTML = content.nav
    .map(
      (item) => `
        <a class="nav-link" href="#${item.id}" data-nav-link="${item.id}">
          ${item.label}
        </a>
      `
    )
    .join("");
}

function renderNarrativeSection(target, section) {
  target.innerHTML = `
    <article class="narrative-section">
      <aside class="section-rail">
        <div class="section-kicker">${section.kicker}</div>
      </aside>
      <div class="narrative-body">
        <h2 class="section-title">${section.title}</h2>
        <div class="prose">
          ${renderParagraphs(section.paragraphs)}
        </div>
      </div>
      ${renderMarginNote(section.margin)}
    </article>
  `;
}

function renderSystems(content) {
  const section = content.systems;

  sectionTargets.projects.innerHTML = `
    <article class="narrative-section systems-section">
      <aside class="section-rail">
        <div class="section-kicker">${section.kicker}</div>
      </aside>
      <div class="narrative-body">
        <h2 class="section-title">${section.title}</h2>
        <div class="prose">
          <p>${section.intro}</p>
        </div>
        <div class="case-list">
          ${section.cases
            .map(
              (item) => `
                <section class="case-study">
                  <div class="case-main">
                    <h3>${item.name}</h3>
                    <p class="case-subtitle">${item.subtitle}</p>
                    <div class="prose">
                      ${renderParagraphs(item.paragraphs)}
                    </div>
                  </div>
                  ${renderMarginNote(item.margin)}
                </section>
              `
            )
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderMethods(content) {
  const section = content.methods;

  sectionTargets.skills.innerHTML = `
    <article class="narrative-section">
      <aside class="section-rail">
        <div class="section-kicker">${section.kicker}</div>
      </aside>
      <div class="narrative-body">
        <h2 class="section-title">${section.title}</h2>
        <div class="prose">
          ${renderParagraphs(section.paragraphs)}
        </div>
        <div class="inline-terms">
          ${section.terms.map((term) => `<span>${term}</span>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderPosition(content) {
  const section = content.position;

  sectionTargets.thinking.innerHTML = `
    <article class="narrative-section closing-section">
      <aside class="section-rail">
        <div class="section-kicker">${section.kicker}</div>
      </aside>
      <div class="narrative-body">
        <h2 class="section-title">${section.title}</h2>
        <div class="position-lines">
          ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
      </div>
    </article>
  `;
}

function renderFooter(content) {
  sectionTargets.footer.innerHTML = `
    <div class="footer-layout">
      <div>
        <div class="footer-name">${content.footer.name}</div>
        <div class="footer-note">${content.footer.note}</div>
      </div>
      <a class="footer-link" href="${SITE_CONFIG.links.email}">
        ${content.footer.emailLabel}
      </a>
    </div>
  `;
}

function updateMeta(content) {
  document.title = content.meta.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", content.meta.description);
  }
}

function applyLanguage(lang) {
  activeLanguage = lang;
  const content = SITE_CONTENT[lang];

  updateMeta(content);
  updateLanguageButtons(lang);

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document
    .querySelector(".lang-switch")
    .setAttribute("aria-label", content.languageSwitchLabel);
  backToTopButton.setAttribute("aria-label", content.backToTop);
  backToTopLabel.textContent = content.backToTopShort;

  brandMarkElement.textContent = SITE_CONFIG.brandMark;
  brandNameElement.textContent = content.brand.name;
  brandRoleElement.textContent = content.brand.role;

  renderNavigation(content);
  renderHero(content);
  renderNarrativeSection(sectionTargets.profile, content.statement);
  renderNarrativeSection(sectionTargets.research, content.question);
  renderSystems(content);
  renderNarrativeSection(sectionTargets.experience, content.context);
  renderMethods(content);
  renderPosition(content);
  renderFooter(content);

  updateActiveNav();
  window.localStorage.setItem("preferred-language", lang);
}

function updateActiveNav() {
  const links = [...document.querySelectorAll("[data-nav-link]")];
  const currentOffset = window.scrollY + window.innerHeight * 0.35;
  const sections = links
    .map((link) => document.getElementById(link.dataset.navLink))
    .filter(Boolean);

  let activeId = sections[0]?.id || "";

  sections.forEach((section) => {
    if (currentOffset >= section.offsetTop) {
      activeId = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.navLink === activeId);
  });
}

function handleScroll() {
  updateActiveNav();
  backToTopButton.classList.toggle("is-visible", window.scrollY > 500);
}

function setupRevealObserver() {
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12,
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langChoice);
  });
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", updateActiveNav);

applyLanguage(activeLanguage);
setupRevealObserver();
handleScroll();
