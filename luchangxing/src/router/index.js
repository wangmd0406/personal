import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage'
import LogForm from '../pages/logForm'
import ForgetPwd from '../pages/ForgetPwd'
import ForgetPwdEmail from '../pages/ForgetPwdEmail'
import GoodsDetails from '../pages/goodsDetails'


Vue.use(Router)

export default new Router({
  // mode:'history',// 地址栏#
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
    },
    {
      path:'/forgetpwd',
      name:'forgetpwd',
      component:ForgetPwd
    },
    {
      path:'/pwdemail',
      name:'pwdemail',
      component:ForgetPwdEmail
    },
    {
      path:'/goodsDetails',
      name:'goodsDetails',
      component:GoodsDetails
    }
  ]
})
