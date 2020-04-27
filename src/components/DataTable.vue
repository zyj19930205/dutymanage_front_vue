<template>
  <div>
  <Table border :columns="columns1" :data="data1">
    <template slot-scope="{ row }" slot="name">
      <strong>{{ row.name }}</strong>
    </template>
    <template slot-scope="{ row, index }" slot="action">
      <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
      <Button type="error" size="small" @click="remove(index)">删除</Button>
<!--      <Button type="primary" size="small" @click="modal6 = true">编辑</Button>-->
<!--      <Button type="primary" @click="modal6 = true" size="small">修改</Button>-->
      <edit-emp-btn v-bind:empInfo="data1[index]"></edit-emp-btn>
    </template>
  </Table>
    <div class="dividPage" style="margin-top: 10px">
    <Page :total="dataNum" show-total @on-change="changepage"/>
    </div>
  </div>
</template>

<script>
import EditEmpBtn from './editEmpBtn'
export default {
  name: 'dataTable',
  components: {
    EditEmpBtn
  },
  props: ['a_page'],
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
          key: 'name',
          width: 150
        },
        {
          title: '性别',
          key: 'gender',
          width: 100
        },
        {
          title: '备注',
          key: 'remarks',
          width: 120
        },
        {
          title: '值班类型',
          key: 'empDutyTypeIds',
          render: (h, params) => {
            let item = this.data1[params.index]
            console.log(item)
            let aba = item.empDutyTypeIds
            let cbc = aba.split(',')
            let option = h('div', [])
            cbc.forEach((ele, idx) => {
              let subOptions = h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                },
                style: {
                  color: '#1255e2',
                  margin: '5px',
                  border: '1px solid #1255e2'
                }
              }, this.transferDutyNumToDutyName(ele) + '')
              option.children.push(subOptions)
            })
            return option
          }
        },
        {
          title: 'Action',
          slot: 'action',
          width: 300,
          align: 'center'
        }
      ],
      data1: [],
      dataNum: 0,
      modal6: false
    }
  },
  mounted () {
    this.axios.get('http://localhost:8081/getEmployeeByPage', {
      params: {
        limit: 10,
        page: 1
      }
    })
      .then(response => {
        this.data1 = response.data.data
      })
      .catch(function (error) {
        console.log(error)
      })
    this.axios.get('http://localhost:8081/getEmployee')
      .then(response => {
        this.dataNum = response.data.count
      })
  },
  methods: {
    changepage (index) {
      console.log(index)
      this.axios.get('http://localhost:8081/getEmployeeByPage', {
        params: {
          limit: 10,
          page: index
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
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `ID：${this.data1[index].id}<br>姓名：${this.data1[index].name}<br>性别：${this.data1[index].gender}<br>备注：${this.data1[index].remarks}<br>值班类型：${this.data1[index].empDutyTypeIds}`
      })
    },
    edit () {
      alert('haha')
    },
    transferDutyNumToDutyName (dutyTypeIdArray) {
      let dutyTypes = [
        {id: 2, text: '假日白班'},
        {id: 3, text: '周四晚班'},
        {id: 5, text: '普通晚班'},
        {id: 6, text: '周六白班'},
        {id: 7, text: '周日白班'},
        {id: 8, text: '周六晚班'},
        {id: 9, text: '周日晚班'},
        {id: 11, text: '假日晚班'},
        {id: 4, text: '周末白班'},
        {id: 1, text: '不参与值班'},
        {id: 10, text: '特殊值班'}
      ]
      for (let i = 0, l = dutyTypes.length; i < l; i++) {
        let g = dutyTypes[i]
        // console.log('value is' + dutyTypeIdArray)
        if (g.id == dutyTypeIdArray) { return g.text }
      }
      return ''
    }
  }
}
</script>

<style scoped>

</style>
