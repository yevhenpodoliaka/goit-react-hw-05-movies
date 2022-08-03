"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[149],{362:function(A,n,t){t.d(n,{Z:function(){return R}});var r,e,a,u,c=t(168),i=t(444),o=t(501),s=i.ZP.li(r||(r=(0,c.Z)(["\n      width:calc((100% - 45px) / 4);\n    background-color: #f1f1f1;\n"]))),p=i.ZP.img(e||(e=(0,c.Z)(["\n  width:100%;\n   display:block;\n"]))),f=(0,i.ZP)(o.OL)(a||(a=(0,c.Z)(["\n    text-decoration:none;\n    color:black;\n    \n"]))),l=t(871),h=t(775),x=t(184);function d(A){var n=A.id,t=A.title,r=A.poster_path,e=(0,l.TH)(),a=r?"https://image.tmdb.org/t/p/w500/".concat(r):"".concat(h);return(0,x.jsx)(s,{children:(0,x.jsxs)(f,{to:"/movies/".concat(n),state:{from:e},children:[(0,x.jsx)(p,{src:a,alt:t}),(0,x.jsx)("p",{children:t})]})})}var E=i.ZP.ul(u||(u=(0,c.Z)(["\n    display:flex;\n    flex-wrap:wrap;\n    gap:15px;\n    padding: 20px 0;\n"])));function R(A){var n=A.items;return(0,x.jsx)(E,{children:n.map((function(A){var n=A.id,t=A.title,r=A.poster_path;return(0,x.jsx)(d,{title:t,id:n,poster_path:r},n)}))})}},149:function(A,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(861),e=t(885),a=t(757),u=t.n(a),c=t(791),i=t(184);function o(A){var n=A.onSubmit,t=(0,c.useState)(""),r=(0,e.Z)(t,2),a=r[0],u=r[1];return(0,i.jsxs)("form",{onSubmit:function(A){A.preventDefault(),n(a),u("")},children:[(0,i.jsx)("input",{type:"text",value:a,onChange:function(A){u(A.target.value)}}),(0,i.jsx)("button",{type:"submit",children:"submit"})]})}var s=t(362),p=t(782),f=t(501);function l(){var A=(0,c.useState)([]),n=(0,e.Z)(A,2),t=n[0],a=n[1],l=(0,f.lr)(),h=(0,e.Z)(l,2),x=h[0],d=h[1],E=x.get("query");return(0,c.useEffect)((function(){function A(){return(A=(0,r.Z)(u().mark((function A(){var n;return u().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,p.Ai)(E);case 3:return n=A.sent,A.next=6,a(n.results);case 6:A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),console.log(A.t0);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})))).apply(this,arguments)}E&&""!==E.trim()&&function(){A.apply(this,arguments)}()}),[E]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{onSubmit:function(A){d(""!==A?{query:A}:{})}}),0===t.length&&null!==E?(0,i.jsx)("p",{children:"Your query did not return any results, please try again!"}):(0,i.jsx)(s.Z,{items:t})]})}},782:function(A,n,t){t.d(n,{Ai:function(){return f},Bt:function(){return d},Mc:function(){return s},Q2:function(){return i},y:function(){return h}});var r=t(861),e=t(757),a=t.n(e),u="b6201d5209ec246f483ea16253167a90",c="https://api.themoviedb.org/3";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function A(){var n,t,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n="".concat(c,"/trending/movie/day?api_key=").concat(u,"&language=en-US&page=",1),A.next=3,fetch(n);case 3:return t=A.sent,r=t.json(),A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function s(A){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function A(n){var t,r,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="".concat(c,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US"),A.next=3,fetch(t);case 3:return r=A.sent,A.next=6,r.json();case 6:return e=A.sent,A.abrupt("return",e);case 8:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function f(A){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function A(n){var t,r,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="".concat(c,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n,"&page=",1,"&include_adult=false"),A.next=3,fetch(t);case 3:return r=A.sent,e=r.json(),A.abrupt("return",e);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function h(A){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function A(n){var t,r,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"),A.next=3,fetch(t);case 3:return r=A.sent,e=r.json(),A.abrupt("return",e);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function d(A){return E.apply(this,arguments)}function E(){return(E=(0,r.Z)(a().mark((function A(n){var t,r,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US"),A.next=3,fetch(t);case 3:return r=A.sent,e=r.json(),A.abrupt("return",e);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}},775:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=149.94e67ce5.chunk.js.map