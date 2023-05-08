(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{122:function(e,t,a){e.exports={Settings:"Settings_Settings__2ivmw",Message:"Settings_Message__1s87w"}},123:function(e,t,a){e.exports={FormItem:"FormItem_FormItem__16vrp"}},124:function(e,t,a){e.exports={Button:"Button_Button__1bbfY"}},131:function(e,t,a){e.exports={Home:"Home_Home__1QBLl"}},136:function(e,t,a){e.exports={AuthApp:"AuthApp_AuthApp__SOnj2"}},142:function(e,t,a){},143:function(e,t,a){},24:function(e,t,a){e.exports={MainSection:"ReserveMainSection_MainSection__2c0vN",Title:"ReserveMainSection_Title__11okt",FormRow:"ReserveMainSection_FormRow__2zCQt",Input:"ReserveMainSection_Input__3-O5i",Button:"ReserveMainSection_Button__1Kjn_","react-datepicker-wrapper":"ReserveMainSection_react-datepicker-wrapper__3D-Lt","react-datepicker__input-container":"ReserveMainSection_react-datepicker__input-container__3ICz6"}},27:function(e,t,a){e.exports={PopUpBackground:"PopUp_PopUpBackground__2yEHv",PopUp:"PopUp_PopUp__3T-dM",Title:"PopUp_Title__3Hzye",ConfirmationInfo:"PopUp_ConfirmationInfo__1ewfJ",Buttons:"PopUp_Buttons__2i-Is",Button:"PopUp_Button__2HQde",ButtonGreen:"PopUp_ButtonGreen__1vwKA",ButtonRed:"PopUp_ButtonRed__D3V7U"}},282:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(28),i=a.n(c),r=a(21),o=(a(142),a(143),a(67)),l=a.n(o),d=a(9),j=a(122),u=a.n(j),b=a(6),h=a(54),p=a.n(h),m=a(123),O=a.n(m),x=a(2),g=function(e){var t=e.type,a=e.label,n=e.placeholder,s=e.value,c=e.onChange;return Object(x.jsxs)("div",{className:O.a.FormItem,children:[Object(x.jsxs)("label",{children:[" ",a," "]}),Object(x.jsx)("input",{placeholder:n,type:t,value:s,onChange:c})]})},v=a(124),f=a.n(v),_=function(e){var t=e.title,a=e.onClick,n=e.style;return Object(x.jsx)("div",{style:n,className:f.a.Button,children:Object(x.jsx)("input",{type:"submit",value:t,onClick:a})})},A=a(68),y=a.n(A),w=function(e){var t=e.error,a=e.sign;return Object(x.jsx)("div",{className:y.a.AlertMessage,children:Object(x.jsx)("p",{id:a?y.a.positive:y.a.negative,children:t})})},N=a(22),S=a.n(N),I=a(53),U=function(){return Object(I.b)()},B=I.c,C=a(41),P=Object(C.b)({name:"user",initialState:{username:"",auth:!1,token:""},reducers:{updateUsername:function(e,t){e.username=t.payload},updateAuth:function(e,t){e.auth=t.payload},updateToken:function(e,t){e.token=t.payload},clearUserStates:function(e,t){var a=e;a.username="",a.auth="",a.token=""}}}),k=P.actions,E=k.updateUsername,M=k.updateAuth,T=k.updateToken,F=k.clearUserStates,H=P.reducer,D=function(){var e=B((function(e){return e.user})),t=Object(n.useState)(""),a=Object(b.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)(null),r=Object(b.a)(i,2),o=r[0],l=r[1],d=Object(n.useState)(B((function(e){return e.user.username}))),j=Object(b.a)(d,2),u=j[0],h=j[1],m=Object(n.useState)(B((function(e){return e.user.username}))),O=Object(b.a)(m,1)[0],v=Object(n.useState)(""),f=Object(b.a)(v,2),A=f[0],y=f[1],N=Object(n.useState)(""),I=Object(b.a)(N,2),C=I[0],P=I[1],k=U();return Object(x.jsxs)("div",{className:p.a.Form,children:[Object(x.jsxs)("div",{className:p.a.FormSection,children:[Object(x.jsx)(g,{type:"text",label:"Username",placeholder:"example@gmail.com",value:u,onChange:function(e){return h(e.target.value)}}),Object(x.jsx)(_,{title:"Update Username",onClick:function(t){if(0===u.length)return c("No information was provided. Username not updated."),void l(!1);S.a.post("http://127.0.0.1:5000/api/v1/user/updateusername",{newUsername:u,token:e.token}).then((function(e){if(e){var t=e.status,a=e.data;if([200,201].includes(t)&&a.username)return k(E(a.username)),c("Username updated."),void l(!0);c("Username not updated."),l(!1)}})).catch((function(e){console.log(e),c("Username not updated."),l(!1)}))}})]}),Object(x.jsxs)("div",{className:p.a.FormSection,children:[Object(x.jsx)(g,{type:"password",label:"Password",placeholder:"Current Password",value:A,onChange:function(e){return y(e.target.value)}}),Object(x.jsx)(g,{type:"password",label:"New Password",placeholder:"New Password",value:C,onChange:function(e){return P(e.target.value)}}),Object(x.jsx)(_,{title:"Change Password",onClick:function(e){S.a.post("http://127.0.0.1:5000/api/v1/user/updatepassword",{username:O,password:A,newPassword:C}).then((function(e){if(e){var t=e.status,a=e.data;if([200,201].includes(t)&&a.message)return c(a.message),l(!0),y(""),void P("")}})).catch((function(e){var t=e.response;c(t.data+" ("+t.statusText+")"),l(!1)}))}})]}),Object(x.jsx)("div",{className:p.a.FormSection,children:Object(x.jsx)(w,{error:s,sign:o})})]})},L=function(){return Object(x.jsx)("div",{className:u.a.Settings,children:Object(x.jsx)(D,{})})},R=a(46),Y=a.n(R),Q=a(128),z=a(129),Z=a(130),q=a(85),X=a.n(q),G=function(e){var t=e.logo,a=e.name;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:X.a.Image,children:Object(x.jsx)("img",{src:t,alt:"Logo"})}),Object(x.jsx)("div",{className:X.a.Name,children:Object(x.jsx)("p",{children:a})})]})},V=a(86),J=a.n(V),K=function(e){var t=e.ItemIcon,a=e.linkTo,n=e.text;return Object(x.jsxs)(r.b,{to:a,className:J.a.Item,children:[Object(x.jsx)(t,{className:J.a.Icon}),Object(x.jsx)("p",{children:n})]})},W=a(87),$=a.n(W),ee=a(127),te=a(55),ae=a.n(te),ne=Object(C.b)({name:"user",initialState:{firstName:"",lastName:"",startDate:"",endDate:"",peopleCount:1},reducers:{updateFirstName:function(e,t){e.firstName=t.payload},updateLastName:function(e,t){e.lastName=t.payload},updateStartDate:function(e,t){e.startDate=t.payload},updateEndDate:function(e,t){e.endDate=t.payload},updatePeopleCount:function(e,t){e.peopleCount=t.payload},clearReservationStates:function(e,t){var a=e;a.firstName="",a.lastName="",a.startDate="",a.endDate="",a.peopleCount=1}}}),se=ne.actions,ce=se.updateFirstName,ie=se.updateLastName,re=se.updateStartDate,oe=se.updateEndDate,le=se.updatePeopleCount,de=se.clearReservationStates,je=ne.reducer,ue=function(e){var t=e.avatar,a=e.name,n=e.email,s=U(),c=function(){var e=Object(ee.a)($.a.mark((function e(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(de()),s(F());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:ae.a.Avatar,children:Object(x.jsx)("img",{src:t,alt:"Avatar"})}),Object(x.jsxs)("div",{className:ae.a.Info,children:[Object(x.jsx)("p",{children:a}),Object(x.jsx)("p",{id:ae.a.email,children:n}),Object(x.jsx)("div",{className:ae.a.LogOut,children:Object(x.jsx)(_,{title:"logout",onClick:c})})]})]})},be=function(){var e=B((function(e){return e.user.username}));return Object(x.jsxs)("div",{className:Y.a.NavBar,children:[Object(x.jsx)("div",{className:Y.a.Company,children:Object(x.jsx)(G,{logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALCSURBVHgBxVbdcdpAEP5O4OfQgUkFwRUEPWYyCXYFQAUOFWBXYFOBSAWG/EwepVQQXIGVDuRnG87fHZI4nU9Cwp7xNwOn+9tvb3dv9wReAeFP2dcfHhL/s1jtW9/GCxHeyC4kQt1ZI+K/v2+PhzfAm5C+yLzhb9mjSftoCIEDEP6QIzZT/rqO6QgtTKoC6hmpikS5wameFFjxJAv/TCQGYcBmhH0QuPC/iEv3lEHGKAwc2if0/ILaX+IB5+x/Q31M/K/i2kka/pJDbDBHc8RU9DulqLbLdmgpndBS701LaVJ9z1r4x+8OmiHBEU78TyLOBrQsDzck7xnrrtlf5j0mEBEupRo8L2gvMNFCN/SdwEe4AyYTMlenpf8iTbx1U4hyRIKBoRb086E1tT/bRR6179ASKrCmleSG/yhTNiLlxtJrpE+xPf3QMZ37zyJV/lzkPYn/bc7eC0twZionBI5LZpRFRrRMZI2veJCxOdAW0El6YGgSUNMZ1B3NhElt1gHbPqogMZQeeqI4dmsvE6nP7tA8euvhiCY3IlzB03dIYIwDQffcVkzObEJNqv7oQ5VxTrB1ehXs+Vi0dEp07Yv8gXBmr7y0pQk6sQjm6W9Ca/g6+xgQHgWrfdY4+38ZPKXFvLK02VHHAJsWZD9glqq+INEuwQh8qJJrF/HY+O7kb58dzH6cJZH0ikV79paQ0ixWPwj/MJ8izUzlCiosrb1T1CLdQKUx069dlrOQVShAy6qhEveF/lr73tzbQx3StATZhberUx9wZY0fO/aar4VOZiUbzjzLynPBmVLz5DAufloi7wqKlOTx8uRe/Q7KEDO1Lyn6Hb9VJdr5neO8p6eNSHNy9eLbQD2oM4FXqJMyHemvNukzJbYWCPYsG9O087LJxo9tLYx1E8V7mSFSmauKUOGgd28GHTzt1OePrJvWA6wMTxptEJePy6RSAAAAAElFTkSuQmCC",name:"The Little Eatery"})}),Object(x.jsxs)("div",{className:Y.a.Items,children:[Object(x.jsx)(K,{ItemIcon:Q.a,linkTo:"/home",text:"Home"}),Object(x.jsx)(K,{ItemIcon:z.a,linkTo:"/booking",text:"Reserve Table"})]}),Object(x.jsx)("div",{className:Y.a.BottomItems,children:Object(x.jsx)(K,{ItemIcon:Z.a,linkTo:"/settings",text:"Settings"})}),Object(x.jsx)("div",{className:Y.a.User,children:Object(x.jsx)(ue,{avatar:"data:image/png;base64,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",name:"Brooklyn Simmons",email:e})})]})},he=a(131),pe=a.n(he),me=function(){return Object(x.jsx)("div",{className:pe.a.Home,children:"Home"})},Oe=a(37),xe=a.n(Oe),ge=a(14),ve=a(19),fe=a.n(ve),_e=a(13),Ae=function(e){var t=e.id[0],a=e.id[1],n=e.x,s=e.y,c=e.width,i=e.height,r=e.handlePopUp,o=e.handleHovering,l=function(e){!a&&r(!0,t)},d=function(e){"mouseenter"===e.type?o(a?"not-allowed":"pointer"):"mouseleave"===e.type&&o("default")},j={x:n,y:s,width:c,height:i,fill:a?"rgb(164, 54, 4, .2)":"#a43604",shadowColor:"black",shadowOffsetX:2,shadowOffsetY:2,shadowOpacity:.5,shadowBlur:4},u={x:j.x+20,y:j.y-18,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},b={x:j.x+80,y:j.y-18,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},h={x:j.x+140,y:j.y-18,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},p={x:j.x-20,y:j.y+43,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},m={x:j.x+180,y:j.y+43,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},O={x:j.x+20,y:j.y+113,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},g={x:j.x+80,y:j.y+113,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},v={x:j.x+140,y:j.y+113,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},f={text:"8",fontSize:40,x:j.x+j.width-j.width/3+-34,y:j.y+j.height-j.height/3+-34,fill:a?"rgb(255, 255, 255, .2)":"#FFF",fontFamily:"'Poppins', sans-serif"};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ge.c,Object(_e.a)(Object(_e.a)({},j),{},{onClick:l,onMouseEnter:d,onMouseLeave:d})),Object(x.jsx)(ge.a,Object(_e.a)({},u)),Object(x.jsx)(ge.a,Object(_e.a)({},b)),Object(x.jsx)(ge.a,Object(_e.a)({},h)),Object(x.jsx)(ge.a,Object(_e.a)({},p)),Object(x.jsx)(ge.a,Object(_e.a)({},m)),Object(x.jsx)(ge.a,Object(_e.a)({},O)),Object(x.jsx)(ge.a,Object(_e.a)({},g)),Object(x.jsx)(ge.a,Object(_e.a)({},v)),Object(x.jsx)(ge.e,Object(_e.a)(Object(_e.a)({},f),{},{onClick:l,onMouseEnter:d,onMouseLeave:d}))]})},ye=function(e){var t=e.x,a=160,n=Array.from(e.ids),s=function(e){return 200*e+50+40};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Ae,{id:n[0],x:t+a-80,y:s(0),width:a,height:95,handleHovering:e.handleHovering,handlePopUp:e.handlePopUp}),Object(x.jsx)(Ae,{id:n[1],x:t+a-80,y:s(1),width:a,height:95,handleHovering:e.handleHovering,handlePopUp:e.handlePopUp}),Object(x.jsx)(Ae,{id:n[2],x:t+a-80,y:s(2),width:a,height:95,handleHovering:e.handleHovering,handlePopUp:e.handlePopUp}),Object(x.jsx)(Ae,{id:n[3],x:t+a-80,y:s(3),width:a,height:95,handleHovering:e.handleHovering,handlePopUp:e.handlePopUp})]})},we=function(e){var t=e.id[0],a=e.id[1],n=e.x,s=e.y,c=e.width,i=e.height,r=e.handlePopUp,o=e.handleHovering,l=function(e){!a&&r(!0,t)},d=function(e){"mouseenter"===e.type?o(a?"not-allowed":"pointer"):"mouseleave"===e.type&&o("default")},j={x:n,y:s,width:c,height:i,fill:a?"rgb(164, 54, 4, .2)":"#a43604",shadowColor:"black",shadowOffsetX:2,shadowOffsetY:2,shadowOpacity:.5,shadowBlur:4},u={x:j.x+70,y:j.y-20,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},b={x:j.x+160,y:j.y+38,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},h={x:j.x-20,y:j.y+38,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},p={x:j.x+70,y:j.y+90,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},m={text:"4",fontSize:40,x:j.x+j.width-j.width/3+-35,y:j.y+j.height-j.height/2+-15,fill:"#FFF",fontFamily:"'Poppins', sans-serif"};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ge.c,Object(_e.a)(Object(_e.a)({},j),{},{onClick:l,onMouseEnter:d,onMouseLeave:d})),Object(x.jsx)(ge.a,Object(_e.a)({},u)),Object(x.jsx)(ge.a,Object(_e.a)({},b)),Object(x.jsx)(ge.a,Object(_e.a)({},h)),Object(x.jsx)(ge.a,Object(_e.a)({},p)),Object(x.jsx)(ge.e,Object(_e.a)(Object(_e.a)({},m),{},{onClick:l,onMouseEnter:d,onMouseLeave:d}))]})},Ne=function(e){var t=e.x,a=140,n=Array.from(e.ids),s=function(e){return 200*e+50+40};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(we,{id:n[0],x:t,y:s(0),width:a,height:70,handleHovering:e.handleHovering,handlePopUp:e.handlePopUp}),Object(x.jsx)(we,{id:n[1],x:t,y:s(1),width:a,height:70,handleHovering:e.handleHovering,handlePopUp:e.handlePopUp}),Object(x.jsx)(we,{id:n[2],x:t,y:s(2),width:a,height:70,handleHovering:e.handleHovering,handlePopUp:e.handlePopUp}),Object(x.jsx)(we,{id:n[3],x:t,y:s(3),width:a,height:70,handleHovering:e.handleHovering,handlePopUp:e.handlePopUp})]})},Se=function(e){var t=e.id[0],a=e.id[1],n=e.x,s=e.y,c=e.width,i=e.height,r=e.handlePopUp,o=e.handleHovering,l=function(e){!a&&r(!0,t)},d=function(e){"mouseenter"===e.type?o(a?"not-allowed":"pointer"):"mouseleave"===e.type&&o("default")},j={x:n,y:s,width:c,height:i,fill:a?"rgb(164, 54, 4, .2)":"#a43604",shadowColor:"black",shadowOffsetX:2,shadowOffsetY:2,shadowOpacity:.5,shadowBlur:4},u=j.x,b=j.y+j.height-j.height/4,h={x:j.x+42,y:j.y-23,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},p={x:j.x+42,y:j.y+143,width:30,height:30,fill:a?"rgb(22, 31, 33, 0.2)":"rgb(22, 31, 33, 0.5)"},m={text:"2",fontSize:40,x:u+30,y:b+-50,fill:"#FFF",fontFamily:"'Poppins', sans-serif"};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ge.c,Object(_e.a)(Object(_e.a)({},j),{},{onClick:l,onMouseEnter:d,onMouseLeave:d})),Object(x.jsx)(ge.a,Object(_e.a)({},h)),Object(x.jsx)(ge.a,Object(_e.a)({},p)),Object(x.jsx)(ge.e,Object(_e.a)(Object(_e.a)({},m),{},{onClick:l,onMouseEnter:d,onMouseLeave:d}))]})},Ie=function(e){var t=e.x,a=Array.from(e.ids),n=function(e){return 275*e+50+40};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Se,{id:a[0],x:t,y:n(0),width:80,height:120,handleHovering:e.handleHovering,handlePopUp:e.handlePopUp}),Object(x.jsx)(Se,{id:a[1],x:t,y:n(1),width:80,height:120,handleHovering:e.handleHovering,handlePopUp:e.handlePopUp}),Object(x.jsx)(Se,{id:a[2],x:t,y:n(2),width:80,height:120,handleHovering:e.handleHovering,handlePopUp:e.handlePopUp})]})},Ue=a(27),Be=a.n(Ue),Ce=function(e){var t=e.handlePopUp,a=e.handleReservation,n=function(e){e?a():t(!1)};return Object(x.jsx)("div",{className:Be.a.PopUpBackground,children:Object(x.jsxs)("div",{className:Be.a.PopUp,children:[Object(x.jsx)("div",{className:Be.a.Title,children:Object(x.jsx)("h4",{children:"CONFIRM TABLE RESERVATION?"})}),Object(x.jsx)("div",{className:Be.a.ConfirmationInfo,children:Object(x.jsxs)("div",{className:Be.a.ConfirmationInfo,children:[Object(x.jsxs)("p",{children:["FROM: ",Object(x.jsx)("span",{children:fe()(e.from).format("MMMM Do YYYY, h:mm:ss a")})]}),Object(x.jsxs)("p",{children:["TO: ",Object(x.jsx)("span",{children:fe()(e.to).format("MMMM Do YYYY, h:mm:ss a")})]}),Object(x.jsxs)("p",{children:["FIRST NAME : ",Object(x.jsx)("span",{children:e.first_name})]}),Object(x.jsxs)("p",{children:["LAST NAME : ",Object(x.jsx)("span",{children:e.last_name})]})]})}),Object(x.jsxs)("div",{className:Be.a.Buttons,children:[Object(x.jsx)("div",{className:Be.a.Button,id:Be.a.ButtonGreen,onClick:function(){return n(!0)},children:Object(x.jsx)("h4",{children:"YES"})}),Object(x.jsx)("div",{className:Be.a.Button,id:Be.a.ButtonRed,onClick:function(){return n(!1)},children:Object(x.jsx)("h4",{children:"NO"})})]})]})})},Pe=function(){var e=B((function(e){return e.user})),t=B((function(e){return e.reservation})),a=Object(n.useState)(t.firstName),s=Object(b.a)(a,1)[0],c=Object(n.useState)(t.lastName),i=Object(b.a)(c,1)[0],o=Object(n.useState)(t.peopleCount),l=Object(b.a)(o,1)[0],d=Object(n.useState)(fe()(t.startDate)),j=Object(b.a)(d,1)[0],u=Object(n.useState)(fe()(t.endDate)),h=Object(b.a)(u,1)[0],p=Object(n.useState)(e.username),m=Object(b.a)(p,1)[0],O=Object(n.useState)("default"),g=Object(b.a)(O,2),v=g[0],f=g[1],_=Object(n.useState)(!1),A=Object(b.a)(_,2),y=A[0],w=A[1],N=Object(n.useState)(!1),I=Object(b.a)(N,2),U=I[0],C=I[1],P=Object(n.useState)(void 0),k=Object(b.a)(P,2),E=k[0],M=k[1],T=Object(n.useState)(void 0),F=Object(b.a)(T,2),H=F[0],D=F[1];Object(n.useEffect)((function(){var e=void 0;S.a.get("http://127.0.0.1:5000/api/v1/company/tables/?companyName=The Little Eatery").then((function(t){e=t.data;var a=new Map;Object.keys(e).forEach((function(t){var n=!1,s=new Date(j).toLocaleDateString("en-US"),c=e[t].reservations;if(c){var i=c[s];i&&Object.keys(i).forEach((function(e){var t=fe()(i[e].from),a=fe()(i[e].to);n=!!(j.isBetween(t,a,void 0,"[)")|h.isBetween(t,a,void 0,"(]")|t.isBetween(j,h,void 0,"()")|a.isBetween(j,h,void 0,"()"))}))}a.set(t,n)})),D(a)})).catch((function(e){console.log(e)}))}),[U,j,h]);var L=function(e){f(e)},R=function(e,t){M(t),w(e)},Y=function(e,t,a){for(var n=new Map,s=t;s<=a;s++)n.set(s,e.get(String(s)));return n};return Object(x.jsxs)("div",{className:xe.a.TablesPage,style:{cursor:v},children:[Object(x.jsxs)("div",{className:xe.a.Header,children:[Object(x.jsx)("div",{className:xe.a.Exit,children:Object(x.jsx)(r.b,{to:"/booking",children:"EXIT"})}),j&&Object(x.jsxs)("div",{className:xe.a.Info,children:[Object(x.jsxs)("p",{children:[j.format("hh:mm a")," - ",h.format("hh:mm a")," "]}),Object(x.jsxs)("p",{children:[j.format("L")," - ",h.format("L")]})]})]}),Object(x.jsx)("div",{className:xe.a.Tables,children:Object(x.jsx)(ge.d,{width:1520,height:850,children:H?Object(x.jsxs)(ge.b,{children:[Object(x.jsx)(ye,{ids:Y(H,1,4),handleHovering:L,handlePopUp:R,x:0,startDate:j,endDate:h}),Object(x.jsx)(Ne,{ids:Y(H,4,8),handleHovering:L,x:450,handlePopUp:R,startDate:j,endDate:h}),Object(x.jsx)(Ie,{ids:Y(H,8,11),handleHovering:L,x:740,handlePopUp:R,startDate:j,endDate:h}),Object(x.jsx)(Ne,{ids:Y(H,11,15),handleHovering:L,x:950,handlePopUp:R,startDate:j,endDate:h}),Object(x.jsx)(ye,{ids:Y(H,15,19),handleHovering:L,x:1220,handlePopUp:R,startDate:j,endDate:h})]}):null})}),y?Object(x.jsx)("div",{className:xe.a.PopUp,children:Object(x.jsx)(Ce,{handlePopUp:R,handleReservation:function(){R(!1),S.a.post("http://127.0.0.1:5000/api/v1/company/reservation/?companyName=The Little Eatery&tableId=".concat(E),{username:m,first_name:s,last_name:i,from:j.format(),to:h.format(),peopleCount:l,tableId:E}).then((function(e){e.data.reservation&&C(!U)})).catch((function(e){console.log(e)}))},from:j.format(),to:h.format(),first_name:s,last_name:i})}):Object(x.jsx)("div",{})]})},ke=a(133),Ee=a.n(ke),Me=a(91),Te=a(24),Fe=a.n(Te),He=(a(207),function(e){var t=B((function(e){return e.reservation})),a=U(),s=Object(n.useState)(fe()()),c=Object(b.a)(s,2),i=c[0],r=c[1],o=Object(n.useState)(void 0),l=Object(b.a)(o,2),j=l[0],u=l[1],h=Object(n.useState)(void 0),p=Object(b.a)(h,2),m=p[0],O=p[1],g=Object(n.useState)(void 0),v=Object(b.a)(g,2),f=v[0],A=v[1],y=Object(n.useState)(void 0),w=Object(b.a)(y,2),N=w[0],I=w[1],C=Object(n.useState)(t.firstName),P=Object(b.a)(C,2),k=P[0],E=P[1],M=Object(n.useState)(t.lastName),T=Object(b.a)(M,2),F=T[0],H=T[1],D=Object(n.useState)(t.peopleCount),L=Object(b.a)(D,2),R=L[0],Y=L[1],Q=Object(n.useState)(t.startDate),z=Object(b.a)(Q,2),Z=z[0],q=z[1],X=Object(n.useState)(t.endDate),G=Object(b.a)(X,2),V=G[0],J=G[1],K=Object(d.h)(),W=function(e,t){"from"===t?u(e):O(e)};Object(n.useEffect)((function(){!function(){var e=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],t=void 0,a=[],n=[];S.a.get("http://127.0.0.1:5000/api/v1/company/operation/?companyName=The Little Eatery").then((function(s){t=s.data,Object.keys(t).map((function(s){if(s.toString()===e[i.day()]){var c=t[s].start_time;c=(c=c.replace(/[^0-9,:]+/g,"")).split(":");var r=parseInt(c[0]),o=parseInt(c[1]),l=t[s].close_time,d=!!l.includes("nd");l=(l=l.replace(/[^0-9,:]+/g,"")).split(":");var j=parseInt(l[0]),u=parseInt(l[1]),b=fe()(i).hours(r).minutes(o).seconds(0).milliseconds(0),h=d?fe()(i).add(1,"d").hours(j).minutes(u).seconds(0).milliseconds(0):fe()(i).hours(j).minutes(u).seconds(0).milliseconds(0),p=fe()();p.minutes()<=30?p.minutes(30).seconds(0).milliseconds(0):p.add(1,"h").minutes(0).seconds(0).milliseconds(0),p>b&&(b=p);for(var m=b.day();b<=h;){var O="";b.day()!==m&&(O=" (next day) "),a.push({value:b.format("h:mm a")+O,label:b.format("h:mm a")+O,isDisabled:!1}),n.push({value:b.format("h:mm a")+O,label:b.format("h:mm a")+O,isDisabled:!1}),b.add(30,"m")}}return 0})),a[a.length-1].isDisabled=!0,a[a.length-2].isDisabled=!0,u(a[0]),O(n[2]),A(a),I(n.slice(2))})).catch((function(e){console.log(e)}))}()}),[i]),Object(n.useEffect)((function(){var e=function(e){var t=e.value,a=!!t.includes("pm"),n=!!t.includes("next day");t=(t=t.replace(/[^0-9,:]+/g,"")).split(":");var s=a?parseInt(t[0])+12:parseInt(t[0]);12===(s=24===s?12:s)&&!a&&(s=0);var c=t[1],r=fe()(i).hours(s).minutes(c).seconds(0).milliseconds(0);return n&&r.add(1,"d"),r};if(j&&m){var t=e(j),a=e(m);q(t),J(a)}if(N){N.filter((function(t){t=e(t)>e(j).add(30,"m")?t.isDisabled=!1:t.isDisabled=!0}))}}),[j,m,i,N]),Object(n.useEffect)((function(){if(N)for(var e=0;e<N.length;e++)if(!N[e].isDisabled){O(N[e]);break}}),[j,N]);var $=function(e){e.preventDefault(),a(ce(k)),a(ie(F)),a(re(Z.format())),a(oe(V.format())),a(le(R)),K("/booking/tables")};return Object(x.jsxs)("div",{onSubmit:$,className:Fe.a.MainSection,children:[Object(x.jsx)("div",{className:Fe.a.Title,children:Object(x.jsx)("p",{children:"RESERVATION INFORMATION"})}),Object(x.jsxs)("div",{className:Fe.a.FormRow,children:[Object(x.jsxs)("div",{className:Fe.a.Input,children:[Object(x.jsx)("p",{children:"PICK A DATE"}),Object(x.jsx)(Ee.a,{selected:i.toDate(),onChange:function(e){r(fe()(e))},minDate:fe()().toDate()})]}),Object(x.jsxs)("div",{className:Fe.a.Input,children:[Object(x.jsx)("p",{children:"FROM TIME"}),Object(x.jsx)(Me.a,{options:f,value:j,onChange:function(e){return W(e,"from")}})]}),Object(x.jsxs)("div",{className:Fe.a.Input,id:Fe.a.Select,children:[Object(x.jsx)("p",{children:"TO TIME"}),Object(x.jsx)(Me.a,{required:!0,options:N,onChange:function(e){return W(e,"to")},value:m,className:Fe.a.Select})]})]}),Object(x.jsxs)("div",{className:Fe.a.FormRow,children:[Object(x.jsxs)("div",{className:Fe.a.Input,children:[Object(x.jsx)("p",{children:"FIRST NAME"}),Object(x.jsx)("input",{required:!0,maxLength:"20",minLength:"2",type:"text",value:k,onChange:function(e){return E(e.target.value)},placeholder:"Enter First Name"})]}),Object(x.jsxs)("div",{className:Fe.a.Input,children:[Object(x.jsx)("p",{children:"LAST NAME"}),Object(x.jsx)("input",{required:!0,maxLength:"30",minLength:"2",type:"text",value:F,onChange:function(e){return H(e.target.value)},placeholder:"Enter Last Name"})]}),Object(x.jsxs)("div",{className:Fe.a.Input,children:[Object(x.jsx)("p",{children:"HOW MANY PEOPLE?"}),Object(x.jsx)("input",{type:"number",value:R,onChange:function(e){(e.target.value>8||e.target.value<1)&&(e.target.value=1),Y(e.target.value)},placeholder:"Enter Quantity of People",min:"1",max:"8"})]})]}),Object(x.jsx)("div",{className:Fe.a.Button,children:Object(x.jsx)(_,{title:"SEE TABLES",onClick:$})})]})}),De=a(90),Le=a.n(De),Re=function(){var e=B((function(e){return e.user.username}));return Object(x.jsxs)("div",{className:Le.a.BookingPage,children:[Object(x.jsx)("div",{className:Le.a.Main,children:Object(x.jsx)(He,{currentUser:e})}),Object(x.jsx)(d.b,{})]})},Ye=function(){return Object(x.jsxs)("div",{className:l.a.InternalApp,children:[Object(x.jsx)("div",{className:l.a.NavBar,children:Object(x.jsx)(be,{})}),Object(x.jsx)("div",{className:l.a.View,children:Object(x.jsxs)(d.e,{children:[Object(x.jsx)(d.c,{path:"*",element:Object(x.jsx)(d.a,{replace:!0,to:"/home"})}),Object(x.jsx)(d.c,{path:"/home",element:Object(x.jsx)(me,{})}),Object(x.jsx)(d.c,{path:"/settings",element:Object(x.jsx)(L,{})}),Object(x.jsxs)(d.c,{path:"/booking",children:[Object(x.jsx)(d.c,{path:"/booking",element:Object(x.jsx)(Re,{})}),Object(x.jsx)(d.c,{path:"/booking/tables",element:Object(x.jsx)(Pe,{})})]})]})})]})},Qe=a(32),ze=a.n(Qe),Ze=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),i=Object(b.a)(c,2),o=i[0],l=i[1],d=Object(n.useState)(""),j=Object(b.a)(d,2),u=j[0],h=j[1];return Object(x.jsx)("div",{className:ze.a.RegisterAcc,children:Object(x.jsxs)("div",{className:ze.a.Form,children:[Object(x.jsxs)("div",{className:ze.a.Username,children:[Object(x.jsx)("label",{children:"Username"}),Object(x.jsx)("input",{name:"username",value:a,placeholder:"example@gmail.com",type:"email",onChange:function(e){return s(e.target.value)}})]}),Object(x.jsxs)("div",{className:ze.a.Password,children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{name:"password",value:o,placeholder:"******",type:"password",onChange:function(e){return l(e.target.value)}})]}),Object(x.jsx)("div",{className:ze.a.Submit,children:Object(x.jsx)("input",{value:"Register Account",type:"submit",onClick:function(e){e.preventDefault(),S.a.post("http://127.0.0.1:5000/api/v1/user/signup",{username:a,password:o}).then((function(e){e.data.jwt_token?(s(""),l(""),h(""),console.log(e.data.jwt_token),localStorage.setItem("token",e.data.jwt_token),console.log("registerd")):console.log("couldnt register")})).catch((function(e){var t=e.response.data;h(t)}))}})}),Object(x.jsx)("div",{className:ze.a.SubMessage,children:Object(x.jsxs)("p",{children:["Already have an account?",Object(x.jsx)(r.b,{id:ze.a.signin,to:"/signin",children:"Sign In."})]})}),Object(x.jsx)("div",{className:ze.a.ErrorMessage,children:Object(x.jsx)("p",{children:u})})]})})},qe=a(33),Xe=a.n(qe),Ge=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),i=Object(b.a)(c,2),o=i[0],l=i[1],d=Object(n.useState)(""),j=Object(b.a)(d,2),u=j[0],h=j[1],p=U();return Object(x.jsx)("div",{className:Xe.a.Login,children:Object(x.jsxs)("div",{className:Xe.a.Form,children:[Object(x.jsxs)("div",{className:Xe.a.Username,children:[Object(x.jsx)("label",{children:"Username"}),Object(x.jsx)("input",{name:"username",value:a,placeholder:"example@gmail.com",type:"email",onChange:function(e){return s(e.target.value)}})]}),Object(x.jsxs)("div",{className:Xe.a.Password,children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)("input",{name:"password",value:o,placeholder:"******",type:"password",onChange:function(e){return l(e.target.value)}})]}),Object(x.jsx)("div",{className:Xe.a.Submit,children:Object(x.jsx)("input",{value:"Log In",type:"submit",onClick:function(e){e.preventDefault(),S.a.post("http://127.0.0.1:5000/api/v1/user/signin",{username:a,password:o}).then((function(e){e.data.jwt_token&&(p(E(a)),p(T(e.data.jwt_token)),p(M(!0)),s(""),l(""),h(""))})).catch((function(e){var t=e.response.data;h(t)}))}})}),Object(x.jsx)("div",{className:Xe.a.SubMessage,children:Object(x.jsxs)("p",{children:["Don't have an account?",Object(x.jsx)(r.b,{id:Xe.a.signup,to:"/signup",children:"Sign up."})]})}),Object(x.jsx)("div",{className:Xe.a.ErrorMessage,children:Object(x.jsx)("p",{children:u})})]})})},Ve=a(136),Je=a.n(Ve),Ke=function(){return Object(x.jsx)("div",{className:Je.a.AuthApp,children:Object(x.jsxs)(d.e,{children:[Object(x.jsx)(d.c,{path:"*",element:Object(x.jsx)(d.a,{replace:!0,to:"/signin"})}),Object(x.jsx)(d.c,{path:"/signin",element:Object(x.jsx)(Ge,{})}),Object(x.jsx)(d.c,{path:"/signup",element:Object(x.jsx)(Ze,{})})]})})},We=function(){var e=B((function(e){return e.user})),t=U();return Object(n.useEffect)((function(){var a=!0;return S.a.get("http://127.0.0.1:5000/api/v1/user/auth",{headers:{"x-access-token":e.token}}).then((function(e){e.data.auth&&a&&t(M(!0))})).catch((function(e){t(M(!1))})),function(){a=!1}}),[t,e.token]),Object(x.jsx)("div",{className:"App",children:e.auth?Object(x.jsx)(Ye,{}):Object(x.jsx)(Ke,{})})},$e=a(137),et=a(23),tt=a(92),at=a(52),nt=a(138),st={key:"root",storage:a.n(nt).a},ct=Object(et.b)({user:H,reservation:je}),it=Object(tt.a)(st,ct),rt=Object(C.a)({reducer:it,middleware:[at.a]}),ot=Object(tt.b)(rt);i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(r.a,{children:Object(x.jsx)(I.a,{store:rt,children:Object(x.jsx)($e.a,{loading:null,persistor:ot,children:Object(x.jsx)(We,{})})})})}),document.getElementById("root"))},32:function(e,t,a){e.exports={RegisterAcc:"RegisterAcc_RegisterAcc__1exed",Form:"RegisterAcc_Form__1G4yR",Username:"RegisterAcc_Username__1raXl",Password:"RegisterAcc_Password__QiN2t",Submit:"RegisterAcc_Submit__O_zO-",ErrorMessage:"RegisterAcc_ErrorMessage__2sQp5",SubMessage:"RegisterAcc_SubMessage__p_qNm",signin:"RegisterAcc_signin__1G21A"}},33:function(e,t,a){e.exports={Login:"Login_Login__BkHB0",Form:"Login_Form__jueix",Username:"Login_Username__2vizD",Password:"Login_Password__3W-5K",Submit:"Login_Submit__194aJ",ErrorMessage:"Login_ErrorMessage__tg0a8",SubMessage:"Login_SubMessage__4R3A8",signup:"Login_signup__15cRt"}},37:function(e,t,a){e.exports={TablesPage:"TablesPage_TablesPage__280iP",Header:"TablesPage_Header__9bXPu",Exit:"TablesPage_Exit__3gL6U",Info:"TablesPage_Info__3hzRY",Tables:"TablesPage_Tables__IClSu",PopUp:"TablesPage_PopUp__308AR"}},46:function(e,t,a){e.exports={NavBar:"NavBar_NavBar__3z-aQ",Company:"NavBar_Company__2Q9mp",Items:"NavBar_Items__a6P_4",BottomItems:"NavBar_BottomItems__3hzd0",User:"NavBar_User__1T0vB"}},54:function(e,t,a){e.exports={Form:"Form_Form__24D6r",FormSection:"Form_FormSection__pM-9K"}},55:function(e,t,a){e.exports={Avatar:"UserInfo_Avatar__3lUkP",LogOut:"UserInfo_LogOut__1MBX4",Info:"UserInfo_Info___D5j_",email:"UserInfo_email__23-_S"}},67:function(e,t,a){e.exports={InternalApp:"InternalApp_InternalApp__1TRdc",NavBar:"InternalApp_NavBar__25o6w",View:"InternalApp_View__G0n_H"}},68:function(e,t,a){e.exports={AlertMessage:"AlertMessage_AlertMessage__1gdnz",positive:"AlertMessage_positive__3po6W",negative:"AlertMessage_negative__2rl_b"}},85:function(e,t,a){e.exports={Image:"CompanyInfo_Image__3Hy11",Name:"CompanyInfo_Name__3u_Ic"}},86:function(e,t,a){e.exports={Item:"NavBarItem_Item__3UShq",Icon:"NavBarItem_Icon__1llwB"}},90:function(e,t,a){e.exports={BookingPage:"BookingPage_BookingPage__3GsBG",User:"BookingPage_User__3qMM5",Main:"BookingPage_Main__34dB9"}}},[[282,1,2]]]);
//# sourceMappingURL=main.f2feada0.chunk.js.map