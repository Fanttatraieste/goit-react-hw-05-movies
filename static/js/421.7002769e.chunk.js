"use strict";(self.webpackChunkLala_Band=self.webpackChunkLala_Band||[]).push([[421],{421:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var i=e(439),a=e(791),c=e(689),r=e(184),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzliZGFlZWZiY2VmMzYwMGM1Mzc2ZDdiYjE1MjAwZSIsInN1YiI6IjY0ODk5NTA2ZTI3MjYwMDBjOTMyYzA2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I0pyIiTN3e3yKqy8iOOQ2oQi3mIPg0A-5_HoIOdhlQ8")}};function s(){var t=(0,a.useState)(!0),n=(0,i.Z)(t,2),e=n[0],s=n[1],h=(0,a.useState)([]),l=(0,i.Z)(h,2),u=l[0],d=l[1],p=(0,c.UO)().id;return(0,a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(p,"/credits?language=en-US"),o).then((function(t){return t.json()})).then((function(t){return d(t.cast)})).catch((function(t){return console.error(t)})).finally(s(!1))}),[p]),(0,r.jsxs)(r.Fragment,{children:[e&&(0,r.jsx)("p",{children:"The cast is loading"}),!e&&u.map((function(t){return(0,r.jsxs)("div",{style:{margin:"50px",backgroundColor:"#F5F5F5",border:"1px solid #1A120B"},children:[(0,r.jsx)("img",{style:{width:"100px",height:"100px",marginBottom:"10px",objectFit:"contain"},alt:t.name,src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path)}),(0,r.jsxs)("p",{children:[t.name," playing as ",t.character]})]},t.id)}))]})}}}]);
//# sourceMappingURL=421.7002769e.chunk.js.map