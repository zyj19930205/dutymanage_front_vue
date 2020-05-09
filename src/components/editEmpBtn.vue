<!--编辑员工按钮，点击后会弹出员工信息修改弹窗-->
<template>
<div id="editEmpBtn">
  <Button type="primary" @click="editEmpInfoById"  size="small" >修改</Button>
  <Modal
    v-model="editEmpInfo"
    title="修改员工信息"
    @on-ok="changeEmpInfo">
    <Form :model="formItem" :label-width="80">
      <FormItem label="姓名">
        <Input type="text" v-model="empInfo.name" clearable style="width: 200px"/>
      </FormItem>

      <FormItem label="性别">
      <RadioGroup v-model="empInfo.gender">
      <Radio label="男">
        <span>男</span>
      </Radio>
      <Radio label="女">
        <span>女</span>
      </Radio>
    </RadioGroup>
    </FormItem>

      <FormItem label="备注">
        <Input v-model="empInfo.remarks"  clearable style="width: 200px" />
      </FormItem>

      <FormItem label="值班类型">
<!--        <Input v-model="empInfo.empDutyTypeIds"  clearable style="width: 200px" />-->
        <CheckboxGroup v-model="empDutyIdArrayName" @on-change="selectDutyType">
          <Checkbox label="不参与值班"  disabled></Checkbox>
          <Checkbox label="周四晚班" ></Checkbox>
          <Checkbox label="普通晚班" ></Checkbox>
<!--          <Checkbox label="周末白班" border></Checkbox>-->
          <Checkbox label="周六白班" ></Checkbox>
          <Checkbox label="周日白班" ></Checkbox>
          <Checkbox label="周六晚班" ></Checkbox>
          <Checkbox label="周日晚班" ></Checkbox>
          <Checkbox label="假日白班" ></Checkbox>
          <Checkbox label="假日晚班" ></Checkbox>
          <Checkbox label="特殊值班" ></Checkbox>
        </CheckboxGroup>
      </FormItem>

    </Form>
  </Modal>
</div>
</template>

<script>
export default {
  props: ['empInfo'],
  data () {
    return {
      // eslint-disable-next-line no-undef
      editEmpInfo: false,
      loading: true,
      empDutyIdArray: [],
      empDutyIdArrayName: [],
      serverUrl: this.GLOBAL.localSrc
      // empName: this.empInfo.name,
      // gender: this.empInfo.gender,
      // remarks: this.empInfo.remarks,
      // dutyTypeIds: this.empInfo.empDutyTypeIds
    }
  },
  // mounted () {
  //   alert(this.empInfo)
  // },
  methods: {
    editEmpInfoById () {
      this.editEmpInfo = true
      let empDutyTypes = this.empInfo.empDutyTypeIds
      let empDutyTypesArray = empDutyTypes.split(',')
      this.empDutyIdArray = empDutyTypesArray
      this.empDutyIdArrayName = this.transferDutyNumToDutyName(this.empDutyIdArray)
      // alert(this.empDutyIdArrayName)
    },
    transferDutyNumToDutyName (dutyTypeIdArray) {
      let dutyTypes = [
        {id: 1, text: '不参与值班'},
        {id: 2, text: '假日白班'},
        {id: 3, text: '周四晚班'},
        {id: 4, text: '周末白班'},
        {id: 5, text: '普通晚班'},
        {id: 6, text: '周六白班'},
        {id: 7, text: '周日白班'},
        {id: 8, text: '周六晚班'},
        {id: 9, text: '周日晚班'},
        {id: 11, text: '假日晚班'},
        {id: 10, text: '特殊值班'}
      ]
      let dutyText = []
      for (let i = 0, l = dutyTypeIdArray.length; i < l; i++) {
        for (let j = 0, k = dutyTypes.length; j < k; j++) {
          if (dutyTypeIdArray[i] == dutyTypes[j].id) {
            dutyText.push(dutyTypes[j].text)
          }
        }
      }
      return dutyText
    },
    transferDutyNameToDutyNum (dutyNameArray) {
      let dutyTypes = [
        {id: 1, text: '不参与值班'},
        {id: 2, text: '假日白班'},
        {id: 3, text: '周四晚班'},
        {id: 4, text: '周末白班'},
        {id: 5, text: '普通晚班'},
        {id: 6, text: '周六白班'},
        {id: 7, text: '周日白班'},
        {id: 8, text: '周六晚班'},
        {id: 9, text: '周日晚班'},
        {id: 11, text: '假日晚班'},
        {id: 10, text: '特殊值班'}
      ]
      let dutyNum = []
      for (let i = 0, l = dutyNameArray.length; i < l; i++) {
        for (let j = 0, k = dutyTypes.length; j < k; j++) {
          if (dutyNameArray[i] == dutyTypes[j].text) {
            dutyNum.push(dutyTypes[j].id)
          }
        }
      }
      return dutyNum
    },
    changeEmpInfo () {
      let tempDutyNum = this.transferDutyNameToDutyNum(this.empDutyIdArrayName).join(',')
      this.empInfo.empDutyTypeIds = tempDutyNum
      let params = new URLSearchParams()
      params.append('dutyType', tempDutyNum)
      params.append('id', this.empInfo.id)
      this.axios.put(this.serverUrl + '/modifyEmployee', params)
        .then(response => {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    selectDutyType () {
      // alert(this.empDutyIdArrayName)
    }
  }
}
</script>
<style>
  #editEmpBtn{
    display: inline-block;
  }
</style>
