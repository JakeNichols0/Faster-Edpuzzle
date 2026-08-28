browser.runtime.onInstalled.addlistener(() => {
    browser.storage.sync.set({ speed: 1, frame: [] }).then(() => {
        console.log("Speed has been initalized to 1.");
    });
});