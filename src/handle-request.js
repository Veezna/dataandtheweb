const fs = require('fs');
const url = require('url');
const path = require('path');
const serveIndex = require('./serve-index');
const serveFile = require('./serve-file');
const interpretServerPage = require('./interpret-server-page');

/** @module handleRequest
 * Provides a function for handling HTTP requests 
 * @param {http.incomingMessage} req - the request object
 * @param {http.serverResponse} res - the response object
 */
module.exports = function handleRequest(req, res) {
  
  // Only handle GET reqeusts
  if(req.method !== 'GET') {
    res.statusCode = 501;
    res.statusMessage = "Not Implemented";
    res.end();
    return;
  }
  
  // Determine the resource path and get its stats
  var pathname = url.parse(req.url).pathname;
  var filePath = path.join('public', pathname);
  fs.stat(filePath, function(err, stats) {
    if(err) {
      console.error(err);
      res.statusCode = 404;
      res.statusMessage = "Not Found";
      res.end();
      return;
    }
    
    // Serve the requested resource
    if(stats.isFile()) {
      // Is the file a server page?
      if(path.extname(filePath) === '.nsp') {
        // Yes: Interpret the server page
        interpretServerPage(filePath, req, res);
      } else {
        // No: Serve the file
        serveFile(filePath, req, res);
      }
    } else if(stats.isDirectory()) {
      // Serve the directory
      serveIndex(filePath, req, res);
    } else {
      res.statusCode = 404;
      res.statusMessage = "Not Found";
      res.end();
    }
    
  });
}