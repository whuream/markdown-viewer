var markedContent = marked(document.body.textContent);
document.body.innerHTML = markedContent;
hljs.initHighlighting();

// TODO
/*
UTF-8
favicon
marqueurs d'ancre pour les titres
*/