
// This function inits the listener for messages coming from the popup
chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(function (msg) {
    console.log('Content.js: Message received')
    // Implement handling of messages, eg an echo message:
    port.postMessage({echo: msg})
  })
})
