var e=function(){let e=document.getElementById("__webwhizSdk__").getAttribute("widgetUrl");return e||"https://widget.webwhiz.ai/"}();const t=`
.webwhiz-widget {
  position: fixed;
  z-index: 9999999;
  max-height: calc(100% - 30px);
  right: 20px;
  bottom: 20px;
  min-width: 80px;
  height: 80px;
  width: 80px;
  max-width: calc(100% - 40px);
}
.webwhiz-widget.wb-align-left {
  left: 0;
  right: auto;
}
.webwhiz-widget.wb-expand {
  width: 416px;
  height: 610px;
  min-width: 370px;
}
.webwhiz-widget.wb-maximize {
  width: 50%;
  height: calc(100% - 30px)
}
@media only screen and (device-width: 768px),
       only screen and (max-width: 768px){
  .webwhiz-widget.wb-maximize {
    width: 100%;
    height: 100%;
  }
  .webwhiz-widget {
    right: 0;
    bottom: 0;
  }
  .webwhiz-widget.wb-expand {
    width: 100%;
    height: 100%;
    min-width: 0;
    left: 0;
    right: 10px;
    bottom: 10px;
    top: 0;
    max-width: 100%;
    max-height: 100%;
  }
}
`;!function(e){if("loading"!==document.readyState){e();return}document.addEventListener("DOMContentLoaded",e)}(()=>{setTimeout(()=>{(function(){var i=document.createElement("iframe");let a=function(){let e=document.getElementById("__webwhizSdk__").getAttribute("chatbotId");return e}();i.setAttribute("class","webwhiz-widget"),i.setAttribute("id","webwhiz-widget"),i.setAttribute("data-powered-by","https://www.webwhiz.ai/"),i.setAttribute("frameborder","0");let d=document.getElementById("__webwhizSdk__").getAttribute("container");if(d){let e=document.querySelector(d);e&&e.appendChild(i)}else{var w=document.createElement("style");w.innerText=t,document.head.appendChild(w),document.body.appendChild(i)}let s=function(){let e=document.getElementById("__webwhizSdk__").getAttribute("baseUrl");return e||"https://api.webwhiz.ai"}();i.setAttribute("src",e+"?kbId="+a+"&baseUrl="+s)})(),window.onmessage=function(e){let t=document.getElementById("webwhiz-widget");return function(e){if("webwhiz:widget_expand"===e.data)t.classList.add("wb-expand");else if("webwhiz:widget_collapse"===e.data)setTimeout(()=>{t.classList.remove("wb-expand","wb-maximize")},350);else if("webwhiz:widget_maximize"===e.data)t.classList.add("wb-maximize");else if("webwhiz:widget_minimize"===e.data)t.classList.remove("wb-maximize");else if("webwhiz:widget_align_left"===e.data)t.classList.add("wb-align-left");else if("webwhiz:widget_clear_history"===e.data)localStorage.removeItem("chatHistory"),localStorage.removeItem("sessionId");else if("webwhiz:request_meta_data"===e.data){let t=document.getElementById("__webwhizSdk__").getAttribute("container");e.source.postMessage({messageType:"webwhiz:recieve_meta_data",url:window.location.href,container:t},"*")}else if("webwhiz:request_chat_data"===e.data){let t=localStorage.getItem("chatHistory"),i=JSON.parse(t||"[]");e.source.postMessage({messageType:"webwhiz:recieve_chat_data",chatHistory:i},"*")}else if("webwhiz:request_session_id"===e.data){let t=localStorage.getItem("sessionId");e.source.postMessage({messageType:"webwhiz:recieve_session_id",sessionId:t},"*")}else if(e.data&&"webwhiz:recieve_new_message"===e.data.messageType){let t=localStorage.getItem("chatHistory"),i=JSON.parse(t||"[]"),a=e.data.message||[];i=[...i,...a],localStorage.setItem("chatHistory",JSON.stringify(i))}else e.data&&"webwhiz:recieve_new_session_id"===e.data.messageType&&localStorage.setItem("sessionId",e.data.sessionId)}}(0)},1e3)});
//# sourceMappingURL=sdk.js.map
