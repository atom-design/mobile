<template>
  <div class="searchBar-demo-wrapper">
    <top-bar :title="'SearchBar'"></top-bar>
    <demo-title>默认</demo-title>
    <atom-search placeholder="Please Input" v-model="searchVal"></atom-search>
    <demo-title>无清空按钮</demo-title>
    <atom-search placeholder="Please Input" :canClear="false"></atom-search>
    <demo-title>自定义样式</demo-title>
    <atom-search placeholder="Please Input" style="border-color: #aaa; background: rgba(0, 0, 0, 0.8); color: white"></atom-search>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'
import atomSearch from '@/packages/searchBar'
export default {
  data () {
    return {
      searchVal: null
    }
  },
  components: {
    topBar,
    demoTitle,
    atomSearch
  }
}
</script>

<style lang="postcss" scoped>
.searchBar-demo-wrapper {
}
</style>
