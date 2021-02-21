<template>
  <div class="detail" id="notebook-list">
    <header>
      <a href="#"></a>
    </header>
  </div>
</template>

<script>
  import Auth from '@/apis/auth'
  export default {
    name: 'NotebookList',
    data() {
      return {
        msg: '笔记本列表'
      }
    },
    created() {
      Auth.getInfo().then(res => {
        if(!res.isLogin) {
          this.$router.push({path:'/login'})
        }
      })
    }
  }
</script>

<style scoped>

</style>