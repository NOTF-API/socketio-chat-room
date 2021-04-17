$(document).ready(function(){
	//设置窗口移动功能
    $("#chat_window_title").mousedown(function(e){
		$("body").css("cursor","move");
		let app_window=$("#chat_window");
		let nowX=parseInt(app_window.css("left"));
		let nowY=parseInt(app_window.css("top"));
		let sx=e.pageX;
		let sy=e.pageY;
		$("#app").mouseup(function(e){
			let dx=e.pageX;
			let dy=e.pageY;
			app_window.css("left",nowX+(dx-sx));
			app_window.css("top",nowY+(dy-sy));
			$("#app").unbind("mouseup");
			$("body").css("cursor","default");
		});
	});
	//
});


// $(document).ready(function(){
// 	var dv = document.getElementById('chat_window_title');
// 	var dd = document.getElementById('chat_window');
// 	var x = 0;
// 	var y = 0;
// 	var l = 0;
// 	var t = 0;
// 	var isDown = false;
// 	//设置窗口移动功能
//     dv.onmousedown=function(e){
// 		x = e.clientX;
// 		y = e.clientY;
// 		//获取左部和顶部的偏移量
// 		l = dv.offsetLeft
// 		t = dv.offsetTop
// 		//开关打开
// 		isDown = true;	
// 		//设置样式  
// 		dv.style.cursor = 'move';
// 	};
	
// 	window.onmousemove = function(e) {
// 	    if (isDown == false) {
// 	        return;
// 	    }
// 	    //获取x和y
// 	    var nx = e.clientX;
// 	    var ny = e.clientY;
// 	    //计算移动后的左偏移量和顶部的偏移量
// 	    var nl = nx - (x - l);
// 	    var nt = ny - (y - t);
// 	    dv.style.left = nl + 'px';
// 	    dv.style.top = nt + 'px';
// 	}
	
// 	//鼠标抬起事件
// 	dv.onmouseup = function() {
// 	    //开关关闭
// 	    isDown = false;
// 	    dv.style.cursor = 'default';
// 	}
// });