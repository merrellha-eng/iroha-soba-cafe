const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".global-nav a");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("is-menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("is-menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});
