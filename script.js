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
      title: "Chendi Zhou - AI Systems Notes",
      description:
        "Chendi Zhou - notes on LLM systems, diffusion language models, agent workflows, and AI-native products.",
    },
    brand: {
      name: "Chendi Zhou",
      role: "AI systems notes",
    },
    nav: [
      { id: "profile", label: "Statement" },
      { id: "research", label: "Question" },
      { id: "projects", label: "Systems" },
      { id: "experience", label: "Context" },
      { id: "skills", label: "Methods" },
      { id: "thinking", label: "Position" },
    ],
    languageSwitchLabel: "Language switcher",
    backToTop: "Back to top",
    backToTopShort: "Top",
    hero: {
      eyebrow: "Personal research statement / working notes",
      name: "Chendi Zhou / 周晨迪",
      titleLines: [
        "AI systems should be studied",
        "as workflows, interfaces, and constraints.",
      ],
      abstractTitle: "Abstract",
      abstract:
        "I am an MSc Computer Science student at The University of Hong Kong, working around LLM systems, diffusion language models, agent workflows, and AI-native learning products. The thread I keep returning to is simple: model capability matters, but the usable system is shaped just as much by decoding, retrieval, tool boundaries, memory, latency, and interface design.",
      actions: [
        { label: "Email", key: "email", primary: true },
        { label: "GitHub", key: "github" },
      ],
      notes: [
        { label: "Current affiliation", value: "MSc Computer Science, HKU" },
        { label: "Prior background", value: "IoT Engineering, BUPT" },
        { label: "Current lab work", value: "HKU NLP Lab, dLLM for code generation" },
        { label: "Working mode", value: "Research question -> small system -> evaluation" },
      ],
    },
    statement: {
      kicker: "01 / Statement",
      title: "I am interested in the part of AI that happens after a model becomes capable.",
      paragraphs: [
        "A stronger model is rarely enough by itself. Once it is placed inside a product or an agent workflow, the important questions become more concrete: what context does it receive, which tools can it call, how much memory should it keep, where does permission live, and how does a user know when to trust the output.",
        "This is why my work has moved between NLP research, AI product design, and engineering prototypes. I use research questions to choose what to build, and I use working systems to make the research question less vague.",
        "The page below is organized as a set of connected notes rather than a chronological resume. The details are still here, but the main object is the line of thinking behind them.",
      ],
      margin: {
        title: "Background, compressed",
        lines: [
          "HKU, MSc Computer Science",
          "BUPT, BEng Internet of Things Engineering",
          "LLM / NLP / Deep Learning / Network Security coursework",
        ],
      },
    },
    question: {
      kicker: "02 / Research question",
      title: "How do generation quality, efficiency, and controllability trade off in language generation systems?",
      paragraphs: [
        "At HKU NLP Lab, I am exploring diffusion language models for code generation. The work is not only about whether a model can generate code, but also about how decoding choices change the shape of the generation process.",
        "The research lens is practical: decoding strategy, inference cost, generation quality, and controllability are not independent variables. Better control can introduce latency; faster inference can change quality; evaluation has to capture more than pass or fail.",
        "This interest also connects to agent systems. Once a model can act through tools, decoding and control are no longer purely model-side concerns. They become system-side design problems.",
      ],
      margin: {
        title: "Current focus",
        lines: [
          "Diffusion language models",
          "Code generation",
          "Decoding and inference",
          "Evaluation and controllability",
        ],
      },
    },
    systems: {
      kicker: "03 / System studies",
      title: "Two projects are useful because they expose different edges of the same problem.",
      intro:
        "DeepTutor and LinguaLens look different on the surface: one is about learning from course materials, the other is about understanding subtitles in context. Underneath, both ask how an AI product should organize context, action, explanation, and user attention.",
      cases: [
        {
          name: "DeepTutor",
          subtitle:
            "From chat-based tutoring toward a structured learning loop.",
          paragraphs: [
            "DeepTutor started from an open-source multi-agent tutoring framework. I extended it with structured note generation, mock exams, knowledge cards, and mind-map modules because a learning system should not end at a chat answer.",
            "The most interesting part was the note generation pipeline: long course slides need page-range indexing, hierarchical retrieval, and image-aligned generation, otherwise the output becomes fluent but weakly grounded.",
            "The product direction became a loop: knowledge management -> practice -> research -> output. Codex and Claude Code were useful not as magic builders, but as acceleration tools for implementation and iteration.",
          ],
          margin: [
            "Multi-Agent",
            "RAG",
            "Structured Notes",
            "FastAPI",
            "LLM",
            "Codex",
          ],
        },
        {
          name: "LinguaLens",
          subtitle:
            "An AI subtitle explanation tool for cross-cultural video understanding.",
          paragraphs: [
            "LinguaLens began with a small observation: subtitles can translate words but often miss slang, cultural references, and contextual metaphors. The product goal was to reduce the need to leave the video and search elsewhere.",
            "The interaction split into Quick Explain and Deep Explain. Quick Explain protects the watching flow; Deep Explain gives cultural and contextual depth when the user chooses to pause.",
            "The MVP combined a Chrome Extension, FastAPI, LLM calls, RAG / online retrieval, DOM extraction, OCR fallback, caching, source display, history, and latency tracking. Most of the design work was about making explanation useful without making it intrusive.",
          ],
          margin: [
            "Chrome Extension",
            "FastAPI",
            "LLM",
            "RAG",
            "OCR",
            "Product Design",
          ],
        },
      ],
    },
    context: {
      kicker: "04 / Context",
      title: "Product and platform work gave me a stronger sense of real constraints.",
      paragraphs: [
        "At DiDi, I worked on homepage product iterations, PRDs, technical review, testing, release follow-up, and cross-functional coordination around order-container related modules. That experience made product constraints feel concrete: a system has to survive ownership boundaries, schedules, edge cases, and release risk.",
        "At Cambricon, I followed LLM papers and inference optimization directions, tested models across NVIDIA GPU and Cambricon hardware environments, and wrote technical investigation notes for model adaptation decisions. That work made the hardware and deployment side of AI systems feel less abstract.",
        "These two contexts sit in the background of how I build now. I care about research taste, but I also care about whether a system can be shipped, tested, adapted, and understood by people who did not write it.",
      ],
      margin: {
        title: "Prior contexts",
        lines: [
          "DiDi, Product Intern",
          "Cambricon, AI Platform Intern",
          "PRD / testing / release follow-up",
          "LLM paper tracking / model testing",
        ],
      },
    },
    methods: {
      kicker: "05 / Methods",
      title: "The tools are less important than the habit: make the idea executable.",
      paragraphs: [
        "I usually move from a research question to a small system quickly. A prototype makes the missing assumptions visible: what the data structure should be, where latency appears, how users interrupt the flow, and where the model needs guardrails.",
        "The stack changes with the question, but the recurring ingredients are Python, Java, SQL, LLMs, NLP, RAG, dLLM concepts, FastAPI-style services, product prototyping, PRD writing, Figma, Codex, and Claude Code.",
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
        "Figma",
        "Codex",
        "Claude Code",
        "PRD",
      ],
    },
    position: {
      kicker: "06 / Position",
      title: "A few beliefs I currently build with.",
      paragraphs: [
        "I am interested in AI systems where model capability, tool use, interface design, and safety constraints interact with each other.",
        "I believe future AI products will not only depend on stronger models, but also on better workflows, permissions, memory, and human-AI interaction design.",
        "I prefer building small but working systems to validate ideas quickly. A working prototype is often a better research note than a long speculative document.",
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
      title: "周晨迪 - AI Systems Notes",
      description:
        "周晨迪的个人主页，关注 LLM 系统、diffusion language models、agent workflow 与 AI-native 产品。",
    },
    brand: {
      name: "周晨迪",
      role: "AI systems notes",
    },
    nav: [
      { id: "profile", label: "Statement" },
      { id: "research", label: "Question" },
      { id: "projects", label: "Systems" },
      { id: "experience", label: "Context" },
      { id: "skills", label: "Methods" },
      { id: "thinking", label: "Position" },
    ],
    languageSwitchLabel: "语言切换",
    backToTop: "返回顶部",
    backToTopShort: "顶部",
    hero: {
      eyebrow: "个人 research statement / working notes",
      name: "Chendi Zhou / 周晨迪",
      titleLines: [
        "我更关心模型能力进入系统之后",
        "会怎样被 workflow、界面和约束重新塑形。",
      ],
      abstractTitle: "Abstract",
      abstract:
        "我目前在香港大学攻读计算机科学硕士，关注 LLM systems、diffusion language models、agent workflow 和 AI-native 学习产品。贯穿这些方向的核心问题是：模型能力当然重要，但真正可用的 AI 系统同样取决于 decoding、retrieval、工具边界、记忆、时延和交互设计。",
      actions: [
        { label: "Email", key: "email", primary: true },
        { label: "GitHub", key: "github" },
      ],
      notes: [
        { label: "当前身份", value: "香港大学计算机科学硕士" },
        { label: "本科背景", value: "北京邮电大学物联网工程" },
        { label: "实验室方向", value: "HKU NLP Lab, dLLM for code generation" },
        { label: "工作方式", value: "研究问题 -> 小系统 -> 验证与迭代" },
      ],
    },
    statement: {
      kicker: "01 / Statement",
      title: "我感兴趣的是模型变强之后，系统层面真正开始变复杂的那一部分。",
      paragraphs: [
        "更强的模型本身很重要，但当它被放进产品或 agent workflow 里，问题会立刻变得具体：它应该看到什么上下文，可以调用哪些工具，记忆应该保留到什么程度，权限边界在哪里，用户又如何判断输出是否值得信任。",
        "所以我的经历会在 NLP 研究、AI 产品设计和工程原型之间来回切换。我会用研究问题决定要做什么系统，也会用一个可运行的系统把研究问题变得更清楚。",
        "这个页面不想写成时间线简历，而更像一组彼此关联的工作笔记。履历细节仍然在，但重点是这些经历背后共同指向的思考。",
      ],
      margin: {
        title: "背景压缩版",
        lines: [
          "香港大学，计算机科学硕士",
          "北京邮电大学，物联网工程本科",
          "LLM / NLP / Deep Learning / Network Security 等课程",
        ],
      },
    },
    question: {
      kicker: "02 / Research question",
      title: "在语言生成系统里，生成质量、推理效率和可控性如何相互牵制？",
      paragraphs: [
        "在 HKU NLP Lab，我参与 diffusion language model 方向的探索性研究，场景主要围绕代码生成。这个问题不只是模型能否生成代码，也包括 decoding strategy 如何改变生成过程本身。",
        "我更关心其中实际的 trade-off：decoding、inference cost、generation quality 和 controllability 并不是相互独立的变量。更强的控制可能带来更高时延，更快的推理可能影响质量，evaluation 也不能只停在 pass / fail。",
        "这条线也自然连接到 agent systems。当模型能够通过工具行动时，decoding 和 control 就不再只是模型侧问题，而会变成系统设计问题。",
      ],
      margin: {
        title: "当前关注",
        lines: [
          "Diffusion language models",
          "Code generation",
          "Decoding and inference",
          "Evaluation and controllability",
        ],
      },
    },
    systems: {
      kicker: "03 / System studies",
      title: "两个项目表面上不同，但都在暴露同一个问题的不同边缘。",
      intro:
        "DeepTutor 和 LinguaLens 一个面向课程学习，一个面向视频字幕理解。它们真正共享的问题是：AI 产品如何组织上下文、行动、解释和用户注意力。",
      cases: [
        {
          name: "DeepTutor",
          subtitle: "从问答式 tutoring 扩展到结构化学习闭环。",
          paragraphs: [
            "DeepTutor 基于一个开源 multi-agent tutoring framework。我补充了结构化笔记生成、Mock Exam、知识卡片和思维导图等模块，因为学习系统不应该停在一次聊天回答。",
            "其中最值得推敲的是结构化笔记生成：长课件需要 page-range indexing、hierarchical retrieval 和图片对齐生成，否则输出容易流畅但缺少 grounding。",
            "最终产品方向被组织成一个闭环：知识管理 -> 练习巩固 -> 研究 -> 输出。Codex 和 Claude Code 在其中更像开发加速器，用来缩短实现和迭代周期。",
          ],
          margin: [
            "Multi-Agent",
            "RAG",
            "Structured Notes",
            "FastAPI",
            "LLM",
            "Codex",
          ],
        },
        {
          name: "LinguaLens",
          subtitle: "面向跨文化视频理解的 AI 字幕解释工具。",
          paragraphs: [
            "LinguaLens 来自一个很小但真实的观察：字幕可以翻译字面意思，却经常解释不了俚语、文化梗和语境隐喻。产品目标是减少用户跳出播放器搜索的成本。",
            "交互上我把解释拆成 Quick Explain 和 Deep Explain。Quick Explain 保护观看流，Deep Explain 在用户愿意停下来时补充文化背景和上下文。",
            "MVP 包括 Chrome Extension、FastAPI、LLM、RAG / 在线检索、DOM 抓取、OCR fallback、多级缓存、来源展示、历史记录和时延埋点。真正的设计重点不是功能数量，而是让解释有用但不打扰。",
          ],
          margin: [
            "Chrome Extension",
            "FastAPI",
            "LLM",
            "RAG",
            "OCR",
            "Product Design",
          ],
        },
      ],
    },
    context: {
      kicker: "04 / Context",
      title: "产品和平台经历让我更清楚真实系统约束是什么样的。",
      paragraphs: [
        "在滴滴，我参与 App 首页核心业务需求迭代，覆盖需求分析、PRD 编写、技术细评、测试走查、上线跟进，也在订单容器相关模块中协调多方协作。那段经历让我对产品约束有了更具体的感知：系统要能穿过职责边界、排期、边界情况和上线风险。",
        "在寒武纪，我跟踪大模型论文与推理优化方向，参与模型在 NVIDIA GPU 与寒武纪自研硬件上的测试对比，并输出技术调研与测试结论。那段经历让我对 AI 系统的硬件和适配侧不再只停留在抽象理解。",
        "这两类经历构成了我现在做系统时的底色：我在意研究品味，也在意一个系统能不能被交付、测试、适配，并被没有写过它的人理解。",
      ],
      margin: {
        title: "相关上下文",
        lines: [
          "DiDi，Product Intern",
          "寒武纪，AI Platform Intern",
          "PRD / testing / release follow-up",
          "LLM paper tracking / model testing",
        ],
      },
    },
    methods: {
      kicker: "05 / Methods",
      title: "工具本身不是重点，重点是尽快让想法进入可运行状态。",
      paragraphs: [
        "我通常会从一个研究问题很快走到一个小系统。原型会暴露很多纸面讨论看不到的假设：数据结构应该怎么设计，时延在哪里出现，用户如何打断流程，模型在哪些地方需要 guardrail。",
        "具体技术栈会随问题变化，但反复出现的元素包括 Python、Java、SQL、LLM、NLP、RAG、dLLM、FastAPI-style services、产品原型、PRD、Figma、Codex 和 Claude Code。",
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
        "Figma",
        "Codex",
        "Claude Code",
        "PRD",
      ],
    },
    position: {
      kicker: "06 / Position",
      title: "一些我现在做系统时会带着的判断。",
      paragraphs: [
        "我关注的不只是模型能力本身，也包括工具调用、权限边界、界面设计和安全约束如何共同影响一个 AI 系统。",
        "我认为未来 AI 产品的发展不只依赖更强的模型，也依赖更好的 workflow、权限设计、记忆机制和人机交互。",
        "我更倾向于通过小而可运行的系统快速验证想法。很多时候，一个真正跑起来的 prototype 比很长的概念文档更像有效的 research note。",
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

  return navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
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
      <span>${content.hero.titleLines[0]}</span>
      <span>${content.hero.titleLines[1]}</span>
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
