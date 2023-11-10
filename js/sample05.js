//四角の上でマウスを押した時、四角の真ん中の座標をマウスの座標にする
//マウスを動かしたらついていくようにする
//マウスのボタンが上がった時にマウスの座標の補足を外す

const square = document.querySelector(".square");
let Drag = false;

window.addEventListener("mousedown"),
    (e) => {
        Drag = false;
    };

window.addEventListener("mousemove"),
    (e) => {
        if (Drag) {
            const x = e.clientX;
            const y = e.clientY;
        }
    };

window.addEventListener("mouseup"),
    () => {
        Drag = false;
    };
