// define a model 定义一个模块
// 模块里面定义了一个类
//对外暴露一个类Window出来

//handler参数是函数类型
define(['widget','jquery','jqueryUI'],function(widget,$,$UI){

    function Window(){
        this.cfg = {
            width:500,
            height:300,
            content:"",
            title:"系统消息",
            text4AlertBtn:"确定",
            text4ConfirmBtn:"确定",
            text4CancelBtn:"取消",

            hasMask:true,
            hasCloseBtn:false,
            isDraggable: true,
            dragHandle: null,
            skinClassName:null,

            handler4AlertBtn:null,            
            handler4CloseBtn:null,
            handler4ConfirmBtn:null,
            handler4CancelBtn:null,

            text4PromptBtn:"确定",
            isPromptPassWord:false,
            defaultInputValue:"",
            maxlength4Input:10,
            handler4PromptBtn:null

        };

    }
    
    Window.prototype = $.extend({},new widget.Widget(), {

        renderUI: function(){     //操作DOM相关

            var footerContent = ""
            switch(this.cfg.winType){
                case "alert":
                            footerContent = '<input type="button" value="'+
                            this.cfg.text4AlertBtn+'" class="msg_alertBtn">';
                            break;
                case "confirm":
                            footerContent = '<input type="button" value = "'+
                            this.cfg.text4ConfirmBtn+'" class = "msg_confirmBtn"><input type="button" value="'+
                            this.cfg.text4CancelBtn+'" class = "msg_cancelBtn">';
                            break; 
                case "prompt":
                            this.cfg.content += '<p class = "msg_promptWrapper"><input type="'+
                            (this.cfg.isPromptPassWord?"password":"text")+'" value ="'+
                            this.cfg.defaultInputValue+'" maxlength = "'+
                            this.cfg.maxlength4Input+'" class = "msg_promptInput"></p>'

                            footerContent = '<input type="button" value = "'+
                            this.cfg.text4PromptBtn+'" class = "msg_promptBtn"><input type="button" value="'+
                            this.cfg.text4CancelBtn+'" class="msg_cancelBtn">'
                            break;                       
            }

            

            // this.myBox = $(
            //     '<div class = "window_mybox">'+
            //     '<div class = "msg_header">'+ this.cfg.title +'</div>' +
            //     '<div class = "msg_body">' + this.cfg.content + '</div>' +
            //     '<div class = "msg_footer">' + footerContent+  '</div>' +
            //     '</div>'
            //     );


            this.myBox = $(
                '<div class = "window_mybox">' + 
                    '<div class = "msg_body">'+ this.cfg.content +'</div>'+
                '</div>'
                )

            if(this.cfg.winType != "common"){
                this.myBox.prepend('<div class = "msg_header">'+ this.cfg.title +'</div>');
                this.myBox.append('<div class = "msg_footer">' + footerContent+  '</div>');
            }


            
            if(this.cfg.hasMask){
                this._myMask = $('<div class = "window_mask"></div>');
                this._myMask.appendTo('body')
            }

            //关闭按钮
            if(this.cfg.hasCloseBtn){
                // var closeBtn = $('<span class="msg_closeBtn">X</span>')
                // closeBtn.appendTo(myBox);
                this.myBox.append('<span class="msg_closeBtn">X</span>')
            }
            
            this.myBox.appendTo(document.body);   
            this._promptInput = this.myBox.find(".msg_promptInput");      
        },



        bindUI: function(){
            var that = this;
            this.myBox.delegate(".msg_alertBtn","click",function(){
                that.fire("alert");
                that.destroy();
            }).delegate(".msg_closeBtn","click",function(){
                that.fire("close");
                that.destroy();
            }).delegate(".msg_confirmBtn","click",function(){
                that.fire("confirm");
                that.destroy();
            }).delegate(".msg_cancelBtn","click",function(){
                that.fire("cancel");
                that.destroy();
            }).delegate(".msg_promptBtn","click",function(){
                that.fire("prompt",that._promptInput.val());
                that.destroy();
            });

            if(this.cfg.handler4AlertBtn){
                this.on("alert",this.cfg.handler4AlertBtn);
            }

            if(this.cfg.handler4CloseBtn){
                this.on("close",this.cfg.handler4CloseBtn);
            }

            if(this.cfg.handler4ConfirmBtn){
                this.on("confirm",this.cfg.handler4ConfirmBtn);
            }

            if(this.cfg.handler4CancelBtn){
                this.on("cancel",this.cfg.handler4CancelBtn);
            }


            if(this.cfg.handler4PromptBtn){
                this.on("prompt",this.cfg.handler4PromptBtn);
            }

        },

        syncUI: function(){
            //定制宽高
            this.myBox.css({
                width:this.cfg.width + 'px',
                height: this.cfg.height + 'px',
                left: (this.cfg.x || (window.innerWidth - this.cfg.width)/2) + 'px' ,
                top: (this.cfg.y || (window.innerHeight - this.cfg.height)/2) + 'px',
            });

            //定制皮肤
            if(this.cfg.skinClassName){
                this.myBox.addClass(this.cfg.skinClassName);
            }

            if(this.cfg.isDraggable){
                if(this.cfg.dragHandle){
                    this.myBox.draggable({handle:this.cfg.dragHandle});
                }
                else{
                    this.myBox.draggable();
                }              
            }
        },

        destructor:function(){
            this._myMask && this._myMask.remove();
        },



    	alert: function(cfg){
            $.extend(this.cfg,cfg,{winType:"alert"});
            this.render();        
            return this;
    	},
    	confirm: function(cfg){
            $.extend(this.cfg,cfg,{winType:"confirm"});
            this.render();        
            return this;
        },
    	prompt: function(cfg){
            $.extend(this.cfg,cfg,{winType:"prompt"});
            this.render();    
            this._promptInput.select();    
            return this;
        },
        common:function(cfg){
            $.extend(this.cfg,cfg,{winType:"common"});
            this.render();        
            return this;
        }

      
    })

    return {Window: Window}

});