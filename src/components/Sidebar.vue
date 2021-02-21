<template>
  <div id="sidebar">
    <div class="icons">
      <avatar></avatar>
      <router-link to="/note/1" title="笔记"><i class="iconfont icon-note"></i></router-link>
      <router-link to="/notebooks" title="笔记本"><i class="iconfont icon-notebook"></i></router-link>
      <router-link to="/trash/2" title="回收站"><i class="iconfont icon-trash"></i></router-link>
    </div>
    <div class="logout" >
      <i class="iconfont icon-logout" @click="handleLogout"></i>
    </div>
  </div>
</template>

<script>
  import Avatar from './Avatar'
  import request from '@/helpers/request'
  export default {
    name: 'Sidebar',
    data() {
      return {
        msg: 'This is silde Page'
      }
    },
    methods: {
      handleLogout() {
        console.log('handleLogout')
        request('/auth/logout').then(res => {
          console.log(res)
        })
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