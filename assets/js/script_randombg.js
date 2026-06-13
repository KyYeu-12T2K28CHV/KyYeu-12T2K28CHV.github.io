
const images = [
    "img/bacrao/bg1.png",
    "img/bacrao/bg2.png"
];

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");

let current = bg1;
let next = bg2;
let currentIndex = 0;

function changeBackground() {

    let index;

    do {
        index = Math.floor(Math.random() * images.length);
    } while (index === currentIndex && images.length > 1);

    currentIndex = index;

    next.src = images[index];

    next.onload = () => {

        next.classList.add("active");
        current.classList.remove("active");

        [current, next] = [next, current];
    };
}

setInterval(changeBackground, 6000);