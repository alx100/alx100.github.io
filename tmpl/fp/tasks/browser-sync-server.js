/**
 * Start browserSync server
 */
'use strict';

const gulp  = require('gulp'),
      fs    = require('fs');

module.exports = function(options) {

  return () => {
    // If index.html exist - open it, else show folder
    let listDirectory = fs.existsSync('index.html') ? false : true;

    options.browserSync.init({
      server: {
        baseDir: "./",
        directory: listDirectory
      },
      tunnel: 'alx100',
      notify: false,
      snippetOptions: {
        // Provide a custom Regex for inserting the snippet
        rule: {
          match: /$/i,
          fn: (snippet, match) => snippet + match
        }
      },
      port: 8080
    });
  };

};