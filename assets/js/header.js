// When the user scrolls down 50px from the top of the document, resize the header's font size
const headerChange = document.getElementById('header--change');
const btnScrollTop = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        headerChange.style.display = 'block'
    } else {
        headerChange.style.display = 'none'
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