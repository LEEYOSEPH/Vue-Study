(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f836732"],{"7e81":function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"d",(function(){return i})),r.d(e,"h",(function(){return s})),r.d(e,"g",(function(){return c})),r.d(e,"b",(function(){return u})),r.d(e,"i",(function(){return d})),r.d(e,"c",(function(){return l})),r.d(e,"f",(function(){return f})),r.d(e,"e",(function(){return p}));var n=r("bc3a"),a=r.n(n);function o(t){var e="/api/board/createBoard";return a.a.post(e,t)}function i(){var t="/api/board/getBoard";return a.a.get(t)}function s(t){var e="/api/board/getBoardDetail";return a.a.post(e,t)}function c(t){var e="/api/board/getMyBoard";return a.a.post(e,t)}function u(t){var e="/api/board/deleteBoard";return a.a.post(e,t)}function d(t){var e="/api/board/modifyBoard";return a.a.post(e,t)}function l(t){var e="/api/board/editBoard";return a.a.put(e,t)}function f(){var t="/api/board/MostViewedBoard";return a.a.get(t)}function p(){var t="/api/board/mostLikesBoard";return a.a.get(t)}},c80a:function(t,e,r){},ca75:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("board-detail-form"),r("reply-page")],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contents"},[r("h1",{staticClass:"page-header"},[t._v("GE SI PAN")]),r("div",{staticClass:"form-wrapper"},[r("div",[r("h3",[t._v(t._s(t.board_title))])]),r("div",[t._v("\n      "+t._s(t.board_content)+"\n    ")]),r("div",[t._v(t._s(t.board_cnt)+" Views | "+t._s(t.likes_cnt)+"Likes")]),r("div",[r("i",{staticClass:"icon ion-md-heart",on:{click:t.likesCheck}}),t._v("\n      "+t._s(t._f("formatDate")(t.board_updateDt))+"\n    ")])])])},i=[],s=(r("96cf"),r("1da1")),c=r("7e81"),u=r("bc3a"),d=r.n(u);function l(t){var e="/api/likes/likesCheck";return d.a.post(e,t)}var f={data:function(){return{board_title:"",board_content:"",board_updateDt:"",board_cnt:"",user_no:"",board_no:this.$store.state.board_no,likes_cnt:"",likes_check:0}},computed:{isLikes:function(){return this.likes_check}},methods:{fetchBoardDetail:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={board_no:this.board_no},t.prev=1,t.next=4,Object(c["h"])(e);case 4:r=t.sent,n=r.data,this.board_title=n.board_title,this.board_content=n.board_content,this.board_updateDt=n.board_updateDt,this.board_cnt=n.board_cnt,this.user_no=n.user_no,this.likes_cnt=n.likes_cnt,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](1),console.log(t.t0);case 17:case"end":return t.stop()}}),t,this,[[1,14]])})));function e(){return t.apply(this,arguments)}return e}(),likesCheck:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==this.$store.state.user_no){t.next=4;break}alert("로그인이 필요 합니다."),t.next=8;break;case 4:return e={board_no:this.board_no,user_no:this.$store.state.user_no},t.next=7,l(e);case 7:this.fetchBoardDetail();case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetchBoardDetail()}},p=f,_=(r("db78"),r("2877")),b=Object(_["a"])(p,o,i,!1,null,"2ee3946c",null),h=b.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("reply-form")],1)},m=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contents"},[r("div",{staticClass:"form-wrapper form-wrapper-sm"},[r("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[t._m(0)])])])},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{attrs:{id:"username",type:"text"}}),r("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("등록")])])}],g={},B=g,x=Object(_["a"])(B,k,w,!1,null,"1aa56bce",null),y=x.exports,C={components:{ReplyForm:y}},D=C,$=Object(_["a"])(D,v,m,!1,null,null,null),j=$.exports,O={components:{BoardDetailForm:h,ReplyPage:j}},E=O,R=Object(_["a"])(E,n,a,!1,null,null,null);e["default"]=R.exports},db78:function(t,e,r){"use strict";r("c80a")}}]);
//# sourceMappingURL=chunk-1f836732.3461435b.js.map