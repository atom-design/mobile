<template>
  <div class="textarea-demo-wrapper">
    <top-bar :title="'Textarea'"></top-bar>
    <demo-title>默认</demo-title>
    <atom-textarea style="margin-left: 20px" placeholder="Please Input"></atom-textarea>
    <demo-title>限制输入</demo-title>
    <atom-textarea :maxLength="10" style="margin-left: 20px" placeholder="Please Input"></atom-textarea>
    <demo-title>自定义样式</demo-title>
    <atom-textarea :maxLength="100" placeholder="Please Input" style="display: block; margin: 0 auto; color: #108ee9;; width: 90%; height: 100px; box-shadow: 0 3px 10px #ccc; font-size: 20px;"></atom-textarea>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'
import atomTextarea from '@/packages/textarea'
export default {
  components: {
    topBar,
    demoTitle,
    atomTextarea
  }
}
</script>

<style lang="postcss" scoped>
</style>
