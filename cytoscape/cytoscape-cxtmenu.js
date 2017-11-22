!function(t){"use strict";var e={menuRadius:100,selector:"node",commands:[],fillColor:"rgba(0, 0, 0, 0.75)",activeFillColor:"rgba(92, 194, 237, 0.75)",activePadding:20,indicatorSize:24,separatorWidth:3,spotlightPadding:4,minSpotlightRadius:24,maxSpotlightRadius:38,itemColor:"white",itemTextShadowColor:"black",zIndex:9999},i=function(t,i){t&&t("core","cxtmenu",function(t){function a(t){var e=t.offset();return e.left+=parseFloat(t.css("padding-left")),e.left+=parseFloat(t.css("border-left-width")),e.top+=parseFloat(t.css("padding-top")),e.top+=parseFloat(t.css("border-top-width")),e}function o(t){t=void 0!==t?t:W,u.globalCompositeOperation="source-over",u.clearRect(0,0,P,P),u.fillStyle=r.fillColor,u.beginPath(),u.arc(f+r.activePadding,f+r.activePadding,f,0,2*Math.PI,!0),u.closePath(),u.fill(),u.globalCompositeOperation="destination-out",u.strokeStyle="white",u.lineWidth=r.separatorWidth;for(var e=r.commands,i=2*Math.PI/e.length,a=e.length%2!==0?Math.PI/2:0,o=a+i,n=0;n<e.length;n++){var d=(e[n],f*Math.cos(a)),l=f*Math.sin(a);u.beginPath(),u.moveTo(f+r.activePadding,f+r.activePadding),u.lineTo(f+r.activePadding+d,f+r.activePadding-l),u.closePath(),u.stroke(),a+=i,o+=i}u.fillStyle="white",u.globalCompositeOperation="destination-out",u.beginPath(),u.arc(f+r.activePadding,f+r.activePadding,t+r.spotlightPadding,0,2*Math.PI,!0),u.closePath(),u.fill(),u.globalCompositeOperation="source-over"}function n(t){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,i=+new Date;clearTimeout(k),E||i>=A+L?(e(t),A=i,E=!1):k=setTimeout(function(){e(t),A=i},2*L)}function d(){j.on("cxttapstart",r.selector,function(t){l=this;var e,n,d,c=this;c.isNode()?(e=c.renderedPosition(),n=c.renderedWidth(),d=c.renderedHeight()):(e=t.cyRenderedPosition,n=1,d=1);i(window).scrollLeft(),i(window).scrollTop();g=a(s),O=e.x,q=e.y,v.show().css({left:e.x-f+"px",top:e.y-f+"px"}),W=Math.max(n,d)/2,W=Math.max(W,r.minSpotlightRadius),W=Math.min(W,r.maxSpotlightRadius),o(),x=void 0}).on("cxtdrag",r.selector,function(t){n(function(){var e=t.originalEvent.pageX-g.left-O,i=t.originalEvent.pageY-g.top-q;0===e&&(e=.01);var a=Math.sqrt(e*e+i*i),n=(i*i-a*a-e*e)/(-2*a*e),d=Math.acos(n);if(x=void 0,a<W+r.spotlightPadding)return void o();o();var l=e*f/a,c=i*f/a;i>0&&(d=Math.PI+Math.abs(d-Math.PI));for(var s=r.commands,h=2*Math.PI/s.length,p=s.length%2!==0?Math.PI/2:0,v=p+h,m=0;m<s.length;m++){var P=(s[m],d>=p&&v>=d||p<=d+2*Math.PI&&d+2*Math.PI<=v);if(P){u.fillStyle=r.activeFillColor,u.strokeStyle="black",u.lineWidth=1,u.beginPath(),u.moveTo(f+r.activePadding,f+r.activePadding),u.arc(f+r.activePadding,f+r.activePadding,f+r.activePadding,2*Math.PI-p,2*Math.PI-v,!0),u.closePath(),u.fill(),x=m;break}p+=h,v+=h}u.fillStyle="white",u.globalCompositeOperation="destination-out",u.beginPath(),u.translate(f+r.activePadding+l/f*(W+r.spotlightPadding-r.indicatorSize/4),f+r.activePadding+c/f*(W+r.spotlightPadding-r.indicatorSize/4)),u.rotate(Math.PI/4-d),u.fillRect(-r.indicatorSize/2,-r.indicatorSize/2,r.indicatorSize,r.indicatorSize),u.closePath(),u.fill(),u.setTransform(1,0,0,1,0,0),u.beginPath(),u.arc(f+r.activePadding,f+r.activePadding,W+r.spotlightPadding,0,2*Math.PI,!0),u.closePath(),u.fill(),u.globalCompositeOperation="source-over"})}).on("cxttapend",r.selector,function(t){var e=this;if(v.hide(),void 0!==x){var i=r.commands[x].select;i&&i.apply(e)}}).on("cxttapend",function(t){v.hide()})}var l,r=i.extend(!0,{},e,t),c=this,s=i(c.container()),h={options:r,handlers:[]},p=i('<div class="cxtmenu"></div>');h.$container=p;var g,v=i("<div></div>"),m=i("<canvas></canvas>"),u=m[0].getContext("2d"),f=r.menuRadius,P=2*(f+r.activePadding),x=void 0;s.append(p),p.append(v),v.append(m),p.css({position:"absolute",zIndex:r.zIndex}),v.css({width:P+"px",height:P+"px",position:"absolute",zIndex:1,marginLeft:-r.activePadding+"px",marginTop:-r.activePadding+"px"}).hide(),m[0].width=P,m[0].height=P;for(var w=r.commands,b=2*Math.PI/w.length,M=w.length%2!==0?Math.PI/2:0,S=M+b,y=0;y<w.length;y++){var I=w[y],C=(M+S)/2,T=.66*f*Math.cos(C),z=.66*f*Math.sin(C),R=i('<div class="cxtmenu-item"></div>');R.css({color:r.itemColor,cursor:"default",display:"table","text-align":"center",position:"absolute","text-shadow":"-1px -1px "+r.itemTextShadowColor+", 1px -1px "+r.itemTextShadowColor+", -1px 1px "+r.itemTextShadowColor+", 1px 1px "+r.itemTextShadowColor,left:"50%",top:"50%","min-height":.66*f,width:.66*f,height:.66*f,marginLeft:T-.33*f,marginTop:-z-.33*f});var F=i('<div class="cxtmenu-content">'+I.content+"</div>");F.css({width:.66*f,height:.66*f,"vertical-align":"middle",display:"table-cell"}),v.append(R),R.append(F),M+=b,S+=b}i(document).on("click",function(){v.hide()}),p.on("click",function(){if(void 0!==x&&l){var t=r.commands[x].select;t&&t.apply(l)}});var k,O,q,W,A=0,L=1e3/30,E=!0,j={on:function(t,e,i){return h.handlers.push({events:t,selector:e,fn:i}),c.on(t,e,i),this}};d()})};"undefined"!=typeof module&&module.exports&&(module.exports=i),"undefined"!=typeof define&&define.amd&&define("cytoscape-cxtmenu",function(){return i}),"undefined"!=typeof cytoscape&&i(cytoscape,t)}(jQuery);