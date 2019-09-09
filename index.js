var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  
 
  socket.on('chat message', function(msg,user){
    io.emit('chat message', msg,user);
  });
  
   socket.on('newUser', function(name){
    io.emit('newUser', name);
  });
   
  socket.on('realtime', function(msg,user,charCode){
    io.emit('realtime', msg,user,charCode);
  });
var2
  

});

http.listen(port, function(){
  console.log('listening on *:' + port);
});