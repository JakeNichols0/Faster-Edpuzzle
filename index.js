let slide = document.getElementById('slide')
slide.addEventListener("input", () => {
    chrome.storage.sync.set({speed: slide.value}).then(() => {
        console.log("Speed has been changed to " + slide.value);
    });
    document.getElementById('speed').innerHTML = slide.value;
});