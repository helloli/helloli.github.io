// var fs = require('fs');
// var contents = fs.readFileSync('index.html').toString();
// console.log(contents);
"use strict";
var a = [];
for (let i = 0; i < 10; i ++) {
    a[i] = function () {
        console.log(i);
    }
}
a[3]();