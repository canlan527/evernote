import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/notebooks',
      name: 'NotebookList',
      component: () => import('@/components/NotebookList')
    },
    {
      path: '/note/:noteId',
      name: 'NoteDetail',
      component: () => import('@/components/NoteDetail')
    },
    {
      path: '/trash/:noteId',
      name: 'TrashDetail',
      component: () => import('@/components/TrashDetail')
    }
  ]
})
