// Responsive header
const btnShowHeaderMenu = document.getElementById("btn-menu");
const headerNavContainer = document.querySelector('.header__nav-container');
let showNavResponsive = false;

btnShowHeaderMenu.addEventListener('click', () => {
    if (!showNavResponsive) {
        headerNavContainer.style.display = "block";
        header.style.boxShadow = "inherit";
    } else {
        headerNavContainer.style.display = "none";
        header.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    }
    showNavResponsive = !showNavResponsive;
})