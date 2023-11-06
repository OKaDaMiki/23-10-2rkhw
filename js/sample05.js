//四角の上でマウスを押した時、四角の真ん中の座標をマウスの座標にする
//マウスのボタンが上がった時にマウスの座標の補足を外す
const square = document.querySelector(".square");
// let sWidth = square.style.clientwidth;
// let sHeight = square.style.clientheight;
// let sTop = square.style.clienttop;
// let sLeft = square.style.clientleft;

console.dir(square);

// document.addEventListener("mousedown", function () {
document.addEventListener("mousemove", function (event) {
    square.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    // square.style.top = event.clientX;
    // square.style.left = event.clientY;
});
// });
