export function addMessageToBody (text) {
  var newP = document.createElement('P')
  newP.textContent = text
  document.body.appendChild(newP)
}

export function ExtensionStorage () {
  this.getData = function () {
    return new Promise(function (resolve, reject) {
      chrome.storage.sync.get(null, function (items) {
        if (chrome.runtime.lastError) { reject(chrome.runtime.lastError) }
        resolve(items)
      })
    })
  }

  this.setData = function (items) {
    chrome.storage.sync.set(items, function () {
      console.log('Settings saved')
    })
  }
}
