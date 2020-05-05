<template>
  <div class="layout">
    <Layout>
      <header-nav></header-nav>
      <Layout class="ivu-layout-has-sider">
        <left-nav-bar></left-nav-bar>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>首页</BreadcrumbItem>
            <BreadcrumbItem>排班管理</BreadcrumbItem>
            <BreadcrumbItem>值班队列查询</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '820px', background: '#fff'}">
            <duty-queue-table></duty-queue-table>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import LeftNavBar from '../../components/LeftNavBar'
  import HeaderNav from '../../components/HeaderNav'
  import DutyQueueTable from '../../components/DutyQueueTable'
  export default {
    components: {
      DutyQueueTable,LeftNavBar,HeaderNav
    }
  }
</script>
