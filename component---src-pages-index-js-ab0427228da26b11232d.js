"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{253:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(294),a=n(444),o=n(877);function l(){var e="";return e=(0,o.jl)()?"Hello "+(0,o.PR)().name:"You are not logged in",r.createElement("div",{style:{display:"flex",flex:"1",justifyContent:"space-between",borderBottom:"1px solid #d1c1e0"}},r.createElement("span",null,e),r.createElement("nav",null,r.createElement(a.rU,{to:"/"},"Home")," ",r.createElement(a.rU,{to:"/app/profile"},"Profile")," ",(0,o.jl)()?r.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),(0,o.kS)((function(){return(0,a.c4)("/app/login")}))}},"Logout"):null))}var u=function(e){var t=e.children;return r.createElement("div",{class:"layout"},r.createElement(l,null),t)}},251:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(294),a=n(444),o=n(877),l=n(785),u=[];function c(e){var t=e.todo,n=e.index,a=(e.completeTodo,e.removeTodo);return r.createElement("div",{className:"todo",style:{textDecoration:t.isCompleted?"line-through":""}},t.text,r.createElement("div",null,r.createElement("button",{onClick:function(){return a(n)}},"x")))}function i(e){var t=e.addTodo,n=r.useState(""),a=n[0],o=n[1];return r.createElement("form",{onSubmit:function(e){e.preventDefault(),a&&(t(a),o(""))}},r.createElement("input",{type:"text",className:"input",value:a,onChange:function(e){return o(e.target.value)}}))}var s=function(){var e=r.useState([{text:"Build Calculator"},{text:"Complete Front End Libraries Certificate"},{text:"Start learning about DataBase Languages and API's"}]),t=e[0],n=e[1],a=function(e){var r=(0,l.Z)(t);r.splice(e,1),n(r)};return r.createElement("div",{className:"app"},r.createElement("div",{className:"todo-list"},t.map((function(e,t){return r.createElement(c,{key:t,index:t,todo:e,removeTodo:a})})),r.createElement(i,{addTodo:function(e){var r=[].concat((0,l.Z)(t),[{text:e}]);u.push(r),n(r)}})))},m=n(253);function d(){return r.createElement(m.Z,null,r.createElement("div",{class:"home-window"},r.createElement("h1",null,"Hello ",(0,o.jl)()?(0,o.PR)().name:"world","!"),r.createElement("p",null,(0,o.jl)()?r.createElement(r.Fragment,null,"You are logged in, so check your"," ",r.createElement(a.rU,{to:"/app/profile"},"profile"),r.createElement(s,null)):r.createElement(r.Fragment,null,"You should ",r.createElement(a.rU,{to:"/app/login"},"log in")," to see restricted content"))))}},877:function(e,t,n){n.d(t,{PR:function(){return r},jc:function(){return o},jl:function(){return l},kS:function(){return u}});var r=function(){return"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},a=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},o=function(e){var t=e.username,n=e.password;return"Hanna"===t&&"hzr"===n&&a({username:"Hanna",name:"Hanna",email:"hannazrosenfeld@gmail.com"})},l=function(){return!!r().username},u=function(e){a({}),e()}}}]);
//# sourceMappingURL=component---src-pages-index-js-ab0427228da26b11232d.js.map