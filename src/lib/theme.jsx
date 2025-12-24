// src/lib/theme.js
export function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved; // "light" or "dark"
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

export function applyTheme(theme) {
  if (theme === "light") document.documentElement.classList.add("light");
  else document.documentElement.classList.remove("light");
  localStorage.setItem("theme", theme);
}
