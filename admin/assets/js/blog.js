let scrWidth = screen.width;
let qtyBox = 3;

if (scrWidth >= 768 && scrWidth < 1200) {
    qtyBox = 2;
} else if (scrWidth < 768) {
    qtyBox = 1;
}

let indexStart = 0, indexEnd = qtyBox;
let listBox = document.getElementsByClassName("blog__content-box");
let listBoxShow = [];
let maxIndex = listBox.length;



handleHiddenBoxes = (listHidden) => {
    listHidden.map((item) => {
        item.style.display = "none";
    })
}

handleShowBoxes = () => {
    handleHiddenBoxes(listBoxShow);
    if (listBox && listBox.length >= qtyBox) {
        listBoxShow = Array.from(listBox).slice(indexStart, indexEnd);
    } else {
        listBoxShow = listBox;
    }
    listBoxShow.map((item) => {
        item.style.display = "flex";
        item.style.transitionDuration = '5s';
    })
}
handleShowBoxes();

function showDivs(type) {
    switch (type) {
        case 'next':
            if (indexEnd < maxIndex) {
                indexStart++;
                indexEnd++;
            }
            handleShowBoxes();
            break;
        case 'prev':
            if (indexStart > 0) {
                indexStart--;
                indexEnd--;
            }
            handleShowBoxes();
            break;
        default:
            break;
    }
}
