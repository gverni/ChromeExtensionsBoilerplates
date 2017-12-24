function beauitfyClass (className) {
  var elementsToBeautify = document.getElementsByClassName(className)
  while (elementsToBeautify.length > 0) {
    elementsToBeautify[0].className = 'beautify' + className
  }
}

beauitfyClass('btn')

var images = document.getElementsByTagName('img')
for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height
}
