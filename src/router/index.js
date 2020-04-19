import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../page/index'
import dutyManage from '../page/dutyManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{
        title:'员工管理'
      }
    },
    {
      path: '/dutyManage',
      name: 'dutyManage',
      component: dutyManage
    }
  ]
})
