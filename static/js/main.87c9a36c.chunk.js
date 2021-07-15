(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={list:"ContactList_list__4OYAh",list__item:"ContactList_list__item__2kxHq",list__btn:"ContactList_list__btn__1Yw_N"}},32:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},33:function(t,e,n){t.exports={container:"Container_container__1dgM8"}},40:function(t,e,n){},7:function(t,e,n){t.exports={form:"ContactForm_form__EwVyi",form__label:"ContactForm_form__label__2L8Li",form__input:"ContactForm_form__input__11DpB",form__btn:"ContactForm_form__btn__HE5bS"}},76:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(11),o=n.n(r),i=(n(40),n(5)),s=n(27),u=n(28),l=n(35),b=n(34),d=n(6),m=n(17),j=n.n(m),f=n(30),h=n(9),p=n.n(h),O=n(2),_=Object(O.b)("contacts/fetchContactRequest"),C=Object(O.b)("contacts/fetchContactSuccess"),x=Object(O.b)("contacts/fetchContactError"),v=Object(O.b)("contacts/addContactRequest"),g=Object(O.b)("contacts/addContactSuccess"),y=Object(O.b)("contacts/addContactError"),S=Object(O.b)("contacts/deleteContactRequest"),N=Object(O.b)("contacts/deleteContactSuccess"),I=Object(O.b)("contacts/deleteContactError"),k=Object(O.b)("contacts/filterByName");p.a.defaults.baseURL="http://localhost:4040";var w,A=function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(v()),p.a.post("/contacts",c).then((function(e){var n=e.data;return t(g(n))})).catch((function(e){return t(y(e))}))}},F=function(t){return function(e){e(S()),p.a.delete("/contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(I(t))}))}},L=function(){return function(){var t=Object(f.a)(j.a.mark((function t(e){var n,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(_()),t.prev=1,t.next=4,p.a.get("/contacts");case 4:n=t.sent,c=n.data,e(C(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(x(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},E=n(18),q=n.n(E),D=n(7),z=n.n(D),R=n(13),B=n(31),J=n.n(B),M=n(3),H=n(32),V=Object(O.c)(H,(w={},Object(i.a)(w,C,(function(t,e){return e.payload})),Object(i.a)(w,g,(function(t,e){return[].concat(Object(R.a)(t),[e.payload])})),Object(i.a)(w,N,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),w)),Z=Object(O.c)("",Object(i.a)({},k,(function(t,e){return e.payload}))),T=Object(M.b)({items:V,filter:Z}),Y=n(8),K=[].concat(Object(R.a)(Object(O.d)({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}})),[J.a]),P=Object(O.a)({reducer:{contacts:T},middleware:K,devTools:!1}),U=n(12),$=function(t){return t.contacts.filter},G=function(t){return t.contacts.items},Q={getFilter:$,getVisibleContacts:Object(U.a)([G,$],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),getAllContacts:G},W=n(1),X=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(i.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=[];if(P.getState().contacts.items.length>0)P.getState().contacts.items.map((function(t){return n.push(t.name)}));return n.includes(t.state.name)||0===n.length?alert("".concat(t.state.name," is already in the contacts")):(t.props.onSubmit(t.state),t.reset(),void(n=[]))},t.reset=function(){t.setState({name:"",number:""})},t.nameInputId=q.a.generate(),t.numberInputId=q.a.generate(),t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContact()}},{key:"render",value:function(){return Object(W.jsx)("div",{children:Object(W.jsxs)("form",{onSubmit:this.handleSubmit,className:z.a.form,children:[Object(W.jsxs)("label",{htmlFor:this.nameInputId,className:z.a.form__label,children:["Name",Object(W.jsx)("input",{className:z.a.form__input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(W.jsxs)("label",{htmlFor:this.numberInputId,className:z.a.form__label,children:["Number",Object(W.jsx)("input",{className:z.a.form__input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(W.jsx)("button",{type:"submit",className:z.a.form__btn,children:"Add contact"})]})})}}]),n}(c.Component),tt=Object(d.b)(null,(function(t){return{onSubmit:function(e){return t(A(e))},fetchContact:function(){return t(L())}}}))(X),et=n(14),nt=n.n(et),ct=Object(d.b)((function(t){return{contacts:Q.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(F(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(W.jsx)("div",{children:Object(W.jsx)("ul",{className:nt.a.list,children:e.map((function(t){return Object(W.jsxs)("li",{className:nt.a.list__item,children:[t.name,": ",t.number,Object(W.jsx)("button",{onClick:function(){return n(t.id)},className:nt.a.list__btn,children:"Delete"})]},t.id)}))})})})),at=Object(d.b)((function(t){return{value:Q.getFilter(t)}}),(function(t){return{onChange:function(e){t(k(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(W.jsx)("div",{children:Object(W.jsx)("label",{children:Object(W.jsx)("input",{type:"text",value:e,onChange:n})})})})),rt=n(33),ot=n.n(rt),it=function(t){var e=t.children;return Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("div",{className:ot.a.container,children:e})})},st=function(){return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(it,{children:[Object(W.jsx)("h1",{children:"Phonebook"}),Object(W.jsx)(tt,{}),Object(W.jsx)("h2",{children:"Contacts"}),Object(W.jsx)("p",{children:"Find contacts by name"}),Object(W.jsx)(at,{}),Object(W.jsx)(ct,{})]})})};o.a.render(Object(W.jsx)(a.a.StrictMode,{children:Object(W.jsx)(d.a,{store:P,children:Object(W.jsx)(st,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.87c9a36c.chunk.js.map