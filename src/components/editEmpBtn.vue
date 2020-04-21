<template>
<div id="editEmpBtn">
  <Button type="primary" @click="modal6 = true"  size="small">修改</Button>
  <Modal
    v-model="modal6"
    title="Title"
    :loading="loading"
    @on-ok="asyncOK">
    <p>After you click ok, the dialog box will close in 2 seconds.</p>
  </Modal>
</div>
</template>
<script>
export default {
  props: ['modal1'],
  data () {
    return {
      // eslint-disable-next-line no-undef
      modal6: false,
      loading: true
    }
  },
  methods: {
    asyncOK () {
      setTimeout(() => {
        this.modal6 = false
      }, 2000)
    }
  }
}
</script>
<style>
  #editEmpBtn{
    display: inline-block;
  }
</style>
