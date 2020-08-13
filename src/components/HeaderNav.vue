<template>
  <Header>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo">
<!--        <img :src="logsrc">-->
      </div>
      <div class="layout-nav">
        <MenuItem name="1">
          <Icon type="ios-navigate"></Icon>
          信息展示
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-keypad"></Icon>
          日历展示
        </MenuItem>
        <MenuItem name="3">
          <Icon type="ios-analytics"></Icon>
          登录/注册
        </MenuItem>
      </div>
    </Menu>
  </Header>
</template>
<script>
  import logsrc from './../assets/chinaunicom.png'
  export default {
    name: 'HeaderNav',
    data(){
      return{
        logsrc
      }
    }
  }
</script>
