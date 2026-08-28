browser.storage.onChanged.addListener((changes, namespace) => {
    browser.storage.sync.get(["speed", "frame"]).then((data) => {
        let doc = document;
        data.frame.forEach((element) => {
            if(element.type == "id") {
                doc = doc.getElementById(element.frame).contentWindow.document
            } else {
                doc.getElementsByTagName('iframe')[element.frame].contentWindow.document
            }
        });
        let video = doc.querySelector('video');
        Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate').set.call(video, data.speed);
        Object.defineProperty(video, 'playbackRate', { writable: false });
    });
});