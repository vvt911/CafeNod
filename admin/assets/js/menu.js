let all = document.querySelector('.list-item[data-filter="*"]')
let chocolate = document.querySelector('.list-item[data-filter=".chocolate"]')
let coffee = document.querySelector('.list-item[data-filter=".coffee"]')
let greenTea = document.querySelector('.list-item[data-filter=".green-tea"]')
let blackTea = document.querySelector('.list-item[data-filter=".black-tea"]')

all.onclick = () => {
    showItemMenu(all.getAttribute("data-filter"))
    showBeforeAfter(all.getElementsByTagName("span"))
}

chocolate.onclick = () => {
    showItemMenu(chocolate.getAttribute("data-filter"))
    showBeforeAfter(chocolate.getElementsByTagName("span"))
}

coffee.onclick = () => {
    showItemMenu(coffee.getAttribute("data-filter"))
    showBeforeAfter(coffee.getElementsByTagName("span"))
}

greenTea.onclick = () => {
    showItemMenu(greenTea.getAttribute("data-filter"))
    showBeforeAfter(greenTea.getElementsByTagName("span"))
}

blackTea.onclick = () => {
    showItemMenu(blackTea.getAttribute("data-filter"))
    showBeforeAfter(blackTea.getElementsByTagName("span"))
}

function showItemMenu(dataFilter) {
    let items = document.querySelectorAll(".item-inner")
    let itemBefore = document.querySelectorAll('.item-before');
    let itemAfter = document.querySelectorAll('.item-after');
    for (i of itemBefore) {
        i.style.opacity = 0;
    }

    for (i of itemAfter) {
        i.style.opacity = 0;
    }
    if (dataFilter !== "*") {
        let itemDataFilters = document.querySelectorAll(dataFilter);
        for (i of items) {
                i.style.display = "none";
        };
        for (itemDataFilter of itemDataFilters) {   
            itemDataFilter.style.display = "flex";
        }
    } else {
        for (i of items) {
            i.style.display = "flex";
        }
    }
}

function showBeforeAfter(elem) {
    for (e of elem) {
        e.style.opacity = 1;
    }
}