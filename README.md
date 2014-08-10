# Markdown Viewer - Restartless Version

## How to try it?
* Clone this branch with `git clone -b restartless git@github.com:Thiht/markdown-viewer.git`
* [Install the add-on SDK](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation) and activate it
* Run the add-on with the command `cfx run` and generate an xpi with the command `cfx xpi` ([more on the cfx utility](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/cfx))
* Here you go, you're ready to add your own features!
    - `lib/main.js` contains the launcher and some options
    - `data/markdown-viewer.js` contains the processing
    - `data/marked.js` and `data/highlight.pack.js` are libs, they should be modified only for updates
    - `data/markdown-viewer.css` and `data/highlight.css` are the stylesheets for the module and for the syntax highlighter. highlight.css shouldn't be modified or updated

## TODO
* Implement the stream conversion for x-markdown to text/html and application/x-genesis-rom to text/html ([see the master branch](https://github.com/Thiht/markdown-viewer/tree/master/components))
* Default the encoding to UTF-8, and allow the user to choose his own default encoding
* Mark the anchors github-like: ![Github anchor](https://cloud.githubusercontent.com/assets/1835170/3005699/325dba22-ddee-11e3-86b7-4501c35b1626.jpg) (see [here](http://jsfiddle.net/f7dab2vq/) for an example)
* Add a favicon (icon-16.png I guess)