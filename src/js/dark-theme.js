document.addEventListener("DOMContentLoaded", function () {
  const themeCheckbox = document.getElementById("change-theme");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeCheckbox.checked = true;
  }

  themeCheckbox.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });
});
