<template>
  <div>
    <Tc></Tc>
  <Table border :columns="columns1" :data="data1">
    <template slot-scope="{ row }" slot="name">
      <strong>{{ row.name }}</strong>
    </template>
    <template slot-scope="{ row, index }" slot="action">
      <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
      <Button type="error" size="small" @click="remove(index)">删除</Button>
      <Button type="primary" size="small" @click="modal6 = true">编辑</Button>
    </template>
  </Table>
    <div class="dividPage" style="margin-top: 10px">
    <Page :total="dataNum" show-total @on-change="changepage"/>
    </div>
  </div>
</template>

<script>
  import Tc from './Tc'
export default {
    components:{
      Tc
    },
  props:['a_page'],
  data () {
    return {
      columns1: [
        {
          title: '序号',
          key: '#',
          type: 'index',
          width: 80
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '性别',
          key: 'gender'
        },
        {
          title: '备注',
          key: 'remarks',
        },
        {
          title: '值班类型',
          key: 'empDutyTypeIds',
          // render: (h) =>{
          //   return h('Tag',{
          //     props: {
          //       color : 'primary'
          //     }
          //   },)
          // }
        },
        {
          title: 'Action',
          slot: 'action',
          width: 300,
          align: 'center'
        }
      ],
      data1: [],
      dataNum:0
    }
  },
  mounted () {
    this.axios.get('http://localhost:8081/getEmployeeByPage',{
      params:{
        limit:10,
        page:1
      }
    })
      .then(response => {
        this.data1 = response.data.data
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
    },
    show(index){
      this.$Modal.info({
        title: 'User Info',
        content: `姓名：${this.data1[index].name}<br>性别：${this.data1[index].gender}<br>备注：${this.data1[index].remarks}<br>值班类型：${this.data1[index].empDutyTypeIds}`
      })
    },
    edit(){
      alert("haha")
    }
  }
}
</script>

<style scoped>

</style>
