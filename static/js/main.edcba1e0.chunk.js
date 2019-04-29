(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(67)},49:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),s=(a(48),a(49),a(17)),o=a(18),m=a(8),i=a(9),u=a(12),d=a(10),h=a(7),v=a(13),E=a(68),w=a(69),p=a(70),b=a(71),O=a(72),f=a(37),g=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).toggle=a.toggle.bind(Object(h.a)(a)),a.state={isOpen:!1},a}return Object(v.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E.a,{color:"dark",expand:"md",className:"shadow-lg"},l.a.createElement(w.a,null,l.a.createElement(s.Link,{to:"/"},"HeadsUP")),l.a.createElement(p.a,{onClick:this.toggle}),l.a.createElement(b.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(f.LinkContainer,{to:"/levels"},l.a.createElement(O.a,null,"levels")))))}}]),t}(n.Component),N=a(22),j=a(73),y=a(74),A=a(75),S=a(76),k=a(77),C=a(78),T=a(79),x=a(11),P=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={teamOne:"",teamTwo:""},a.handleChange=function(e){a.setState(Object(N.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){a.props.teamNames(a.state),console.log(a.props),a.props.history.push("levels")},a}return Object(v.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"section h-100"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3"}),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(j.a,{onSubmit:this.handleSubmit},l.a.createElement(y.a,null,l.a.createElement(A.a,{className:"my-3"},l.a.createElement(S.a,{className:"shadow-lg"},l.a.createElement(k.a,{for:"teamOne"},"Opponent One"),l.a.createElement(C.a,{type:"text",onChange:this.handleChange,className:"mb-4",name:"teamOne",id:"teamOne",placeholder:"Enter name"}),l.a.createElement(k.a,{for:"teamTwo"},"Opponent Two"),l.a.createElement(C.a,{type:"text",onChange:this.handleChange,name:"teamTwo",id:"teamTwo",placeholder:"Enter name"}),l.a.createElement(T.a,{color:"success",className:"float-right my-2"},"Level Select >>")))))),l.a.createElement("div",{className:"col-sm-3"}))))}}]),t}(n.Component),M=Object(x.b)(null,function(e){return{teamNames:function(t){return e((a=t,function(e,t){e({type:"ADD_NAMES",names:a})}));var a}}})(P),q=[{id:0,name:"Oceania/Pacific",desc:"A map of Oceania and Antarctica...",path:"./maps/oceaniaMap.png",questions:[{letter:"a",answer:"Marshall Islands"},{letter:"b",answer:"Palau"},{letter:"c",answer:"Federated States of Micronesia"},{letter:"d",answer:"Papua New Guinea"},{letter:"e",answer:"Solomon Islands"},{letter:"f",answer:"Samoa"},{letter:"g",answer:"Vanuatu"},{letter:"h",answer:"Fiji"},{letter:"i",answer:"Australia"},{letter:"j",answer:"Tonga"},{letter:"k",answer:"New Zealand"}]},{id:1,name:"Monsoon Asia",desc:"A map of Monsoon Asia...",questions:[{letter:"a",answer:"Answer"},{letter:"b",answer:"Answer1"},{letter:"c",answer:"Answer2"}]},{id:2,name:"SW Asia",desc:"A map of Monsoon Asia...",questions:[{letter:"a",answer:"Answer"},{letter:"b",answer:"Answer1"},{letter:"c",answer:"Answer2"}]}],L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={levelChoice:""},a.handleSubmit=function(e){a.props.levelPicker(e.target.id),a.props.history.push("fight")},a}return Object(v.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"section h-100"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},q.map(function(t){return l.a.createElement("div",{className:"col-sm-4"},l.a.createElement(A.a,{className:"my-3"},l.a.createElement(S.a,{className:"shadow-lg"},l.a.createElement(j.a,{onSubmit:e.handleSubmit},l.a.createElement(y.a,null,l.a.createElement("h4",null,t.name),l.a.createElement(T.a,{color:"success",onClick:e.handleSubmit,id:t.id,className:"my-2"},"Play This Map"))))))}))))}}]),t}(n.Component),Q=Object(x.b)(function(e){return{state:e}},function(e){return{levelPicker:function(t){return e(function(e){return function(t,a){t({type:"PICK_LEVEL",level:e})}}(t))}}})(L),D=function(e){var t=e.team;return l.a.createElement(A.a,{className:"bg-dark text-white text-center shadow-lg"},l.a.createElement(S.a,null,l.a.createElement("h3",{className:"card-title"},t)))},I=function(e){var t=e.score;return l.a.createElement(A.a,{className:"bg-dark text-white text-center shadow-lg"},l.a.createElement(S.a,null,l.a.createElement("h1",{className:"card-title"},t)))},_=function(e){function t(e){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).call(this,e))}return Object(v.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){if(null==this.props.state.level.levelChoice)return l.a.createElement(o.c,{to:"/"});return l.a.createElement(A.a,{className:"bg-dark text-white text-center shadow-lg"},l.a.createElement(S.a,null,l.a.createElement("img",{className:"img img-responsive",style:{maxWidth:600},src:this.props.state.level.levelObject.path,alt:this.props.state.level.levelObject.name})))}}]),t}(n.Component),R=Object(x.b)(function(e){return{state:e}},null)(_),W=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={userAnswer:"",currentQuestion:0},a.handleClick=function(e){a.state.userAnswer==a.props.state.level.levelObject.questions[a.state.currentQuestion].answer&&(a.state.currentQuestion+1<a.props.state.level.levelObject.questions.length?a.setState({currentQuestion:a.state.currentQuestion+1,userAnswer:""}):(a.setState({currentQuestion:0,userAnswer:""}),a.props.history.push("/")),a.props.addPoints(e.target.id))},a.handleChange=function(e){a.setState(Object(N.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){a.props.history.push("levels")},a.answerRef=l.a.createRef(),a}return Object(v.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.state,t=e.teams,a=e.level;return null==a.levelChoice?l.a.createElement(o.c,{to:"/"}):l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 text-white"},l.a.createElement("p",null,"Q: ",a.levelObject.questions[this.state.currentQuestion].letter,"?"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(A.a,{className:"my-1 shadow-lg bg-dark text-white"},l.a.createElement(S.a,null,l.a.createElement(C.a,{type:"text",onChange:this.handleChange,ref:this.answerRef,className:"mb-4",name:"userAnswer",id:"userAnswer",placeholder:"Answer...",value:this.state.userAnswer}),l.a.createElement(T.a,{color:"success",id:"teamOneScore",onClick:this.handleClick,className:"float-left mx-2"},t.teamOne,"'s Answer"),l.a.createElement(T.a,{color:"success",id:"teamTwoScore",onClick:this.handleClick,className:"float-right mx-2"},t.teamTwo,"'s Answer"))))))}}]),t}(n.Component),B=Object(o.k)(Object(x.b)(function(e){return{state:e}},function(e){return{addPoints:function(t){return e(function(e){return function(t,a){t({type:"ADD_POINTS",team:e})}}(t))}}})(W)),V=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={scoreOne:0,scoreTwo:0},a.handleSubmit=function(e){console.log(a.state.scoreOne),console.log(a.state.scoreTwo)},a}return Object(v.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.state,t=e.teams,a=e.scores;return l.a.createElement("div",{className:"section h-100"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row my-3"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(D,{team:t.teamOne}))),l.a.createElement("div",{className:"row my-2"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(I,{score:a.teamOneScore})))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(R,null)))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(D,{team:t.teamTwo}))),l.a.createElement("div",{className:"row my-2"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement(I,{score:a.teamTwoScore}))))),l.a.createElement("div",{className:"row my-3"},l.a.createElement("div",{className:"col-sm-3"}),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(B,null)),l.a.createElement("div",{className:"col-sm-3"}))))}}]),t}(n.Component),F=Object(x.b)(function(e){return{state:e}},null)(V);var J=function(){return l.a.createElement(s.BrowserRouter,null,l.a.createElement("div",{className:"App backs"},l.a.createElement(g,null),l.a.createElement(o.d,{exact:!0,path:"/",component:M}),l.a.createElement(o.d,{exact:!0,path:"/levels",component:Q}),l.a.createElement(o.d,{exact:!0,path:"/fight",component:F})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=a(20),G=a(42),H=a(14),U={teamOne:null,teamTwo:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NAMES":return console.log("Created teams",t.names),Object(H.a)({},e,{teamOne:t.names.teamOne,teamTwo:t.names.teamTwo});default:return e}},$={levelObject:null,levelChoice:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PICK_LEVEL":return q[t.level].questions.sort(function(e,t){return.5-Math.random()}),console.log(q[t.level].questions),console.log("Level chosen ".concat(q[t.level].name)),Object(H.a)({},e,{levelObject:q[t.level],levelChoice:q[t.level].name});default:return e}},X={teamOneScore:0,teamTwoScore:0},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;return"teamOneScore"==t.team?(console.log("Added points to  ".concat(t.team)),Object(H.a)({},e,{teamOneScore:e.teamOneScore+1})):"teamTwoScore"==t.team?(console.log("Added points to  ".concat(t.team)),Object(H.a)({},e,{teamTwoScore:e.teamTwoScore+1})):e},ee=Object(K.c)({teams:Z,level:z,scores:Y}),te=Object(K.d)(ee,Object(K.a)(G.a));c.a.render(l.a.createElement(x.a,{store:te},l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.edcba1e0.chunk.js.map