"use strict";

var http = require('http');
var handleRequest = require('./src/handle-request');
var port = 3000;

// Create the server
var server = http.createServer(handleRequest);

// Launch the server
server.listen(port, function(){
  console.log("Server is listening on port " + port);
});