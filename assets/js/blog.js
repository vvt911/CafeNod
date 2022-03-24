let indexStart = 0, indexEnd = 3;
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
    if (listBox && listBox.length >= 3) {
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
