/**
 * app.js — comportements partagés par toutes les pages :
 * bascule de thème, navigation mobile, révélation au scroll, toast, confettis.
 */

function setActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a[data-nav]").forEach((a) => {
    a.classList.toggle("active", a.dataset.nav === path);
  });
}

function wireThemeToggle() {
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => Theme.toggle());
  });
}

function wireMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-nav");
  if (!hamburger || !nav) return;
  hamburger.addEventListener("click", () => {
    const open = nav.classList.toggle("mobile-open");
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

function wireSidebarToggle() {
  const toggle = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".docs-sidebar");
  if (!toggle || !sidebar) return;
  toggle.addEventListener("click", () => sidebar.classList.toggle("open"));
  sidebar.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => sidebar.classList.remove("open"))
  );
  document.addEventListener("click", (e) => {
    if (
      sidebar.classList.contains("open") &&
      !sidebar.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      sidebar.classList.remove("open");
    }
  });
}

function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

function showToast(message, duration = 2200) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), duration);
}

function launchConfetti(count = 90) {
  const colors = ["#5b5bf6", "#8b5cf6", "#ec4899", "#12b76a", "#f79009"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    const size = 6 + Math.random() * 6;
    el.style.width = size + "px";
    el.style.height = size * (Math.random() > 0.5 ? 1 : 2.2) + "px";
    el.style.left = Math.random() * 100 + "vw";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = 2.4 + Math.random() * 1.8 + "s";
    el.style.opacity = String(0.7 + Math.random() * 0.3);
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4500);
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  wireThemeToggle();
  wireMobileNav();
  wireSidebarToggle();
  initScrollReveal();
});
