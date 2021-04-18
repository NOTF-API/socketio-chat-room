const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server,{
  cors:"192.168.1.8:80"
});

app.use(express.static(__dirname + '/public'));
let online=0;

//有客户端连接后
io.on('connection', (socket) => {
  online++;
  //对该用户
  socket.emit("message",{
    type:0,
    time:new Date().toLocaleString(),
    message:"您加入了聊天室",
    online:online
  });
  //对除该用户的其他用户
  socket.broadcast.emit("message",{
    type:0,
    time:new Date().toLocaleString(),
    message:"一个用户加入了聊天室",
    online:online
  });

  
  //该客户端断开连接后
  socket.on('disconnect', () => {
    online--;
    //对该用户 无操作

    //对除该用户的其他用户
    socket.broadcast.emit("message",{
      type:0,
      time:new Date().toLocaleString(),
      message:"一个用户离开了聊天室",
      online:online
    });
  });

  //接收到该客户端发来的msg后
  socket.on('message', (msg) => {
    //对该用户:
    socket.emit("message",{
      type:1,
      time:msg.time,
      username:"您-"+msg.username,
      message:msg.message
    });
    //对除该用户的其他用户
    socket.broadcast.emit("message",{
      type:1,
      time:msg.time,
      username:msg.username,
      message:msg.message
    });
  });

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
