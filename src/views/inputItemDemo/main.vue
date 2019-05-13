<template>
  <div class="inputItem-demo-wrapper">
    <top-bar :title="'InputItem'"></top-bar>
    <demo-title>默认</demo-title>
    <atom-input :title="'默认标题'" :placeholder="'Please Input'" v-model="input0"></atom-input>
    <demo-title>无清空按钮</demo-title>
    <atom-input :title="'默认标题'" :placeholder="'Please Input'" :canClear="false"></atom-input>
    <demo-title>自定义样式</demo-title>
    <atom-input :title="'默认标题'" style="color: #108ee9" :placeholder="'Please Input'" :inputStyle="{color: '#108ee9'}"></atom-input>
    <demo-title>类型</demo-title>
    <atom-input :title="'数字'" :placeholder="'Please Input'" :type="'number'"></atom-input>
    <atom-input :title="'密码'" :placeholder="'Please Input'" :type="'password'"></atom-input>
    <demo-title>右对齐</demo-title>
    <atom-input :title="'默认标题'" :placeholder="'align right'" :align="'right'"></atom-input>
    <demo-title>居中</demo-title>
    <atom-input :title="'默认标题'" :placeholder="'align center'" :align="'center'"></atom-input>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'
import atomInput from '@/packages/inputItem'
export default {
  data () {
    return {
      input0: null
    }
  },
  components: {
    topBar,
    demoTitle,
    atomInput
  }
}
</script>

<style lang="postcss" scoped>
.header-demo-wrapper {
  .icon {
    font-size: 20px;
  }
  .title {
    font-size: 16px;
  }
}
</style>
