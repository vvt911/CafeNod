function removeCartProduct() {
    let removerCartProduct = document.querySelectorAll(".shopping-cart__item i")

    for (let i in removerCartProduct) {
        removerCartProduct[i].onclick = function () {
            let removeCartConfirm
            if (confirm('Delete product?') == true){
                removeCartConfirm = true
            } else{
                removeCartConfirm = false
            }

            if (removeCartConfirm) {
                // xóa trên giao diện
                document.querySelector('.shopping-cart__items').children[i].remove()

                // xóa trong localStorage
                cartInfo = JSON.parse(window.localStorage.getItem('cart'))
                cartInfo.splice(i, 1)
                window.localStorage.setItem('cart', JSON.stringify(cartInfo));

                removeCartProduct()

            }
        }
    }
}
