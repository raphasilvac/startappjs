'use strict';

var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

app.use("/css", express.static('./app/css'));
app.use("/client", express.static('./app/client'));
app.use("/templates", express.static('./app/templates'));
app.use("/components", express.static('./app/components'));

app.get('/', function (req, res) {
  res.sendfile('./app/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

exports = module.exports = server;
exports.use = function() {
	app.use.apply(app, arguments);
}