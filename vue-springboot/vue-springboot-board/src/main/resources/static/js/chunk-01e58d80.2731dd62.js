(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01e58d80"],{"00c4":function(e,t,r){"use strict";r("7f69")},"11d0":function(e,t,r){"use strict";r("619a")},"263b":function(e,t,r){"use strict";r("e5fd")},"619a":function(e,t,r){},"7e81":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return i})),r.d(t,"h",(function(){return a})),r.d(t,"g",(function(){return c})),r.d(t,"b",(function(){return u})),r.d(t,"i",(function(){return l})),r.d(t,"c",(function(){return p})),r.d(t,"f",(function(){return _})),r.d(t,"e",(function(){return h}));var n=r("bc3a"),o=r.n(n);function s(e){var t="/api/board/createBoard";return o.a.post(t,e)}function i(){var e="/api/board/getBoard";return o.a.get(e)}function a(e){var t="/api/board/getBoardDetail";return o.a.post(t,e)}function c(e){var t="/api/board/getMyBoard";return o.a.post(t,e)}function u(e){var t="/api/board/deleteBoard";return o.a.post(t,e)}function l(e){var t="/api/board/modifyBoard";return o.a.post(t,e)}function p(e){var t="/api/board/editBoard";return o.a.put(t,e)}function _(){var e="/api/board/MostViewedBoard";return o.a.get(e)}function h(){var e="/api/board/mostLikesBoard";return o.a.get(e)}},"7f69":function(e,t,r){},a02a:function(e,t,r){},ada7:function(e,t,r){"use strict";r("a02a")},c157:function(e,t,r){},ca75:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("board-detail-form"),r("reply-page")],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contents"},[r("h1",{staticClass:"page-header"},[e._v("GE SI PAN")]),r("div",{staticClass:"form-wrapper"},[r("div",[r("h3",[e._v(e._s(e.board_title))])]),r("small",[e._v(e._s(e._f("formatDate")(e.board_updateDt)))]),r("div",[e._v("\n      "+e._s(e.board_content)+"\n    ")]),r("hr"),r("div",[r("div",[e._v("\n        "+e._s(e.board_cnt)+" Views | "+e._s(e.likes_cnt)+"Likes | "+e._s(e.reply_cnt)+" Coments\n      ")]),r("i",{staticClass:"icon ion-md-heart",on:{click:e.likesCheck}})])])])},i=[],a=(r("96cf"),r("1da1")),c=r("7e81"),u=r("bc3a"),l=r.n(u);function p(e){var t="/api/likes/likesCheck";return l.a.post(t,e)}var _={data:function(){return{board_title:"",board_content:"",board_updateDt:"",board_cnt:"",user_no:"",board_no:this.$store.state.board_no,likes_cnt:"",likes_check:0,reply_cnt:""}},computed:{isLikes:function(){return this.likes_check}},methods:{fetchBoardDetail:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={board_no:this.board_no},e.prev=1,e.next=4,Object(c["h"])(t);case 4:r=e.sent,n=r.data,this.board_title=n.board_title,this.board_content=n.board_content,this.board_updateDt=n.board_updateDt,this.board_cnt=n.board_cnt,this.user_no=n.user_no,this.likes_cnt=n.likes_cnt,this.reply_cnt=n.reply_cnt,e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,this,[[1,15]])})));function t(){return e.apply(this,arguments)}return t}(),likesCheck:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.$store.state.user_no){e.next=4;break}alert("로그인이 필요 합니다."),e.next=8;break;case 4:return t={board_no:this.board_no,user_no:this.$store.state.user_no},e.next=7,p(t);case 7:this.fetchBoardDetail();case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.fetchBoardDetail()}},h=_,d=(r("263b"),r("2877")),m=Object(d["a"])(h,s,i,!1,null,"18b33b2d",null),f=m.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contents"},[r("ul",[r("h3",[e._v("댓글")]),e._l(e.replyItems,(function(t){return r("reply-list-item",{key:t.reply_no,attrs:{replyItem:t},on:{refresh:e.fetchData}})})),r("hr"),r("reply-form",{on:{refresh:e.fetchData}})],2)])},v=[],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isUserLogin?r("li",[r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.reply_content,expression:"reply_content"}],attrs:{name:"",id:"",cols:"5",rows:"5"},domProps:{value:e.reply_content},on:{input:function(t){t.target.composing||(e.reply_content=t.target.value)}}}),r("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("등록")])])])]):r("li",[r("span",[r("router-link",{attrs:{to:"/login"}},[r("strong",[e._v("로그인")])]),e._v(" 을 하시면\n    댓글을 등록 할 수 있습니다.\n  ")],1)])},g=[];function k(e){var t="/api/reply/insertreply";return l.a.post(t,e)}function I(e){var t="/api/reply/fetchReply";return l.a.post(t,e)}function x(e){var t="/api/reply/deleteReply";return l.a.post(t,e)}function w(e){var t="/api/reply/editReply";return l.a.put(t,e)}var $={data:function(){return{user_no:this.$store.state.user_no,board_no:this.$store.state.board_no,reply_content:""}},computed:{isUserLogin:function(){return this.$store.getters.isLogin}},methods:{submitForm:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={user_name:this.$store.state.user_name,user_no:this.user_no,board_no:this.board_no,reply_content:this.reply_content},console.log(t),e.next=5,k(t);case 5:this.reply_content="",this.$emit("refresh"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}()}},R=$,C=(r("00c4"),Object(d["a"])(R,b,g,!1,null,"65089ceb",null)),j=C.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("hr"),r("div",[r("span",[e._v(e._s(e.replyItem.user_name))]),e._v("\n    "+e._s(e._f("formatDate")(e.replyItem.reply_updatedt))+"\n    "),r("a",{on:{click:e.isRereplyCheck}},[e._v("답글")])]),r("div",[e._v(e._s(e.replyItem.reply_content))]),e.isLogin?r("div",[r("i",{staticClass:"icon ion-md-create",on:{click:e.editPage}}),r("i",{staticClass:"icon ion-md-trash",on:{click:e.deleteItem}}),e.isEdit?r("edit-reply-form",{attrs:{replyItem:e.replyItem},on:{refresh:e.refresh}}):e._e()],1):e._e(),e.isRereply?r("rereply-page",{attrs:{replyItem:e.replyItem},on:{replyForm:e.replyForm}}):e._e()],1)},D=[],F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contents"},[r("ul",[r("h5",[e._v("답글")]),e._l(e.rereplyItems,(function(t){return r("rereply-list-itme",{key:t.rereply_no,attrs:{rereplyItem:t},on:{refresh:e.fetchData}})})),r("rereply-form",{attrs:{replyItem:e.replyItem},on:{replyForm:e.replyForm}})],2)])},L=[],E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isUserLogin?r("li",[r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.rereply_content,expression:"rereply_content"}],attrs:{name:"",id:"",cols:"5",rows:"5"},domProps:{value:e.rereply_content},on:{input:function(t){t.target.composing||(e.rereply_content=t.target.value)}}}),r("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("등록")]),r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.close}},[e._v("취소")])])])]):r("li",[r("span",[r("router-link",{attrs:{to:"/login"}},[r("strong",[e._v("로그인")])]),e._v(" 을 하시면\n    댓글을 등록 할 수 있습니다.\n  ")],1)])},B=[];function P(e){var t="/api/rereply/insertrereply";return l.a.post(t,e)}function q(e){var t="/api/rereply/fetchRereply";return l.a.post(t,e)}function U(e){var t="/api/rereply/editRereply";return l.a.put(t,e)}function N(e){var t="/api/rereply/deleteRereply";return l.a.post(t,e)}var J={data:function(){return{user_no:this.$store.state.user_no,board_no:this.$store.state.board_no,reply_no:this.replyItem.reply_no,user_name:this.$store.state.user_name,rereply_content:""}},props:{replyItem:{type:Object,required:!0}},computed:{isUserLogin:function(){return this.$store.getters.isLogin}},methods:{submitForm:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={user_no:this.user_no,board_no:this.board_no,reply_no:this.reply_no,user_name:this.user_name,rereply_content:this.rereply_content},console.log(t),e.next=5,P(t);case 5:this.rereply_content="",this.$emit("refresh"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),close:function(){this.$emit("replyForm")}}},M=J,V=(r("f9fb"),Object(d["a"])(M,E,B,!1,null,"3e3f551a",null)),A=V.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("hr"),r("div",[r("span",[e._v(e._s(e.rereplyItem.user_name))]),e._v("\n    "+e._s(e._f("formatDate")(e.rereplyItem.rereply_updatedt))+"\n  ")]),r("div",[e._v(e._s(e.rereplyItem.rereply_content))]),e.isLogin?r("div",[r("i",{staticClass:"icon ion-md-create",on:{click:e.editPage}}),r("i",{staticClass:"icon ion-md-trash",on:{click:e.deleteItem}}),e.isEdit?r("edit-rereply-form",{attrs:{rereplyItem:e.rereplyItem},on:{refresh:e.refresh}}):e._e()],1):e._e()])},S=[],z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.rereply_content,expression:"rereply_content"}],attrs:{name:"",id:"",cols:"5",rows:"5"},domProps:{value:e.rereply_content},on:{input:function(t){t.target.composing||(e.rereply_content=t.target.value)}}}),r("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("수정")]),r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.close}},[e._v("취소")])])]),r("hr")])},H=[],K={data:function(){return{user_no:this.$store.state.user_no,board_no:this.rereplyItem.board_no,rereply_content:this.rereplyItem.rereply_content,rereply_no:this.rereplyItem.rereply_no,reply_no:this.rereplyItem.reply_no}},props:{rereplyItem:{type:Object,required:!0}},computed:{isUserLogin:function(){return this.$store.getters.isLogin}},methods:{submitForm:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={user_no:this.user_no,board_no:this.board_no,rereply_content:this.rereply_content,rereply_no:this.rereply_no,reply_no:this.reply_no},console.log(t),e.next=5,U(t);case 5:this.rereply_content="",this.$emit("refresh"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),close:function(){this.$emit("refresh")}}},Q=K,T=(r("d155"),Object(d["a"])(Q,z,H,!1,null,"73473ea9",null)),W=T.exports,X={components:{EditRereplyForm:W},data:function(){return{user_no:this.rereplyItem.user_no,edit_check:!1}},props:{rereplyItem:{type:Object,required:!0}},computed:{isLogin:function(){return this.user_no==this.$store.state.user_no},isEdit:function(){return this.edit_check}},methods:{deleteItem:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!confirm("삭제 하시겠습니까?")){e.next=11;break}return e.prev=1,t={user_no:this.$store.state.user_no,reply_no:this.rereplyItem.reply_no,board_no:this.rereplyItem.board_no,rereply_no:this.rereplyItem.rereply_no},e.next=5,N(t);case 5:this.$emit("refresh"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}(),editPage:function(){this.edit_check?this.edit_check=!1:this.edit_check=!0},refresh:function(){this.editPage(),this.$emit("refresh")}}},Y=X,Z=Object(d["a"])(Y,G,S,!1,null,null,null),ee=Z.exports,te={components:{RereplyForm:A,RereplyListItme:ee},data:function(){return{rereplyItems:[]}},props:{replyItem:{type:Object,required:!0}},methods:{fetchData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={reply_no:this.replyItem.reply_no,board_no:this.replyItem.board_no},e.next=4,q(t);case 4:r=e.sent,n=r.data,console.log(n),this.rereplyItems=n,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}(),replyForm:function(){this.$emit("replyForm")}},created:function(){this.fetchData()}},re=te,ne=(r("ada7"),Object(d["a"])(re,F,L,!1,null,"72af42f0",null)),oe=ne.exports,se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.reply_content,expression:"reply_content"}],attrs:{name:"",id:"",cols:"5",rows:"5"},domProps:{value:e.reply_content},on:{input:function(t){t.target.composing||(e.reply_content=t.target.value)}}}),r("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("수정")]),r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.close}},[e._v("취소")])])])])},ie=[],ae={data:function(){return{user_no:this.$store.state.user_no,board_no:this.replyItem.board_no,reply_content:this.replyItem.reply_content,reply_no:this.replyItem.reply_no}},props:{replyItem:{type:Object,required:!0}},computed:{isUserLogin:function(){return this.$store.getters.isLogin}},methods:{submitForm:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={user_name:this.$store.state.user_name,user_no:this.user_no,board_no:this.board_no,reply_content:this.reply_content,reply_no:this.reply_no},console.log(t),e.next=5,w(t);case 5:this.reply_content="",this.$emit("refresh"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),close:function(){this.$emit("refresh")}}},ce=ae,ue=(r("cfd6"),Object(d["a"])(ce,se,ie,!1,null,"54fc8c3b",null)),le=ue.exports,pe={components:{EditReplyForm:le,RereplyPage:oe},data:function(){return{user_no:this.replyItem.user_no,edit_check:!1,rereply_check:!1}},props:{replyItem:{type:Object,required:!0}},computed:{isLogin:function(){return this.user_no==this.$store.state.user_no},isEdit:function(){return this.edit_check},isRereply:function(){return this.rereply_check}},methods:{deleteItem:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!confirm("삭제 하시겠습니까?")){e.next=11;break}return e.prev=1,t={user_no:this.$store.state.user_no,reply_no:this.replyItem.reply_no,board_no:this.replyItem.board_no},e.next=5,x(t);case 5:this.$emit("refresh"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}(),editPage:function(){this.edit_check?this.edit_check=!1:this.edit_check=!0},refresh:function(){this.$emit("refresh"),this.edit_check=!1},isRereplyCheck:function(){this.rereply_check?this.rereply_check=!1:this.rereply_check=!0},replyForm:function(){this.isRereplyCheck()}}},_e=pe,he=Object(d["a"])(_e,O,D,!1,null,null,null),de=he.exports,me={components:{ReplyForm:j,ReplyListItem:de},data:function(){return{replyItems:[]}},methods:{fetchData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={board_no:this.$store.state.board_no},e.next=4,I(t);case 4:r=e.sent,n=r.data,console.log(n),this.replyItems=n,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.fetchData()}},fe=me,ye=(r("11d0"),Object(d["a"])(fe,y,v,!1,null,"49fc1fa8",null)),ve=ye.exports,be={components:{BoardDetailForm:f,ReplyPage:ve}},ge=be,ke=Object(d["a"])(ge,n,o,!1,null,null,null);t["default"]=ke.exports},cac3:function(e,t,r){},cfd6:function(e,t,r){"use strict";r("cac3")},d155:function(e,t,r){"use strict";r("d7cb")},d7cb:function(e,t,r){},e5fd:function(e,t,r){},f9fb:function(e,t,r){"use strict";r("c157")}}]);
//# sourceMappingURL=chunk-01e58d80.2731dd62.js.map