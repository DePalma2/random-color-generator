let color = document.querySelector(".color");
let body = document.querySelector("body");
let button = document.querySelector(".btn-gen");


body.style.backgroundColor = color.innerText;

button.addEventListener("click", () =>{
    let randomColor = "";
    let letters = "0123456789abcdef";

    for (let i = 0; i < 6; i++) {
        randomColor = randomColor + letters[Math.floor(Math.random() * 16)];
    }

    color.innerText = "#" + randomColor;
    body.style.backgroundColor = "#" + randomColor;

})