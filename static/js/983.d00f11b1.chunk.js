"use strict";(self.webpackChunkrent_cars=self.webpackChunkrent_cars||[]).push([[983],{4983:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t=r(2791),i=r(9434),o=r(5307),a=r(5632),u=r(3433),l="NOT_FOUND";var c=function(n,e){return n===e};function p(n,e){var r="object"===typeof e?e:{equalityCheck:e},t=r.equalityCheck,i=void 0===t?c:t,o=r.maxSize,a=void 0===o?1:o,u=r.resultEqualityCheck,p=function(n){return function(e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,i=0;i<t;i++)if(!n(e[i],r[i]))return!1;return!0}}(i),s=1===a?function(n){var e;return{get:function(r){return e&&n(e.key,r)?e.value:l},put:function(n,r){e={key:n,value:r}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(p):function(n,e){var r=[];function t(n){var t=r.findIndex((function(r){return e(n,r.key)}));if(t>-1){var i=r[t];return t>0&&(r.splice(t,1),r.unshift(i)),i.value}return l}return{get:t,put:function(e,i){t(e)===l&&(r.unshift({key:e,value:i}),r.length>n&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(a,p);function f(){var e=s.get(arguments);if(e===l){if(e=n.apply(null,arguments),u){var r=s.getEntries(),t=r.find((function(n){return u(n.value,e)}));t&&(e=t.value)}s.put(arguments,e)}return e}return f.clearCache=function(){return s.clear()},f}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return e}function f(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];var i=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var o,a=0,u={memoizeOptions:void 0},l=t.pop();if("object"===typeof l&&(u=l,l=t.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var c=u,p=c.memoizeOptions,f=void 0===p?r:p,d=Array.isArray(f)?f:[f],x=s(t),h=n.apply(void 0,[function(){return a++,l.apply(null,arguments)}].concat(d)),v=n((function(){for(var n=[],e=x.length,r=0;r<e;r++)n.push(x[r].apply(null,arguments));return o=h.apply(null,n)}));return Object.assign(v,{resultFunc:l,memoizedResultFunc:h,dependencies:x,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),v};return i}var d,x,h,v,g,m,b,y,j=f(p),w=function(n){return n.cars.items},k=j([w],(function(n){return(0,u.Z)(new Set(n.map((function(n){return n.make}))))})),Z=r(168),A=r(5867),P=A.ZP.form(d||(d=(0,Z.Z)(["\n  display: flex;\n  width: 859px;\n  height: 74px;\n  align-items: flex-end;\n  gap: 18px;\n\n  margin-bottom: 50px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),z=A.ZP.div(x||(x=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n\n  & .range-wrap {\n    display: flex;\n  }\n"]))),C=A.ZP.label(h||(h=(0,Z.Z)(["\n  color: #8a8a89;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n"]))),E=A.ZP.div(v||(v=(0,Z.Z)(["\n  position: relative;\n\n  & .icon {\n    position: absolute;\n    right: 18px;\n    top: 14px;\n\n    width: 20px;\n    height: 20px;\n\n    pointer-events: none;\n\n    &:hover,\n    &:focus {\n      background-color: red;\n    }\n  }\n"]))),F=A.ZP.select(g||(g=(0,Z.Z)(["\n  height: 48px;\n\n  border-radius: 14px;\n  background: #f7f7fb;\n  border-color: transparent;\n  appearance: none;\n\n  color: #121417;\n  font-size: 18px;\n  font-weight: 500;\n\n  &#brand {\n    padding: 14px 18px;\n    width: 224px;\n  }\n\n  &#price {\n    padding: 14px 18px;\n    width: 125px;\n  }\n"]))),S=A.ZP.input(m||(m=(0,Z.Z)(["\n  border-color: transparent;\n\n  color: #121417;\n  font-size: 18px;\n  font-weight: 500;\n\n  &#from {\n    width: 160px;\n    height: 48px;\n    padding: 14px 24px 14px 45px;\n\n    border-radius: 14px 0px 0px 14px;\n    border-right: 1px solid rgba(138, 138, 137, 0.2);\n    background: #f7f7fb;\n  }\n\n  &#to {\n    width: 160px;\n    height: 48px;\n    padding: 14px 24px 14px 24px;\n\n    border-radius: 0px 14px 14px 0px;\n    background: #f7f7fb;\n  }\n"]))),O=A.ZP.span(b||(b=(0,Z.Z)(["\n position: absolute;\n    left: 5px;\n    top: 25px;\n    transform: translateY(-50%);\n  }\n"]))),q=A.ZP.button(y||(y=(0,Z.Z)(["\n  display: flex;\n  width: 136px;\n  height: 48px;\n  padding: 14px 44px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  border-color: transparent;\n  background: #3470ff;\n\n  color: #fff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),M=r(1377),N=r(7441),I=r(3329);var R=function(){var n=(0,i.v9)(k),e=(0,i.v9)(w),r=(0,i.I0)(),t=(0,N.qQ)(e);return(0,I.jsxs)(P,{onSubmit:function(n){n.preventDefault();var e=n.target,t=e.brand,i=e.price,o=e.from,a=e.to,u={brand:t.value,price:i.value,minMile:o.value,maxMile:a.value};r((0,M.Mc)(u))},children:[(0,I.jsxs)(z,{children:[(0,I.jsx)(C,{htmlFor:"brand",children:"Car brand"}),(0,I.jsx)(E,{children:(0,I.jsxs)(F,{id:"brand",children:[(0,I.jsx)("option",{value:"",children:"All"}),n.map((function(n){return(0,I.jsx)("option",{value:"All"!==n?n:"",children:n},n)}))]})})]}),(0,I.jsxs)(z,{children:[(0,I.jsx)(C,{htmlFor:"price",children:"Price/ 1 hour"}),(0,I.jsx)(E,{children:(0,I.jsxs)(F,{id:"price",children:[(0,I.jsx)("option",{value:"",children:"To: "}),t.map((function(n){return(0,I.jsx)("option",{value:"All"!==n?n:"",children:n},n)}))]})})]}),(0,I.jsxs)(z,{children:[(0,I.jsx)(C,{htmlFor:"price",children:"\u0421ar mileage / km"}),(0,I.jsxs)("div",{style:{display:"flex"},children:[(0,I.jsxs)("div",{style:{position:"relative"},children:[(0,I.jsx)(O,{className:"from",children:"From:"}),(0,I.jsx)(S,{type:"text",id:"from"})]}),(0,I.jsxs)("div",{style:{position:"relative"},children:[(0,I.jsx)(O,{className:"to",children:"To:"}),(0,I.jsx)(S,{type:"text",id:"to"})]})]})]}),(0,I.jsx)(q,{type:"submit",children:"Search"})]})};var T=function(){var n=(0,i.v9)(w),e=(0,i.I0)();return(0,t.useEffect)((function(){e((0,o.c)())}),[e]),(0,I.jsxs)("div",{children:[(0,I.jsx)(R,{}),(0,I.jsx)(a.Z,{cars:n})]})}}}]);
//# sourceMappingURL=983.d00f11b1.chunk.js.map