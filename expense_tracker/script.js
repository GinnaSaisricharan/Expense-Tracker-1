// JavaScript for toggling the dark theme
const themeToggler = document.getElementById("themeToggler");
const lightTheme = document.getElementById("light");
const darkTheme = document.getElementById("dark");

// Check if a theme is already set in localStorage
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
  darkTheme.classList.add("active");
  lightTheme.classList.remove("active");
} else {
  document.body.classList.remove("dark-theme");
  lightTheme.classList.add("active");
  darkTheme.classList.remove("active");
}

// Toggle themes when clicked
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Save the current theme in localStorage
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    darkTheme.classList.add("active");
    lightTheme.classList.remove("active");
  } else {
    localStorage.setItem("theme", "light");
    lightTheme.classList.add("active");
    darkTheme.classList.remove("active");
  }
});
