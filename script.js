const button = document.getElementById("helloButton");
const message = document.getElementById("message");

const colors = [
    "#764ba2",
    "#ff6b6b",
    "#4ecdc4",
    "#f7b731",
    "#5f27cd",
    "#00a8ff",
    "#e056fd",
    "#10ac84"
];

let lastColor = "#667eea";

document.addEventListener("click", function (event) {
    // Pick a new background color
    let color;

    do {
        color = colors[Math.floor(Math.random() * colors.length)];
    } while (color === lastColor);

    lastColor = color;

    // Create a fresh bubble for every click
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    bubble.style.left = event.clientX + "px";
    bubble.style.top = event.clientY + "px";
    bubble.style.backgroundColor = color;

    document.body.appendChild(bubble);

    // Remove bubble after its animation ends
    bubble.addEventListener("animationend", function () {
        bubble.remove();
        document.body.style.backgroundColor = color;
    });
});

button.addEventListener("click", function () {
    message.textContent =
        "Hello! JavaScript is working inside Docker v2 🚀";
});
