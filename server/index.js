const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('Hello world');
});

io.on('connection', (socket) => {
  console.log('incoming connection', socket.id);

  socket.on('disconnect', (socket) => {
    console.log('client disconnected', socket.id);
  });
});

http.listen(3000, () => {
  console.log('Express on 3000');
});