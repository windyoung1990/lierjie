"use strict";(self["webpackChunklierjie"]=self["webpackChunklierjie"]||[]).push([[450],{71450:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-container"},[e("div",{staticClass:"warpper"},[e("div",{staticClass:"list"},[e("div",{staticClass:"logo"}),e("div",{staticClass:"demo-home__title"},[t._v("VUE H5开发模板")]),t._m(0),e("div",{staticClass:"item"},[t._v("项目作者: sunnie")]),e("div",{staticClass:"item"}),e("div",{staticClass:"wechat"},[e("img",{attrs:{src:this.wechat,alt:""}})]),e("div",{staticClass:"item"},[t._v("关注公众号：回复“加群”即可加 前端仙女群")]),e("div",{staticClass:"item"},[t._v(" "+t._s(t.userName)+" "),""==t.userName?e("van-button",{attrs:{type:"warning",size:"small"},on:{click:t.doDispatch}},[t._v("快点我~")]):t._e()],1)])])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"item"},[t._v(" 项目地址: "),e("a",{attrs:{href:"https://github.com/sunniejs/lierjie"}},[t._v("https://github.com/sunniejs/lierjie")])])}];const r={Login:"/user/login",UserInfo:"/user/userinfo",UserName:"/user/name"};var n=r,o=(s(35986),s(76439)),c=s(9669),u=s.n(c),l=s(38820),d=s(61073);const h=u().create({baseURL:d.baseApi,withCredentials:!0,timeout:5e3});h.interceptors.request.use((t=>(t.hideloading||o.Z.loading({forbidClick:!0}),l.Z.getters.token&&(t.headers["X-Token"]=""),t)),(t=>Promise.reject(t))),h.interceptors.response.use((t=>{o.Z.clear();const e=t.data;return e.status&&200!==e.status?(401===e.status&&l.Z.dispatch("FedLogOut").then((()=>{location.reload()})),Promise.reject(e||"error")):Promise.resolve(e)}),(t=>(o.Z.clear(),Promise.reject(t))));var m=h;function v(t){return m({url:n.UserInfo,method:"post",data:t,hideloading:!0})}var p=s(20629),f={data(){return{wechat:`${this.$cdn}/wx/640.gif`}},computed:{...(0,p.Se)(["userName"])},mounted(){this.initData()},methods:{initData(){const t={user:"sunnie"};v(t).then((()=>{})).catch((()=>{}))},doDispatch(){this.$store.dispatch("setUserName","真乖，赶紧关注公众号，组织都在等你~")},goGithub(){window.location.href="https://github.com/sunniejs/lierjie"}}},_=f,g=s(1001),C=(0,g.Z)(_,i,a,!1,null,null,null),b=C.exports}}]);