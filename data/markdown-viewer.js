// Markdown to HTML
var markedContent       = marked(document.body.textContent.trim());
document.body.innerHTML = markedContent;

// Title
var firstTextBlock = document.querySelector("h1") || document.querySelector("h2") || document.querySelector("h3") || document.querySelector("h4") || document.querySelector("h5") || document.querySelector("h6") || document.querySelector("p");
if (firstTextBlock !== null) {
	document.title = firstTextBlock.textContent.trim().substr(0, 50);
}

// Syntax hightlighting
hljs.initHighlighting();

// Anchors
/*
// Works, but not really beautiful
var headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
for (var i = headers.length - 1; i >= 0; i--) {
	headers[i].id += "-" + i; // we add the number of the title because marked.js produces non unique ids
	headers[i].innerHTML = '<a class="anchor" href="#' + headers[i].id + '">	🔗</a>' + headers[i].innerHTML;
}
*/

// Favicon
/*
// Doesn't work: the DOM is modified but the favicon isn't
var favicon  = document.createElement("link");
favicon.rel  = "shortcut icon";
favicon.type = "image/png";
favicon.href = self.options.favicon; // icon-16.png
document.head.appendChild(favicon);
*/