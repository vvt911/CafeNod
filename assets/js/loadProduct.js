let productsInfo = JSON.parse(window.localStorage.getItem('products'))

let shopProducts = document.querySelector('.shop__products')

let products = ``

for (let productInfo of productsInfo) {
    child = `<div class="product-container">
                <div class="product">
                    <div class="product__img">
                        <img src="${productInfo.imgUrl}" alt="Product">
                    </div>
                    <a href="./shop.html#product-details-container" class="product__name">${productInfo.name}</a>
                    <div class="product__more">
                        <div class="product__price">
                            ${productInfo.price}
                        </div>
                        <div class="product__select-btn center">
                            <a href="#">SELECT OPTIONS</a>
                        </div>
                    </div>
                </div>
            </div>`
    products += child
}
shopProducts.innerHTML = products