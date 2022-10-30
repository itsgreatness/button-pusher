let storyboard: string[];

fetch("storyline.txt").then(x => x.text()).then(x => storyboard = x.split("\n")).catch(e => console.log(e))

onmessage = function (e) {
    console.log("Worker recieved message");
    const clicks = e.data[0];
    let response = "Push me!";
    if (isNaN(clicks)) return;
    const responseIndex = Math.floor(Math.log(clicks) / Math.log(2))
    if (!isFinite(responseIndex)) return;
    response = storyboard[responseIndex] ?? storyboard[storyboard.length - 1];
    postMessage([response, 4 + clicks * 2]);
    console.log("Worker posted message");
}