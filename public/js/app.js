var app=new Vue({
	el:"#app",
	data:{
		appTitle:"itallq",
		editText:"",
    online:0,
		maxMessageCount:10,
		nowMessageCount:0,
		messages:[]
	},
	methods:{
		sendMessage:function(){
			if(this.editText.trim().length<=0){
				return;
			}
			socket.emit("message",{
				time:new Date().toLocaleString(),
				username:this.username,
				message:this.editText
			});
			this.nowMessageCount++;
			this.editText="";
			if(this.nowMessageCount>=this.maxMessageCount){
				this.messages.shift();
			}
			
		}
	},
	computed:{
		username:function(){
			return "游客"+new Date().getTime();
		}
	},
	watch:{
		messages:function(){
			setTimeout(function(){
				document.getElementById("chat_window_content").lastChild.lastChild.scrollIntoView();
			},0);
		}
	}
	
})