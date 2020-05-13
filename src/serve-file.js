const fs = require('fs');
const determineContentType = require('./determine-content-type');

/** @module serveFile 
 * Provides a function for serving files in the public 
 * directory matching the pathname in the req.url 
 * If not found, serves a 404 status code.
 * @param {string} filePath - the path to the file to serve
 * @param {http.incomingMessage} req - the request object
 * @param {http.serverResponse} res - the response object
 */
module.exports = function serveFile(filePath, req, res) {
  
  // Read the file asynchronously
  fs.readFile(filePath, function(err, body){
    if(err) {
      // Serve a 500 error if we can't read the file
      res.statusCode = 500;
      res.statusMessage = "Server Error";
      res.end();
      return;
    }
    
    // Set the Content-Length
    res.setHeader("Content-Length", body.length);
    
    // Set the Content-Type
    res.setHeader("Content-Type", determineContentType(filePath));
    
    // Serve the file data
    res.end(body);
  });
}