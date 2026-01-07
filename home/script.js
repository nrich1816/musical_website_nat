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
  if (!gallery) return;

  const track = gallery.querySelector(".gallery-track");
  const images = Array.from(track.children);

  const firstSetWidth = images.slice(0, images.length / 2)
                              .reduce((sum, img) => sum + img.offsetWidth + parseInt(getComputedStyle(img).marginLeft) + parseInt(getComputedStyle(img).marginRight), 0);

  let paused = false;


  gallery.addEventListener("mouseenter", () => {
    paused = true;
    gallery.style.overflowX = "auto";
  });

  gallery.addEventListener("mouseleave", () => {
    paused = false;
    gallery.style.overflowX = "hidden";
  });

  function autoScroll() {
    if (!paused) {
      gallery.scrollLeft += 0.3;
      if (gallery.scrollLeft >= firstSetWidth) {
        gallery.scrollLeft = 0;
      }
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});
