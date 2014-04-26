var net = require('net');
var port = 8999;

var server = net.createServer(function(c) {
  console.log('Client connected to server!');
  c.on('end', function() {
    console.log('Client disconnected from server!');
  });
  c.on('data', function(data) {    
    MockDisplay.write(data);
  });
});
server.listen(port, function() { 
  console.log('Remote mock voxel display server up!');
});
