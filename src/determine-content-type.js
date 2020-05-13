const path = require('path');

/** @function determineContentType 
 * Determines the MIME type associated with 
 * the provided file path.
 * @param {string} filePath - the file path to evaluate 
 */
module.exports = function determineContentType(filePath) {
  // Determine and return content-type
  switch(path.extname(filePath).toLowerCase()){
    case '.html':
    case '.htm':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'application/octet-stream';
  }
}