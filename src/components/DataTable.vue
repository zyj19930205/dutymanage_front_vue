<template>
  <div>
  <Table border :columns="columns1" :data="data1"></Table>
    <Page :total="dataNum" show-total @on-change="changepage"/>
  </div>
</template>

<script>
export default {
  props:['a_page'],
  data () {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'gender'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: '日期',
          key: 'date'
        }
      ],
      data1: [],
      dataNum:0
    }
  },
  mounted () {
    this.axios.get('http://localhost:8081/getEmployeeByPage',{
      params:{
        limit:15,
        page:1
      }
    })
      .then(response => {
        this.data1 = response.data.data
        // this.dataNum = this.data1.length
        console.log('ok')
      })
      .catch(function (error) {
        console.log(error)
      })
    this.axios.get("http://localhost:8081/getEmployee")
    .then(response =>{
      this.dataNum = response.data.count
    })
  },
  methods:{
    changepage(index){
      console.log(index)
      this.axios.get('http://localhost:8081/getEmployeeByPage',{
        params:{
          limit:10,
          page:index
        }
      })
        .then(response => {
          this.data1 = response.data.data
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

<style scoped>

</style>
