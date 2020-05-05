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
            <BreadcrumbItem>值班历史查询</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '820px', background: '#fff'}">
            <div class="dutyToolBtn" style="margin-bottom: 10px">
              <Input placeholder="根据姓名查询" style="width: auto">
                <Icon type="ios-search" slot="suffix" />
              </Input>
              <div style="display: inline-block;float: right">
              <DatePicker type="daterange" placement="bottom-end" placeholder="根据日期搜索" style="width: 200px"></DatePicker>
                <Button>搜索</Button>
              </div>
            </div>
          <duty-history></duty-history>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import LeftNavBar from '../../components/LeftNavBar'
  import HeaderNav from '../../components/HeaderNav'
  import DutyHistory from '../../components/DutyHistory'
  export default {
    components: {
      DutyHistory,LeftNavBar,HeaderNav
    }
  }
</script>
