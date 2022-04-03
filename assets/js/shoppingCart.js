const shoppingCartIcon = document.querySelector('.header__shoppingCart')
const shoppingCart = document.querySelector('.shopping-cart-container')
const shoppingCartMain = document.querySelector('.shopping-cart')
const shoppingCartClose = document.querySelector('.shopping-cart__close')

shoppingCartIcon.onclick = function () {
    shoppingCart.style.display = 'flex'
}
shoppingCartClose.onclick = function () {
    shoppingCart.style.display = 'none'
}
shoppingCart.onclick = function() {
    shoppingCart.style.display = 'none'
}
shoppingCartMain.onclick = function (event) {
    event.stopPropagation()
}


