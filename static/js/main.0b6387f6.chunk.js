(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(t,e,a){t.exports=a(27)},21:function(t,e,a){},27:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),m=a(6),o=a(1),u=(a(21),function(t){var e=t.tabs,a=t.match;return r.a.createElement("div",{className:"tabs"},e.map((function(t){return r.a.createElement(m.b,{to:"tabs/".concat(t.id)},t.title)})),a.params.tabId&&r.a.createElement("p",null,e.find((function(t){return t.id===a.params.tabId})).content))}),i=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],b=function(){return r.a.createElement("h1",null,"Home")},s=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement(m.c,{to:"/",exact:!0},"Home"),r.a.createElement(m.c,{to:"/tabs"},"Tabs")),r.a.createElement(o.a,{path:"/",exact:!0,component:b}),r.a.createElement(o.a,{path:"/tabs/:tabId?",exact:!0,render:function(t){var e=t.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Tabs"),r.a.createElement(u,{tabs:i,match:e}))}}))};l.a.render(r.a.createElement(m.a,null,r.a.createElement(s,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0b6387f6.chunk.js.map