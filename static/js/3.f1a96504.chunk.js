(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[3],{3:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(9434),o=n(2653),a=n(6121),l=n(3329),s=function(){var e=(0,r.v9)(o.Af),t=(0,r.I0)();return(0,l.jsxs)("form",{className:"flex flex-col p-7 rounded-xl border border-solid border-black bg-green-300",onSubmit:function(n){n.preventDefault();var r=new FormData(n.target),o=Object.fromEntries(r),l=o.name,s={name:l,number:o.number};e.map((function(e){return e.name})).includes(l)?alert("".concat(l," is already in contacts")):(t((0,a.G3)(s)),n.target.reset())},children:[(0,l.jsx)("label",{className:"mb-2 text-2xl font-sm text-red-600",htmlFor:"name",children:"Name"}),(0,l.jsx)("input",{className:"mb-6 text-2xl font-sm py-1 px-5 rounded-xl border border-black",id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Enter name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,l.jsx)("label",{className:"mb-2 text-2xl font-sm text-red-600",htmlFor:"phone",children:"Number"}),(0,l.jsx)("input",{className:"mb-6 text-2xl font-sm py-1 px-5 rounded-xl border border-black",id:"phone",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"000-000-0000",required:!0}),(0,l.jsx)("button",{className:"bg-yellow-300 shadow-4x1 rounded-xl border border-solid border-black hover:border-yellow-300 hover:bg-green-500 focus:border-yellow-300 focus:bg-green-500 text-2xl font-medium hover:text-yellow-300 focus:text-yellow-300 active:bg-red-500 py-1 px-5",type:"submit",children:"Add contact"})]})},c=n(2791),i=n(809),u=n(885),d=n(2007),f=n.n(d),m=n(4164),p=function(e){var t=e.handleCloseModal,n=e.handleCloseModalKeyDown,o=e.setShowModal,s=e.contact,i=s.id,u=s.name,d=s.number,f=(0,r.I0)();(0,c.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[n]);return m.createPortal((0,l.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-backdrop",onClick:t,onKeyDown:n,children:(0,l.jsxs)("div",{className:"flex flex-col py-10 px-20 bg-white rounded-xl border-2 border-solid border-yellow-300",children:[(0,l.jsx)("p",{className:"text-4xl font-medium text-center mb-3",children:"Enter new data for:"}),(0,l.jsxs)("span",{className:"text-lg font-medium",children:["Name contact: ",u]}),(0,l.jsxs)("span",{className:"text-lg font-medium",children:["Number contact: ",d]}),(0,l.jsxs)("form",{className:"flex flex-col p-7 rounded-xl border border-solid border-black bg-green-300 mt-6",onSubmit:function(e){e.preventDefault();var t=new FormData(e.target),n=Object.fromEntries(t),r=n.name,l=n.number,s={id:i,name:r,number:l};f((0,a.A_)(s)),e.target.reset(),o(!1)},children:[(0,l.jsx)("label",{className:"mb-2 text-2xl font-medium text-red-600",htmlFor:"name",children:"Name"}),(0,l.jsx)("input",{className:"mb-6 text-2xl font-medium py-1 px-5 rounded-xl border border-black",id:"name",type:"text",name:"name",defaultValue:u,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Enter name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,l.jsx)("label",{className:"mb-2 text-2xl font-medium text-red-600",htmlFor:"phone",children:"Number"}),(0,l.jsx)("input",{className:"mb-6 text-2xl font-medium py-1 px-5 rounded-xl border border-black",id:"phone",type:"tel",name:"number",defaultValue:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"000-000-0000",required:!0}),(0,l.jsx)("button",{className:"bg-yellow-300 shadow-4x1 rounded-xl border border-solid border-black hover:border-yellow-300 hover:bg-green-500 focus:border-yellow-300 focus:bg-green-500 text-2xl font-medium hover:text-yellow-300 focus:text-yellow-300 active:bg-red-500 py-1 px-5",type:"submit",children:"Edit contact"})]})]})}),document.body)};p.protoTypes={handleCloseModalKeyDown:f().func,handleCloseModal:f().func,contact:f().objectOf({id:f().string,name:f().string,number:f().string})};var x=function(e){var t=e.contact,n=t.id,o=t.name,s=t.number,i=(0,c.useState)(!1),d=(0,u.Z)(i,2),f=d[0],m=d[1],x=(0,r.I0)();return(0,l.jsxs)("li",{className:"flex justify-between gap-4 items-baseline",children:[(0,l.jsxs)("span",{className:"text-2xl font-medium",children:[o,": ",s]}),(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsx)("button",{className:"bg-yellow-300 shadow-4x1 rounded-xl border border-solid border-black hover:border-yellow-300 hover:bg-green-500 focus:border-yellow-300 focus:bg-green-500 text-2xl font-medium hover:text-yellow-300 focus:text-yellow-300 active:bg-red-500 py-1 px-5",onClick:function(e){e.preventDefault(),m(!0)},type:"button",children:"Edit"}),(0,l.jsx)("button",{className:"bg-yellow-300 shadow-4x1 rounded-xl border border-solid border-black hover:border-yellow-300 hover:bg-green-500 focus:border-yellow-300 focus:bg-green-500 text-2xl font-medium hover:text-yellow-300 focus:text-yellow-300 active:bg-red-500 py-1 px-5",onClick:function(){return function(e){x((0,a.ku)(e))}(n)},type:"button",children:"Delete"})]}),f&&(0,l.jsx)(p,{handleCloseModal:function(e){e.currentTarget===e.target&&m(!1)},handleCloseModalKeyDown:function(e){"Escape"===e.code&&m(!1)},setShowModal:m,contact:{id:n,name:o,number:s}})]})};x.protoTypes={contact:f().objectOf({id:f().string,name:f().string,number:f().string})};var b=function(){var e=(0,r.I0)(),t=(0,r.v9)(i.Qb),n=(0,r.v9)(i.vI),s=(0,r.v9)(o.xU),u=(0,r.v9)(o.zh),d=(0,r.v9)(o.DI);return(0,c.useEffect)((function(){t&&e((0,a.m$)())}),[t,n,e]),(0,l.jsxs)("div",{className:" ml-9 grow",children:[s?(0,l.jsx)("p",{className:"text-2xl text-red-400 font-sm mb-4",children:"Loading data ..."}):(0,l.jsx)("p",{className:"text-2xl text-green-700 font-sm mb-4",children:"Contacts:"}),u&&(0,l.jsxs)("p",{className:"text-2xl text-red-400 font-sm mb-4",children:["Error: ",u]}),(0,l.jsx)("ul",{className:"flex flex-col gap-3",children:d.map((function(e){return(0,l.jsx)(x,{contact:e},e.id)}))})]})},h=n(8429),y=function(){var e=(0,r.I0)();return(0,l.jsxs)("div",{className:"flex flex-col p-7 rounded-xl border border-solid border-black bg-green-300",children:[(0,l.jsx)("label",{className:"mb-2 text-2xl font-sm",htmlFor:"find",children:"Find contacts by name"}),(0,l.jsx)("input",{className:"text-2xl font-sm py-1 px-5 rounded-xl border border-black",onChange:function(t){var n=t.target;e((0,h.w)(n.value.toLowerCase()))},id:"find",type:"text",name:"findName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Enter name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},v=function(){return(0,l.jsxs)("div",{className:"flex gap-6 p-7 justify-between",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,l.jsx)(s,{}),(0,l.jsx)(y,{})]}),(0,l.jsx)(b,{})]})}},2653:function(e,t,n){"use strict";n.d(t,{Af:function(){return i},zh:function(){return d},DI:function(){return f},xU:function(){return u}});var r="NOT_FOUND";var o=function(e,t){return e===t};function a(e,t){var n="object"===typeof t?t:{equalityCheck:t},a=n.equalityCheck,l=void 0===a?o:a,s=n.maxSize,c=void 0===s?1:s,i=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(l),d=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:r},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function o(e){var o=n.findIndex((function(n){return t(e,n.key)}));if(o>-1){var a=n[o];return o>0&&(n.splice(o,1),n.unshift(a)),a.value}return r}return{get:o,put:function(t,a){o(t)===r&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,u);function f(){var t=d.get(arguments);if(t===r){if(t=e.apply(null,arguments),i){var n=d.getEntries(),o=n.find((function(e){return i(e.value,t)}));o&&(t=o.value)}d.put(arguments,t)}return t}return f.clearCache=function(){return d.clear()},f}function l(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function s(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var a,s=0,c={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(c=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var u=c,d=u.memoizeOptions,f=void 0===d?n:d,m=Array.isArray(f)?f:[f],p=l(r),x=e.apply(void 0,[function(){return s++,i.apply(null,arguments)}].concat(m)),b=e((function(){for(var e=[],t=p.length,n=0;n<t;n++)e.push(p[n].apply(null,arguments));return a=x.apply(null,e)}));return Object.assign(b,{resultFunc:i,memoizedResultFunc:x,dependencies:p,lastResult:function(){return a},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),b};return o}var c=s(a),i=function(e){return e.contacts.contacts.items},u=function(e){return e.contacts.contacts.isLoading},d=function(e){return e.contacts.error},f=c([i,function(e){return e.filter.filter}],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}))},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,l){if(l!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=3.f1a96504.chunk.js.map