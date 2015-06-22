#!/usr/bin/env node

var path = require('path');
var fs = require('fs');

var windowsPlatformDirectory = path.join('platforms', 'windows');
var indexFile = path.join(windowsPlatformDirectory, 'www', 'index.html');
if (fs.existsSync(indexFile)) {
    var htmlContent = fs.readFileSync(indexFile, 'utf8');
    var libraryScriptElement = '<script src="winstore-jscompat/winstore-jscompat.js"></script>';
    htmlContent = htmlContent.replace('<head>', '<head>\n' + libraryScriptElement + '\n');
    fs.writeFileSync(indexFile, htmlContent, 'utf8');
}
