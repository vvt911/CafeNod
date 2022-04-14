// Responsive header
const btnShowHeaderMenu = document.getElementById("btn-menu");
const headerNavContainer = document.querySelector(".header__nav-container");
const navbar = document.querySelector(".navbar");
const newNavItem = document.createElement("li");
let showNavResponsive = false;

btnShowHeaderMenu.addEventListener("click", () => {
    if (!showNavResponsive) {
        headerNavContainer.style.display = "block";
        header.style.boxShadow = "inherit";
        newNavItem.className = "nav-item nav-item--logout";
        newNavItem.innerHTML = "<a href=\"../index.html\">Logout >> </a>";
        navbar.appendChild(newNavItem);
    } else {
        headerNavContainer.style.display = "none";
        header.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
        navbar.removeChild(newNavItem);
    }
    showNavResponsive = !showNavResponsive;
})