// Variable that hold the communciation channel with content script
var port

// Fetch the active tabs and execute a function with it 
// Using https://developer.chrome.com/extensions/tabs#method-query
chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
  // Inizialize the communication channel with the content script 
  port = chrome.tabs.connect(tabs[0].id)
  console.log("popup.js: Connected to content script")
})

// Example of sending a message to the content script 
function sendMessageToContent (message) {
  port.postMessage(message)
  console.log("popup.js: Message sent")
}

// [non mandatory] Function that add an event listenet to an element in the extension UI (popup) 
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#btn1').addEventListener('click', function () {
      sendMessageToContent({message: "Hello"}) 
  })
})
