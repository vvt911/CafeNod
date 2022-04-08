
function removeProductInfo() {
    // lấy các nút remove
    let removeIcons = document.querySelectorAll('.product__remove')
    
    for (let i in removeIcons) {
        removeIcons[i].onclick = function() {
            let removeConfirm
            if (confirm('Delete product?') == true){
                removeConfirm = true
            } else{
                removeConfirm = false
            }

            if (removeConfirm) {
                // xóa trên giao diện
                listProducts.children[i].remove()

                // xóa trong localStorage
                data.splice(i, 1)
                window.localStorage.setItem('products', JSON.stringify(data));
                productsInfo = JSON.parse(window.localStorage.getItem('products'))

                removeProductInfo()

                productDetails.style.display = 'none'
            }
        }
    }
}
removeProductInfo()