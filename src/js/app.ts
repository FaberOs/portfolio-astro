document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("colorSwitch");
  const root = document.documentElement;
  const darkModeKey = "theme";

  const savedTheme = localStorage.getItem(darkModeKey);
  if (savedTheme) {
    root.classList.toggle("dark", savedTheme === "dark");
  }

  themeToggle?.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    localStorage.setItem(darkModeKey, isDark ? "dark" : "light");

    themeToggle.textContent = isDark ? "🌙" : "☀️";
  });

  if (themeToggle) {
    themeToggle.textContent = root.classList.contains("dark") ? "🌙" : "☀️";
  }
});
