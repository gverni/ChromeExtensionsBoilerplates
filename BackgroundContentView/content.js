
// This function inits the listener for messages coming from the background
chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(function (msg) {
    if (msg.src === 'view') {
      if (msg.cmd === 'get-data') {
        console.log('Content: get-data received')
        port.postMessage({dst: 'view', cmd: 'rsp-data', data: 'Hello'})
      }
    }
  })
})
