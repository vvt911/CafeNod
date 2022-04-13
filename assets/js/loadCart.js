cartInfo = JSON.parse(window.localStorage.getItem('cart'))

let cartItems = ``

for (let cartItem of cartInfo) {
    item = `<div class="shopping-cart__item">
                <div class="item__product-image">
                    <img src="${cartItem.img}" alt="">
                </div>
                <div class="item__product-meta">
                    <h4 class="product-meta__name">
                        ${cartItem.productName}
                    </h4>
                    <span class="product-meta__price">
                        ${cartItem.productPrice}
                    </span>
                </div>
                <i class="fa-solid fa-xmark"></i>
            </div>`
    cartItems += item
}
document.querySelector('.shopping-cart__items').innerHTML = cartItems
removeCartProduct()