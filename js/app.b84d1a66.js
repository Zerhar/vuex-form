(function(e){function t(t){for(var o,u,s=t[0],a=t[1],i=t[2],d=0,b=[];d<s.length;d++)u=s[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vuex-form/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"container"};function c(e,t,n,c,u,s){var a=Object(o["l"])("alert-modal"),i=Object(o["l"])("add-user"),l=Object(o["l"])("user-list");return Object(o["g"])(),Object(o["c"])("div",r,[Object(o["e"])(a),Object(o["e"])(i),Object(o["e"])(l)])}var u=Object(o["s"])("data-v-1d122aa1");Object(o["i"])("data-v-1d122aa1");var s=Object(o["e"])("div",null,null,-1);Object(o["h"])();var a=u((function(e,t,n,r,c,u){var a=Object(o["l"])("drop-down");return Object(o["g"])(),Object(o["c"])("form",null,[Object(o["e"])("div",null,[Object(o["q"])(Object(o["e"])("input",{type:"text",placeholder:"Enter First Name","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.user.firstName=e})},null,512),[[o["o"],c.user.firstName]])]),Object(o["e"])("div",null,[Object(o["q"])(Object(o["e"])("input",{type:"text",placeholder:"Enter Last Name","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.user.lastName=e})},null,512),[[o["o"],c.user.lastName]])]),Object(o["e"])("div",null,[Object(o["q"])(Object(o["e"])("input",{placeholder:"Enter birth date",type:c.type,onFocus:t[3]||(t[3]=function(){return u.changeType&&u.changeType.apply(u,arguments)}),"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.user.birthDate=e})},null,40,["type"]),[[o["n"],c.user.birthDate]])]),Object(o["e"])("div",null,[Object(o["q"])(Object(o["e"])("input",{type:"text",placeholder:"Enter Quote","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.user.quote=e})},null,512),[[o["o"],c.user.quote]])]),Object(o["e"])(a,{options:e.professions,changeSelect:u.setProfession,label:"Profession"},null,8,["options","changeSelect"]),Object(o["e"])(a,{options:e.countries,changeSelect:u.setCountry,label:"Country"},null,8,["options","changeSelect"]),s,Object(o["e"])("div",null,[Object(o["e"])("button",{onClick:t[6]||(t[6]=Object(o["r"])((function(){return u.addUser&&u.addUser.apply(u,arguments)}),["prevent"]))}," Save User ")])])})),i=n("5530"),l=n("5502");function d(e,t,n,r,c,u){return Object(o["g"])(),Object(o["c"])("div",null,[Object(o["e"])("div",null,[Object(o["e"])("select",{onChange:t[1]||(t[1]=function(e){return n.changeSelect(e.target.value)})},[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["k"])(n.options,(function(e,t){return Object(o["g"])(),Object(o["c"])("option",{value:t,key:e.key},Object(o["m"])(e.text),9,["value"])})),128))],32)])])}var b={name:"DropDown",props:{options:{type:Array,default:function(){return[{value:1,text:"Option 1"},{value:2,text:"Option 2"}]}},label:{type:String,default:"Label"},changeSelect:{type:Function,default:function(){}}}};b.render=d;var O=b,f={name:"AddUser",data:function(){return{user:{firstName:"",lastName:"",birthDate:null,quote:"",profession_id:1,country_id:1},type:"text"}},components:{DropDown:O},computed:Object(i["a"])({},Object(l["e"])({professions:function(e){return e.professionModule.professions},countries:function(e){return e.countryModule.countries}})),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(l["b"])(["addNewUser","setModalBox"])),Object(l["d"])({setAlertText:"SET_ALERT_TEXT"})),{},{changeType:function(){this.type="date"},addUser:function(){var e="",t=!0;0===this.user.firstName.length||0===this.user.lastName.length?e="Whooooooooooooooooooooo are you? WHO? WHO?... WHO? WHO?...":!this.user.birthDate||new Date(this.user.birthDate).getTime()>(new Date).getTime()?e="What's wrong with your birthday, brah?":0===this.user.quote.length?e="Forgetting something?":(this.$store.dispatch("addNewUser",this.user),t=!1,this.type="text",this.user={firstName:"",lastName:"",birthDate:null,quote:"",profession_id:1,country_id:1}),this.setModalBox({alertText:e,showModal:t})},setProfession:function(e){this.user.profession_id=parseInt(e)+1},setCountry:function(e){this.user.country_id=parseInt(e)+1}})};f.render=a,f.__scopeId="data-v-1d122aa1";var p=f,j={key:0,class:"modal"},h={class:"modal-content"},m={class:"modal-header"},v={class:""},x={class:"modal-body"};function y(e,t,n,r,c,u){return e.showModalBox?(Object(o["g"])(),Object(o["c"])("div",j,[Object(o["e"])("div",h,[Object(o["e"])("div",m,[Object(o["e"])("span",{onClick:t[1]||(t[1]=function(){return u.close&&u.close.apply(u,arguments)}),class:"close"}," × ")]),Object(o["e"])("div",v,[Object(o["e"])("div",x,Object(o["m"])(e.alertText),1)])])])):Object(o["d"])("",!0)}var g={name:"AlertModal",computed:Object(i["a"])({},Object(l["e"])({alertText:function(e){return e.modalModule.alertText},showModalBox:function(e){return e.modalModule.showModalBox}})),methods:Object(i["a"])(Object(i["a"])({},Object(l["d"])({showModal:"SHOW_MODAL"})),{},{close:function(){this.showModal(!1)}})};g.render=y;var _=g;function C(e,t,n,r,c,u){return Object(o["g"])(),Object(o["c"])("table",null,[Object(o["e"])("thead",null,[Object(o["e"])("th",{textContent:Object(o["m"])("Namn")},null,8,["textContent"]),Object(o["e"])("th",{textContent:Object(o["m"])("Date of Birth")},null,8,["textContent"]),Object(o["e"])("th",{textContent:Object(o["m"])("Age")},null,8,["textContent"]),Object(o["e"])("th",{textContent:Object(o["m"])("Profession")},null,8,["textContent"]),Object(o["e"])("th",{textContent:Object(o["m"])("Country")},null,8,["textContent"]),Object(o["e"])("th",{textContent:Object(o["m"])("Favorite Quote")},null,8,["textContent"]),Object(o["e"])("th",{textContent:Object(o["m"])("")},null,8,["textContent"])]),Object(o["e"])("tbody",null,[(Object(o["g"])(!0),Object(o["c"])(o["a"],null,Object(o["k"])(e.users,(function(t,n){return Object(o["g"])(),Object(o["c"])("tr",{key:n},[Object(o["e"])("td",{textContent:Object(o["m"])(t.firstName+" "+t.lastName)},null,8,["textContent"]),Object(o["e"])("td",{textContent:Object(o["m"])(t.birthDate)},null,8,["textContent"]),Object(o["e"])("td",{textContent:Object(o["m"])(u.userAge(t))},null,8,["textContent"]),Object(o["e"])("td",{textContent:Object(o["m"])(e.getProfession(t.profession_id))},null,8,["textContent"]),Object(o["e"])("td",{textContent:Object(o["m"])(e.getCountry(t.country_id))},null,8,["textContent"]),Object(o["e"])("td",{textContent:Object(o["m"])(t.quote)},null,8,["textContent"]),Object(o["e"])("td",{onClick:function(e){return u.removeRow(t)}}," Remove ",8,["onClick"])])})),128))])])}var w={name:"UserList",components:{},data:function(){return{selected:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(l["e"])({users:function(e){return e.userModule.users},professions:function(e){return e.professionModule.professions}})),Object(l["c"])(["getProfession","getCountry"])),methods:Object(i["a"])(Object(i["a"])({},Object(l["b"])(["removeUser"])),{},{removeRow:function(e){this.$store.dispatch("removeUser",e)},userAge:function(e){var t=e.birthDate,n=Date.now(),o=new Date(t).getTime(),r=n-o,c=new Date(r).getUTCFullYear()-1970;return c}})};w.render=C;var M=w,T={name:"App",components:{AddUser:p,AlertModal:_,UserList:M}};T.render=c;var D=T,S={countries:[{country_id:1,text:"Sweden"},{country_id:2,text:"Denmark"},{country_id:3,text:"Finland"},{country_id:4,text:"Norway"}]},E=S,N=(n("7db0"),{getCountry:function(e){return function(t){var n=e.countries.find((function(e){return e.country_id===t}));return n.text}}}),U=N,A={},k=A,P={SET_COUNTRY:function(e,t){e.users=t}},R=P,W={state:E,getters:U,actions:k,mutations:R},q={professions:[{profession_id:1,text:"Front-end Developer"},{profession_id:2,text:"Back-end Developer"},{profession_id:3,text:"Product Owner"},{profession_id:4,text:"CTO"}]},B=q,L={getProfession:function(e){return function(t){var n=e.professions.find((function(e){return e.profession_id===t}));return n.text}}},F=L,H={},V=H,I={},J=I,X={state:B,getters:F,actions:V,mutations:J},Q={alertText:"",showModalBox:!1},Y=Q,$={},z=$,G={setModalBox:function(e,t){var n=e.commit,o=t.alertText,r=t.showModal;n("SHOW_MODAL",r),n("SET_ALERT_TEXT",o)}},K=G,Z={SET_ALERT_TEXT:function(e,t){e.alertText=t},SHOW_MODAL:function(e,t){e.showModalBox=t}},ee=Z,te={state:Y,getters:z,actions:K,mutations:ee},ne={users:[{id:1,firstName:"John",lastName:"Doe",birthDate:"1988-02-25",quote:"Hello World!",profession_id:1,country_id:1}]},oe=ne,re={},ce=re,ue={removeUser:function(e,t){var n=e.commit;n("REMOVE_USER",t.id)},addNewUser:function(e,t){var n=e.commit;n("ADD_NEW_USER",t)}},se=ue,ae=n("2909"),ie=(n("4de4"),n("d81d"),n("99af"),{REMOVE_USER:function(e,t){console.log("state",e.users,"userId",t),e.users=e.users.filter((function(e){return e.id!==t}))},ADD_NEW_USER:function(e,t){var n=e.users.map((function(e){return e.id})),o=Math.max.apply(Math,Object(ae["a"])(n)),r=o+1;t.id=r,e.users=[].concat(Object(ae["a"])(e.users),[t])}}),le=ie,de={state:oe,getters:ce,actions:se,mutations:le},be=Object(l["a"])({modules:{countryModule:W,modalModule:te,professionModule:X,userModule:de}});n("b1bf");Object(o["b"])(D).use(be).mount("#app")},b1bf:function(e,t,n){}});
//# sourceMappingURL=app.b84d1a66.js.map