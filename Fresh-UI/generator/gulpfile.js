'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('build', function (cb) {
  exec('cd angular-src/ && ng build', function (err, stdout, stderr) {
//    console.log("website link: https://"+ $AIR_WS_IP +"3000");
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})
