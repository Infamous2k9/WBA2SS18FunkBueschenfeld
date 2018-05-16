var app = require('../app');
var http = require('http');


var port = 3000;

var server = http.createServer(app);

server.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened', err);
  }

  console.log('Server is listening on '+ port);
});
