"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[43],{43:function(A,n,e){e.r(n),e.d(n,{default:function(){return M}});var r,t,a,c,i,o,u,s,p,x,l=e(168),h=e(861),d=e(885),f=e(757),v=e.n(f),g=e(444),E=e(791),m=e(501),R=e(871),Z=e(782),j=(0,g.ZP)(m.rU)(r||(r=(0,l.Z)(["\n    position:absolute;\n    color:blue;\n    text-decoration:none;\n    &:hover{\n        transform: scale(1.3);\n        font-weight:bold;\n    }\n"]))),Y=g.ZP.div(t||(t=(0,l.Z)(["\n    display:flex;\n    width:100%;\n\n"]))),J=g.ZP.div(a||(a=(0,l.Z)(["\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    padding:25px;\n    background-color: #f1f1f1;\n    width:35%;\n\n"]))),b=g.ZP.img(c||(c=(0,l.Z)(["\n    width: 100%;\n    height:auto;\n    display:block;\n    object-fit:cover;\n\n"]))),k=g.ZP.div(i||(i=(0,l.Z)(["\nwidth:65%;\n text-align:start;\n  padding: 0 50px;\n  background-color:grey;\n  color:white;\n\n"]))),U=g.ZP.h2(o||(o=(0,l.Z)(["\n    margin-bottom:20px;\n"]))),w=g.ZP.h3(u||(u=(0,l.Z)(["\n    margin-bottom:5px;\n"]))),Q=g.ZP.p(s||(s=(0,l.Z)(["\n    margin-bottom:10px;\n"]))),B=e(775),C=e(184);function K(A){var n,e,r=A.poster_path,t=A.title,a=A.overview,c=A.genres,i=void 0===c?[]:c,o=r?"https://image.tmdb.org/t/p/w500/".concat(r):"".concat(B),u=i.map((function(A){return A.name})).join(", "),s=(0,R.TH)();return(0,C.jsxs)(Y,{children:[(0,C.jsx)(j,{to:null!==(n=null===(e=s.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:" Go back"}),(0,C.jsx)(J,{children:(0,C.jsx)(b,{src:o,alt:t})}),(0,C.jsxs)(k,{children:[(0,C.jsx)(U,{children:t}),(0,C.jsx)(w,{children:" About  "}),(0,C.jsx)(Q,{children:a}),(0,C.jsx)(w,{children:" Genres  "}),(0,C.jsx)(Q,{children:u})]})]})}function M(){var A=(0,E.useState)({}),n=(0,d.Z)(A,2),e=n[0],r=n[1],t=(0,R.UO)().movieId;return(0,E.useEffect)((function(){function A(){return(A=(0,h.Z)(v().mark((function A(){var n;return v().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,Z.Mc)(t);case 3:return n=A.sent,A.next=6,r(n);case 6:A.next=10;break;case 8:A.prev=8,A.t0=A.catch(0);case 10:case"end":return A.stop()}}),A,null,[[0,8]])})))).apply(this,arguments)}!function(){A.apply(this,arguments)}()}),[t]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(K,{poster_path:e.poster_path,title:e.title,overview:e.overview,genres:e.genres}),(0,C.jsxs)(G,{children:[(0,C.jsx)("h3",{children:"Additional Information"}),(0,C.jsx)(S,{to:"cast",children:"cast"}),(0,C.jsx)(S,{to:"reviews",children:"reviews"}),(0,C.jsx)(E.Suspense,{fallback:(0,C.jsx)("div",{children:"Loading..."}),children:(0,C.jsx)(R.j3,{})})]})]})}var G=g.ZP.div(p||(p=(0,l.Z)(["\n      background-color: #f1f1f1;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n    display:flex;\n    flex-direction:column;\n"]))),S=(0,g.ZP)(m.OL)(x||(x=(0,l.Z)(["\n  text-decoration:none;\n  color:black;\n  &.active{\n    color: blue;\n    font-weight:bold;\n  } \n"])))},782:function(A,n,e){e.d(n,{Ai:function(){return x},Bt:function(){return f},Mc:function(){return s},Q2:function(){return o},y:function(){return h}});var r=e(861),t=e(757),a=e.n(t),c="b6201d5209ec246f483ea16253167a90",i="https://api.themoviedb.org/3";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function A(){var n,e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n="".concat(i,"/trending/movie/day?api_key=").concat(c,"&language=en-US&page=",1),A.next=3,fetch(n);case 3:return e=A.sent,r=e.json(),A.abrupt("return",r);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function s(A){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function A(n){var e,r,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="".concat(i,"/movie/").concat(n,"?api_key=").concat(c,"&language=en-US"),A.next=3,fetch(e);case 3:return r=A.sent,A.next=6,r.json();case 6:return t=A.sent,A.abrupt("return",t);case 8:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function x(A){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function A(n){var e,r,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="".concat(i,"/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(n,"&page=",1,"&include_adult=false"),A.next=3,fetch(e);case 3:return r=A.sent,t=r.json(),A.abrupt("return",t);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function h(A){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function A(n){var e,r,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(c,"&language=en-US"),A.next=3,fetch(e);case 3:return r=A.sent,t=r.json(),A.abrupt("return",t);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function f(A){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function A(n){var e,r,t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US"),A.next=3,fetch(e);case 3:return r=A.sent,t=r.json(),A.abrupt("return",t);case 6:case"end":return A.stop()}}),A)})))).apply(this,arguments)}},775:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=43.e1886ef0.chunk.js.map