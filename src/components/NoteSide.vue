<template>
  <div class="note-sidebar">
    <span class="btn add-note">添加笔记</span>
    <el-dropdown class="notebook-title" @command="handleCommand" placement="bottom">
      <span class="el-dropdown-link">
        我的笔记本1<i class="iconfont icon-down"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="notebook in notebooks" :key="notebook.id" :command="notebook.id">{{notebook.title}}</el-dropdown-item>
        <el-dropdown-item command="trash">回收站</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> 
    <div class="menu">
      <div>更新时间</div>
      <div>标题</div>
    </div>
    <ul class="notes">
      <li v-for="note in notes" :key="note.id">
        <router-link :to="`/note?noteId=${note.id}`">
          <span class="date">{{note.updateAtFriendly}}</span>
          <span class="title">{{note.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Notebooks from '@/apis/notebooks'
  
  export default {
    name: 'NoteSide',
    data () {
      return {
        notebooks: [],
        notes: [
          {
            id: 11,
            title: '第一个笔记',
            updateAtFriendly: '刚刚'
          },
          {
            id: 21,
            title: '第2个笔记',
            updateAtFriendly: '2分钟前'
          }
        ]
      }
    },
    created() {
      Notebooks.getAll().then(res => {
        this.notebooks = res.data;
      })
    },
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>

<style lang="less" scoped>
 @import url('../assets/css/note-sidebar.less');
</style>