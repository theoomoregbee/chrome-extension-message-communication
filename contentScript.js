console.log('script is loaded')

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if(message.action === 'change-bg-color'){
        document.body.style.backgroundColor = message.color;
        sendResponse('Done changing bg color of page')
        return true
    }
});