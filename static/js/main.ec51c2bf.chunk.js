(this.webpackJsonpreapp=this.webpackJsonpreapp||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(6),s=n.n(r),a=(n(12),n(7)),j=n(5),o=n(0),l=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"todo_style",children:[Object(o.jsx)("i",{className:"fa fa-times","aria-hidden":"true",onClick:function(){e.onSelect(e.id)}}),Object(o.jsx)("li",{children:e.text})]})})},d=function(){var e=Object(c.useState)("buy apple"),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),s=Object(j.a)(r,2),d=s[0],u=s[1],b=function(e){console.log("deleted"),u((function(t){return t.filter((function(t,n){return n!==e}))}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main_div",children:Object(o.jsxs)("div",{className:"center_div",children:[Object(o.jsx)("br",{}),Object(o.jsx)("h1",{children:"ToDo List"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"name",placeholder:"Add a items",onChange:function(e){i(e.target.value)},value:n}),Object(o.jsx)("button",{onClick:function(){u((function(e){return[].concat(Object(a.a)(e),[n])})),i("")},children:" + "}),Object(o.jsx)("ol",{children:d.map((function(e,t){return Object(o.jsx)(l,{id:t,text:e,onSelect:b},t)}))})]})})})};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ec51c2bf.chunk.js.map