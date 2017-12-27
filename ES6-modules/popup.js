import { addMessageToBody, ExtensionStorage } from './common.js'
addMessageToBody('ES6 modules in pop-up')

var extensionStorage = new ExtensionStorage()
extensionStorage.getData().then(function (items) {
  console.log(items)
})
