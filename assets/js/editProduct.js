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
            },'fast');

            // Điền thông tin vào form, gán imgSrc = ''
            productName.value = productsInfo[i].name 
            fileName.innerHTML = 'Reupload the image!'
            imgSrc = ''
            productPrice.value = productsInfo[i].price
            productDescription.value = productsInfo[i].description


            updateProductBtn.onclick = function() {
                if (!productName.value) {
                    alert("Please enter product's name")
                } else if (!productPrice.value) {
                    alert("Please enter product's price")
                } else if (!productDescription.value) {
                    alert("Please enter product's description")
                } else {

                    // nếu không thay đổi ảnh thì gán imgSrc = src ở localStorage
                    if (imgSrc == '') {
                        imgSrc = productsInfo[i].imgUrl
                    }

                    // cập nhật vào localStorage
                    data.splice(i, 1, {
                        id: i*1 + 1,
                        name: productName.value,
                        imgUrl: imgSrc,
                        price: productPrice.value,
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
                    productPrice.value = ''
                    productDescription.value = ''

                    // gọi lại hàm xem chi tiết
                    seeProductDetails()
                }
            }
        }

        
    }
}
editProductInfo()
