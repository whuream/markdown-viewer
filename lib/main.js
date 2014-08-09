var pageMod = require("sdk/page-mod");
var self    = require("sdk/self");

pageMod.PageMod({
	// Supported extensions: md, mkd, mkdn, mdown, markdown
	// See https://github.com/github/markup/blob/b865add2e053f8cea3d7f4d9dcba001bdfd78994/lib/github/markups.rb#L1
	include: /.*\.(md|mkdn?|mdown|markdown)((#|\?).*)?$/,

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
