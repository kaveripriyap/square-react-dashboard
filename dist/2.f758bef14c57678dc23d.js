(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{428:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(432),r=Object(a.a)([function(e){return e.show.list}],(function(e){return e})),o=Object(a.a)([function(e){return e.show.kanban}],(function(e){return e}))},430:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12ZM14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12ZM19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10Z",fill:"#92929D"}))}},433:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var a=n(437),r=n(96),o=function(){return function(e){var t,n;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,regeneratorRuntime.awrap(a.a.get("tasks.json"));case 3:t=o.sent,n=t.data,e({type:r.c,payload:n}),o.next=11;break;case 8:o.prev=8,o.t0=o.catch(0),console.error("[Action: fetchTasks] - ".concat(o.t0));case 11:case"end":return o.stop()}}),null,null,[[0,8]])}},i=function(e,t){return{type:r.b,payload:{e:e,type:t}}},l=function(e){return{type:r.a,payload:e}}},437:function(e,t,n){"use strict";var a=n(449),r=n.n(a).a.create({baseURL:"https://square-dashboard-6ffae.firebaseio.com"});t.a=r},446:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(432),r=Object(a.a)([function(e){return e.tasks}],(function(e){return e})),o=function(e,t){return e.tasks.filter((function(e){return e.type===t}))}},447:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(75),i=n(48),l=n(427),c=n(435),d=function(){return r.a.createElement("svg",{width:"13",height:"14",viewBox:"0 0 13 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.95615 10.0438C4.28134 10.369 4.80841 10.3693 5.13391 10.0446L5.13413 10.0444L5.13467 10.0438L8.9059 6.27261L10.3201 4.8584C11.1663 4.01226 11.1663 2.64041 10.3201 1.79427C9.47398 0.948134 8.10212 0.948134 7.25599 1.79427L2.07054 6.97972C2.07028 6.97998 2.07002 6.98024 2.06976 6.98049C0.703701 8.34739 0.70396 10.5629 2.07054 11.9295C3.43737 13.2963 5.65345 13.2963 7.02028 11.9295L11.2629 7.68683C11.4582 7.49156 11.7748 7.49156 11.97 7.68683C12.1653 7.88209 12.1653 8.19867 11.97 8.39393L7.72739 12.6366C5.97003 14.3939 3.12079 14.3939 1.36343 12.6366C-0.382329 10.8908 -0.393853 8.06754 1.32886 6.30756L1.32867 6.30737L1.36343 6.27261L6.54888 1.08716C7.78554 -0.149497 9.79056 -0.149497 11.0272 1.08716C12.2639 2.32382 12.2639 4.32885 11.0272 5.56551L9.61301 6.97972L5.84177 10.751L5.80702 10.7857L5.80656 10.7853C5.08824 11.4667 3.95339 11.4553 3.24905 10.751C2.53309 10.035 2.53309 8.87419 3.24905 8.15823L8.4345 2.97278C8.62976 2.77752 8.94634 2.77752 9.1416 2.97278C9.33687 3.16804 9.33687 3.48463 9.1416 3.67989L3.95615 8.86534C3.63072 9.19077 3.63072 9.71841 3.95615 10.0438Z",fill:"#92929D"}))},u=n(436),s=i.default.div.withConfig({displayName:"Info__TextStyles",componentId:"sc-154lehu-0"})(["font-size:14px;letter-spacing:0.1px;color:#92929d;"]),p=i.default.div.withConfig({displayName:"Info__Wrapper",componentId:"sc-154lehu-1"})(["display:flex;margin:15px 0 10px 0;"]),f=Object(i.default)(s).withConfig({displayName:"Info__Attach",componentId:"sc-154lehu-2"})(["display:flex;align-items:center;svg{margin-right:5px;}"]),m=Object(i.default)(s).withConfig({displayName:"Info__Status",componentId:"sc-154lehu-3"})(["margin:0 15px 0 20px;display:flex;align-items:center;svg{margin-right:5px;fill:#92929d;width:14px;height:14px;}"]),g=Object(i.default)(m).withConfig({displayName:"Info__Activity",componentId:"sc-154lehu-4"})(["background-color:",";color:",";padding:5px;border-radius:5px;margin:0;span:last-child{margin-left:5px;}svg{fill:",";}"],(function(e){return e.data.score.colors.bg}),(function(e){return e.data.score.colors.text}),(function(e){return e.data.score.colors.text})),h=function(e){var t=e.data;return r.a.createElement(p,null,r.a.createElement(f,null,r.a.createElement(d,null),t.attach),r.a.createElement(m,null,r.a.createElement(c.a,null),t.status),t.score.days>0&&r.a.createElement(g,e,r.a.createElement(u.a,null),r.a.createElement("span",null,t.score.days),r.a.createElement("span",null,"days left")))},x=n(428),w=i.default.div.withConfig({displayName:"Score__Wrapper",componentId:"sc-1fdjcxw-0"})(["display:flex;flex-direction:",";align-items:",";"],(function(e){return e.option?"column":"row-reverse"}),(function(e){return!e.option&&"center"})),b=i.default.div.withConfig({displayName:"Score__ScoreLine",componentId:"sc-1fdjcxw-1"})(["background-color:#e2e2ea;width:100%;height:3px;border-radius:2.5px;min-width:",";div{height:3px;background-color:#3dd598;width:",";}"],(function(e){return!e.option&&"150px"}),(function(e){return"".concat(e.data.line,"%")})),v=i.default.div.withConfig({displayName:"Score__ScoreLineTitle",componentId:"sc-1fdjcxw-2"})(["font-size:14px;letter-spacing:0.1px;color:#696974;display:flex;justify-content:flex-end;width:100%;margin-left:",";"],(function(e){return!e.option&&"10px"})),C=Object(o.b)((function(e){return{option:Object(x.a)(e)}}))((function(e){var t=e.data;return r.a.createElement(w,e,r.a.createElement(v,e,t.line,"%"),r.a.createElement(b,e,r.a.createElement("div",null)))})),y=i.default.div.withConfig({displayName:"Titles__TextStyles",componentId:"sc-8t8vso-0"})(["font-size:14px;letter-spacing:0.1px;color:#92929d;"]),E=i.default.div.withConfig({displayName:"Titles__Wrapper",componentId:"sc-8t8vso-1"})(["display:flex;flex-direction:column;"]),_=Object(i.default)(y).withConfig({displayName:"Titles__Title",componentId:"sc-8t8vso-2"})(["color:#171725;margin-bottom:7px;text-decoration:",";"],(function(e){return 0===e.data.score.days&&"line-through"})),j=Object(i.default)(y).withConfig({displayName:"Titles__Team",componentId:"sc-8t8vso-3"})(["color:#696974;"]),k=function(e){var t=e.data;return r.a.createElement(E,null,r.a.createElement(_,e,t.title),r.a.createElement(j,null,t.team))},I=n(76),L=n.n(I),N=n(433),T=function(){return r.a.createElement("svg",{width:"14",height:"14",viewBox:"0 0 14 14",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.41155 7.00032L13.6886 12.2822C14.079 12.6729 14.0787 13.306 13.688 13.6964C13.2973 14.0867 12.6641 14.0864 12.2738 13.6957L6.99628 8.41348L1.70658 13.6953C1.31577 14.0856 0.682602 14.0851 0.292368 13.6943C-0.0978661 13.3035 -0.0973954 12.6703 0.293419 12.2801L5.58271 6.99863L0.29565 1.70679C-0.094698 1.31609 -0.0944116 0.682921 0.296289 0.292573C0.68699 -0.0977741 1.32016 -0.0974878 1.7105 0.293213L6.99797 5.58547L12.2739 0.317343C12.6648 -0.0728905 13.2979 -0.0724199 13.6881 0.318395C14.0784 0.709209 14.0779 1.34237 13.6871 1.73261L8.41155 7.00032Z"}))},M=function(){return r.a.createElement("svg",{width:"15",height:"14",viewBox:"0 0 18 17",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2ZM17 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7ZM1 12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H1C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12ZM11 17H1C0.447715 17 0 16.5523 0 16C0 15.4477 0.447715 15 1 15H11C11.5523 15 12 15.4477 12 16C12 16.5523 11.5523 17 11 17Z"}))},O="#92929d",D=i.default.div.withConfig({displayName:"Description__Wrapper",componentId:"fb6sjd-0"})(["display:flex;svg{fill:",";}"],O),S=i.default.div.withConfig({displayName:"Description__ShapeWrapper",componentId:"fb6sjd-1"})(["width:20px;"]),R=i.default.div.withConfig({displayName:"Description__HeaderD",componentId:"fb6sjd-2"})(["display:flex;flex-direction:column;margin-bottom:10px;"]),H=i.default.span.withConfig({displayName:"Description__TitleD",componentId:"fb6sjd-3"})(["font-size:14px;letter-spacing:0.1px;color:#171725;margin:0 0 10px 10px;"]),Z=i.default.span.withConfig({displayName:"Description__TextD",componentId:"fb6sjd-4"})(["margin-left:10px;color:",";font-size:14px;"],O),z=function(e){var t=e.title;return r.a.createElement(D,null,r.a.createElement(S,null,r.a.createElement(M,null)),r.a.createElement(R,null,r.a.createElement(H,null,"Description"),r.a.createElement(Z,null,t,". Next Friday should be done. Next Monday we should deliver the first iteration. Make sure, we have a good result to be delivered by the day.")))},W="#92929d",A="#fc5a5a",B="#ffffff",F=i.default.section.withConfig({displayName:"TaskModal__Wrapper",componentId:"sc-10ab0nb-0"})(["position:absolute;top:0;width:100%;height:100vh;display:flex;align-items:center;justify-content:center;background-color:rgba(23,23,37,0.4);z-index:100;"]),J=i.default.div.withConfig({displayName:"TaskModal__Modal",componentId:"sc-10ab0nb-1"})(["display:flex;flex-direction:column;min-width:300px;width:30%;min-height:30vh;background-color:",";border-radius:20px;padding:20px 25px;"],B),P=i.default.div.withConfig({displayName:"TaskModal__Header",componentId:"sc-10ab0nb-2"})(["display:flex;justify-content:space-between;align-items:center;color:",";font-size:14px;height:50px;border-bottom:1px solid #e2e2ea;"],W),U=i.default.button.withConfig({displayName:"TaskModal__Button",componentId:"sc-10ab0nb-3"})(["background-color:",";border:none;outline:none;cursor:pointer;svg{fill:",";:hover{fill:#0062ff;}}"],B,W),q=i.default.div.withConfig({displayName:"TaskModal__Title",componentId:"sc-10ab0nb-4"})(["color:#171725;font-size:24px;margin:30px 0;"]),G=i.default.button.withConfig({displayName:"TaskModal__Delete",componentId:"sc-10ab0nb-5"})(["display:flex;justify-content:center;align-items:center;margin-top:30px;background-color:",";outline:none;cursor:pointer;color:",";height:38px;border-radius:20px;border:1px solid ",";:hover{color:",";background-color:",";}"],A,B,A,A,B),K={deleteTask:N.a},Q=Object(o.b)(null,K)((function(e){var t=e.type,n=e.title,a=e.onClose,o=e.id,i=e.deleteTask,l=document.getElementById("modal");if(!l)throw new Error("The element #portal wasn`t found");return L.a.createPortal(r.a.createElement(F,null,r.a.createElement(J,null,r.a.createElement(P,null,r.a.createElement("span",null,t),r.a.createElement(U,{onClick:a},r.a.createElement(T,null))),r.a.createElement(q,null,r.a.createElement("span",null,n)),r.a.createElement(z,{title:n}),r.a.createElement(G,{onClick:function(){return function(e){i(e)}(o)}},"Delete"))),l)}));function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Y=i.default.div.withConfig({displayName:"Task__Wrapper",componentId:"fevp8m-0"})(["display:flex;justify-content:",";flex-direction:",";cursor:move;border-radius:20px;padding:15px;margin:0 5px 10px 5px;background:",";border:",";opacity:",";"],(function(e){return!e.option&&"space-around"}),(function(e){return e.option?"column":"row"}),(function(e){return e.drag?"repeating-linear-gradient(\n    45deg,\n    white,\n    white 5px,\n    #f1f1f5 5px,\n    #f1f1f5 10px\n  )":"white"}),(function(e){return e.drag?"1px dashed #92929d":"1px dashed white"}),(function(e){return e.drag?"0.999":"1"})),$=i.default.div.withConfig({displayName:"Task__Users",componentId:"fevp8m-1"})(["display:grid;grid-template-columns:repeat(6,1fr);grid-gap:10px;margin:10px 0 0 0;"]);t.a=Object(o.b)((function(e){return{option:Object(x.a)(e)}}))((function(e){var t=e.data,n=X(r.a.useState(!1),2),a=n[0],o=n[1],i=X(r.a.useState(!1),2),c=i[0],d=i[1],u=function(){o((function(e){return!e}))},s=t.users.map((function(e,t){return r.a.createElement(l.a,V({key:t},e))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,V({},e,{draggable:!0,onDragStart:function(e){d((function(e){return!e})),e.dataTransfer.setData("text/html",t.id)},onClick:u,drag:c}),r.a.createElement(k,{data:t}),r.a.createElement(h,{data:t}),r.a.createElement(C,{data:t}),r.a.createElement($,null,s)),r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(Q,V({},t,{onClose:u}))))}))}}]);