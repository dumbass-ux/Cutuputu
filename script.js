const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const message = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
    message.classList.remove("hidden");
});
yesBtn.addEventListener("click", () => {
    message.classList.remove("hidden");

    // Confetti effect
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});
const gif = document.getElementById("valentine-gif");

yesBtn.addEventListener("click", () => {
    message.classList.remove("hidden");
    gif.classList.remove("hidden");

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});
const basket = document.getElementById("basket");
const gameContainer = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");

let score = 0;
let basketPosition = gameContainer.offsetWidth / 2 - 30;

// Move basket with arrow keys
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && basketPosition > 0) {
        basketPosition -= 20;
    } else if (event.key === "ArrowRight" && basketPosition < gameContainer.offsetWidth - 60) {
        basketPosition += 20;
    }
    basket.style.left = `${basketPosition}px`;
});

// Create falling hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = `${Math.random() * (gameContainer.offsetWidth - 30)}px`;
    heart.style.top = "0px";
    gameContainer.appendChild(heart);

    let fallInterval = setInterval(() => {
        heart.style.top = `${heart.offsetTop + 5}px`;

        // Check if heart reaches basket
        if (heart.offsetTop > gameContainer.offsetHeight - 50 && 
            heart.offsetLeft > basketPosition && 
            heart.offsetLeft < basketPosition + 60) {
            
            score++;
            scoreDisplay.innerText = `Score: ${score}`;
            heart.remove();
            clearInterval(fallInterval);

            if (score >= 10) {
                message.classList.remove("hidden");
            }
        }

        // Remove heart if it falls out of bounds
        if (heart.offsetTop > gameContainer.offsetHeight) {
            heart.remove();
            clearInterval(fallInterval);
        }
    }, 50);
}

// Drop hearts every second
setInterval(createHeart, 1000);
