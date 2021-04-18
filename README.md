# socketio-chat-room



## 运行时环境

+ NODEJS 14.16.1
+ NPM 7.10.1
+ 保持网络连接

## 首次运行请注意

请修改js/socket.js中

url地址请改为本机地址

如：本机为192.168.1.5

请修改为

```js
var socket = io("http://192.168.1.5:3000");
```
请修改index.js中

cors地址请改为本机地址

如：本机为192.168.1.5,端口为3000

请修改为

```js
const io = require('socket.io')(server,{
  cors:"192.168.1.5:3000"
});
```
修改

```js
server.listen(3000, () => {
  console.log('listening on *:3000');
});
```

## 运行方法

```bash
git clone https://github.com/NOTF-API/socketio-chat-room.git
cd socketio-chat-room
npm install
node index.js
```

## 如使用ssh控制，且需后台运行

```bash
screen -t chatroom
node index.js
```

ctrl+A ctrl+D

```bash
exit
exit
```

