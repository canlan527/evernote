import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/notebooks',
      component:() => import('@/components/NotebookList')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/note',
      name: 'NoteDetail',
      component: () => import('@/components/NoteDetail')
    },
    {
      path: '/trash',
      name: 'TrashDetail',
      component: () => import('@/components/TrashDetail')
    }
  ]
})
