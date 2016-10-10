
require.config({
	paths:{
		jquery: 'jquery-3.0.0.min',
		jqueryUI: 'jquery-ui.min'
	}
});

require(['jquery','window'],function($,w){
	$('#a').click(function(){

	    var win = new w.Window();

		win.alert({

				title:"提示",
				content:'welcome',

				width:300,
				height:150,
				y:50,

				hasCloseBtn:true,
				skinClassName:"",
				text4AlertBtn:"ok",
				dragHandle:".msg_header",
				// handler4AlertBtn:function(){
				// 	alert('you click the alert button');
			 //    },
			 //    handler4CloseBtn:function(){
			 //    	alert('you click the close button');
			 //    },
		})//.on("alert",function(){alert("you click alert handler")})

	    win.on("alert",function(){alert("you click alert handler")})
		// win.on("alert",function(){alert("the second alert handler")})
		// win.on("alert",function(){alert("the third alert handler")})
		win.on("close",function(){alert("you click close handler")})
		// win.on("close",function(){alert("the second close handler")})

	})


	$('#b').click(function(){
		new w.Window().confirm({
			title:"系统消息",
			content:"您确定要删除这个文件吗？",
			width:300,
			height:150,
			y:50,
			text4ConfirmBtn:"是",
			text4CancelBtn:"否",
			dragHandle:".msg_header"
		}).on("confirm",function(){
			alert("确定");
		}).on("cancel",function(){
			alert("取消");
		});
	})


	$('#c').click(function(){
		new w.Window().prompt({
			title:"请输入您的名字",
			content:"我们将会为您保密您的输入信息",
			width:300,
			height:150,
			y:50,

			text4PromptBtn:"输入",
			text4CancelBtn:"取消",
			defaultInputValue:"小红",
			dragHandle:".msg_header",
			handler4PromptBtn:function(inputValue){
				alert("您输入的内容是:"+inputValue);
			},

			handler4CancelBtn:function(){
				alert("取消");
			}
		})
	})


	$('#d').click(function(){
		new w.Window().common({
			content:"我是一个通用弹窗",
			width:300,
			height:150,
			y:50,
			hasCloseBtn:true
		});
	})
});