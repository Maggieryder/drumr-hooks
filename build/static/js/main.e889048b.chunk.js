(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports={beat:"beat_beat__3pcSw"}},17:function(e,t,a){e.exports={bar:"bar_bar__2hYzb"}},18:function(e,t,a){e.exports={control:"control_control__1FX7q"}},19:function(e,t,a){e.exports={tracks:"tracks_tracks__oRedj","select-kit":"tracks_select-kit__13jo3"}},20:function(e,t,a){e.exports={processor:"processor_processor__2JZD5"}},21:function(e,t,a){e.exports={processors:"processors_processors__1McFe"}},22:function(e,t,a){},23:function(e,t,a){e.exports=a(51)},3:function(e,t,a){e.exports={"input-range":"ui_input-range__3bU61",label:"ui_label__SBJnY",select:"ui_select__t9xsn","current-value":"ui_current-value__gU7xx",switch:"ui_switch__2otmt"}},4:function(e,t,a){e.exports={track:"track_track__2NVNn",bars:"track_bars__1_e1q","controls-mask":"track_controls-mask__khIdz",controls:"track_controls__1J_aP",show:"track_show__PzVSK"}},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),u=(a(5),a(7),a(15),a(1)),o=a(3),s=a.n(o),i=function(e){var t=e.id,a=e.options,r=e.onValueChange,c=e.initialValue,o=Object(n.useState)(c||a[0].value),i=Object(u.a)(o,2),m=i[0],b=i[1];return l.a.createElement("select",{className:s.a.select,id:t,onChange:function(e){return function(e){b(e.target.value),r(e.target.value)}(e)},value:m},function(e){return e.map(function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.label)})}(a))},m=function(e){var t=e.min,a=e.max,n=e.step,r=e.value,c=e.onChange;return l.a.createElement("input",{type:"range",step:n||1,min:t,max:a,value:r,onChange:c,style:{"--track-width":"".concat((r-t)/(a-t)*100,"%")},className:s.a["input-range"]})},b=function(e){var t=e.children;return l.a.createElement("label",{className:s.a.label},t)},E=function(e){var t=e.children;return l.a.createElement("div",{className:s.a["current-value"]},t)},v=function(){return l.a.createElement("div",{className:s.a.switch},l.a.createElement("div",null))},f=a(16),_=a.n(f),p=function(e){var t=e.velocity,a=(e.sustain,Object(n.useState)(!1)),r=Object(u.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)({x:null,y:null}),i=Object(u.a)(s,2);i[0],i[1];Object(n.useEffect)(function(){return function(){}},[c]);var m={transform:"scale(".concat(t,")"),background:c?"red":"rgba(255,255,255,.2)"};return l.a.createElement("div",{onClick:function(e){o(!c)},className:_.a.beat},l.a.createElement("div",{style:m},t))},d=a(17),j=a.n(d),O=function(e){return l.a.createElement("div",{className:j.a.bar,style:{}},l.a.createElement(p,{velocity:.5}),l.a.createElement(p,{velocity:.5}),l.a.createElement(p,{velocity:.5}),l.a.createElement(p,{velocity:.5}))},h=a(18),g=a.n(h),k=function(e){var t=e.children;return l.a.createElement("div",{className:g.a.control},t)},y=a(4),S=a.n(y),w=function(e){var t=Object(n.useState)("kik"),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(0),s=Object(u.a)(o,2),f=s[0],_=s[1],p=Object(n.useState)(0),d=Object(u.a)(p,2),j=d[0],h=d[1],g=Object(n.useState)(0),y=Object(u.a)(g,2),w=y[0],N=y[1],x=Object(n.useState)(0),C=Object(u.a)(x,2),F=C[0],z=C[1];Object(n.useEffect)(function(){return function(){}},[r,f,j,w,F]);return l.a.createElement("div",{className:S.a.track,style:{}},l.a.createElement("div",{className:S.a.bars},l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null),l.a.createElement(O,null)),l.a.createElement("div",{className:S.a["controls-mask"]},l.a.createElement("div",{className:S.a.controls},l.a.createElement(k,null,l.a.createElement(i,{options:[{value:"kik",label:"Kick"},{value:"snr",label:"Snare"},{value:"hh",label:"Hi Hat"},{value:"ohh",label:"Open Hi Hat"}],onValueChange:function(e){return c(e)}})),l.a.createElement(k,null,l.a.createElement(m,{id:"reverb",min:0,max:100,step:1,onChange:function(e){return _(e.target.value)},value:+f}),l.a.createElement(b,null,"Reverb"),l.a.createElement(E,null,Math.round(f/10).toString())),l.a.createElement(k,null,l.a.createElement(m,{id:"delay",min:0,max:100,step:1,onChange:function(e){return h(e.target.value)},value:+j}),l.a.createElement(b,null,"Delay"),l.a.createElement(E,null,Math.round(j/10).toString())),l.a.createElement(k,null,l.a.createElement(m,{id:"gain",min:0,max:100,step:1,onChange:function(e){return N(e.target.value)},value:+w}),l.a.createElement(b,null,"Gain"),l.a.createElement(E,null,Math.round(w/10).toString())),l.a.createElement(k,null,l.a.createElement(m,{id:"pan",min:-50,max:50,step:1,onChange:function(e){return z(e.target.value)},value:+F}),l.a.createElement(b,null,"Pan"),l.a.createElement(E,null,Math.round(F/10).toString())),l.a.createElement(k,null,l.a.createElement(v,null),l.a.createElement(b,null,"Mute")),l.a.createElement(k,null,l.a.createElement(v,null),l.a.createElement(b,null,"Solo")))))},N=a(19),x=a.n(N),C=function(e){var t=Object(n.useState)("Feelin"),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(null),s=Object(u.a)(o,2),m=(s[0],s[1],Object(n.useState)(!1)),b=Object(u.a)(m,2),E=(b[0],b[1],Object(n.useState)(null)),v=Object(u.a)(E,2);v[0],v[1],Object(n.useRef)();Object(n.useEffect)(function(){return console.log("[Tracks] query",r),function(){}},[r]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{options:[{value:"Feelin",label:"Feelin Kit"},{value:"Floor",label:"Floor Kit"},{value:"Jazz",label:"Jazz Kit"},{value:"Nasty Raw",label:"Nasty Raw Kit"}],onValueChange:function(e){return c(e)}}),l.a.createElement("div",{className:x.a.tracks,style:{}},l.a.createElement(w,null),l.a.createElement(w,null),l.a.createElement(w,null),l.a.createElement(w,null),l.a.createElement(w,null)))},F=a(20),z=a.n(F),J=function(e){var t=e.children,a=e.type;e.options,e.label;return l.a.createElement("div",{className:z.a.processor,type:a},t)},K=a(21),M=a.n(K),R=function(e){var t=Object(n.useState)("Feelin"),a=Object(u.a)(t,2),r=(a[0],a[1],Object(n.useState)(null)),c=Object(u.a)(r,2),o=(c[0],c[1],Object(n.useState)(!1)),s=Object(u.a)(o,2),i=(s[0],s[1],Object(n.useState)(null)),m=Object(u.a)(i,2);m[0],m[1],Object(n.useRef)();return l.a.createElement("div",{className:M.a.processors},l.a.createElement(J,{type:"reverb"},"[reverb]"),l.a.createElement(J,{type:"delay"},"[delay]"),l.a.createElement(J,{type:"compressor"},"[compressor]"))},V=a(22),H=a.n(V),q=function(e){return l.a.createElement("div",{className:H.a.controller},l.a.createElement(C,null),l.a.createElement(R,null))},B=function(e){return console.log(e),l.a.createElement("div",{className:"App"},l.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(50);c.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.e889048b.chunk.js.map