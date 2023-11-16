//四角の上でマウスを押した時、四角の真ん中の座標をマウスの座標にする
//マウスを動かしたらついていくようにする
//マウスのボタンが上がった時にマウスの座標の補足を外す

const square = document.querySelector(".square");
let Drag = false;

square.addEventListener("mousedown", (e) => {
    Drag = true;
    console.log("down!!");
});
square.addEventListener("mouseup", () => {
    Drag = false;
    console.log("up!");
});

window.addEventListener("mousemove", (event) => {
    if (!Drag) return;
    square.style.transform = `translate(${
        event.clientX - square.clientWidth / 2
    }px, ${event.clientY - square.clientHeight / 2}px)`;
});

// window.addEventListener("mousemove"),
//     (e) => {
//         if (Drag) {
//             const x = e.clientX;
//             const y = e.clientY;
//         }
//     };
