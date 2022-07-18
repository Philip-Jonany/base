const io = require('socket.io')();

io.on('connection', client => {
    client.emit('init', { data: 'deez nuts' });
    // client.emit('init', { what: 'deez', object: 'nuts'});
});
io.listen(process.env.PORT || 3000);
