let angle = 0;

const aliens = [
    "images/alien_1.png",
    "images/alien_2.png",
    "images/alien_3.png",
    "images/alien_4.png"
];

const transformSound = new Audio("sounds/transform.mp3");
const startSound = new Audio("sounds/start.mp3");
const rotateSound = new Audio("sounds/rotate.mp3");

let currentIndex = 0;

const container = document.querySelector('.container');
const img = document.querySelector('img');


function updateTransform(transform, rotation) {
    container.style.transform = `scale(${transform}) rotate(${angle+rotation}deg)`;
}


function rotate() {
    angle += 90;
    rotateSound.currentTime = 0;
    rotateSound.play();
    updateTransform(1.1, 90);



    setTimeout(() => {
        currentIndex = (currentIndex + 1) % aliens.length;
        img.src = aliens[currentIndex];
    }, 500);
}

function scale() {
    updateTransform(1.1, 90);

    img.style.width = "400px";
}

function unscale() {
    updateTransform(0.8, -90);
    img.style.width = "300px";
}

function flashOmnitrix() {

    transformSound.play();
    container.classList.remove("flash");
    void container.offsetWidth;
    container.classList.add("flash");
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {

        flashOmnitrix();
    }
});