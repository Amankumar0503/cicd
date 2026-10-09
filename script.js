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
    let newColor;

    do {
        newColor = colors[
            Math.floor(Math.random() * colors.length)
        ];
    } while (newColor === currentColor);

    currentColor = newColor;

    const body = document.body;

    // Update the bubble's starting position and color
    body.style.setProperty("--click-x", `${event.clientX}px`);
    body.style.setProperty("--click-y", `${event.clientY}px`);
    body.style.setProperty("--bubble-color", newColor);

    // Remove the previous animation state
    body.classList.remove("bubble-active");

    // Force browser reflow to restart the animation
    void body.offsetHeight;

    // Trigger the bubble animation again
    body.classList.add("bubble-active");
});

button.addEventListener("click", function () {
    message.textContent =
        "Hello! JavaScript is working inside Docker v2 🚀";
});
