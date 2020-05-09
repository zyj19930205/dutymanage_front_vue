
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
            <BreadcrumbItem>值班信息</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '820px', background: '#fff'}">
            <div class="dutyToolBtn" style="margin-bottom: 10px">
              <Button type="success" @click="executeDutyPlan">执行排班计划</Button>
              <Button type="success">在日历中展示</Button>
            </div>
            <duty-table>
            </duty-table>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import LeftNavBar from '../../components/LeftNavBar'
import HeaderNav from '../../components/HeaderNav'
import DutyTable from '../../components/DutyTable'
export default {
  data () {
    return {
      serverUrl: this.GLOBAL.localSrc
    }
  },
  components: {
    DutyTable, LeftNavBar, HeaderNav
  },
  methods: {
    executeDutyPlan () {
      this.axios.post(this.serverUrl + '/executeFormalDutyPlan')
        .then(response => {
          alert('执行成功！')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
