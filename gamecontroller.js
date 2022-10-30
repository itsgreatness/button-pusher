var storyboard;
fetch("storyline.txt").then(function (x) { return x.text(); }).then(function (x) { return storyboard = x.split("\n"); })["catch"](function (e) { return console.log(e); });
onmessage = function (e) {
    var _a;
    console.log("Worker recieved message");
    var clicks = e.data[0];
    var response = "Push me!";
    if (isNaN(clicks))
        return;
    var responseIndex = Math.floor(Math.log(clicks) / Math.log(2));
    if (!isFinite(responseIndex))
        return;
    response = (_a = storyboard[responseIndex]) !== null && _a !== void 0 ? _a : storyboard[storyboard.length - 1];
    postMessage([response, 4 + clicks * 2]);
    console.log("Worker posted message");
};
