(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},19:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),l=t(2),u=(t(19),function(e){var n,t=e.message,a=e.isError;return null===t?null:(n=a?"error":"notification",r.a.createElement("div",{className:n},t))}),i=function(e){var n=e.handleFilterChange,t=e.filter;return r.a.createElement("input",{onChange:n,value:t})},s=function(e){var n=e.person,t=e.handleDeletePerson;return r.a.createElement("tr",null,r.a.createElement("td",null,n.name),r.a.createElement("td",null,n.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return t(n.id)}},"Delete")))},d=function(e){var n=e.persons,t=e.handleDeletePerson;return r.a.createElement("table",null,r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement(s,{key:e.name,person:e,handleDeletePerson:t})}))))},m=function(e){var n=e.handleNameChange,t=e.newName,a=e.handlePhoneNumberChange,o=e.newPhoneNumber,c=e.handleNewPerson;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:n,value:t}),r.a.createElement("br",null),"phone number: ",r.a.createElement("input",{onChange:a,value:o})),r.a.createElement("div",null,r.a.createElement("button",{onClick:c,type:"submit"},"add")))},f=t(3),h=t.n(f),p="/api/persons",E=function(){return h.a.get(p).then((function(e){return e.data}))},g=function(e){return h.a.post(p,e).then((function(e){return e.data}))},b=function(e,n){return h.a.put("".concat(p,"/").concat(e),n).then((function(e){return console.log("update response:",e.data),e.data}))},v=function(e){return h.a.delete("".concat(p,"/").concat(e)).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),f=s[0],h=s[1],p=Object(a.useState)(""),w=Object(l.a)(p,2),C=w[0],N=w[1],P=Object(a.useState)(""),j=Object(l.a)(P,2),y=j[0],O=j[1],D=Object(a.useState)({message:null,isError:!1}),k=Object(l.a)(D,2),S=k[0],x=k[1],L=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];x({message:e,isError:n}),n||setTimeout((function(){x({message:null,isError:!1})}),5e3)};Object(a.useEffect)((function(){E().then((function(e){console.log("axios response:"),console.log(e),o(e),L("".concat(e.length," persons fetched"))})).catch((function(e){L("Error fetching persons. Maybe your internet connection is down? (".concat(e.response.data.error,")"),!0)}))}),[]);var A=t.sort((function(e,n){return e.name.localeCompare(n.name)})),F=y?A.filter((function(e){return e.name.toLocaleLowerCase().includes(y.toLocaleLowerCase())})):A;return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(u,{message:S.message,isError:S.isError}),r.a.createElement("h2",null,"Filter"),r.a.createElement(i,{handleFilterChange:function(e){return O(e.target.value)},filter:y}),r.a.createElement("h2",null,"Add a new person"),r.a.createElement(m,{handleNameChange:function(e){h(e.target.value)},newName:f,handlePhoneNumberChange:function(e){N(e.target.value)},newPhoneNumber:C,handleNewPerson:function(e){e.preventDefault();var n={name:f,number:C};console.log("new person: ",n);var a=t.find((function(e){return e.name===f}));a?(console.log("person exists"),window.confirm("".concat(f," already exists\n")+"Current phone number: ".concat(a.number,"\n")+"Replace phone number with ".concat(C,"?"))&&b(a.id,n).then((function(e){console.log("updatedPerson",e),o(t.map((function(n){return n.id===e.id?e:n}))),h(""),N(""),L("Updated telephone number for ".concat(f),!1)})).catch((function(e){console.log(e.response.data),L("Error updating person: ".concat(e.response.data.error),!0)}))):(console.log("person doesn't exist, adding"),g(n).then((function(e){o(t.concat(e)),h(""),N(""),L("Added ".concat(e.name),!1)})).catch((function(e){console.log(e.response.data),L("Error creating person: ".concat(e.response.data.error),!0)})))}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{persons:F,handleDeletePerson:function(e){console.log("Deleting person ".concat(e));var n=t.find((function(n){return n.id===e}));window.confirm("Are you sure you want to delete ".concat(n.name,"?"))&&v(e).then((function(){o(t.filter((function(n){return n.id!==e}))),L("".concat(n.name," deleted"))})).catch((function(e){L("Error deleting person. Maybe someone else already deleted it?",!0)}))}}))};t(37);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d62c56df.chunk.js.map