<template>
  <div class="layout">
    <Layout>
      <header-nav></header-nav>
      <Layout class="ivu-layout-has-sider">
        <left-nav-bar></left-nav-bar>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>首页</BreadcrumbItem>
            <BreadcrumbItem>员工管理</BreadcrumbItem>
            <BreadcrumbItem>查询员工</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '820px', background: '#fff'}">
           <Input search enter-button placeholder="请输入姓名"  @on-search="serachEmpInfo"/>
            <h1 v-show="show">今晚开黑!时不我待！</h1>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import dataTable from '../../components/EmpTable'
  import LeftNavBar from '../../components/LeftNavBar'
  import HeaderNav from '../../components/HeaderNav'
  export default {
    components: {
      dataTable,LeftNavBar,HeaderNav
    },
    data(){
      return{
        show : false
      }
    },
    methods:{
      serachEmpInfo(){
        this.show = true
      }
    }
  }
</script>
