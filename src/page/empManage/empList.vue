
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
            <BreadcrumbItem>员工列表</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <data-table></data-table>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import dataTable from '../../components/DataTable'
import LeftNavBar from '../../components/LeftNavBar'
import HeaderNav from '../../components/HeaderNav'
export default {
  components: {
    dataTable,LeftNavBar,HeaderNav
  }
}
</script>
