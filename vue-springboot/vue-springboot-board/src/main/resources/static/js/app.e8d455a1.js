(function(e){function n(n){for(var r,o,a=n[0],i=n[1],s=n[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&f.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==u[a]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},u={app:0},c=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-01e58d80":"2731dd62","chunk-02d8ac78":"3fc74306","chunk-0663af5e":"0e278930","chunk-0efcf7b5":"5b24b36e","chunk-1315e26e":"c76bde42","chunk-23bde503":"9f3265e3","chunk-2d0aed93":"30f8fd3f","chunk-2d0c898d":"2329912b","chunk-3294d880":"fdc843b6","chunk-becac76e":"a1d23d3e"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-01e58d80":1,"chunk-23bde503":1,"chunk-becac76e":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-01e58d80":"d3b884b9","chunk-02d8ac78":"31d6cfe0","chunk-0663af5e":"31d6cfe0","chunk-0efcf7b5":"31d6cfe0","chunk-1315e26e":"31d6cfe0","chunk-23bde503":"0e4b1e26","chunk-2d0aed93":"31d6cfe0","chunk-2d0c898d":"31d6cfe0","chunk-3294d880":"31d6cfe0","chunk-becac76e":"757e99b4"}[e]+".css",u=i.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var s=c[a],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===u))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){s=f[a],d=s.getAttribute("data-href");if(d===r||d===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],l.parentNode.removeChild(l),t(c)},l.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=a(e);var f=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}u[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var l=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("64a9")},"365c":function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return c}));var r=t("bc3a"),o=t.n(r);function u(e){var n="/api/user/joinform";return o.a.post(n,e)}function c(e){var n="/api/user/loginform";return o.a.post(n,e)}},3683:function(e,n,t){},"472d":function(e,n,t){"use strict";t("3683")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("app-header"),t("router-view")],1)},u=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",[t("div",[t("router-link",{staticClass:"logo",attrs:{to:"/"}},[e._v("\n      GE-SI-PAN\n      "),e.isUserLogin?t("span",[e._v(e._s(e.$store.state.user_name))]):e._e()])],1),t("div",{staticClass:"navigations"},[e.isUserLogin?[t("a",{staticClass:"logout-button",attrs:{href:"javascript:;"},on:{click:e.logoutUser}},[e._v("\n        Logout\n      ")])]:[t("router-link",{attrs:{to:"/login"}},[e._v("로그인")]),e._v(" |\n      "),t("router-link",{attrs:{to:"/sign"}},[e._v("회원가입")])]],2)])},a=[];t("a481");function i(e){document.cookie="user_no=".concat(e)}function s(e){document.cookie="user_name=".concat(e)}function d(){return document.cookie.replace(/(?:(?:^|.*;\s*)user_no\s*=\s*([^;]*).*$)|^.*$/,"$1")}function f(){return document.cookie.replace(/(?:(?:^|.*;\s*)user_name\s*=\s*([^;]*).*$)|^.*$/,"$1")}function l(e){document.cookie="".concat(e,"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")}var h={computed:{isUserLogin:function(){return this.$store.getters.isLogin}},methods:{logoutUser:function(){this.$store.commit("clearUserNo"),this.$store.commit("clearUserName"),l("user_no"),l("user_name"),this.$router.push("/main")}}},p=h,m=(t("472d"),t("2877")),b=Object(m["a"])(p,c,a,!1,null,"791c1b60",null),g=b.exports,v={components:{AppHeader:g}},k=v,_=(t("034f"),Object(m["a"])(k,o,u,!1,null,null,null)),y=_.exports,w=t("2f62"),O={setUserNo:function(e,n){e.user_no=n},clearUserNo:function(e){e.user_no=""},setUserName:function(e,n){e.user_name=n},clearUserName:function(e){e.user_name=""},getBoardNo:function(e,n){e.board_no=n}},j=(t("96cf"),t("1da1")),N=t("365c"),U={LOGIN:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(n,t){var r,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.commit,e.next=3,Object(N["a"])(t);case 3:return o=e.sent,u=o.data,console.log(u.user_name+"LGOIN함수에서 확인"),r("setUserNo",u.user_no),r("setUserName",u.user_name),i(u.user_no),s(u.user_name),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));function n(n,t){return e.apply(this,arguments)}return n}()},$=t("0e44");r["a"].use(w["a"]);var L=new w["a"].Store({plugins:[Object($["a"])()],state:{user_no:d()||"",user_name:f()||"",board_no:""},getters:{isLogin:function(e){return""!==e.user_name}},mutations:O,actions:U}),x=t("8c4f");r["a"].use(x["a"]);var E=new x["a"]({routes:[{path:"/",redirect:"/main"},{path:"/main",component:function(){return t.e("chunk-02d8ac78").then(t.bind(null,"4385"))}},{path:"/login",name:"login",component:function(){return t.e("chunk-23bde503").then(t.bind(null,"48ca"))}},{path:"/sign",name:"sign",component:function(){return t.e("chunk-2d0c898d").then(t.bind(null,"560f"))}},{path:"/add",name:"add",component:function(){return t.e("chunk-becac76e").then(t.bind(null,"dcc4"))}},{path:"/board/:board_no",component:function(){return t.e("chunk-01e58d80").then(t.bind(null,"ca75"))}},{path:"/myboard",component:function(){return t.e("chunk-3294d880").then(t.bind(null,"4448"))}},{path:"/board/:user_no/:board_no",component:function(){return t.e("chunk-1315e26e").then(t.bind(null,"3fa5"))}},{path:"/viewed",component:function(){return t.e("chunk-0efcf7b5").then(t.bind(null,"0c6b"))}},{path:"/likes",component:function(){return t.e("chunk-0663af5e").then(t.bind(null,"e756"))}},{path:"*",component:function(){return t.e("chunk-2d0aed93").then(t.bind(null,"0c8b"))}}]});function P(e){var n=new Date(e),t=n.getFullYear(),r=n.getMonth()+1;r=r>9?r:"0".concat(r);var o=n.getDate();return"".concat(t,"-").concat(r,"-").concat(o)}r["a"].config.productionTip=!1,r["a"].filter("formatDate",P),new r["a"]({render:function(e){return e(y)},store:L,router:E}).$mount("#app")},"64a9":function(e,n,t){}});
//# sourceMappingURL=app.e8d455a1.js.map