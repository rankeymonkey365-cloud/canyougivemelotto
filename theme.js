(function () {
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
    });
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme")
    || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(savedTheme);

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(root.getAttribute("data-theme"));
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
      });
    });
  });
})();
