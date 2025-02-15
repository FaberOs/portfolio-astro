document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("colorSwitch");
  const root = document.documentElement;
  const darkModeKey = "theme";

  // Cargar el tema guardado
  const savedTheme = localStorage.getItem(darkModeKey);
  if (savedTheme) {
    root.classList.toggle("dark", savedTheme === "dark");
  }

  // Cambiar el tema cuando se presiona el botón
  themeToggle?.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    localStorage.setItem(darkModeKey, isDark ? "dark" : "light");

    // Cambiar el icono
    themeToggle.textContent = isDark ? "🌙" : "☀️";
  });

  // Asegurar que el ícono refleje el estado actual
  if (themeToggle) {
    themeToggle.textContent = root.classList.contains("dark") ? "🌙" : "☀️";
  }
});
