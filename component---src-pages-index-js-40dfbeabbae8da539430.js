"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{253:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(294),o=n(444),l=n(877);function a(){var e="";return e=(0,l.jl)()?"Hello "+(0,l.PR)().name:"You are not logged in",r.createElement("div",{style:{display:"flex",flex:"1",justifyContent:"space-between",borderBottom:"1px solid #d1c1e0"}},r.createElement("span",null,e),r.createElement("nav",null,r.createElement(o.rU,{to:"/"},"Home")," ",r.createElement(o.rU,{to:"/app/profile"},"Profile")," ",(0,l.jl)()?r.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),(0,l.kS)((function(){return(0,o.c4)("/app/login")}))}},"Logout"):null))}var u=function(e){var t=e.children;return r.createElement("div",{class:"layout"},r.createElement(a,null),t)}},251:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(294),o=n(444),l=n(877),a=n(785);function u(e){var t=e.todo,n=e.index,o=e.completeTodo;return r.createElement("div",{className:"todo",style:{textDecoration:t.isCompleted?"line-through":""}},t.text,r.createElement("div",null,r.createElement("button",{onClick:function(){return o(n)}},"Complete"),r.createElement("button",{onClick:function(){return removeTodo(n)}},"x")))}function c(e){var t=e.addTodo,n=r.useState(""),o=n[0],l=n[1];return r.createElement("form",{onSubmit:function(e){e.preventDefault(),o&&(t(o),l(""))}},r.createElement("input",{type:"text",className:"input",value:o,onChange:function(e){return l(e.target.value)}}))}var i=function(){var e=r.useState([{text:"Learn about React",isCompleted:!1},{text:"Meet friend for lunch",isCompleted:!1},{text:"Build really cool todo app",isCompleted:!1}]),t=e[0],n=e[1],o=function(e){var r=(0,a.Z)(t);r[e].isCompleted=!0,n(r)},l=function(e){var r=(0,a.Z)(t);r.splice(e,1),n(r)};return r.createElement("div",{className:"todo-list"},t.map((function(e,t){return r.createElement(u,{key:t,index:t,todo:e,completeTodo:o,removeTodo:l})})),r.createElement(c,{addTodo:function(e){var r=[].concat((0,a.Z)(t),[{text:e}]);n(r)}}))},m=n(253);function d(){return r.createElement(m.Z,null,r.createElement("div",{class:"home-window"},r.createElement("h1",null,"Hello ",(0,l.jl)()?(0,l.PR)().name:"world","!"),r.createElement("p",null,(0,l.jl)()?r.createElement(r.Fragment,null,"You are logged in, so check your"," ",r.createElement(o.rU,{to:"/app/profile"},"profile"),r.createElement(i,null)):r.createElement(r.Fragment,null,"You should ",r.createElement(o.rU,{to:"/app/login"},"log in")," to see restricted content"))))}},877:function(e,t,n){n.d(t,{PR:function(){return r},jc:function(){return l},jl:function(){return a},kS:function(){return u}});var r=function(){return"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},o=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},l=function(e){var t=e.username,n=e.password;return"Hanna"===t&&"hzr"===n&&o({username:"Hanna",name:"Hanna",email:"hannazrosenfeld@gmail.com"})},a=function(){return!!r().username},u=function(e){o({}),e()}}}]);
//# sourceMappingURL=component---src-pages-index-js-40dfbeabbae8da539430.js.map