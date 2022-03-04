let flag = 0;
let boxes = document.querySelectorAll(".boxes")

function indicator(x) {
    flag = flag + 1;
    movingBoxes(flag)
}

movingBoxes(flag)

function movingBoxes(num) {
    for (items of boxes) {
        items.style.display = "none";
    }

    boxes[num].style.display = "block";
    if (flag == boxes.length - 1) {
        flag = -1;
        num = -1;
    }
}
setInterval(function() {
    indicator(+1);
}, 10000);