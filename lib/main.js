const pageMod  = require("sdk/page-mod");
const self     = require("sdk/self");
const tabs     = require("sdk/tabs");
const {Cc, Ci} = require("chrome");

/*
// Linux bug for .md files, because of the text/x-markdown or application/x-genesis-rom mime-type
// See https://stackoverflow.com/questions/24560243/intercept-handle-mime-type-file
const MIME_MARKDOWN    = "text/x-markdown";
const MIME_GENESIS_ROM = "application/x-genesis-rom";
const EXTENSION        = "md";

var handlerService = Cc["@mozilla.org/uriloader/handler-service;1"].getService(Ci.nsIHandlerService);
var mimeService    = Cc["@mozilla.org/mime;1"].getService(Ci.nsIMIMEService);
var markdownHandlerInfo   = mimeService.getFromTypeAndExtension(MIME_MARKDOWN, EXTENSION);
var genesisRomHandlerInfo = mimeService.getFromTypeAndExtension(MIME_GENESIS_ROM, EXTENSION);

// var aNewHandler = Cc["@mozilla.org/uriloader/local-handler-app;1"].createInstance(Ci.nsILocalHandlerApp);
// var possibleApps = markdownHandlerInfo.possibleApplicationHandlers.enumerate();
//
// var hasAHandler = false;
// while (possibleApps.hasMoreElements()) {
// 	if (possibleApps.getNext().equals(aNewHandler)) {
// 		hasAHandler = true;
// 		break;
// 	}
// }
// if (!hasAHandler)
// 	markdownHandlerInfo.possibleApplicationHandlers.appendElement(aNewHandler, false);

markdownHandlerInfo.alwaysAskBeforeHandling = genesisRomHandlerInfo.alwaysAskBeforeHandling = false;
markdownHandlerInfo.preferredAction         = genesisRomHandlerInfo.preferredAction         = Ci.nsIHandlerInfo.handleInternally;
handlerService.store(markdownHandlerInfo);
handlerService.store(genesisRomHandlerInfo);
*/

pageMod.PageMod({
	// Supported extensions: md, mkd, mkdn, mdown, markdown
	// See https://github.com/github/markup/blob/b865add2e053f8cea3d7f4d9dcba001bdfd78994/lib/github/markups.rb#L1
	include: /.*\.(md|mkdn?|mdown|markdown)((#|\?).*)?$/,

	// If the protocol is view-source: we don't render the markdown (Firefox 32+)
	exclude: /^view-source:.*/,

	// Do not change the order of the script files
	contentScriptFile: [
		self.data.url("marked.js"),
		self.data.url("highlight.pack.js"),
		self.data.url("markdown-viewer.js")
	],

	contentScriptOptions: {
		favicon: self.data.url("icon-16.png")
	},

	// Do not change the order of the stylesheets
	contentStyleFile: [
		self.data.url("markdown-viewer.css"),
		self.data.url("highlight.css")
	]
});
