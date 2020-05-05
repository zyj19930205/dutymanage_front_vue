<template>
  <div>
    <Modal
      v-model="dutyChange"
      title="换班啦！"
      @on-ok="changeDutyOk">
      <Form :model="formItem" :label-width="80">
        <FormItem>
        <Input type="text" v-model="dutyInfo.empName" clearable style="width: 300px">
          <span slot="prepend">姓名</span>
        </Input>
        </FormItem>
        <FormItem>
        <Input type="text" v-model="dutyInfo.dutyDate" style="width: 300px">
          <span slot="prepend">值班日期</span>
        </Input>
        </FormItem>
        <FormItem>
          <Input type="text" v-model="changedEmpName" style="width: 300px"  @on-blur="selectDate(changedEmpName)"> <span slot="append">和谁换</span></Input>
        </FormItem>
        <FormItem>
          <Input type="text" v-model="changedEmpDate" style="width: 300px"> <span slot="append">换哪天？</span></Input>
        </FormItem>
      </Form>
    </Modal>
  <Table border :columns="columns" :data="dutyData">
    <template slot-scope="{ row }" slot="name">
      <strong>{{ row.name }}</strong>
    </template>
    <template slot-scope="{ row, index }" slot="action">
      <Button type="warning" size="small" style="margin-right: 5px" @click="changeDuty(index)">换班</Button>
      <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
      <Button type="error" size="small" @click="remove(index)">删除</Button>
      <!--      <Button type="primary" size="small" @click="modal6 = true">编辑</Button>-->
      <!--      <Button type="primary" @click="modal6 = true" size="small">修改</Button>-->
<!--      <edit-emp-btn v-bind:empInfo="data1[index]"></edit-emp-btn>-->
    </template>
  </Table>


  <div class="dividPage" style="margin-top: 10px">
    <Page :total="dataNum" show-total @on-change="changepage"/>
  </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        columns: [
          {
            title: '序号',
            key: '#',
            type: 'index',
            width: 80
          },
          {
            title: '姓名',
            key: 'empName'
          },
          {
            title: '值班日期',
            key: 'dutyDate',
            sortable: true
          },
          {
            title: '值班类型',
            key: 'typeName'
          },
          {
            title: '操作',
            slot:'action',
            width: 300,
            align: 'center'
          }
        ],
        dutyData: [],
        dataNum: 0,
        dutyChange:false,
        dutyInfo:'',
        changedEmpName:'',
        changedEmpDate:'',
        modal10:''
      }
    },mounted () {
      this.axios.get('http://localhost:8081/getTempDutyResult', {
        params: {
          limit: 10,
          page: 1
        }
      })
        .then(response => {
          this.dutyData = response.data.data
        })
        .catch(function (error) {
          console.log(error)
        })

      this.axios.get('http://localhost:8081/getTempDutyResult')
        .then(response => {
          this.dataNum = response.data.count
        })
    },
    methods:{
      changepage (index) {
        console.log(index)
        this.axios.get('http://localhost:8081/getTempDutyResult', {
          params: {
            limit: 10,
            page: index
          }
        })
          .then(response => {
            this.dutyData = response.data.data
            // this.dataNum = this.data1.length
            console.log('ok')
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      show (index) {
        this.$Modal.info({
          title: '值班信息',
          content: `ID：${this.dutyData[index].empName}<br>姓名：${this.dutyData[index].dutyDate}<br>性别：${this.dutyData[index].typeName}`
        })
      },
      changeDuty(index){
        this.dutyChange = true
        this.dutyInfo = this.dutyData[index]
      },selectDate(name){
        this.axios.get('http://localhost:8081/getDutyDateByEmpName/'+name)
          .then(response => {
            this.changedEmpDate = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },changedEmpDate(name){
        alert(name)
      },changeDutyOk(){
        let params = new URLSearchParams();
        params.append('empName1',this.dutyInfo.empName)
        params.append('empName2',this.changedEmpName)
        params.append('dutyDate1',this.dutyInfo.dutyDate)
        params.append('dutyDate2',this.changedEmpDate)
        this.axios.post('http://localhost:8081/replaceEmpDutyResult', params)
          .then(response => {
            this.changedEmpDate = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>
<style>

</style>
