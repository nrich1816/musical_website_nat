console.log("Website loaded!");

function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    const burger = document.querySelector(".navbar-burger");
    navbar.classList.contains("is-active") ?
        navbar.classList.remove("is-active") :
        navbar.classList.add("is-active");
    burger.classList.contains("is-active") ?
        burger.classList.remove("is-active") :
        burger.classList.add("is-active");
}

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  if (!gallery) return; // safety if not on this page

  let paused = false;

  gallery.addEventListener("mouseenter", () => paused = true);
  gallery.addEventListener("mouseleave", () => paused = false);

  function autoScroll() {
    if (!paused) {
      gallery.scrollLeft += 0.3; // speed (lower = slower)
      if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
        gallery.scrollLeft = 0;
      }
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});
