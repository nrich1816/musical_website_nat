console.log("Website loaded!");

function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  const burger = document.querySelector(".navbar-burger");
  navbar.classList.toggle("is-active");
  burger.classList.toggle("is-active");
}

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  if (!gallery) return;

  const track = gallery.querySelector(".gallery-track");
  const images = Array.from(track.children);

  // Measure first set width accurately
  const firstSet = images.slice(0, images.length / 2);
  const firstSetWidth = firstSet.reduce((sum, img) => sum + img.getBoundingClientRect().width, 0);

  let paused = false;

  gallery.addEventListener("mouseenter", () => {
    paused = true;
    gallery.style.overflowX = "auto"; // show scrollbar when paused
  });

  gallery.addEventListener("mouseleave", () => {
    paused = false;
    gallery.style.overflowX = "hidden"; // hide scrollbar
  });

  function autoScroll() {
    if (!paused) {
      gallery.scrollLeft += 0.5; // speed; increase = faster
      if (gallery.scrollLeft >= firstSetWidth) {
        gallery.scrollLeft -= firstSetWidth; // seamless reset
      }
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});
