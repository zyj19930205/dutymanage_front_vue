<template>
  <div>
  <Table border :columns="columns" :data="dutyData"></Table>

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
            type: 'index'
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
          }
        ],
        dutyData: [],
        dataNum: 0
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
      }
    }
  }
</script>
