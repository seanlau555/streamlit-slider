(this["webpackJsonpstreamlit-discrete-slider"]=this["webpackJsonpstreamlit-discrete-slider"]||[]).push([[0],{38:function(e,t,a){e.exports=a(48)},48:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),l=a(32),s=a.n(l),c=a(0),i=a(1),u=a(2),o=a(3),p=a(27),d=a(59),b=a(58);function m(e){return e.map((function(e,t){return{value:t,label:e}}))}var v=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={value:0},e.render=function(){var t=e.props.args.options,a=e.props.width,n=Object(b.a)(d.a)({margin:"".concat(7,"px ").concat(20,"px"),width:a-40});return r.a.createElement(n,{"aria-label":"Restricted values",defaultValue:0,min:0,max:t.length-1,step:null,size:"small",value:e.state.value,valueLabelDisplay:"off",marks:m(t),onChange:function(a,n){var r=t[Number(n)];e.setState({value:n}),p.a.setComponentValue(r)},disabled:e.props.disabled})},e}return Object(c.a)(a)}(p.b),f=Object(p.c)(v);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[38,1,2]]]);