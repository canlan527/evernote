<template>
  <div id="note" class="detail">
    <note-side></note-side>
    <div class="note-detail">
      <div class="note-bar">
        <span>创建日期：{{curNote.createdAtFriendly}}</span>
        <span>更新日期：{{curNote.updatedAtFriendly}}</span>
        <span>{{curNote.statusText}}</span>
        <span class="iconfont icon-delete"></span>
        <span class="iconfont icon-fullscreen"></span>
      </div>
      <div class="note-title">
        <input type="text"  :value="curNote.title" placeholder="输入标题">
      </div>
      <div class="editor">
        <textarea v-show="true" :value="curNote.content" placeholder="输入内容，支持MarkDown语法"></textarea>
        <div class="preview markdown-body" v-html="html" v-show="false"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Auth from '@/apis/auth';
  import NoteSide from './NoteSide'
  export default {
    name: 'NoteDetail',
    data () {
      return {
        curNote: {
          title: '笔记标题',
          content: 'this is  content',
          createdAtFriendly: '1天前',
          updatedAtFriendly: '1分钟前',
          statusText: '未更新'
        }
      }
    },
    created() {
      Auth.getInfo().then(res => {
        if(!res.isLogin) {
          this.$router.push({path:'/login'})
        }
      })
    },
    components:{
      NoteSide
    }
  }
</script>

<style lang="less" scoped>
  @import url('../assets/css/note-detail.less');
  #note {
    display: flex;
    align-items: stretch;
    background: #fff;
    flex:1;
  }
</style>