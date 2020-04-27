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
            <BreadcrumbItem>添加员工</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">

            <template>
              <Form :model="formItem" :label-width="80">
                <FormItem label="员工姓名">
                  <Input v-model="formItem.input" placeholder="请输入姓名"></Input>
                </FormItem>
                <FormItem label="组别">
                  <Select v-model="formItem.select">
                    <Option value="营业">营业组</Option>
                    <Option value="账务">账务组</Option>
                    <Option value="数据">数据组</Option>
                    <Option value="平台">平台组</Option>
                  </Select>
                </FormItem>
                <FormItem label="入职日期">
                  <Row>
                    <Col span="11">
                      <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem label="性别">
                  <RadioGroup v-model="formItem.radio">
                    <Radio label="male">男</Radio>
                    <Radio label="female">女</Radio>
                  </RadioGroup>
                </FormItem>
                <FormItem label="值班类型">
                  <CheckboxGroup v-model="formItem.checkbox">
                    <Checkbox label="不值班" value="1"></Checkbox>
                    <Checkbox label="假日白班" value="2"></Checkbox>
                    <Checkbox label="周四晚班" value="3"></Checkbox>
                    <Checkbox label="周末白班" value="4"></Checkbox>
                    <Checkbox label="普通晚班" value="5"></Checkbox>
                    <Checkbox label="周六白班" value="6"></Checkbox>
                    <Checkbox label="周日白班" value="7"></Checkbox>
                    <Checkbox label="周六晚班" value="8"></Checkbox>
                    <Checkbox label="周日晚班" value="9"></Checkbox>
                    <Checkbox label="特殊值班" value="10"></Checkbox>
                    <Checkbox label="假日晚班" value="11"></Checkbox>
                  </CheckboxGroup>
                </FormItem>
                <FormItem label="备注">
                  <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="描述一下你自个吧！"></Input>
                </FormItem>
                <FormItem>
                  <Button type="primary">Submit</Button>
                  <Button style="margin-left: 8px">Cancel</Button>
                </FormItem>
              </Form>
            </template>
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
    dataTable, LeftNavBar, HeaderNav
  },data () {
    return {
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  }

}
</script>
