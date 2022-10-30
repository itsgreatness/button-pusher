var button = document.getElementById("button");
var game = document.getElementById("game");
var gamecontroller = new Worker("gamecontroller.js");
var clicks = 0;
function spawnNewButton() {
    // TODO: Add feature to spawn new buttons
}
gamecontroller.onmessage = function (e) {
    console.log("Recieved worker message");
    var response = e.data[0];
    var scaling = e.data[1];
    game === null || game === void 0 ? void 0 : game.style.setProperty("--scaling", scaling);
    if (button instanceof HTMLElement) {
        button.textContent = response;
    }
};
button === null || button === void 0 ? void 0 : button.addEventListener("click", function (e) {
    clicks++;
    gamecontroller.postMessage([clicks]);
    console.log("Messaged worker");
});
