webpackJsonp([2],{C3fl:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e("Dd8w"),i=e.n(n),a=e("NYxO"),s={name:"NotebookList",data:function(){return{}},created:function(){this.checkLogin({path:"/login"}),this.getNotebooks()},computed:i()({},Object(a.c)(["notebooks"])),methods:i()({},Object(a.b)(["getNotebooks","addNotebook","updateNotebook","deleteNotebook","checkLogin"]),{onCreate:function(){var t=this;this.$prompt("请输入笔记本标题","创建笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,30}$/,inputErrorMessage:"笔记本名不能为空，且长度不能超过30个字"}).then(function(o){var e=o.value;t.addNotebook({title:e})})},onEdit:function(t){var o=this;this.$prompt("","修改笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:t.title,inputPattern:/^.{1,30}$/,inputErrorMessage:"笔记本名不能为空，且长度不能超过30个字"}).then(function(e){var n=e.value;o.updateNotebook({notebookId:t.id,title:n})})},onDelete:function(t){var o=this;this.$confirm("确认要删除笔记本吗?","删除笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.deleteNotebook({notebookId:t.id})})}})},c={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"detail",attrs:{id:"notebook-list"}},[e("header",[e("a",{staticClass:"btn",attrs:{href:"javascript:;"},on:{click:function(o){return o.preventDefault(),t.onCreate(o)}}},[e("i",{staticClass:"iconfont icon-plus"}),t._v("新建笔记本")])]),t._v(" "),e("main",[e("div",{staticClass:"layout"},[e("h3",[t._v("笔记本列表（"+t._s(t.notebooks.length)+"）")]),t._v(" "),e("div",{staticClass:"book-list"},t._l(t.notebooks,function(o){return e("router-link",{key:o.id,staticClass:"notebook",attrs:{to:"/note?notebookId="+o.id}},[e("div",[e("span",{staticClass:"iconfont icon-notebook"}),t._v("\n              "+t._s(o.title)+"\n            "),e("span",[t._v(t._s(o.noteCounts))]),t._v(" "),e("span",{staticClass:"action",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.onEdit(o)}}},[t._v("编辑")]),t._v(" "),e("span",{staticClass:"action",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.onDelete(o)}}},[t._v("删除")]),t._v(" "),e("span",{staticClass:"date"},[t._v(t._s(o.createdAtFriendly))])])])}))])])])},staticRenderFns:[]};var r=e("VU/8")(s,c,!1,function(t){e("Cl3E")},"data-v-2646515d",null);o.default=r.exports},Cl3E:function(t,o){}});
//# sourceMappingURL=2.c359efcfa64fae57c43a.js.map