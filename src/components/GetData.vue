<template>
    <div id="baozha">
<!--      <ol>-->
<!--        <li v-for="emp in content">-->
<!--          {{emp.name+' '+emp.gender}}-->
<!--        </li>-->
<!--      </ol>-->
      <data-table :empData="content"></data-table>
    </div>
</template>

<script>
  import DataTable from './DataTable'
export default {
  name: 'GetData',
  components:{
    DataTable
  },
  el: '#baozha',
  data: function () {
    return {
      message: 'aaa啊啊啊',
      content: ''
    }
  },
  mounted () {
    this.axios.get('http://localhost:8081/getEmployee')
      .then(response => {
        this.content = response.data.data
        console.log('ok')
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
