#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var exec = require('child_process').exec;

module.exports = function (context) {
    var Q = context.requireCordovaModule('q');
    var deferral = new Q.defer();

    var libraryRepository = 'https://github.com/MSOpenTech/winstore-jscompat.git';
    var libraryTargetDirectory = path.join('plugins', 'cordova-plugin-winstore-jscompat', 'src');

    if (fs.existsSync(libraryTargetDirectory)) {
        deferral.resolve();
    } else {
        exec('git clone  ' + libraryRepository + ' ' + libraryTargetDirectory,
            function (error, stdout, stderr) {
                if (error !== null) {
                    console.log('Error ' + error + ' when cloning the winstore-jscompat library from ' + libraryRepository + ' to ' + libraryTargetDirectory);
                    deferral.reject();
                } else {
                    deferral.resolve();
                }
            }
        );
    }

    return deferral.promise;
};