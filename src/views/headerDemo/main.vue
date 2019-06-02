<template>
  <div class="header-demo-wrapper">
    <top-bar :title="'Header'"></top-bar>
    <demo-title>默认</demo-title>
    <atom-header>
      <i class="icon iconfont" slot="left">&#xe790;</i>
      <span class="title" slot="center">标题</span>
      <i class="icon iconfont" slot="right">&#xe646;</i>
    </atom-header>
    <demo-title>自定义header</demo-title>
    <atom-header :style="{background: '#108ee9', color: 'white'}">
      <i class="icon iconfont" slot="left">&#xe790;</i>
      <span class="title" slot="center">标题</span>
      <i class="icon iconfont" slot="right">&#xe646;</i>
    </atom-header>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'
export default {
  components: {
    topBar,
    demoTitle
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
