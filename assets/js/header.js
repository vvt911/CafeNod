// When the user scrolls down 50px from the top of the document, resize the header's font size

let header = document.getElementById('header')
let headerChange = document.getElementById('header--change')

window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        headerChange.style.display = 'block'
    } else {
        headerChange.style.display = 'none'
    }
}