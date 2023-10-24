const btn = document.querySelector(".btn");
const hyokkori = document.querySelector(".hyokkori");
const tebox = document.querySelector(".tebox");

btn.addEventListener("click", function () {
    // console.log(document.querySelector(".tebox").value);
    // console.dir(document .querySelector(".hyokkori") );
    hyokkori.textContent = tebox.value;
});
