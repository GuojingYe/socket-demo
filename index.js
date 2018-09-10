var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connect');
  // socket.broadcast.emit('hi', );

  socket.on('chat message', (msg) => {
    console.log(`message: ${msg}`);
    io.emit('chat message', { name: 'ygjing' });
  })

  socket.on('disconnect', () => {
    console.log('user disconnect');
  })
});

http.listen(3000, () => {
  console.log('listening on *: 3000');
});
