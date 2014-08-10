const self = require("sdk/self");
const tabs = require("sdk/tabs");

tabs.open(self.data.url("markdown-test-document.md"));
tabs.open("view-source:" + self.data.url("markdown-test-document.md"));
