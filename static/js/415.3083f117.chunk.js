"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{5415:function(n,t,e){e.r(t);var r=e(2791),u=e(9434),o=e(809),c=e(2653),i=e(6121),a=e(3329);t.default=function(){var n=(0,u.I0)(),t=(0,u.v9)(o.zr),e=(0,u.v9)(o.I_),l=(0,u.v9)(o.Qb),f=(0,u.v9)(c.Af),s=(0,u.v9)(o.vI);return(0,r.useEffect)((function(){l&&n((0,i.m$)())}),[l,s,n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"text-3xl font-bold underline text-center m-5",children:"Welcome"}),l&&(0,a.jsxs)("div",{className:"rounded-xl border-2 border-solid border-black p-5 bg-green-300",children:[(0,a.jsxs)("p",{className:"py-1 font-sm font-normal text-2xl",children:["Welcome ",(0,a.jsx)("span",{className:"font-bold",children:t})]}),(0,a.jsxs)("p",{className:"py-1 font-sm font-normal text-2xl",children:["Your's E-mail address: ",(0,a.jsx)("span",{className:"font-bold",children:e})]}),(0,a.jsxs)("p",{className:"py-1 font-sm font-normal text-2xl",children:["Your's contacts in database: ",(0,a.jsx)("span",{className:"font-bold",children:f.length})]})]})]})}},2653:function(n,t,e){e.d(t,{Af:function(){return l},zh:function(){return s},DI:function(){return p},xU:function(){return f}});var r="NOT_FOUND";var u=function(n,t){return n===t};function o(n,t){var e="object"===typeof t?t:{equalityCheck:t},o=e.equalityCheck,c=void 0===o?u:o,i=e.maxSize,a=void 0===i?1:i,l=e.resultEqualityCheck,f=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,u=0;u<r;u++)if(!n(t[u],e[u]))return!1;return!0}}(c),s=1===a?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:r},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(f):function(n,t){var e=[];function u(n){var u=e.findIndex((function(e){return t(n,e.key)}));if(u>-1){var o=e[u];return u>0&&(e.splice(u,1),e.unshift(o)),o.value}return r}return{get:u,put:function(t,o){u(t)===r&&(e.unshift({key:t,value:o}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(a,f);function p(){var t=s.get(arguments);if(t===r){if(t=n.apply(null,arguments),l){var e=s.getEntries(),u=e.find((function(n){return l(n.value,t)}));u&&(t=u.value)}s.put(arguments,t)}return t}return p.clearCache=function(){return s.clear()},p}function c(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function i(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var u=function(){for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];var o,i=0,a={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(a=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var f=a,s=f.memoizeOptions,p=void 0===s?e:s,d=Array.isArray(p)?p:[p],v=c(r),m=n.apply(void 0,[function(){return i++,l.apply(null,arguments)}].concat(d)),h=n((function(){for(var n=[],t=v.length,e=0;e<t;e++)n.push(v[e].apply(null,arguments));return o=m.apply(null,n)}));return Object.assign(h,{resultFunc:l,memoizedResultFunc:m,dependencies:v,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return u}var a=i(o),l=function(n){return n.contacts.contacts.items},f=function(n){return n.contacts.contacts.isLoading},s=function(n){return n.contacts.error},p=a([l,function(n){return n.filter.filter}],(function(n,t){return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}))}}]);
//# sourceMappingURL=415.3083f117.chunk.js.map