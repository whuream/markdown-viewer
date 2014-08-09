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

// Favicon
/*var favicon  = document.createElement("link");
favicon.rel  = "shortcut icon";
favicon.type = "image/png";
favicon.href = self.options.favicon; // icon-16.png
document.head.appendChild(favicon);*/