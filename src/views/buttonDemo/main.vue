<template>
  <div class="button-demo-wrapper">
    <top-bar :title="'Button'"></top-bar>
    <div class="demo-wrapper">
      <atom-btn type="primary" size="large">Primary</atom-btn>
      <atom-btn type="danger" size="large">Danger</atom-btn>
      <atom-btn type="warning" size="large">Warning</atom-btn>
      <atom-btn size="large">Default</atom-btn>
      <atom-btn type="primary">Primary</atom-btn>
      <atom-btn type="danger">Danger</atom-btn>
      <atom-btn type="warning">Warning</atom-btn>
      <atom-btn>Default</atom-btn>
      <atom-btn style="border: 1px solid blue; color: blue;" :actionStyle="{background: 'blue', color: 'white'}">Custom button</atom-btn>
    </div>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import atomBtn from '@/packages/button'
export default {
  components: {
    topBar,
    atomBtn
  }
}
</script>

<style lang="postcss" scoped>
  .button-demo-wrapper {
    .demo-wrapper {
      padding: 24px;
      button {
        margin-bottom: 15px;
      }
    }
  }
</style>
