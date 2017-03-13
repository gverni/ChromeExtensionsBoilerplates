 
#Background - Content - View

This boilerplate realizes a communication pipeline between the page opened in the main tab (content script) and a 
new tab that is created as a result of clicking the extension button (view). 
Typical use case is extracting data from a page (content) and present them in a different format (view). 

The bolierplate is made of the following: 

* background.js: this is the background page for the extension. It's basically creating the comunication between view and content
* content.js: this is the content script that extract data from the open tab
* view.js: this is the view script that establish comunication with the background and content and fetch the data
* view.html: this is the html page that present the data extracted from teh content 
