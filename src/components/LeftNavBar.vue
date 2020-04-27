<template>
  <Sider hide-trigger :style="{background: '#fff'}">
    <Menu theme="light" width="auto" :open-names="['1']" @on-select="changeChecked" :active-name="$route.path" >
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-navigate"></Icon>
          员工管理
        </template>
     <MenuItem name="/" to="/">员工列表</MenuItem>
      <MenuItem name="/addEmp" to="/addEmp">添加员工</MenuItem>
        <MenuItem name="/serachEmp" to="/serachEmp">查询员工</MenuItem>
      </Submenu>
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-keypad"></Icon>
          排班管理
        </template>
        <MenuItem name="/dutyList" to="/dutyList">值班数据查询</MenuItem>
        <MenuItem name="2-2">排班队列查询</MenuItem>
        <MenuItem name="2-3">排班历史查询</MenuItem>
      </Submenu>
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          Item 3
        </template>
        <MenuItem name="3-1">Option 1</MenuItem>
        <MenuItem name="3-2">Option 2</MenuItem>
      </Submenu>
    </Menu>
  </Sider>
</template>
<style>
  #leftnavbar{
    display: inline-block;
  }
</style>
<script>
export default {
  name: 'LeftNavBar',
  data(){
    return{
      activeMenu:''
    }
  },
  methods:{
    changeChecked(name){
      this.activeMenu=name
    }
  }
}
</script>
