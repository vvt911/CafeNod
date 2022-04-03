let editIcons = document.querySelectorAll('.product__edit')


function editProductInfo() {
    for (let i in editIcons) {
        editIcons[i].onclick = function () {
            formAddProduct.style.display = 'flex';

            $('html,body').animate({
                scrollTop: $("#add-product-container").offset().top
            },'fast');

            // productName.value = productsInfo[i].name
            // productImg.files[0] = productsInfo[i].imgUrl
            // productPrice.value = productsInfo[i].price
            // productDescription.value = productsInfo[i].description
        }
    }
}
editProductInfo()