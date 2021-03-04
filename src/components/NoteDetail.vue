<template>
  <div id="note" class="detail">
    <note-side></note-side>
    <div id="note-detail">
      <h1> notebookId:{{$route.query.notebookId}} </h1>
      <h1> noteId:{{$route.query.noteId}} </h1>
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
        msg: '笔记本详情页'
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
#note {
  display: flex;
  align-items: stretch;
  background: #fff;
  flex:1;
}
</style>