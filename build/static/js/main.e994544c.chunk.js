(this.webpackJsonpkeymaster=this.webpackJsonpkeymaster||[]).push([[0],{12:function(e,t,a){e.exports=a(36)},17:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),i=(a(17),a(3)),s=a(4),l=a(6),m=a(5),u=(a(18),a(35),["C","C#","D","D#","E","F","F#","G","G#","A","Bb","B"]),d=[{id:"major",name:"Major Scale",pattern:[2,2,1,2,2,2,1],intervals:["1","2","3","4","5","6","7","8"]},{id:"natural_minor",name:"Natural Minor Scale",pattern:[2,1,2,2,1,2,2],intervals:["1","2","b3","4","5","b6","b7","8"]},{id:"harmonic_minor",name:"Harmonic Minor Scale",pattern:[2,1,2,2,1,3,1],intervals:["1","2","b3","4","5","b6","7","8"]},{id:"melodic_minor",name:"Melodic Minor Scale",pattern:[2,1,2,2,2,2,1],intervals:["1","2","b3","4","5","6","7","8"]},{id:"pentatonic_major",name:"Pentatonic Major Scale",pattern:[2,2,3,2,3],intervals:["1","2","3","5","6","8"]},{id:"pentatonic_minor",name:"Pentatonic Minor Scale",pattern:[3,2,2,3,2],intervals:["1","b3","4","5","b7","8"]},{id:"blues",name:"Blues Scale",pattern:[3,2,1,1,3,2],intervals:["1","2","b3","4","b5","6","b7","8"]}],p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={rootNote:"C",scale:d.find((function(e){return"major"===e.id}))},n}return Object(s.a)(a,[{key:"setRootNote",value:function(e){this.setState({rootNote:e})}},{key:"setScale",value:function(e){this.setState({scale:d.find((function(t){return t.id===e}))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"KeyMaster"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"rootNotes"},u.map((function(t){var a=t===e.state.rootNote?"active":"";return t.length>=2&&(a+=" sharpflat"),r.a.createElement("button",{className:a,onClick:function(){return e.setRootNote(t)},key:t},t)}))),r.a.createElement("div",{className:"scalesList"},d.map((function(t){return r.a.createElement("button",{className:t.id===e.state.scale.id?"active":"",onClick:function(){return e.setScale(t.id)},key:t.id},t.name)})))),r.a.createElement("div",{className:"App-body"},r.a.createElement("h1",null,this.state.rootNote," ",this.state.scale.name),r.a.createElement(v,{rootNote:this.state.rootNote,scale:this.state.scale})))}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"getNotes",value:function(e,t){for(var a=[],n=t.pattern,r=u.indexOf(e),o=0;o<=n.length;o++)r>=u.length&&(r-=u.length),a.push(u[r]),r+=n[o];return a}},{key:"render",value:function(){var e=this,t=this.getNotes(this.props.rootNote,this.props.scale);return r.a.createElement("div",{className:"scale"},t.map((function(t,a){return r.a.createElement("div",{className:"notebox"},r.a.createElement("strong",null,e.props.scale.intervals[a]),r.a.createElement("br",null),r.a.createElement("div",{className:"note"},t))})))}}]),a}(n.Component);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.e994544c.chunk.js.map