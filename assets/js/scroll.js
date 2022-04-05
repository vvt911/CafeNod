// When the user scrolls down 500px from the top of the document => change position header
// When the user scrolls down 1000px from the top of the document => display block for button scroll top
const header = document.getElementById('header');
const headerNav = document.getElementsByClassName('header__nav');
const headerRight = document.getElementsByClassName('header__right-container');
const headerLogo = document.getElementById('header__logo');
const btnScrollTop = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        header.id = 'header--change'
        headerNav[0].classList.add('header__nav--change')
        headerRight[0].classList.add('header__right-container--change')
        headerLogo.src = './assets/images/logo/logo-dark.webp'
        headerNavContainer.style.display = "none";
        showNavResponsive = false;
    } else {
        header.id = 'header'
        headerNav[0].classList.remove('header__nav--change')
        headerRight[0].classList.remove('header__right-container--change')
        headerLogo.src = './assets/images/logo/logo_white_1x.png'
    }
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        btnScrollTop.style.display = "block";
    } else {
        btnScrollTop.style.display = "none";
    }
}

btnScrollTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});