
define(['jquery'],function($){
	
	function Widget(){ this.myBox = null; }     // 属性：最外层容器
	
	Widget.prototype = {
		
		on : function(type,handler){
            if(typeof this.handlers[type] == "undefined"){
                this.handlers[type] = [];
            }

            this.handlers[type].push(handler);

            return this;
        },
        
        fire : function(type,data){
            if(this.handlers[type] instanceof Array){

                var handlers = this.handlers[type]
                for(var i = 0,len=handlers.length;i<len;i++){
                    handlers[i](data);
                }
            }
        },

        renderUI : function(){},     //添加DOM节点
        bindUI : function(){},       //监听事件
        syncUI : function(){},       //初始化组件属性

        render : function(container){     //方法：渲染组件
            this.renderUI();
            this.handlers={};
            this.bindUI();
            this.syncUI();
            $(container || document.body).append(this.myBox);
        },

        destructor : function(){},       // 接口：销毁处理函数

        destroy : function(){           
            this.destructor();         // 方法：销毁组件
            this.myBox.off();
            this.myBox.remove();
        }

	}

	return {Widget : Widget}
});