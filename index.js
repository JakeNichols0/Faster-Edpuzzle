let slide = document.getElementById('slide')
let label = document.getElementById('speed');
let set = document.getElementById('set');

slide.addEventListener("input", changeSpeed);

set.addEventListener("click", changeSpeed);

chrome.storage.sync.get("speed").then((data) => {
    slide.value = data.speed;
    label.innerHTML = data.speed;
});

function changeSpeed() {
    chrome.storage.sync.set({ speed: slide.value }).then(() => {
        console.log("Speed has been changed to " + slide.value);
    });
    label.innerHTML = slide.value;
}