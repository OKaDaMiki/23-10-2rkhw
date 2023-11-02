const maru = document.querySelector(".maru");

document.addEventListener("mousemove", function (event) {
    // console.dir(maru);
    maru.style.transform =
        "translate(" + event.clientX + "px, " + event.clientY + "px)";
});
