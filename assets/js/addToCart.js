function addToCart() {
    if (document.getElementById('product-details')) {
        // Thêm vào giỏ hàng
        let addToCartBtn = document.querySelector('.product-details__btn')

        let colorRadio = document.querySelectorAll('.product-details__color')
        function checkRadioColor() {
            for (let i = 0; i < colorRadio.length; i++) {
                if (colorRadio[i].checked == true) {
                    return true
                }
            }
            return false
        }

        addToCartBtn.onclick = function () {
            if (checkRadioColor() == false) {
                alert('Please choose color')
            } else {
                shoppingCart.style.display = "flex"

                let cartProductImg = document.querySelector('.product-details__img img')
                let cartProductName = document.querySelector('.product-details__name h3')
                let cartProductPrice = document.querySelector('.product-details__price')

                // cập nhật vào local
                cart.push({
                    img: cartProductImg.src,
                    productName: cartProductName.textContent,
                    productPrice: cartProductPrice.textContent
                })
                window.localStorage.setItem('cart', JSON.stringify(cart));
                cartInfo = JSON.parse(window.localStorage.getItem('cart'))

                // Hiển thị lên cart 
                let cartItem = document.createElement('div')
                cartItem.classList.add('shopping-cart__item')
                cartItem.innerHTML = `  <div class="item__product-image">
                                        <img src="${cartProductImg.src}" alt="">
                                    </div>
                                    <div class="item__product-meta">
                                        <h4 class="product-meta__name">
                                            ${cartProductName.textContent}
                                        </h4>
                                        <span class="product-meta__price">
                                            ${cartProductPrice.textContent}
                                        </span>
                                    </div>
                                    <i class="fa-solid fa-xmark"></i>
                                `
                document.querySelector('.shopping-cart__items').appendChild(cartItem)

                removeCartProduct()
            }
        }
    }
}



