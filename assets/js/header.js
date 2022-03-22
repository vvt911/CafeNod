// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

let header = document.getElementById('header')
let headerChange = document.getElementById('header--change')

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        headerChange.style.display = 'block'
    } else {
        headerChange.style.display = 'none'
    }
}