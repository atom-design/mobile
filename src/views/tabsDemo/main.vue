<template>
  <div class="tabs-demo-wrapper">
    <top-bar :title="'Tabs'"></top-bar>
    <demo-title>默认</demo-title>
    <atom-tabs v-model="selIndex1">
      <div class="tab-navigator" slot="navbar">
        <div class="nav" :class="{'active': selIndex1 === 0}" @click="selIndex1 = 0">first</div>
        <div class="nav" :class="{'active': selIndex1 === 1}" @click="selIndex1 = 1">second</div>
        <div class="nav" :class="{'active': selIndex1 === 2}" @click="selIndex1 = 2">third</div>
      </div>
      <div class="content">first tab</div>
      <div class="content">second tab</div>
      <div class="content">third tab</div>
    </atom-tabs>
    <demo-title>无手势</demo-title>
    <atom-tabs v-model="selIndex2" :isGesture="false">
      <div class="tab-navigator" slot="navbar">
        <div class="nav" :class="{'active': selIndex2 === 0}" @click="selIndex2 = 0">first</div>
        <div class="nav" :class="{'active': selIndex2 === 1}" @click="selIndex2 = 1">second</div>
        <div class="nav" :class="{'active': selIndex2 === 2}" @click="selIndex2 = 2">third</div>
      </div>
      <div class="content">first tab</div>
      <div class="content">second tab</div>
      <div class="content">third tab</div>
    </atom-tabs>
    <demo-title>无动画</demo-title>
    <atom-tabs v-model="selIndex3" :isGesture="false" :duration="0">
      <div class="tab-navigator" slot="navbar">
        <div class="nav" :class="{'active': selIndex3 === 0}" @click="selIndex3 = 0">first</div>
        <div class="nav" :class="{'active': selIndex3 === 1}" @click="selIndex3 = 1">second</div>
        <div class="nav" :class="{'active': selIndex3 === 2}" @click="selIndex3 = 2">third</div>
      </div>
      <div class="content">first tab</div>
      <div class="content">second tab</div>
      <div class="content">third tab</div>
    </atom-tabs>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'
import atomTabs from '@/packages/tabs'
export default {
  data () {
    return {
      selIndex1: 0,
      selIndex2: 0,
      selIndex3: 0
    }
  },
  components: {
    topBar,
    demoTitle,
    atomTabs
  }
}
</script>

<style lang="postcss" scoped>
.tabs-demo-wrapper {
  .tab-navigator {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #ccc;
    .nav {
      flex: 1 0 33%;
      text-align: center;
      height: 45px;
      line-height: 45px;
      background: white;
      font-size: 18px;
    }
    .active {
      color: #108ee9;
    }
  }
  .content {
    width: 100%;
    height: 200px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid #f0f1f2;
    border-top: unset;
    border-bottom: unset;
    font-size: 18px;
  }
}
</style>
