# socketio-chat-room



## 运行时环境

+ NODEJS 15 未测试其他版本
+ NPM 最新版
+ 保持网络连接

## 首次运行请注意

请修改js/socket.js中

url地址请改为本机地址

如：本机为192.168.1.5

请修改为

```js
var socket = io("http://192.168.1.5:3000");
```

## 运行方法

```bash
cd socketio-chat-room
npm install
node index.js
```

