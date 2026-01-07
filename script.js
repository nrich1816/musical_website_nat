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

  function getFirstSetWidth() {
    const firstSet = images.slice(0, images.length / 2);
    return firstSet.reduce((sum, img) => {
      const style = getComputedStyle(img);
      const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      return sum + img.getBoundingClientRect().width + margin;
    }, 0);
  }

  let firstSetWidth = getFirstSetWidth();
  let paused = false;
  let scrolling = false;

  window.addEventListener("resize", () => {
    firstSetWidth = getFirstSetWidth();
  });

  gallery.addEventListener("mouseenter", () => {
    paused = true;
    gallery.style.overflowX = "auto";
  });

  gallery.addEventListener("mouseleave", () => {
    paused = false;
    gallery.style.overflowX = "hidden";
  });

  function autoScroll() {
    if (!paused && scrolling) {
      gallery.scrollLeft += 0.5;
      if (gallery.scrollLeft >= firstSetWidth) {
        gallery.scrollLeft -= firstSetWidth;
      }
    }
    requestAnimationFrame(autoScroll);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        scrolling = entry.intersectionRatio === 1;
      });
    },
    { threshold: 1.0 }
  );

  observer.observe(gallery);
  autoScroll();
});
