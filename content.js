function setSpeed(speed) {
    console.log("Hello loser!");
    let video = document.querySelector('video');
    Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate').set.call(video, speed);
    Object.defineProperty(video, 'playbackRate', { writable: false });
}

chrome.storage.onChanged.addListener((changes, namespace) => {
    console.log(";)");
    chrome.storage.sync.get("speed").then((data) => {
        setSpeed(data.speed);
    });
});

console.log("I like kids!")