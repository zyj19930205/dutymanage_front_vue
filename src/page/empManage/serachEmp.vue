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
<!--            <h1 v-show="show">今晚开黑!时不我待！</h1>-->
            <br/>
            <Table :columns="columns1" :data="data1" v-show="show"></Table>
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
    dataTable, LeftNavBar, HeaderNav
  },
  data () {
    return {
      show: false,
      data1: [],
      serverUrl: this.GLOBAL.localSrc,
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'gender'
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '备注',
          key: 'remarks'
        },
        {
          title: '值班日期',
          key: 'dutyDate'
        },
        {
          title: '值班类型',
          key: 'typeName'
        }
      ]
    }
  },
  methods: {
    serachEmpInfo (emp) {
      this.axios.get(this.serverUrl + '/emp/' + emp)
        .then(response => {
          this.data1 = response.data.data
        })
        this.show = true
    }
  }
}
</script>
