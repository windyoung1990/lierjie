(self["webpackChunkvue_h5_template"]=self["webpackChunkvue_h5_template"]||[]).push([[143],{26458:function(e){e.exports={title:"lierjie",baseUrl:"http://localhost:9018",baseApi:"https://test.xxx.com/api",APPID:"xxx",APPSECRET:"xxx",$cdn:"https://www.sunniejs.cn/static"}},51137:function(e){e.exports={title:"lierjie",baseUrl:"https://www.xxx.com/",baseApi:"https://www.xxx.com/api",APPID:"xxx",APPSECRET:"xxx",$cdn:"https://www.sunniejs.cn/static"}},83493:function(e){e.exports={title:"lierjie",baseUrl:"https://test.xxx.com",baseApi:"https://test.xxx.com/api",APPID:"xxx",APPSECRET:"xxx",$cdn:"https://www.sunniejs.cn/static"}},61073:function(e,t,n){const o="production",r=n(13371)("./env."+o);e.exports=r},644:function(e,t,n){"use strict";var o={};n.r(o),n.d(o,{formatDate:function(){return $},hidePhone:function(){return y}});n(28594),n(35666);var r=n(20144),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],u={name:"App"},c=u,a=n(1001),p=(0,a.Z)(c,s,i,!1,null,null,null),l=p.exports,h=n(78345);const x=[{path:"/",component:()=>n.e(651).then(n.bind(n,47651)),redirect:"/home",meta:{title:"首页",keepAlive:!1},children:[{path:"/home",name:"Home",component:()=>n.e(248).then(n.bind(n,93248)),meta:{title:"首页",keepAlive:!1}},{path:"/about",name:"About",component:()=>Promise.all([n.e(922),n.e(669),n.e(730)]).then(n.bind(n,27730)),meta:{title:"关于我",keepAlive:!1}}]}],m=h.Z.prototype.push;h.Z.prototype.push=function(e,t,n){return t||n?m.call(this,e,t,n):m.call(this,e).catch((e=>e))},r.ZP.use(h.Z);const f=()=>new h.Z({mode:"history",scrollBehavior:()=>({y:0}),routes:x}),d=f();var v=d,P=n(38820),Z=n(61073),w=(n(25440),n(31914)),g=(n(35002),n(62476)),E=(n(27902),n(30876)),b=(n(57660),n(73622)),A=(n(25038),n(35791));r.ZP.use(A.Z),r.ZP.use(b.Z),r.ZP.use(E.Z),r.ZP.use(w.Z).use(g.Z);n(61335);function $(e,t){if(void 0===e)return;const n=new Date(e);/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));const o={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds()};for(const r in o)if(new RegExp(`(${r})`).test(t)){const e=o[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?e:_(e))}return t}function _(e){return("00"+e).substr(e.length)}function y(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}Object.keys(o).forEach((e=>r.ZP.filter(e,o[e]))),r.ZP.prototype.$formatDate=r.ZP.filter("formatDate"),r.ZP.prototype.$hidePhone=r.ZP.filter("hidePhone"),r.ZP.prototype.$cdn=Z.$cdn,r.ZP.config.productionTip=!1,new r.ZP({el:"#app",router:v,store:P.Z,render:e=>e(l)})},38820:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var o=n(20144),r=n(20629);const s={userName:e=>e.app.userName};var i=s;const u={userName:""},c={SET_USER_NAME(e,t){e.userName=t}},a={setUserName({commit:e},t){e("SET_USER_NAME",t)}};var p={state:u,mutations:c,actions:a};o.ZP.use(r.ZP);const l=new r.ZP.Store({modules:{app:p},getters:i});var h=l},13371:function(e,t,n){var o={"./env.development":26458,"./env.development.js":26458,"./env.production":51137,"./env.production.js":51137,"./env.staging":83493,"./env.staging.js":83493};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id=13371}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[922,114],(function(){return t(644)}));e.O()}]);