"use strict";(self.webpackChunkLala_Band=self.webpackChunkLala_Band||[]).push([[769],{769:function(n,e,i){i.r(e),i.d(e,{default:function(){return l}});var t=i(439),c=i(791),r=i(87),a=i(184),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzliZGFlZWZiY2VmMzYwMGM1Mzc2ZDdiYjE1MjAwZSIsInN1YiI6IjY0ODk5NTA2ZTI3MjYwMDBjOTMyYzA2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I0pyIiTN3e3yKqy8iOOQ2oQi3mIPg0A-5_HoIOdhlQ8")}},s={display:"flex",flexDirection:"column",gap:"10px"};function l(){var n=(0,c.useState)(!0),e=(0,t.Z)(n,2),i=e[0],r=e[1],s=(0,c.useState)([]),l=(0,t.Z)(s,2),d=l[0],h=l[1];return(0,c.useEffect)((function(){h([]),fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",o).then((function(n){return n.json()})).then((function(n){h(n.results)})).catch((function(n){return console.error(n)})).finally((function(){r(!1)}))}),[]),(0,a.jsxs)("div",{style:{padding:"50px 80px"},children:[(0,a.jsx)("h2",{children:"Trending today"}),i&&(0,a.jsx)("h3",{children:"The trending movies are loading"}),!i&&(0,a.jsx)(u,{movies:d})]})}function u(n){var e=n.movies;return(0,a.jsx)("div",{style:s,children:e.map((function(n,e){return(0,a.jsx)(r.rU,{to:"/movies/".concat(n.id),children:n.title},e)}))})}}}]);
//# sourceMappingURL=769.f8a3288e.chunk.js.map