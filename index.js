const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server,{
  cors:"127.0.0.1:80"
});

app.use(express.static(__dirname + '/public'));
let online=0;

//有客户端连接后
io.on('connection', (socket) => {
  online++;
  console.log("一名用户加入了连接,当前数量:"+online);
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
    console.log("一名用户断开了连接,当前数量:"+online);
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
    console.log("来自"+msg.username+"的消息:"+msg.message);
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

server.listen(80, () => {
  console.log('listening on *:80');
});
