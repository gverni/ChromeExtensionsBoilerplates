export function addMessageToBody (text) {
  var newP = document.createElement('P')
  newP.textContent = text
  document.body.appendChild(newP)
}
