let cart = []
if (!window.localStorage.cart) {
    window.localStorage.setItem('cart', JSON.stringify(cart));
}
let cartInfo = JSON.parse(window.localStorage.getItem('cart'))