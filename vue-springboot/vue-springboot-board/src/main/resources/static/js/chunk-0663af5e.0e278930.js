(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0663af5e"],{"7e81":function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return i})),r.d(e,"h",(function(){return s})),r.d(e,"g",(function(){return u})),r.d(e,"b",(function(){return c})),r.d(e,"i",(function(){return d})),r.d(e,"c",(function(){return l})),r.d(e,"f",(function(){return f})),r.d(e,"e",(function(){return b}));var n=r("bc3a"),a=r.n(n);function o(t){var e="/api/board/createBoard";return a.a.post(e,t)}function i(){var t="/api/board/getBoard";return a.a.get(t)}function s(t){var e="/api/board/getBoardDetail";return a.a.post(e,t)}function u(t){var e="/api/board/getMyBoard";return a.a.post(e,t)}function c(t){var e="/api/board/deleteBoard";return a.a.post(e,t)}function d(t){var e="/api/board/modifyBoard";return a.a.post(e,t)}function l(t){var e="/api/board/editBoard";return a.a.put(e,t)}function f(){var t="/api/board/MostViewedBoard";return a.a.get(t)}function b(){var t="/api/board/mostLikesBoard";return a.a.get(t)}},e756:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"main list-container contents"},[r("h1",{staticClass:"page-header"},[t._v("Most Likes Board List")]),r("app-navi"),r("ul",t._l(t.boardItems,(function(e){return r("most-likes-list-item",{key:e.board_no,attrs:{boardItem:e},on:{refresh:t.fetchData}})})),1),r("router-link",{staticClass:"create-button",attrs:{to:"/add"}},[r("i",{staticClass:"ion-md-add"})])],1)])},a=[],o=(r("96cf"),r("1da1")),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("div",{staticClass:"board-title"},[t._v("\n    "+t._s(t.boardItem.board_title)+"\n  ")]),r("div",{staticClass:"board-contents",on:{click:t.getBoardDetail}},[t._v("\n    "+t._s(t.boardItem.board_content)+"\n  ")]),r("div",{staticClass:"board-info"},[t._v("\n    "+t._s(t.boardItem.board_cnt)+" Views | "+t._s(t.boardItem.likes_cnt)+" Likes |\n    "+t._s(t.boardItem.reply_cnt)+" Coments\n  ")]),r("div",{staticClass:"board-time"},[t._v("\n    "+t._s(t._f("formatDate")(t.boardItem.board_updateDt))+"\n  ")])])},s=[],u={props:{boardItem:{type:Object,required:!0}},methods:{getBoardDetail:function(){var t=this.boardItem.board_no;this.$store.commit("getBoardNo",t),this.$router.push("/board/".concat(t))}}},c=u,d=r("2877"),l=Object(d["a"])(c,i,s,!1,null,null,null),f=l.exports,b=r("f8d9"),p=r("7e81"),v={components:{MostLikesListItem:f,AppNavi:b["a"]},data:function(){return{boardItems:[]}},methods:{fetchData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(p["e"])();case 3:e=t.sent,r=e.data,console.log(r),this.boardItems=r,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetchData()}},m=v,_=Object(d["a"])(m,n,a,!1,null,null,null);e["default"]=_.exports},f8d9:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-link",{attrs:{to:"/"}},[t._v("Current |")]),r("router-link",{attrs:{to:"/viewed"}},[t._v(" Most Viewed |")]),r("router-link",{attrs:{to:"/likes"}},[t._v(" Most Likes ")]),t.isLogin?r("router-link",{attrs:{to:"/myboard"}},[t._v(" | My Board ")]):t._e()],1)},a=[],o={computed:{isLogin:function(){return this.$store.getters.isLogin}}},i=o,s=r("2877"),u=Object(s["a"])(i,n,a,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-0663af5e.0e278930.js.map