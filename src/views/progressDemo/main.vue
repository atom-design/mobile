<template>
  <div class="range-demo-wrapper">
    <top-bar :title="'Progress'"></top-bar>
    <div class="range-content">
      <div class="range-title">默认</div>
      <div class="range-item">
        <atom-progress v-model="range0"></atom-progress>
        <div class="range-value" v-text="range0 + '%'"></div>
      </div>
      <div class="range-item">
        <atom-progress v-model="range1"></atom-progress>
        <div class="range-value" v-text="range1 + '%'"></div>
      </div>
      <div class="range-item">
        <atom-progress v-model="range2"></atom-progress>
        <div class="range-value" v-text="range2 + '%'"></div>
      </div>
    </div><div class="range-content">
      <div class="range-title">自定义</div>
      <div class="range-item">
        <atom-progress color="#dd2622" v-model="range0"></atom-progress>
        <div class="range-value" v-text="range0 + '%'"></div>
      </div>
      <div class="range-item">
        <atom-progress color="#ff9933" v-model="range1"></atom-progress>
        <div class="range-value" v-text="range1 + '%'"></div>
      </div>
      <div class="range-item">
        <atom-progress lineHeight="5px" v-model="range2"></atom-progress>
        <div class="range-value" v-text="range2 + '%'"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import atomProgress from '@/packages/progress'
export default {
  data () {
    return {
      range0: 25,
      range1: 50,
      range2: 75
    }
  },
  components: {
    topBar,
    atomProgress
  }
}
</script>

<style lang="postcss" scoped>
.range-content {
  padding-top: 20px;
  overflow: auto;
  .range-title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    text-align: left;
    padding-left: 20px;
  }
  .range-item {
    width: 80%;
    font-size: 28px;
    margin: 0 auto;
    .range-value {
      text-align: center;
      color: black;
      font-size: 15px;
    }
  }
}
</style>
