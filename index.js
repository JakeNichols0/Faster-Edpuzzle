let slide = document.getElementById('slide')
let label = document.getElementById('speed');
let frame = document.getElementById('frame');
let type = document.getElementById('type');

function setFrame() {
    if(frame.value) {
        browser.storage.sync.set({ frame: [{ frame: frame.value, type: type.innerText }] }).then(() => {
            console.log("Frame has been changed to " + frame.value);
        });
    }
}

frame.addEventListener("change", setFrame);

type.addEventListener("click", () => {
    if(type.innerText == "Id") {
        type.innerText = "Indx";
        frame.placeholder = "Frame Indx";
    } else {
        type.innerText = "Id";
        frame.placeholder = "Frame Id";
    }
    setFrame();
});

slide.addEventListener("input", () => {
    browser.storage.sync.set({ speed: slide.value }).then(() => {
        console.log("Speed has been changed to " + slide.value);
    });
    label.innerHTML = slide.value;
});

browser.storage.sync.get("speed").then((data) => {
    slide.value = data.speed;
    label.innerHTML = data.speed;
});