let listProducts = document.querySelector('.shop__products')
let fileName = document.querySelector('.form__input span')
// lấy thông tin từ form thêm sản phẩm
let productName = document.getElementById('productInfo__name')
let productImg = document.getElementById('productInfo__img')
let productPrice = document.getElementById('productInfo__price')
let productDescription = document.getElementById('productInfo__description')

// button add
let addProductBtn = document.querySelector('.add-product__btn')

// lấy src ảnh từ thẻ input[type='file']
let imgSrc
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imgSrc = e.target.result
            // console.log(e.target);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
productImg.onchange = function(event) {
    readURL(this)

    const {files} = event.target;
    fileName.innerText = files[0].name
}
// Load sản phẩm
data.forEach(e => {
    let child = document.createElement('div')
    child.classList.add('product-container')
    child.innerHTML = `<div class="product">
                            <div class="product__img">
                                <img src="${e.imgUrl}" alt="Product">
                                <div class="product__remove center">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <div class="product__edit center">
                                    <i class="fa-solid fa-pen"></i>
                                </div>
                            </div>
                            <a href="#product-details-container" class="product__name">${e.name}</a>
                            <div class="product__more">
                                <div class="product__price">
                                    ${e.price}
                                </div>
                                <div class="product__select-btn center">
                                    <a href="#">SELECT OPTIONS</a>
                                </div>
                            </div>
                        </div>`
    listProducts.appendChild(child)
});

// xử lý thêm sản phẩm
addProductBtn.onclick = function() {
    if (!productName.value) {
        alert("Please enter product's name")
    } else if (!imgSrc) {
        alert("Please choose product's image")
    } else if (!productPrice.value) {
        alert("Please enter product's price")
    } else if (!productDescription.value) {
        alert("Please enter product's description")
    } else {
        let child = document.createElement('div')
        child.classList.add('product-container')
        child.innerHTML = `<div class="product">
                                <div class="product__img">
                                    <img src="${imgSrc}" alt="Product">
                                    <div class="product__remove center">
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                    <div class="product__edit center">
                                        <i class="fa-solid fa-pen"></i>
                                    </div>
                                </div>
                                <a href="#product-details-container" class="product__name">${productName.value}</a>
                                <div class="product__more">
                                    <div class="product__price">
                                        ${productPrice.value}
                                    </div>
                                    <div class="product__select-btn center">
                                        <a href="#">SELECT OPTIONS</a>
                                    </div>
                                </div>
                            </div>`
        listProducts.appendChild(child)
        // thêm vào localStorage và gán lại các biến productsInfo, productsName để xem chi tiết sản phẩm
        data.push({
            id: data.length + 1,
            name: productName.value,
            imgUrl: imgSrc,
            price: productPrice.value,
            description: productDescription.value
        })
        window.localStorage.setItem('products', JSON.stringify(data));
        productsInfo = JSON.parse(window.localStorage.getItem('products'))
        editProductInfo()
        seeProductDetails()
        removeProductInfo()

        // reset giá trị tại form
        productName.value = ''
        fileName.innerHTML = 'Choose image'
        imgSrc = ''
        productPrice.value = ''
        productDescription.value = ''
    }
}


