(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){e.exports=n(235)},107:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(28),o=n.n(l),i=(n(107),n(11)),c=n(12),s=n(15),d=n(13),u=n(14),v=n(32),m=n(7),E=n(96),h=n(101),p=function(e){return e=JSON.stringify(e),e=localStorage.setItem("events",e)},f=function(){var e=localStorage.getItem("events");return e=JSON.parse(e)},y={data:[]},b=Object(m.c)({events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.data,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_EVENT":return t.payload;case"ADD_EVENT":return[t.payload].concat(Object(h.a)(e));case"EDIT_EVENT":var n=e.map(function(e){return e.event_id===t.payload.event_id?e=t.payload:e});return p(n),n;case"REMOVE_EVENT":var a=e.filter(function(e){return e.event_id!==t.payload});return p(a),a;default:return e}}}),O=[E.a],_=Object(m.e)(b,{},Object(m.d)(m.a.apply(void 0,O),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())),M=n(5),N=n(3),D=n.n(N),g=n(51),k=n.n(g),w=n(31),S=n.n(w),C=n(100),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"submitForm",value:function(e){var t=this.props,n=t.addEvent,a=t.editEvent,r=t.day,l=t.isEdit,o=D.a.format(r,"DD-MM-YYYY"),i=Object.assign(e,{day:o});l?a(i):n(i)}},{key:"onDelete",value:function(e){(0,this.props.removeEvent)(e)}},{key:"render",value:function(){var e,t,n,a=this,l=this.props,o=l.events,i=l.isEdit,c="";return c=S()(),"undefined"!==typeof o.event_name&&(e=o.event_name,t=o.event_time,n=o.event_invite_email,c=o.event_id),r.a.createElement(C.a,{initialValues:{event_id:c||"",event_name:e||"",event_time:t||"",event_invite_email:n||""},onSubmit:function(e,t){var n=t.setSubmitting;setTimeout(function(){a.submitForm(e),n(!1)},500)}},function(e){var t=e.values,n=e.dirty,l=e.isSubmitting,o=e.handleChange,c=e.handleBlur,s=e.handleSubmit,d=e.handleReset;return r.a.createElement("form",{onSubmit:s},r.a.createElement("div",null,r.a.createElement("label",{className:"desc"},"Name"),r.a.createElement("div",null,r.a.createElement("input",{id:"event_name",className:"field text fn form-control",placeholder:"Name",type:"text",value:t.event_name,onChange:o,onBlur:c}))),r.a.createElement("div",null,r.a.createElement("label",{className:"desc"},"Time"),r.a.createElement("div",null,r.a.createElement("input",{id:"event_time",className:"field text fn form-control",placeholder:"Time",type:"text",value:t.event_time,onChange:o,onBlur:c}))),r.a.createElement("div",null,r.a.createElement("label",{className:"desc"},"Email"),r.a.createElement("div",null,r.a.createElement("input",{id:"event_invite_email",className:"field text fn form-control",placeholder:"Email",type:"text",value:t.event_invite_email,onChange:o,onBlur:c}))),r.a.createElement("button",{type:"button",className:"outline btn btn-primary",onClick:d,disabled:!n||l},"Reset"),"\xa0",r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:l},"Submit"),"\xa0",r.a.createElement("span",null,i&&r.a.createElement("button",{type:"button",onClick:function(){return a.onDelete(t.event_id)},className:"btn btn-delete"},"Delete")))})}}]),t}(r.a.Component),T=n(21);k.a.setAppElement("#root");var Y=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).dragStart=function(e,t){var n=JSON.stringify(t);e.dataTransfer.setData("event_str",n)},e.drop=function(t,n,a){var r=e.props.editEvent,l=t.dataTransfer.getData("event_str"),o=JSON.parse(l),i=D.a.format(n,"DD-MM-YYYY");a<3?(o.day=i,r(o)):i===o.day||T.toast.error("Sorry, you can't add event to this date",{position:T.toast.POSITION.TOP_LEFT})},e.onEditClick=function(t,n){e.setState({selectedDate:t,selectedEvent:n}),e.handleOpenModal()},e.onAddClick=function(t,n){e.setState({selectedDate:t,selectedEvent:""}),e.handleOpenModal()},e.nextMonth=function(){e.setState({currentMonth:D.a.addMonths(e.state.currentMonth,1)})},e.prevMonth=function(){e.setState({currentMonth:D.a.subMonths(e.state.currentMonth,1)})},e.state={currentMonth:new Date,selectedDate:new Date,showModal:!1,selectedEvent:""},e.handleOpenModal=e.handleOpenModal.bind(Object(M.a)(Object(M.a)(e))),e.onCloseModal=e.onCloseModal.bind(Object(M.a)(Object(M.a)(e))),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.loadEvent()}},{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"onCloseModal",value:function(){this.setState({showModal:!1})}},{key:"renderModal",value:function(){var e=this.props,t=e.addEvent,n=e.editEvent,a=e.removeEvent,l=this.state,o=l.selectedDate,i=l.selectedEvent,c="undefined"!==typeof i.event_name;return r.a.createElement("div",null,r.a.createElement(k.a,{isOpen:this.state.showModal,contentLabel:"Minimal Modal Example"},r.a.createElement("button",{className:"btn button-close",onClick:this.onCloseModal},"X"),r.a.createElement(j,{addEvent:t,editEvent:n,removeEvent:a,day:o,events:i,isEdit:c})))}},{key:"renderHeader",value:function(){return r.a.createElement("div",{className:"header row flex-middle"},r.a.createElement("div",{className:"col col-start"},r.a.createElement("div",{className:"icon",onClick:this.prevMonth},"chevron_left")),r.a.createElement("div",{className:"col col-center"},r.a.createElement("span",null,D.a.format(this.state.currentMonth,"MMMM YYYY"))),r.a.createElement("div",{className:"col col-end",onClick:this.nextMonth},r.a.createElement("div",{className:"icon"},"chevron_right")))}},{key:"renderDays",value:function(){for(var e=[],t=D.a.startOfWeek(this.state.currentMonth),n=0;n<7;n++)e.push(r.a.createElement("div",{className:"col col-center",key:n},D.a.format(D.a.addDays(t,n),"dddd")));return r.a.createElement("div",{className:"days row"},e)}},{key:"renderBgEvent",value:function(e,t){var n=this,l=t.length,o=["#f3d250","#90ccf4","#5da2d5"],i=0,c=100;1===l?(i=50,c=50):l<3&&l>1?(i=25,c=50):(c=100,i=100/l);for(var s=[],d=function(a){var l={background:o[a],width:"100%",height:i+"%",display:"block",padding:"3px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontWeight:"500"};s.push(r.a.createElement("div",{key:t[a].event_id,style:l,onClick:function(){return n.onEditClick(e,t[a])},draggable:"true",onDragStart:function(e){return n.dragStart(e,t[a])}},t[a].event_name))},u=0;u<l;u++)d(u);if(l<3){var v={width:"100%",height:c+"%",display:"block",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontWeight:"500"};s.push(r.a.createElement("div",{key:S()(),style:v,onClick:function(){return n.onAddClick(e)}}))}return r.a.createElement(a.Fragment,null,s)}},{key:"renderCells",value:function(){for(var e=this,t=this.props.events,n=this.state,a=n.currentMonth,l=n.selectedDate,o=D.a.startOfMonth(a),i=D.a.endOfMonth(o),c=D.a.startOfWeek(o),s=D.a.endOfWeek(i),d=[],u=[],v=c,m="";v<=s;){for(var E=function(n){var a=D.a.format(v,"DD-MM-YYYY"),i=[];t.length>0&&t.map(function(e){a===e.day&&i.push(e)});var c=i.length;m=D.a.format(v,"D");var s=v;u.push(r.a.createElement("div",{className:"col cell ".concat(D.a.isSameMonth(v,o)?D.a.isSameDay(v,l)?"selected":"":"disabled"),key:v,onDrop:function(t){return e.drop(t,D.a.parse(s),c)},onDragOver:function(e){return e.preventDefault()}},r.a.createElement("span",{className:"number"},m),r.a.createElement("span",{className:"bgEvent"},e.renderBgEvent(D.a.parse(s),i)))),v=D.a.addDays(v,1)},h=0;h<7;h++)E();d.push(r.a.createElement("div",{className:"row",key:v},u)),u=[]}return r.a.createElement("div",{className:"body"},d)}},{key:"render",value:function(){return r.a.createElement("div",{className:"calendar"},this.renderHeader(),this.renderDays(),this.renderCells(),this.renderModal())}}]),t}(r.a.Component);var x=Object(v.b)(function(e){return{events:e.events}},{loadEvent:function(){return function(e){null==f()&&p([]),e({type:"LOAD_EVENT",payload:f()})}},addEvent:function(e){return function(t){var n=f();n.push(e),p(n),t({type:"ADD_EVENT",payload:e})}},editEvent:function(e){return function(t){t({type:"EDIT_EVENT",payload:e})}},removeEvent:function(e){return function(t){t({type:"REMOVE_EVENT",payload:e})}}})(Y),V=(n(233),n(234),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{store:_},r.a.createElement("div",{className:"App"},r.a.createElement("main",null,r.a.createElement(x,null)),r.a.createElement(T.ToastContainer,null)))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[102,1,2]]]);
//# sourceMappingURL=main.0d988ac1.chunk.js.map