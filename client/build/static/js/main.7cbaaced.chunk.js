(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{54:function(t,e,n){},56:function(t,e,n){},81:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(47),r=n.n(s),o=(n(54),n(18)),c=n(21),u=n.n(c),l=n(26),j=n(6),b=n(86),d=n(4),p=n(48),x=(n(56),n(23)),O=n.n(x),f=n(85),y={animationOne:{x:[-20,20],y:[0,-30],transition:{x:{yoyo:1/0,duration:.5},y:{yoyo:1/0,duration:.25,ease:"easeOut"}}},animationTwo:{y:[0,-40],x:0,transition:{y:{yoyo:1/0,duration:.25,ease:"easeOut"}}}},h={onHover:{scale:1.2,borderRadius:"15px",textShadow:"0px 0px 8px rgb(255 255 255)",transition:{duration:.3,yoyo:1/0}},animate:{x:0,opacity:1},trans:{duration:1,type:"spring",stiffness:300}},v=n(16),m=n(2),g=function(){var t=Object(a.useState)(""),e=Object(j.a)(t,2),n=e[0],i=e[1],s=Object(a.useState)(""),r=Object(j.a)(s,2),o=r[0],c=r[1],b=Object(a.useState)(""),d=Object(j.a)(b,2),p=(d[0],d[1]),x=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.post("/login",{email:n,password:o});case 3:"login-succesful"===t.sent.data&&(window.location="/"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),p(t.t0.message),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a.div,{variants:h,initial:{x:"-100vw",opacity:0},animate:"animate",children:Object(m.jsx)("input",{type:"email",placeholder:"enter email",onChange:function(t){return i(t.target.value)}})}),Object(m.jsx)(f.a.div,{variants:h,initial:{x:"100vw",opacity:0},animate:"animate",children:Object(m.jsx)("input",{type:"password",placeholder:"enter password",onChange:function(t){return c(t.target.value)}})}),Object(m.jsx)(f.a.button,{variants:h,initial:{x:"-100vw",opacity:0},animate:"animate",whileHover:"onHover",transition:{duration:1,type:"spring",stiffness:120},className:"answer",onClick:x,children:"Login"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h3",{children:"OR"}),Object(m.jsx)(v.b,{to:"/signup",children:Object(m.jsx)(f.a.button,{variants:h,initial:{x:"100vw",opacity:0},animate:"animate",whileHover:"onHover",transition:{duration:1,type:"spring",stiffness:120},className:"answer",onClick:x,children:"Sign Up"})})]})},w=function(){var t=Object(a.useState)(""),e=Object(j.a)(t,2),n=e[0],i=e[1],s=Object(a.useState)(""),r=Object(j.a)(s,2),o=r[0],c=r[1],b=Object(a.useState)(""),d=Object(j.a)(b,2),p=(d[0],d[1]),x=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.post("/signUp",{email:n,password:o});case 3:"signup-succesful"===t.sent.data&&(window.location="/"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),p(t.t0.message),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a.div,{variants:h,initial:{x:"-100vw",opacity:0},animate:"animate",children:Object(m.jsx)("input",{type:"email",placeholder:"enter email",onChange:function(t){return i(t.target.value)}})}),Object(m.jsx)(f.a.div,{variants:h,initial:{x:"100vw",opacity:0},animate:"animate",children:Object(m.jsx)("input",{type:"password",placeholder:"enter password",onChange:function(t){return c(t.target.value)}})}),Object(m.jsx)(f.a.button,{variants:h,initial:{x:"-100vw",opacity:0},animate:"animate",whileHover:"onHover",transition:{duration:1,type:"spring",stiffness:120},className:"answer",onClick:x,children:"Sign Up"})]})},C={onHover:{scale:1.2,borderRadius:"15px",textShadow:"0px 0px 8px rgb(255 255 255)",transition:{duration:.3,yoyo:1/0}},animate:{x:0,opacity:1},trans:{duration:1,type:"spring",stiffness:300}},k=function(t){var e=t.setQuestions,n=t.setFQuestions,i=t.setCategory,s=t.setDifficulty,r=t.category,o=t.setScore,c=t.setCurrentQuestion,u=t.setAnswered;return Object(a.useEffect)((function(){e([]),n([]),i(null),s(null),o(0),c(0),u(0)}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a.h2,{children:"Select Category"}),Object(m.jsx)(f.a.button,{variants:C,initial:{x:"-100vw",opacity:0},animate:"animate",whileHover:"onHover",transition:{duration:1,type:"spring",stiffness:300},style:{borderRadius:0},onClick:function(){i(20)},children:"Mythology"}),Object(m.jsx)(f.a.button,{initial:{x:"100vw",opacity:0},variants:C,animate:"animate",whileHover:"onHover",transition:{duration:1,type:"spring",stiffness:300},style:{borderRadius:0},onClick:function(){i(9)},children:"General"}),Object(m.jsx)(f.a.button,{variants:C,initial:{x:"-100vw",opacity:0},animate:"animate",whileHover:"onHover",transition:{duration:1,type:"spring",stiffness:300},style:{borderRadius:0},onClick:function(){i(21)},children:"Sports"}),Object(m.jsx)(f.a.button,{initial:{x:"100vw",opacity:0},variants:C,animate:"animate",whileHover:"onHover",transition:{duration:1,type:"spring",stiffness:300},style:{borderRadius:0},onClick:function(){i(27)},children:"Animals"}),Object(m.jsx)(f.a.button,{variants:C,initial:{x:"-100vw",opacity:0},animate:"animate",whileHover:"onHover",transition:{duration:1,type:"spring",stiffness:300},style:{borderRadius:0},onClick:function(){i(22)},children:"Geography"}),r?Object(m.jsx)(v.b,{to:"/difficulty",children:Object(m.jsx)(f.a.button,{variants:C,initial:{y:"100vw",opacity:0},animate:{y:0,opacity:1},whileHover:"onHover",transition:{duration:.2,type:"spring",stiffness:50},style:{backgroundColor:"rgba(44, 228, 75,0.8)"},children:"next"})}):null]})},H={onHover:{scale:1.2,borderRadius:"15px",textShadow:"0px 0px 8px rgb(255 255 255)",transition:{duration:.3,yoyo:1/0}},animate:{x:0,opacity:1},trans:{duration:1,type:"spring",stiffness:300}},S=function(t){var e=t.setDifficulty,n=t.difficulty;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"Select Difficulty"}),Object(m.jsx)(f.a.button,{variants:H,initial:{x:"-100vw",opacity:0},animate:"animate",whileHover:"onHover",transition:{duration:1,type:"spring",stiffness:300},style:{borderRadius:0},onClick:function(){e("easy")},children:"Easy"}),Object(m.jsx)(f.a.button,{variants:H,initial:{x:"100vw",opacity:0},animate:"animate",whileHover:"onHover",transition:{duration:1,type:"spring",stiffness:300},style:{borderRadius:0},onClick:function(){e("medium")},children:"Medium"}),Object(m.jsx)(f.a.button,{variants:H,initial:{x:"-100vw",opacity:0},animate:"animate",whileHover:"onHover",transition:{duration:1,type:"spring",stiffness:300},style:{borderRadius:0},onClick:function(){e("hard")},children:"Hard"}),n?Object(m.jsx)(v.b,{to:"/game",onClick:function(){},children:Object(m.jsxs)(f.a.button,{variants:H,initial:{y:"100vw",opacity:0},animate:{y:0,opacity:1},whileHover:{scale:1.2,textShadow:"0px 0px 8px rgb(255 255 255)"},transition:{duration:.2,type:"spring",stiffness:50},style:{backgroundColor:"rgba(44, 228, 75,0.8)"},children:[" ","next"]})}):null]})},R={animate:{scale:1.5,transition:{duration:.3,yoyo:1/0}},mover:{scale:1.2,borderRadius:"15px",textShadow:"0px 0px 8px rgb(255 255 255)",transition:{duration:.3,yoyo:1/0}}},Q=function(t){var e=t.score,n=t.logOut,a=Object(d.g)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a.div,{variants:R,initial:{y:"-100vh"},animate:{y:0},transition:{duration:5,type:"spring",stiffness:100},children:Object(m.jsxs)("h1",{children:["Score:",Object(m.jsx)("span",{children:Object(m.jsxs)("h1",{children:[e,"/10"]})})]})}),Object(m.jsx)(f.a.button,{variants:R,initial:{scale:.9},animate:"animate",whileHover:"onHover",transition:{duration:.2,type:"spring",stiffness:50},onClick:function(){a.push("/category")},children:"replay"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"OR"}),Object(m.jsx)("button",{onClick:n,children:"LOG OUT"})]})},F=n(87),E=function(){var t=Object(F.a)("animationOne","animationTwo"),e=Object(j.a)(t,2),n=e[0],a=e[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a.div,{className:"loader",variants:y,animate:n}),Object(m.jsx)("div",{onClick:function(){return a()},children:"get ready!!!"})]})},T=function(t){var e=t.getQuestions,n=t.currentQuestion,i=t.handleAnswerOptionClick,s=t.fquestions,r=t.difficulty,o=t.answered;return Object(a.useEffect)((function(){e()}),[r]),Object(a.useEffect)((function(){}),[n]),Object(m.jsxs)(m.Fragment,{children:[s[n]?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(f.a.p,{initial:{y:"-100vh",opacity:0},animate:{y:0,opacity:1},className:"question",children:["Question: ",s[n].questionText]}),Object(m.jsx)("div",{className:"answers",children:s[n].answerOptions.map((function(t){return Object(m.jsx)(f.a.button,{variants:h,initial:{x:"-100vw",opacity:0},animate:"animate",whileHover:"onHover",transition:{duration:1,type:"spring",stiffness:120},className:"answer",onClick:function(){i(t.isCorrect)},children:Object(m.jsx)("label",{children:t.answerText})},t.answerText)}))})]}):Object(m.jsx)(E,{}),10==o&&Object(m.jsx)(d.a,{to:"/result"})]})},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[];return t.forEach((function(t){var n=[],a=t.question;n=t.incorrect_answers.map((function(t){return{answerText:t,isCorrect:!1,choosen:!1}}));var i=Math.floor(4*Math.random());n.splice(i,0,{answerText:t.correct_answer,isCorrect:!0,choosen:!1});var s={questionText:a,answerOptions:n,anwered:!1};e.push(s)})),e},N=i.a.createContext();N.user="userContext";var A=N,D=n(83);var M=Object(D.a)((function(t){var e=t.cookies,n=Object(a.useState)(""),i=Object(j.a)(n,2),s=i[0],r=i[1],c=Object(a.useState)(null),x=Object(j.a)(c,2),f=x[0],y=x[1],h=Object(a.useState)(null),v=Object(j.a)(h,2),C=v[0],H=v[1],R=Object(a.useState)(0),F=Object(j.a)(R,2),E=F[0],N=F[1],D=Object(a.useState)([]),M=Object(j.a)(D,2),U=M[0],G=M[1],_=Object(a.useState)([]),J=Object(j.a)(_,2),L=J[0],B=J[1],I=Object(a.useState)(0),P=Object(j.a)(I,2),z=P[0],K=P[1],V=Object(a.useState)(!1),W=Object(j.a)(V,2),X=W[0],Y=W[1],Z=Object(a.useState)(0),$=Object(j.a)(Z,2),tt=$[0],et=$[1];Object(a.useEffect)((function(){20===E&&Y(!0)}),[E]);var nt=function(t){K(z+1),t&&E<=10&&et(tt+1);var e=E+1;e<U.length?N(e):Y(!0)};Object(a.useEffect)((function(){var t=q(U);B(t)}),[U]);var at=function(){var t=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://opentdb.com/api_token.php?command=request");case 2:return e=t.sent,t.next=5,O.a.get("https://opentdb.com/api.php?amount=10&category=".concat(f,"&difficulty=").concat(C,"&type=multiple&token=").concat(e.data.token));case 5:n=t.sent,Y(!0),G(n.data.results);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),it=function(){e.remove("token",{path:"/"}),window.location="/login"};Object(a.useEffect)((function(){try{var t=e.get("token"),n=Object(p.a)(t);r({user:n})}catch(a){console.log(a.message)}}));var st=Object(d.h)();return Object(m.jsx)(A.Provider,{value:{user:s},children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(d.d,{location:st,children:[Object(m.jsx)(d.b,{exact:!0,path:"/login",render:function(t){return s?Object(m.jsx)(d.a,{to:"/category"}):Object(m.jsx)(g,Object(o.a)({},t))}}),Object(m.jsx)(d.b,{exact:!0,path:"/signup",render:function(t){return s?Object(m.jsx)(d.a,{to:"/category"}):Object(m.jsx)(w,Object(o.a)({},t))}}),Object(m.jsx)(d.b,{exact:!0,path:"/category",render:function(t){return s?Object(m.jsx)(k,Object(o.a)(Object(o.a)({},t),{},{setCategory:y,category:f,setQuestions:G,setFQuestions:B,setDifficulty:H,setScore:et,score:tt,setCurrentQuestion:N,setAnswered:K})):Object(m.jsx)(d.a,{to:"/login"})}}),Object(m.jsx)(d.b,{exact:!0,path:"/difficulty",render:function(t){return s?Object(m.jsx)(S,Object(o.a)(Object(o.a)({},t),{},{setDifficulty:H,difficulty:C})):Object(m.jsx)(d.a,{to:"/login"})}}),Object(m.jsx)(d.b,{exact:!0,path:"/game",render:function(t){return s?Object(m.jsx)(T,Object(o.a)(Object(o.a)({},t),{},{getQuestions:at,setCategory:y,setDifficulty:H,category:f,difficulty:C,questions:U,currentQuestion:E,fquestions:L,showScore:X,score:tt,setCurrent:N,handleAnswerOptionClick:nt,setAnswered:K,answered:z})):Object(m.jsx)(d.a,{to:"/login"})}}),Object(m.jsx)(d.b,{exact:!0,path:"/result",render:function(t){return s?Object(m.jsx)(Q,Object(o.a)(Object(o.a)({},t),{},{score:tt,setQuestions:G,setFQuestions:B,logOut:it})):Object(m.jsx)(d.a,{to:"/login"})}}),Object(m.jsx)(d.a,{from:"/",to:"/login"})]},st.key)})})})})),U=n(84);r.a.render(Object(m.jsx)(U.a,{children:Object(m.jsx)(v.a,{children:Object(m.jsx)(M,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.7cbaaced.chunk.js.map