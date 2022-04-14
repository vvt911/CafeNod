// btn update
let updateProductBtn = document.querySelector('.update-product__btn')

function editProductInfo() {
    // lấy dữ liệu từ localStorage
    productsInfo = JSON.parse(window.localStorage.getItem('products'))

    // danh sách nút edit
    let editIcons = document.querySelectorAll('.product__edit')

    for (let i in editIcons) {
        editIcons[i].onclick = function () {
            formAddProduct.style.display = 'flex';
            updateProductBtn.style.display = 'block'
            addProductBtn.style.display = 'none'

            // cuộn xuống form update
            $('html,body').animate({
                scrollTop: $("#add-product-container").offset().top
            }, 'fast');

            // Điền thông tin vào form, gán imgSrc = ''
            productName.value = productsInfo[i].name
            fileName.innerHTML = 'Reupload the image!'
            imgSrc = productsInfo[i].imgUrl
            productPrice.value = productsInfo[i].price
            let productColorList = productsInfo[i].colors
            for (let color of productColorList) {
                let c = []
                for (let i = 0; i < productColors.length; i++) {
                    c.push(productColors[i].id)
                }

                let index = c.indexOf(color)
                productColors[index].checked = true
                productColorsChecked[index].style.display = 'flex'
            }
            productDescription.value = productsInfo[i].description


            updateProductBtn.onclick = function () {
                if (checkForm()) {
                    // cập nhật vào localStorage
                    colorList = []
                    for (color of productColors) {
                        if (color.checked) {
                            colorList.push(color.id)
                        }
                    }
                    data.splice(i, 1, {
                        id: i * 1 + 1,
                        name: productName.value,
                        imgUrl: imgSrc,
                        price: productPrice.value,
                        colors: colorList,
                        description: productDescription.value
                    })
                    window.localStorage.setItem('products', JSON.stringify(data));
                    productsInfo = JSON.parse(window.localStorage.getItem('products'))
                    // console.log(productsInfo)

                    // cập nhật lên list products
                    listProducts.children[i].children[0].children[1].innerHTML = productName.value
                    listProducts.children[i].children[0].children[2].children[0].innerHTML = productPrice.value
                    listProducts.children[i].children[0].children[0].children[0].src = imgSrc


                    // reset giá trị tại form
                    productName.value = ''
                    fileName.innerHTML = 'Choose image'
                    imgSrc = ''
                    productPrice.value = ''
                    for (let i = 0; i < productColors.length; i++) {
                        productColors[i].checked = false
                        productColorsChecked[i].style.display = 'none'
                    }
                    productDescription.value = ''

                    // gọi lại hàm xem chi tiết
                    seeProductDetails()
                }
            }
        }


    }
}
editProductInfo()
