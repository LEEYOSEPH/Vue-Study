(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c5486ee"],{4385:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"main list-container contents"},[a("h1",{staticClass:"page-header"},[t._v("GE SI PAN")]),a("ul",t._l(t.boardItems,(function(e){return a("board-list-item",{key:e.board_no,attrs:{boardItem:e},on:{refresh:t.fetchData}})})),1)]),t.isLogin?a("router-link",{staticClass:"create-button",attrs:{to:"/add"}},[a("i",{staticClass:"icon ion-md-create"})]):t._e()],1)},n=[],o=(a("96cf"),a("1da1")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{on:{click:t.getBoardDetail}},[a("div",{staticClass:"board-title"},[t._v("\n    "+t._s(t.boardItem.board_title)+"\n  ")]),a("div",{staticClass:"board-contents"},[t._v("\n    "+t._s(t.boardItem.board_content)+"\n  ")]),a("div",{staticClass:"board-time"},[t._v("\n    "+t._s(t._f("formatDate")(t.boardItem.board_updateDt))+"\n  ")])])},s=[],c={props:{boardItem:{type:Object,required:!0}},methods:{getBoardDetail:function(){var t=this.boardItem.board_no;this.$store.commit("getBoardNo",t),this.$router.push("/board/".concat(t))}}},u=c,d=a("2877"),l=Object(d["a"])(u,i,s,!1,null,null,null),b=l.exports,f=a("7e81"),p={components:{BoardListItem:b},data:function(){return{boardItems:[]}},computed:{isLogin:function(){return this.$store.getters.isLogin}},methods:{fetchData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f["b"])();case 3:e=t.sent,a=e.data,this.boardItems=a,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetchData()}},m=p,h=(a("b4ab"),Object(d["a"])(m,r,n,!1,null,null,null));e["default"]=h.exports},"7e81":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s}));var r=a("bc3a"),n=a.n(r);function o(t){var e="/api/board/createBoard";return n.a.post(e,t)}function i(){var t="/api/board/getBoard";return n.a.get(t)}function s(t){var e="/api/board/getBoardDetail";return n.a.post(e,t)}},b4ab:function(t,e,a){"use strict";a("d742")},d742:function(t,e,a){}}]);
//# sourceMappingURL=chunk-9c5486ee.93597530.js.map