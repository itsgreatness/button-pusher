const button = document.getElementById("button");
const game = document.getElementById("game");
const gamecontroller = new Worker("gamecontroller.js");
let clicks = 0;

function spawnNewButton() {
    // TODO: Add feature to spawn new buttons
}

gamecontroller.onmessage = function (e) {
    console.log("Recieved worker message");
    const response = e.data[0];
    const scaling = e.data[1];
    game?.style.setProperty("--scaling", scaling);
    if (button instanceof HTMLElement) {
        button.textContent = response;
    }
}

button?.addEventListener("click", function (e) {
    clicks++;
    gamecontroller.postMessage([clicks]);
    console.log("Messaged worker");
})