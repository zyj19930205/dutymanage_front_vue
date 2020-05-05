import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import empList from '../page/empManage/empList'
import addEmp from '../page/empManage/addEmp'
import serachEmp from '../page/empManage/serachEmp'
import dutyList from '../page/dutyManage/dutyList'
import queueList from '../page/queueManage/queueList'
import dutyHistory from '../page/dutyManage/dutyHistory'
import autoDuty from '../page/autoDuty/autoDuty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'empList',
      component: empList,
      meta:{
        title:'员工管理'
      }
    },
    {
      path: '/addEmp',
      name: 'addEmp',
      component: addEmp
    },
    {
      path: '/serachEmp',
      name: 'serachEmp',
      component: serachEmp
    },
    {
      path: '/dutyList',
      name: 'dutyList',
      component: dutyList
    },
    {
      path: '/queueList',
      name: 'queueList',
      component: queueList
    },
    {
      path: '/dutyHistory',
      name: 'dutyHistory',
      component: dutyHistory
    },
    {
      path: '/autoDuty',
      name: 'autoDuty',
      component: autoDuty
    }
  ]
})
