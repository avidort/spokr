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

function emitClients(roomId) {
  io.in(roomId).clients((e, clients) => {
    const connectedClients = clients.map((_) => ({
      id: _,
      nickname: nicknameMap[_]
    }));

    io.to(roomId).emit('connected-clients', connectedClients);
  });
}

function getClientRooms(socket) {
  return Object.keys(socket.rooms).filter((_) => _ !== socket.id);
}

io.on('connection', (socket) => {
  console.log('Incoming connection', socket.id);

  socket.on('register', (nickname) => {
    nicknameMap[socket.id] = nickname;
    console.log('register', nickname);
  });

  socket.on('join', (room) => {
    socket.join(room);
    console.log(`${parseId(socket)} has joined ${room}`);
    emitClients(room);
  });

  socket.on('disconnecting', () => {
    console.log('Client disconnecting', parseId(socket));

    const room = getClientRooms(socket)[0];
    if (room) {
      socket.leave(room);
      emitClients(room);
    }
  });
});

http.listen(3000, () => {
  console.log('Express on 3000');
});