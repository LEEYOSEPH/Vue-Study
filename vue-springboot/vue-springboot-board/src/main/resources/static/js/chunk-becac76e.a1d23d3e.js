(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-becac76e"],{"04d0":function(t,e,n){"use strict";n("99c7")},"7e81":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"h",(function(){return s})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return c})),n.d(e,"i",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"f",(function(){return p})),n.d(e,"e",(function(){return b}));var r=n("bc3a"),a=n.n(r);function o(t){var e="/api/board/createBoard";return a.a.post(e,t)}function i(){var t="/api/board/getBoard";return a.a.get(t)}function s(t){var e="/api/board/getBoardDetail";return a.a.post(e,t)}function u(t){var e="/api/board/getMyBoard";return a.a.post(e,t)}function c(t){var e="/api/board/deleteBoard";return a.a.post(e,t)}function d(t){var e="/api/board/modifyBoard";return a.a.post(e,t)}function l(t){var e="/api/board/editBoard";return a.a.put(e,t)}function p(){var t="/api/board/MostViewedBoard";return a.a.get(t)}function b(){var t="/api/board/mostLikesBoard";return a.a.get(t)}},"99c7":function(t,e,n){},dcc4:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("board-add-form")},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contents"},[n("h1",{staticClass:"page-header"},[t._v("Create Post")]),n("div",{staticClass:"form-wrapper"},[n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("div",[n("label",{attrs:{for:"title"}},[t._v("Title ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.board_title,expression:"board_title"}],attrs:{id:"title",type:"text"},domProps:{value:t.board_title},on:{input:function(e){e.target.composing||(t.board_title=e.target.value)}}})]),n("div",[n("label",{attrs:{for:"contents"}},[t._v("Contents ")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.board_content,expression:"board_content"}],attrs:{id:"contents",type:"text",rows:"5"},domProps:{value:t.board_content},on:{input:function(e){e.target.composing||(t.board_content=e.target.value)}}}),t.isContentsValid?t._e():n("p",{staticClass:"validation-text warning"},[t._v("\n          Contents must be less than 200\n        ")])]),n("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Create")])])])])},i=[],s=(n("96cf"),n("1da1")),u=n("7e81");n("bc3a");var c={data:function(){return{board_title:"",board_content:"",board_image:""}},computed:{isContentsValid:function(){return this.board_content.length<=200}},methods:{submitForm:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e={board_title:this.board_title,board_content:this.board_content,board_image:this.board_image,user_no:this.$store.state.user_no},t.next=4,Object(u["a"])(e);case 4:n=t.sent,n.data,this.$router.push("/main"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}()}},d=c,l=(n("04d0"),n("2877")),p=Object(l["a"])(d,o,i,!1,null,"6dffc5c7",null),b=p.exports,f={components:{BoardAddForm:b}},v=f,m=Object(l["a"])(v,r,a,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-becac76e.a1d23d3e.js.map