// Variable that hold the communciation channel with content script
var portView
var portContent

function connectToContent (tabId) {
  portContent = chrome.tabs.connect(tabId)
  portContent.onMessage.addListener(function (msg) { handleMessageFromContent(msg) })
}

function handleMessageFromContent (msg) {
  if (msg.dst === 'view') {
    sendMessageToView(msg)
  }
}

function sendMessageToContent (msg) {
  portContent.postMessage(msg)
}

function handleMessageFromView (msg) {
  if ((msg.dst === 'content') && (msg.cmd === 'get-data')) {
    // Send get-data to content
    console.log('msg received from view: Received get-data')
    sendMessageToContent({src: 'view', cmd: 'get-data'})
  }
}

function sendMessageToView (msg) {
  console.log('Send messsge to view')
  portView.postMessage(msg)
}

chrome.browserAction.onClicked.addListener(function (tab) {
  connectToContent(tab.id)

  chrome.tabs.create({url: chrome.extension.getURL('./view.html')}, function (tab) {
    chrome.runtime.onConnect.addListener(function (port) {
      portView = port
      portView.onMessage.addListener(function (msg) { handleMessageFromView(msg) })
    })
  })
})
