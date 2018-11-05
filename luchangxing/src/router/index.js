import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage'
import LogForm from '../components/logForm'

Vue.use(Router)

export default new Router({
  mode:'history',// 地址栏#
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      // children:{
      //   path:'/login',
      //   component:LogForm
      // }
    },
    {
      path:'/login',
      name:'loginForm',
      component:LogForm
    }
  ]
})
