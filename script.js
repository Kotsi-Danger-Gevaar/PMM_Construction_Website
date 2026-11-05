// PMM Construction website interactions
document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile navigation after a visitor selects a section.
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("mainNav");
    if (menu && menu.classList.contains("show") && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
