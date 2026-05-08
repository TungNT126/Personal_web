const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function setText(key, value) {
  $$(`[data-i18n="${key}"]`).forEach((el) => {
    el.textContent = value;
  });
}

const I18N = {
  vi: {
    role: "FrontEnd Developer",
    "nav.about": "Giới thiệu",
    "nav.skills": "Kỹ năng",
    "nav.projects": "Dự án",
    "nav.experience": "Kinh nghiệm",
    "nav.education": "Học vấn",
    "nav.contact": "Liên hệ",
    "ui.menu": "Menu",
    "ui.dark": "Tối",
    "ui.light": "Sáng",
    "ui.details": "Chi tiết",
    "ui.close": "Đóng",
    "ui.copyLink": "Copy link",
    "ui.features": "Tính năng",
    "hero.badge": "Sẵn sàng cho cơ hội Frontend",
    "hero.hi": "Xin chào, mình là",
    "hero.title": "Frontend Developer tập trung vào UI sạch, UX tốt và web app ổn định.",
    "hero.ctaProjects": "Xem dự án",
    "hero.ctaContact": "Liên hệ",
    "hero.copyEmail": "Copy Email",
    "hero.locationLabel": "Khu vực",
    "hero.locationValue": "Tây Hồ, Hà Nội",
    "card.quickInfo": "Thông tin nhanh",
    "card.role": "Frontend Developer",
    "card.summary":
      "Frontend Fresher có tư duy logic tốt, học nhanh; định hướng trở thành Fullstack Developer.",
    "card.copyPhone": "Copy SĐT",
    "card.exploreSkills": "Khám phá kỹ năng",
    "about.title": "Giới thiệu",
    "about.body":
      "Mình là Frontend Developer với tư duy logic tốt và khả năng tự học cao. Mình định hướng trở thành Fullstack Developer. Mình thích học công nghệ mới và xây dựng sản phẩm web chất lượng.",
    "about.focus": "Tập trung",
    "about.focus1": "Kiến trúc component rõ ràng",
    "about.focus2": "UI responsive & accessibility",
    "about.focus3": "State management & tích hợp API",
    "about.highlights": "Điểm mạnh",
    "about.highlight1": "React + TypeScript",
    "about.highlight2": "Tailwind CSS / Bootstrap",
    "about.highlight3": "FastAPI cơ bản (tiếp xúc backend)",
    "skills.title": "Kỹ năng",
    "skills.subtitle": "Những công nghệ mình dùng thường xuyên.",
    "skills.filterAll": "Tất cả",
    "skills.reactDesc": "Component, hooks, routing, patterns.",
    "skills.jsDesc": "DOM, async, gọi API, typing.",
    "skills.cssDesc": "Utility-first UI, responsive layout.",
    "skills.viteDesc": "Dev server & build nhanh.",
    "skills.reduxDesc": "State management, caching, API calls.",
    "skills.fastapiDesc": "Cơ bản về REST API và tích hợp.",
    "skills.pythonDesc": "Scripting và nền tảng.",
    "skills.english": "Tiếng Anh",
    "projects.title": "Dự án",
    "projects.subtitle": "Một vài dự án tiêu biểu thể hiện Tailwind + JS/TS.",
    "projects.movie.desc": "Tìm kiếm phim, thêm review, auth flow và tính năng profile.",
    "projects.next.title": "Các dự án tiếp theo trong tương lai...",
    "projects.next.body":
      "Bạn có thể thêm 2–3 dự án nữa (mini-app JS, landing Tailwind, UI components...).",
    "projects.next.cta": "Xin bản PDF portfolio",
    "projects.next.github": "Xem GitHub",
    "exp.title": "Kinh nghiệm",
    "exp.fpt.1": "Training C# và SQL (bootcamp nội bộ).",
    "exp.monster.1": "Hỗ trợ xây dựng các UI/UX component sử dụng React + TypeScript.",
    "edu.title": "Học vấn",
    "edu.school": "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
    "edu.majorLabel": "Ngành",
    "edu.majorValue": "Công nghệ thông tin",
    "edu.specLabel": "Chuyên ngành",
    "edu.specValue": "Hệ thống thông tin",
    "cert.title": "Chứng chỉ",
    "cert.ielts": "Tiếng Anh",
    "cert.gda": "Chứng chỉ",
    "cert.badge": "Đã cấp",
    "contact.title": "Liên hệ",
    "contact.subtitle": "Các cách liên hệ nhanh. Bấm để copy.",
    "contact.phone": "Số điện thoại",
    "contact.open": "Mở",
    "contact.dob": "Ngày sinh",
    "footer.rights": "Bản quyền thuộc về tác giả.",
  },
  en: {
    role: "Frontend Developer",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "ui.menu": "Menu",
    "ui.dark": "Dark",
    "ui.light": "Light",
    "ui.details": "Details",
    "ui.close": "Close",
    "ui.copyLink": "Copy link",
    "ui.features": "Features",
    "hero.badge": "Open to Frontend opportunities",
    "hero.hi": "Hi, I’m",
    "hero.title": "Frontend Developer focused on clean UI, good UX, and reliable web apps.",
    "hero.ctaProjects": "View Projects",
    "hero.ctaContact": "Contact",
    "hero.copyEmail": "Copy Email",
    "hero.locationLabel": "Location",
    "hero.locationValue": "Tây Hồ, Hà Nội",
    "card.quickInfo": "Quick info",
    "card.role": "Frontend Developer",
    "card.summary":
      "Fresher-level Frontend with strong logic mindset and high learning ability, aiming to become a Fullstack Developer.",
    "card.copyPhone": "Copy Phone",
    "card.exploreSkills": "Explore Skills",
    "about.title": "About",
    "about.body":
      "I’m a Frontend Developer with solid logical thinking and fast learning. I’m oriented to become a Fullstack Developer. I enjoy learning new tech and building high-quality web products.",
    "about.focus": "Focus",
    "about.focus1": "Clean component architecture",
    "about.focus2": "Accessible, responsive UI",
    "about.focus3": "State management & API integration",
    "about.highlights": "Highlights",
    "about.highlight1": "React + TypeScript",
    "about.highlight2": "Tailwind CSS / Bootstrap",
    "about.highlight3": "FastAPI basics (backend exposure)",
    "skills.title": "Skills",
    "skills.subtitle": "The stack I use most often for building modern web apps.",
    "skills.filterAll": "All",
    "skills.reactDesc": "Components, hooks, routing, patterns.",
    "skills.jsDesc": "DOM, async, API integration, typing.",
    "skills.cssDesc": "Utility-first UI, responsive layout.",
    "skills.viteDesc": "Fast dev server & build.",
    "skills.reduxDesc": "State management, caching, API calls.",
    "skills.fastapiDesc": "Basics for REST API and integration.",
    "skills.pythonDesc": "Scripting and fundamentals.",
    "skills.english": "English",
    "projects.title": "Projects",
    "projects.subtitle": "Selected work that highlights Tailwind + JavaScript/TypeScript skills.",
    "projects.movie.desc": "Search movies, add reviews, auth flow, and profile features.",
    "projects.next.title": "More projects to come...",
    "projects.next.body":
      "Add 2–3 more projects here later (even small ones like a UI component library, JS mini-app, or Tailwind landing page).",
    "projects.next.cta": "Request portfolio PDF",
    "projects.next.github": "View GitHub",
    "exp.title": "Experience",
    "exp.fpt.1": "Training C# and SQL (workplace bootcamp).",
    "exp.monster.1": "Supported building UI/UX components using React with TypeScript.",
    "edu.title": "Education",
    "edu.school": "Posts and Telecommunications Institute of Technology (PTIT)",
    "edu.majorLabel": "Major",
    "edu.majorValue": "Information Technology",
    "edu.specLabel": "Specialization",
    "edu.specValue": "Information Systems",
    "cert.title": "Certificates",
    "cert.ielts": "English proficiency",
    "cert.gda": "Certificate",
    "cert.badge": "Certified",
    "contact.title": "Contact",
    "contact.subtitle": "Best ways to reach me. One click to copy.",
    "contact.phone": "Phone",
    "contact.open": "Open",
    "contact.dob": "DOB",
    "footer.rights": "All rights reserved.",
  },
};

function getSavedLang() {
  const saved = localStorage.getItem("lang");
  return saved === "vi" || saved === "en" ? saved : "en";
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  Object.entries(dict).forEach(([key, value]) => setText(key, value));
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

function getSavedTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function toast(message) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = message;
  el.classList.remove("hidden");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.add("hidden"), 1600);
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-1000px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

function setupScrollReveal() {
  const hidden = $$(".scroll-reveal");
  if (!hidden.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("opacity-100", "translate-y-0");
        entry.target.classList.remove("opacity-0", "translate-y-10");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  hidden.forEach((el) => observer.observe(el));
}

function setupCopyButtons() {
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;

    const text = btn.getAttribute("data-copy");
    if (!text) return;

    const ok = await copyToClipboard(text);
    toast(ok ? "Copied!" : "Copy failed");
  });
}

function setupMenu() {
  const toggle = $("#menuToggle");
  const menu = $("#mobileMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden", isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  $$(".nav-link", menu).forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupActiveNav() {
  const links = $$(".nav-link");
  const sections = ["about", "skills", "projects", "experience", "education", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  if (!links.length || !sections.length) return;

  const byHash = new Map();
  links.forEach((a) => {
    const hash = a.getAttribute("href");
    if (hash && hash.startsWith("#")) byHash.set(hash, a);
  });

  const activate = (hash) => {
    byHash.forEach((a) => {
      a.classList.remove("text-brand-700", "dark:text-brand-300");
      a.classList.add("text-ink-700", "dark:text-ink-100");
    });
    const a = byHash.get(hash);
    if (a) {
      a.classList.add("text-brand-700", "dark:text-brand-300");
      a.classList.remove("text-ink-700", "dark:text-ink-100");
    }
  };

  const obs = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((x) => x.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      activate(`#${visible.target.id}`);
    },
    { rootMargin: "-20% 0px -65% 0px", threshold: [0.08, 0.2, 0.35, 0.5] }
  );

  sections.forEach((s) => obs.observe(s));
}

function setupSkillFilter() {
  const items = $$(".skill-item");
  const buttons = $$("[data-skill-filter]");
  if (!items.length || !buttons.length) return;

  const setFilter = (filter) => {
    items.forEach((el) => {
      const kind = el.getAttribute("data-skill");
      const show = filter === "all" || filter === kind;
      el.classList.toggle("hidden", !show);
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setFilter(btn.getAttribute("data-skill-filter") || "all"));
  });
}

function setupModal() {
  const backdrop = $("#modalBackdrop");
  const closeBtn = $("#modalClose");
  const title = $("#modalTitle");
  const stack = $("#modalStack");
  const features = $("#modalFeatures");
  const github = $("#modalGithub");
  const copyBtn = $("#modalCopy");
  if (!backdrop || !closeBtn || !title || !stack || !features || !github || !copyBtn) return;

  const open = (data) => {
    title.textContent = data.title || "Project";
    stack.textContent = data.stack || "";
    github.href = data.github || "#";
    copyBtn.dataset.copy = data.github || "";

    features.innerHTML = "";
    const list = (data.features || "").split(";").map((s) => s.trim()).filter(Boolean);
    list.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      features.appendChild(li);
    });

    backdrop.classList.remove("hidden");
    backdrop.classList.add("flex");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    backdrop.classList.add("hidden");
    backdrop.classList.remove("flex");
    document.body.style.overflow = "";
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-project-open]");
    if (!btn) return;
    open({
      title: btn.getAttribute("data-project-title"),
      github: btn.getAttribute("data-project-github"),
      stack: btn.getAttribute("data-project-stack"),
      features: btn.getAttribute("data-project-features"),
    });
  });

  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) close();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function setupHeaderButtons() {
  const themeToggle = $("#themeToggle");
  const langToggle = $("#langToggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
      applyTheme(next);
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const next = document.documentElement.lang === "vi" ? "en" : "vi";
      applyLang(next);
    });
  }
}

function init() {
  $("#year") && ($("#year").textContent = String(new Date().getFullYear()));
  applyTheme(getSavedTheme());
  applyLang(getSavedLang());

  setupHeaderButtons();
  setupMenu();
  setupScrollReveal();
  setupCopyButtons();
  setupSkillFilter();
  setupModal();
  setupActiveNav();
}

init();