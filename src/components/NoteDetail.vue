<template>
  <div id="note" class="detail">
    <note-side :curNote="curNote" @update:notes="val => notes = val"></note-side>
    <div class="note-detail">
      <div class="note-empty" v-show="!curNote.id">请选择笔记 </div>
      <div class="note-detail-ct" v-show="curNote.id">
        <div class="note-bar">
          <span>创建日期：{{curNote.createdAtFriendly}}</span>
          <span>更新日期：{{curNote.updatedAtFriendly}}</span>
          <span>{{statusText}}</span>
          <span class="iconfont icon-delete" @click="onDeleteNote"></span>
          <span class="iconfont icon-fullscreen" @click="isShowPreview = !isShowPreview"></span>
        </div>
        <div class="note-title">
          <input type="text" @input="onUpdateNote" @keydown="statusText='正在输入...'"  v-model="curNote.title" placeholder="输入标题">
        </div>
        <div class="editor">
          <textarea v-show="!isShowPreview" @input="onUpdateNote" @keydown="statusText='正在输入...'" v-model="curNote.content" placeholder="输入内容，支持MarkDown语法"></textarea>
          <div class="preview markdown-body" v-html="previewContent" v-show="isShowPreview"></div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
  // import Auth from '@/apis/auth';
  import NoteSide from './NoteSide'
  import Bus from '@/helpers/bus'
  import _ from 'lodash'
  import Notes from '@/apis/notes'
  import MarkdownIt from 'markdown-it'
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
  let md = new MarkdownIt();

  export default {
    name: 'NoteDetail',
    data () {
      return {
        // curNote: {},
        // notes: [],
        statusText: '笔记未改动',
        isShowPreview: false,
      }
    },
    created() {
      // Auth.getInfo().then(res => {
      //   if(!res.isLogin) {
      //     this.$router.push({path:'/login'});
      //   }
      // })
      // Bus.$on('update:notes', val => {
      //   this.curNote = val.find(note => note.id === this.$route.query.noteId || {})
      // })
      this.checkLogin({ path: '/login' })
    },
    // mounted() {
    //   this.previewContent()
    // },
    components:{
      NoteSide
    },
    computed:{
      ...mapGetters([
        'notes', 
        'curNote',
      ]),
      previewContent() {
        return md.render(this.curNote.content || '')
      }
    },
    methods:{
      ...mapMutations([
        'setCurNote'
      ]),
      ...mapActions([
        'updateNote',
        'deleteNote',
        'checkLogin'
      ]),
      onUpdateNote: _.debounce(function() {
        this.updateNote({ noteId: this.curNote.id, title: this.curNote.title, content: this.curNote.content }).then(res => {
          // console.log(res)
          this.statusText = '已保存'
        }).catch(err => {
          // console.log(err)
          this.statusText = '保存出错'
        })
      }, 300),

      onDeleteNote() {
        this.deleteNote({noteId: this.curNote.id}).then(res => { // 从数据库里删除
          // this.$message.success(res.msg);
          // this.notes.splice(this.notes.indexOf(this.curNote), 1) // 从data的UI列表里删除
          this.$router.replace({ path: '/note' }) // 路由重刷新
        })
      },

    },
    beforeRouteUpdate(to, from, next) {
      this.setCurNote({ curNoteId: to.query.noteId })
      // this.curNote = this.notes.find(note => note.id == to.query.noteId) || {};
      md.render(this.curNote.content || '')
      next();
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