<template>
  <div id="sidebar">
    <div class="icons">
      <avatar></avatar>
      <router-link to="/note" title="笔记"><i class="iconfont icon-note"></i></router-link>
      <router-link to="/notebooks" title="笔记本"><i class="iconfont icon-notebook"></i></router-link>
      <router-link to="/trash" title="回收站"><i class="iconfont icon-trash"></i></router-link>
    </div>
    <div class="logout" >
      <i class="iconfont icon-logout" @click="handleLogout"></i>
    </div>
  </div>
</template>

<script>
  import Avatar from './Avatar'
  // import Auth from '@/apis/auth'
  import { mapActions } from 'vuex'

  // Auth.getInfo().then(res => {
  //   console.log(res)
  // })
  export default {
    name: 'Sidebar',
    data() {
      return {
        // msg: 'This is silde Page'
      }
    },
    methods: {
      ...mapActions([
        'logout'
      ]),
      handleLogout() {
        // Auth.logout().then(res => {
        //   this.$router.push({path: 'login'})
        // })
        this.logout({path:'/login'})
      }
    },
    components: {
      Avatar
    }
  }
</script>

<style lang="less" scoped>
#sidebar {
  position: relative;
  width: 56px;
  text-align: center;
  background: #2c333c;
  .icons {
    margin-top: 15px;
    a {
      padding: 6px 0;
      display: block;
    }
    .router-link-active {
      background: #5e6266;
    }
  }
  .logout {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  .iconfont {
    color: #fff;
  }
}
</style>