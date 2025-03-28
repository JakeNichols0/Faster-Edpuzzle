chrome.runtime.onInstalled.addlistener(() => {
    chrome.storage.sync.set({speed: 1}).then(() => {
        console.log("Speed has been initalized to 1.");
    });
});