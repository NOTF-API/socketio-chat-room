var socket = io("http://127.0.0.1:80");//set your own address
	
socket.on('connection',function(){
	alert(1)
});

socket.on('disconnect', function(){
  app.messages.push({
  	type:0,
  	time:new Date().toLocaleString(),
  	username:app.username,
  	message:"您与服务器断开了连接"
  })
}); 

socket.on("message",function(msg){
	app.messages.push(msg);
  if(msg.online){
    app.online=msg.online;
  }
})







