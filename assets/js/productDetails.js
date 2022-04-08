// vùng chứa chi tiết sản phẩm
let productDetails = document.getElementById('product-details-container')

function seeProductDetails() {
    // lấy dữ liệu từ localStorage
    let productsInfo = JSON.parse(window.localStorage.getItem('products'))

    // Lấy ra list tên các sản phẩm
    let productsName = document.querySelectorAll('.product__name')

    for (let i in productsName) {
        productsName[i].onclick = function () {
            productDetails.style.display = 'flex'
            productDetails.innerHTML = `
            <div id="product-details">
                <div class="product-details__img-container">
                    <div class="product-details__img">
                        <img src="${productsInfo[i].imgUrl}" alt="">
                    </div>
                </div>

                <div class="product-details__info">
                    <div class="product-details__name">
                        <h3>${productsInfo[i].name}</h3>
                    </div>
                    <div class="product-details__rating">
                        <div class="product-details__star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="product-details__count-rating">
                            0 reviews
                        </div>
                    </div>

                    <p class="product-details__description">
                        ${productsInfo[i].description}
                    </p>

                    <p class="product-details__price">
                        ${productsInfo[i].price}
                    </p>

                    <div class="product-details__color">
                        <p>Color</p>
                        <ul>
                            <li>BROWN</li>
                            <li>DUSKY</li>
                            <li>YELLOW</li>
                        </ul>
                    </div>

                    <div class="product-details__btn-container">
                        <button class="product-details__btn" type="button">ADD TO CART</button>
                    </div>

                    <div class="product-details__wishlist">
                        <i class="fa-solid fa-heart"></i>
                        ADD TO WISHLIST
                    </div>

                    <div class="product-details__share">
                        <p>
                            <i class="fa-solid fa-share"></i>
                            Share
                        </p>
                        <div class="share__icons">
                            <a href="#">
                                <div>
                                    <i class="fa-brands fa-facebook-f"></i>
                                </div>
                            </a>
                            <a href="#">
                                <div>
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                            </a>
                            <a href="#">
                                <div>
                                    <i class="fa-brands fa-google-plus-g"></i>
                                </div>
                            </a>
                            <a href="#">
                                <div>
                                    <i class="fa-brands fa-pinterest-p"></i>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
}
seeProductDetails()