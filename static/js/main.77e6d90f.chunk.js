(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(7),s=a(6),c=a(3),o=(a(13),a(1)),l=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=a(0),m=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo,a="TodoInfo ".concat(t.completed?"TodoInfo--completed":"");return Object(u.jsxs)("article",{className:a,"data-id":t.id,children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(u.jsx)(m,{user:t.user},t.userId)]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})};var h=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(l),m=Object(c.a)(i,2),j=m[0],h=m[1],p=Object(o.useState)(0),O=Object(c.a)(p,2),f=O[0],x=O[1],v=Object(o.useState)(!1),y=Object(c.a)(v,2),S=y[0],N=y[1],I=function(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(s.a)(t))+1};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),N(!0),""!==a.trim()&&f){var t={id:I(j),title:a,completed:!1,userId:+f,user:null};h([].concat(Object(s.a)(j),[t])),n(""),x(0),N(!1)}},children:[Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{children:["Title: ",Object(u.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:a,onChange:function(e){var t=e.target.value.replace(/[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9\s]/g,"");n(t)}}),S&&""===a.trim()&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]})}),Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("label",{children:["User: ",Object(u.jsxs)("select",{"data-cy":"userSelect",value:f,onChange:function(e){return x(+e.target.value)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),d.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),S&&!f&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]})}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(b,{todos:j.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{user:(t=e.userId,d.find((function(e){return e.id===t}))||null)});var t}))})})]})};i.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.77e6d90f.chunk.js.map