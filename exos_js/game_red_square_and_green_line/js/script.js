let body = document.querySelector("body");

let red_square = document.querySelector(".red_square");
let green_line = document.querySelector(".green_line");

let divx = document.querySelector(".x");
let divy = document.querySelector(".y");

let divgame = document.querySelector('.game');



let game = true;

let x = 0;
let y = 0;


body.addEventListener('keydown', (event) => {

    if (game) {
        if ("ArrowUp" === event.key) {
            x = x - 100;
            divx.innerHTML = `x : ${x}px`;
            red_square.style.top = `${x}px`;
        } else if ("ArrowRight" === event.key) {
            y = y + 100;
            divy.innerHTML = `y : ${y}px`;
            red_square.style.left = `${y}px`;
        } else if ("ArrowDown" === event.key) {
            x = x + 100;
            divx.innerHTML = `x : ${x}px`;
            red_square.style.top = `${x}px`;
        } else if ("ArrowLeft" === event.key) {
            y = y -  100;
            divy.innerHTML = `y : ${y}px`;
            red_square.style.left = `${y}px`;
        };
    };

    
    if (y >= 260 && y <= 325 && x >= -20 && x <= 180) {
        if (game) {
            console.log('WIN');
            divgame.innerHTML = "Victoire";
        }
        game = false;
    };

});

