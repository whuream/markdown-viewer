var markedContent = marked(document.body.textContent);
document.body.innerHTML = markedContent;
hljs.initHighlighting();
