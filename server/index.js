const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const nicknameMap = {};

app.get('/', (req, res) => {
  res.send('Hello world');
});

function parseId(socket) {
  return `${nicknameMap[socket.id]} (${socket.id})`;
}

function emitClients() {
  io.clients((e, clients) => {
    const connectedClients = clients.map((_) => ({
      id: _,
      nickname: nicknameMap[_]
    }));

    io.emit('connected-clients', connectedClients);
    console.log(connectedClients);
  });
}

io.on('connection', (socket) => {
  console.log('Incoming connection', socket.id);

  socket.on('register', (nickname) => {
    nicknameMap[socket.id] = nickname;
    console.log('register', nickname);
    emitClients();
  });

  socket.on('join', (room) => {
    socket.join(room);
    console.log(`${parseId(socket)} has joined ${room}`);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected', parseId(socket));
  });
});

http.listen(3000, () => {
  console.log('Express on 3000');
});