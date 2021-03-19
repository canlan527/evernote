webpackJsonp([5],{Jdfc:function(t,e){t.exports={baseURL:"//note-server.hunger-valley.com"}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r=n("zL8q"),a=n.n(r),u=(n("tvR6"),n("Dd8w")),s=n.n(u),i=n("NYxO"),c={data:function(){return{}},created:function(){this.setUser()},methods:s()({},Object(i.b)({setUser:"checkLogin"})),computed:s()({},Object(i.c)(["username","slug"]))},d={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var l=n("VU/8")(c,d,!1,function(t){n("Q894")},"data-v-7cb80c4f",null).exports,f={name:"Sidebar",data:function(){return{}},methods:s()({},Object(i.b)(["logout"]),{handleLogout:function(){this.logout({path:"/login"})}}),components:{Avatar:l}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("div",{staticClass:"icons"},[e("avatar"),this._v(" "),e("router-link",{attrs:{to:"/note",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout"},[e("i",{staticClass:"iconfont icon-logout",on:{click:this.handleLogout}})])])},staticRenderFns:[]};var m={name:"App",components:{Sidebar:n("VU/8")(f,h,!1,function(t){n("ZQkF")},"data-v-4139d2ba",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var v=n("VU/8")(m,b,!1,function(t){n("WcYa")},null,null).exports,p=n("/ocq");o.default.use(p.a);var k=new p.a({routes:[{path:"/",alias:"/notebooks",component:function(){return n.e(2).then(n.bind(null,"C3fl"))}},{path:"/login",name:"Login",component:function(){return n.e(3).then(n.bind(null,"xJsL"))}},{path:"/note",name:"NoteDetail",component:function(){return n.e(0).then(n.bind(null,"Gb2o"))}},{path:"/trash",name:"TrashDetail",component:function(){return n.e(1).then(n.bind(null,"WMg/"))}}]}),N=n("//Fk"),I=n.n(N),g=n("mtWM"),T=n.n(g),E=n("Jdfc"),A=n.n(E);function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new I.a(function(o,a){var u={url:t,method:e,validateStatus:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase?u.params=n:u.data=n,T()(u).then(function(t){200===t.status?o(t.data):(r.Message.error(t.data.msg),a(t.data))}).catch(function(t){r.Message.error("啊哦，出错了，请重试"),a({msg:"网络异常"})})})}T.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",T.a.defaults.baseURL=A.a.baseURL,T.a.defaults.withCredentials=!0;var D=n("pFYg"),L=n.n(D);function y(t){var e=("object"===(void 0===t?"undefined":L()(t))?t:new Date(t)).getTime(),n="",o=Date.now()-e;switch(!0){case o<6e4:n="刚刚";break;case o<36e5:n=Math.floor(o/6e4)+"分钟前";break;case o<864e5:n=Math.floor(o/36e5)+"小时前";break;default:n=Math.floor(o/864e5)+"天前"}return n}var F={GET:"/notes/from/:notebookId",ADD:"/notes/to/:notebookId",UPDATE:"/notes/:noteId",DELETE:"/notes/:noteId"},U=function(t){var e=t.notebookId;return new I.a(function(t,n){w(F.GET.replace(":notebookId",e)).then(function(e){e.data=e.data.map(function(t){return t.createdAtFriendly=y(t.createdAt),t.updatedAtFriendly=y(t.updatedAt),t}).sort(function(t,e){return t.updatedAt<e.updatedAt?1:-1}),t(e)}).catch(function(t){n(t)})})},C=function(t){var e=t.notebookId,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:"",content:""},o=n.title,r=void 0===o?"":o,a=n.content,u=void 0===a?"":a;return new I.a(function(t,n){w(F.ADD.replace(":notebookId",e),"POST",{title:r,content:u}).then(function(e){e.data.createdAtFriendly=y(e.data.createdAt),e.data.updatedAtFriendly=y(e.data.updatedAt),t(e)}).catch(function(t){n(t)})})},_=function(t,e){var n=t.noteId,o=e.title,r=e.content;return w(F.UPDATE.replace(":noteId",n),"PATCH",{title:o,content:r})},M=function(t){var e=t.noteId;return w(F.DELETE.replace(":noteId",e),"DELETE")},P={state:{notes:null,curNoteId:null},getters:{notes:function(t){return t.notes||[]},curNote:function(t){return Array.isArray(t.notes)?t.curNoteId?t.notes.find(function(e){return e.id==t.curNoteId})||{}:t.notes[0]||{}:{}}},mutations:{setNotes:function(t,e){t.notes=e.notes},addNote:function(t,e){t.notes.unshift(e.note)},updateNote:function(t,e){var n=t.notes.find(function(t){return t.id===e.noteId})||{};n.title=e.title,n.content=e.content},deleteNote:function(t,e){t.notes=t.notes.filter(function(t){return t.id!==e.noteId})},setCurNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curNoteId=e.curNoteId}},actions:{getNotes:function(t,e){var n=t.commit,o=e.notebookId;return U({notebookId:o}).then(function(t){n("setNotes",{notes:t.data})})},addNote:function(t,e){var n=t.commit,o=e.notebookId,r=e.title,a=e.content;return C({notebookId:o},{title:r,content:a}).then(function(t){n("addNote",{note:t.data})})},updateNote:function(t,e){var n=t.commit,o=e.noteId,r=e.title,a=e.content;return _({noteId:o},{title:r,content:a}).then(function(t){n("updateNote",{noteId:o,title:r,content:a})})},deleteNote:function(t,e){var n=t.commit,o=e.noteId;return M({noteId:o}).then(function(t){n("deleteNote",{noteId:o}),r.Message.success(t.msg)})}}},R={GET:"/notebooks",ADD:"/notebooks",UPDATE:"/notebooks/:id",DELETE:"/notebooks/:id"},O=function(){return new I.a(function(t,e){w(R.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt?1:-1}),e.data.forEach(function(t){t.createdAtFriendly=y(t.createdAt),t.updatedAtFriendly=y(t.updatedAt)}),t(e)}).catch(function(t){e(t)})})},G=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""}).title,e=void 0===t?"":t;return new I.a(function(t,n){w(R.ADD,"POST",{title:e}).then(function(e){e.data.createdAtFriendly=y(e.data.createdAt),e.data.updatedAtFriendly=y(e.data.updatedAt),t(e)}).catch(function(t){n(t)})})},S=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{title:""}).title,n=void 0===e?"":e;return w(R.UPDATE.replace(":id",t),"PATCH",{title:n})},x=function(t){return w(R.DELETE.replace(":id",t),"DELETE")},B={state:{notebooks:null,curBookId:null},getters:{notebooks:function(t){return t.notebooks||[]},curBook:function(t){return Array.isArray(t.notebooks)?t.curBookId?t.notebooks.find(function(e){return e.id==t.curBookId})||{}:t.notebooks[0]||{}:{}}},mutations:{setNotebooks:function(t,e){t.notebooks=e.notebooks},addNotebook:function(t,e){t.notebooks.unshift(e.notebook)},updateNotebook:function(t,e){(t.notebooks.find(function(t){return t.id==e.notebookId})||{}).title=e.title},deleteNotebook:function(t,e){t.notebooks=t.notebooks.filter(function(t){return t.id!=e.notebookId})},setCurBook:function(t,e){t.curBookId=e.curBookId}},actions:{getNotebooks:function(t){var e=t.commit;return null!==t.state.notebooks?I.a.resolve():O().then(function(t){e("setNotebooks",{notebooks:t.data})})},addNotebook:function(t,e){var n=t.commit;return G({title:e.title}).then(function(t){n("addNotebook",{notebook:t.data}),r.Message.success(t.msg)})},updateNotebook:function(t,e){var n=t.commit;return S(e.notebookId,{title:e.title}).then(function(t){n("updateNotebook",{notebookId:e.notebookId,title:e.title}),r.Message.success(t.msg)})},deleteNotebook:function(t,e){var n=t.commit;return x(e.notebookId).then(function(t){n("deleteNotebook",{notebookId:e.notebookId}),r.Message.success(t.msg)})}}},j={GET:"/notes/trash",REVERT:"/notes/:noteId/revert",DELETE:"/notes/:noteId/confirm"},H=function(){return new I.a(function(t,e){w(j.GET).then(function(e){e.data=e.data.sort(function(t,e){return t.createdAt<e.createdAt?1:-1}),e.data.forEach(function(t){t.createdAtFriendly=y(t.createdAt),t.updatedAtFriendly=y(t.updatedAt)}),t(e)}).catch(function(t){e(t)})})},V=function(t){var e=t.noteId;return w(j.DELETE.replace(":noteId",e),"DELETE")},W=function(t){var e=t.noteId;return w(j.REVERT.replace(":noteId",e),"PATCH")},J={state:{curTrashNoteId:null,trashNotes:null},getters:{trashNotes:function(t){return t.trashNotes||{}},curTrashNote:function(t,e){return t.curTrashNoteId?t.trashNotes.find(function(e){return e.id==t.curTrashNoteId})||{}:e.trashNotes[0]||{}},belongTo:function(t,e,n,o){return(o.notebooks.find(function(t){return t.id==e.curTrashNote.notebookId})||{}).title||""}},mutations:{setTrashNotes:function(t,e){t.trashNotes=e.trashNotes},addTrashNote:function(t,e){setTrashNotes.unshift(e.note)},deleteTrashNote:function(t,e){t.trashNotes=t.trashNotes.filter(function(t){return t.id!=e.noteId})},setCurTrashNote:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.curTrashNoteId=e.curTrashNoteId}},actions:{getTrashNotes:function(t){var e=t.commit;return H().then(function(t){e("setTrashNotes",{trashNotes:t.data})})},deleteTrashNote:function(t,e){var n=t.commit,o=e.noteId;return V({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),r.Message.success(t.msg)})},revertTrashNote:function(t,e){var n=t.commit,o=e.noteId;return W({noteId:o}).then(function(t){n("deleteTrashNote",{noteId:o}),r.Message.success(t.msg)})}}},Q="/auth/register",Y="/auth/login",$="/auth/logout",q="/auth",Z=function(t){var e=t.username,n=t.password;return w(Q,"POST",{username:e,password:n})},z=function(t){var e=t.username,n=t.password;return w(Y,"POST",{username:e,password:n})},K=function(){return w($)},X=function(){return w(q)};window.router=k;var tt={state:{user:null},getters:{username:function(t){return null===t.user?"未登录":t.user.username},slug:function(t){return null===t.user?"未":t.user.username.charAt(0)}},mutations:{setUser:function(t,e){t.user=e.user}},actions:{login:function(t,e){var n=t.commit,o=e.username,r=e.password;return z({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},register:function(t,e){var n=t.commit,o=e.username,r=e.password;return Z({username:o,password:r}).then(function(t){n("setUser",{user:t.data})})},logout:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/login"};return K().then(function(){e("setUser",{user:null}),k.push(n)})},checkLogin:function(t,e){var n=t.commit;return null!=t.state.user?I.a.resolve():X().then(function(t){t.isLogin?n("setUser",{user:t.data}):e&&k.push(e)})}}};o.default.use(i.a);var et=new i.a.Store({modules:{notebook:B,note:P,trash:J,user:tt}});o.default.use(a.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:k,store:et,components:{App:v},template:"<App/>"})},Q894:function(t,e){},WcYa:function(t,e){},ZQkF:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5776201ff21d07dc6a60.js.map