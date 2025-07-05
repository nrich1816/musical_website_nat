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