const fs = require('fs');
const url = require('url');
const path = require('path');

/** @module serveIndex
 * Generates a dynamic index page for a directory's contents
 * @param {string} dirPath - the path to the directory in the filesystem
 * @param {http.incomingMessage} req - the request object
 * @param {http.serverResponse} res - the response object
 */
module.exports = function serveIndex(dirPath, req, res) {

  // Determine the request path name directly from the url 
  // (this may be different than the supplied file path)
  var pathname = url.parse(req.url).pathname;
  
  fs.readdir(dirPath, function(err, items){
    if(err) {
      // Serve a 500 error if we can't read the directory contents
      res.statusCode = 500;
      res.statusMessage = "Server Error";
      res.end();
      return;
    }
    // Create Links
    var links = items.map(function(item) {
      return `<li><a href="${path.join(pathname, item)}">${item}</a></li>`;
    });
    // Generate HTML
    var html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Index of ${pathname}</title>
        <head>
        <body>
          <h1>Index of ${pathname}</h1>
          <ul>
            ${links.join("")}
          <ul>
        </body>
      <html>
    `
    // Serve the HTML 
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Content-Length", html.length);
    res.end(html);
  });
  
}
