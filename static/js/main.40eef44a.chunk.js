(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},135:function(e,t){},138:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),s=a.n(c),i=(a(102),a(48)),o=a(13),l=a(172),u=a(174),m=function(e){return{type:"SEND_MESSAGE",payload:e}},v=function(e){return{type:"CHANGE_SERVER",payload:e}},E=function(e){return{type:"CHANGE_TOPIC",payload:e}};function p(e){var t=e.topics,a=e.servers,r=Object(o.b)();return n.a.createElement("div",{className:"sidebar-container"},n.a.createElement("div",{className:"servers-container"},n.a.createElement(l.a,null,a.map(function(e){return n.a.createElement(u.a,{onClick:function(){return r(v(e))},key:e,button:!0},"# ",e)}))),n.a.createElement("div",{className:"topics-container"},n.a.createElement(l.a,null,t.map(function(e){return n.a.createElement(u.a,{onClick:function(t){return r(E(e))},key:e,button:!0},"# ",e)}))))}var d=a(185),f=a(176);function b(e){var t,a=Object(o.c)(function(e){return e.chat}),c=a.activeServer,s=a.activeTopic,i=Object(o.c)(function(e){return e.chat});return Object(r.useEffect)(function(){t.scrollIntoView()}),n.a.createElement("div",{className:"messages-container"},i.servers[c][s].map(function(e,t){return n.a.createElement("div",{className:"message",key:t},n.a.createElement(d.a,{avatar:n.a.createElement(f.a,null,"person"),label:e.from+" "+e.msg}))}),n.a.createElement("div",{ref:function(e){return t=e}}))}var O=a(182);function g(e){var t=Object(o.c)(function(e){return e.chat}),a=t.activeServer,r=t.activeTopic,c=Object(o.b)(),s=e.chatMessage,i=e.changeChatMessage,l=e.user;function u(e){"Enter"===e.key&&(c(m({server:a,topic:r,from:l,msg:s})),i(""))}return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"send-message-border"}),n.a.createElement("div",{className:"send-message-container"},n.a.createElement(O.a,{autoComplete:"off",color:"blue",id:"filled-name",className:"message-input",label:"Message # ".concat(r),value:s,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){return u(e)}})))}var h=a(177),j=a(178),y=a(180),N=a(179),S=a(84),C=a.n(S),k=a(184);function T(e){var t=Object(o.c)(function(e){return e.chat}),a=t.activeServer,c=t.activeTopic,s=Object(r.useState)(!1),l=Object(i.a)(s,2),u=l[0],m=l[1],v=e.topics,E=e.servers;return n.a.createElement(h.a,{position:"static"},n.a.createElement(j.a,{className:"navbar"},n.a.createElement(N.a,{edge:"start",color:"inherit","aria-label":"menu",className:"menu-burger-button"},n.a.createElement(C.a,{onClick:function(){return m(!0)}})),n.a.createElement(k.a,{anchor:"left",open:u,onClose:function(){return m(!1)}},n.a.createElement(p,{topics:v,servers:E})),n.a.createElement(y.a,{variant:"h6"},a," - ",c)))}var _="eric"+Math.ceil(100*Math.random());function w(){var e=Object(o.c)(function(e){return e.chat}),t=Object(r.useState)(""),a=Object(i.a)(t,2),c=a[0],s=a[1],l=Object.keys(e.servers),u=Object.keys(e.servers[e.activeServer]);return n.a.createElement("div",null,n.a.createElement(T,{topics:u,servers:l}),n.a.createElement("div",{className:"grid-container"},n.a.createElement("div",{className:"sidebar-grid"},n.a.createElement(p,{topics:u,servers:l})),n.a.createElement("div",{className:"messages-grid"},n.a.createElement(b,{topics:u})),n.a.createElement("div",{className:"send-messages-grid"},n.a.createElement(g,{chatMessage:c,changeChatMessage:s,user:_}))))}var A=a(88),M=a(181),D=Object(A.a)({palette:{type:"dark",primary:{main:"#7289da"}}});var G,H=function(){return n.a.createElement(M.a,{theme:D},n.a.createElement(w,null))},P=a(23),R=a(85),I=a(86),V=a.n(I),U=a(31),x=a(49),J=a(25),X={servers:{"programming haven":{general:[],react:[],vue:[],php:[],node:[]},"game land":{HOTS:[],Overwatch:[],Diablo:[],PoE:[],CSGO:[]}},activeServer:"",activeTopic:""},B=a(87),F=Object(P.c)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CHAT":var a=t.payload,r=a.server,n=a.topic,c=a.from,s=a.msg;return console.log(t),Object(J.a)({},e,{servers:Object(J.a)({},e.servers,Object(U.a)({},r,Object(J.a)({},e.servers[r],Object(U.a)({},n,[].concat(Object(x.a)(e.servers[r][n]),[{from:c,msg:s}])))))});case"CHANGE_SERVER":return Object(J.a)({},e,{activeServer:t.payload,activeTopic:Object.keys(e.servers[t.payload])[0]});case"CHANGE_TOPIC":return Object(J.a)({},e,{activeTopic:t.payload});default:return Object(J.a)({},e,{activeServer:Object.keys(e.servers)[0],activeTopic:Object.keys(e.servers[Object.keys(e.servers)[0]])[0]})}},location:B.serverReducer}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.d,L=Object(P.e)(F,K(Object(P.a)(R.a,(G="https://simple-chat-apix.herokuapp.com/",function(e){var t=V()(G);return t.on("simple-chat",function(t){e.dispatch({type:"UPDATE_CHAT",payload:t})}),function(e){return function(a){if("SEND_MESSAGE"!==a.type)return e(a);t.emit("simple-chat",a.payload)}}}))));s.a.render(n.a.createElement(o.a,{store:L},n.a.createElement(H,null)),document.getElementById("root"))},87:function(e,t){},97:function(e,t,a){e.exports=a(138)}},[[97,1,2]]]);
//# sourceMappingURL=main.40eef44a.chunk.js.map