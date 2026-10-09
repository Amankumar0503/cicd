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

let currentColor = "#667eea";

document.addEventListener("click", function (event) {
    // Choose a different background color
    let newColor;

    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);

    currentColor = newColor;

    // Set the bubble's origin to the click position
    document.body.style.setProperty("--click-x", `${event.clientX}px`);
    document.body.style.setProperty("--click-y", `${event.clientY}px`);
    document.body.style.setProperty("--bubble-color", newColor);

    // Restart the animation
    document.body.classList.remove("bubble-active");

    // Force the browser to reset the animation
    void document.body.offsetWidth;

    document.body.classList.add("bubble-active");
});

button.addEventListener("click", function () {
    message.textContent =
        "Hello! JavaScript is working inside Docker v2 🚀";
});const button = document.getElementById("helloButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Hello! JavaScript is working inside Docker v2 🚀";
});
