(this["webpackJsonpwanted-preonboarding-subject-1"]=this["webpackJsonpwanted-preonboarding-subject-1"]||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(18),s=n.n(a),i=(n(24),n(3)),o=n.n(i),u=n(9),j=n(4),b=n(5),l=(n(26),n(19)),d=n.n(l),p=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("".concat("https://jsonplaceholder.typicode.com/comments"),{params:{_page:t,_limit:10}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),r=n[0],a=n[1],s=Object(c.useCallback)(function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t[0].isIntersecting?a(!0):a(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),i={root:null,rootMargin:"200px",threshold:.01};return Object(c.useEffect)((function(){var t=new IntersectionObserver(s,i);return e.current&&t.observe(e.current),function(){return t.disconnect()}}),[s]),{isIntersect:r}},h=n(0),O=function(e){var t=e.data;return Object(h.jsx)("ul",{children:t.map((function(e){return Object(h.jsx)("li",{className:"comment-wrapper",children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"comment-info-wrapper inline",children:[Object(h.jsx)("h4",{children:"Comment Id"}),Object(h.jsx)("span",{children:e.id})]}),Object(h.jsxs)("div",{className:"comment-info-wrapper inline",children:[Object(h.jsx)("h4",{children:"Email"}),Object(h.jsx)("span",{children:e.email})]}),Object(h.jsxs)("div",{className:"comment-info-wrapper",children:[Object(h.jsx)("h4",{children:" Comment"}),Object(h.jsx)("p",{children:e.body})]})]})},e.id)}))})};var m=function(){var e=Object(c.useState)(1),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(b.a)(a,2),i=s[0],l=s[1],d=Object(c.useRef)(null),m=Object(c.useState)(!1),v=Object(b.a)(m,2),x=v[0],w=v[1],g=f(d).isIntersect,k=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g){e.next=5;break}return e.next=3,p(n);case 3:0===(t=e.sent).length?w(!0):(l([].concat(Object(u.a)(i),Object(u.a)(t))),r((function(e){return e+1})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){k()}),[g,x]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(O,{data:i}),!x&&Object(h.jsx)("div",{id:"intersectElement",ref:d,children:"Loading..."})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.3a74584b.chunk.js.map