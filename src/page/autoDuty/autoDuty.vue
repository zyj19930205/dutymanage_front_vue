<template>

  <div class="layout">
    <Modal
      v-model="confirmModal"
      title="是否确认？"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>确定要排班吗？您可能会覆盖掉之前有过的排班表</p>
      <p>您选择的排班范围是{{DutydateRange}}</p>
    </Modal>
    <Modal
      v-model="spinWindows"
      title="是否确认？"
      @on-cancel="cancel">
      <Spin fix>
        <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
        <div>Loading</div>
      </Spin>
    </Modal>
    <Layout>
      <header-nav></header-nav>
      <Layout class="ivu-layout-has-sider">
        <left-nav-bar></left-nav-bar>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>首页</BreadcrumbItem>
            <BreadcrumbItem>自动化程序</BreadcrumbItem>
            <BreadcrumbItem>自动排班</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '820px', background: '#fff',height:'500px'}">
            <div style="background:#eee;padding: 20px">
              <Card :bordered="false">
                <p slot="title">关于自动排班</p>
                <p>自动排班将按照所设定的规则进行日期→员工匹配，节假日（如春节）已值班人员将不会被排到下一个节假日的班次。排班的底层以队列实现，已排班人员将会被移动到队列的末尾。但偶尔会存在部分特殊情况导致
                （本月值班日期较多）某名员工在一个月之内值两次班。原则上，排班名单已下发后不允许在系统上进行换班，以免打乱值班队列，但员工可以私下进行换班。</p>
                <div style="text-align: center;margin-top: 30px">
                  <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px" format="yyyy-MM-dd" v-model="DutydateRange"></DatePicker>
                  <Button @click="beginAutoDuty">开始自动排班</Button>
<!--                  <Button @click="openPrograss">开启进度条</Button>-->
                </div>
              </Card>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>

</template>
<script>
import LeftNavBar from '../../components/LeftNavBar'
import HeaderNav from '../../components/HeaderNav'
export default {
  components: {
    LeftNavBar, HeaderNav
  },
  data () {
    return {
      confirmModal: false,
      spinWindows: false,
      DutydateRange: [],
      percent: 0,
      serverUrl: this.GLOBAL.localSrc
    }
  },
  methods: {
    beginAutoDuty () {
      this.confirmModal = true
    },
    handleChange (dateRange) {
      this.DutydateRange = dateRange
    },
    ok () {
      let beginDate = this.DutydateRange[0]
      let endDate = this.DutydateRange[1]
      this.spinWindows = true
      this.axios.post(this.serverUrl + '/autoDuty/' + beginDate + '/' + endDate)
        .then(response => {
          this.spinWindows = false
          this.$Message.success('自动排班成功！')
          this.$router.push({ path: '/dutyList' })
        })
    },
    cancel () {
      this.$Message.info('已取消')
    },
    openPrograss () {
      this.spinWindows = true
    }
  }
}
</script>
<style>
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  .demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }
</style>
