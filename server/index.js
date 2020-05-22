const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('Hello world');
});

function parseId(socket) {
  return `${socket.nickname} (${socket.id})`;
}

io.on('connection', (socket) => {
  console.log('incoming connection', socket.id);

  socket.on('register', (nickname) => {
    socket.nickname = nickname;
    console.log('register', socket.nickname);
  });

  socket.on('join', (room) => {
    socket.join(room);
    console.log(`${parseId(socket)} has joined ${room}`);
  });

  socket.on('disconnect', () => {
    console.log('client disconnected', socket.id, socket.nickname);
  });
});

http.listen(3000, () => {
  console.log('Express on 3000');
});