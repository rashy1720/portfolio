const hamburger = document.getElementById("hamburger");
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
});