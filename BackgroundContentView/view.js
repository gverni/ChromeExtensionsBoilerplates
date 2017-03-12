var port = chrome.runtime.connect({name: "view"});

port.postMessage({dst: "content", cmd: "get-data"});
port.onMessage.addListener(function(msg) {
  if (msg.cmd == "rsp-data") {
  	console.log("Received data from content" + msg.data)
  }
});
