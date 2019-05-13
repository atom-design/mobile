<template>
  <div class="range-demo-wrapper">
    <top-bar :title="'Range'"></top-bar>
    <div class="range-content">
      <div class="range-title">默认</div>
      <div class="range-item">
        <range v-model="range0"></range>
      </div>
    </div>
    <div class="range-content">
      <div class="range-title">设置区间</div>
      <div class="range-item">
        <range :min="10" :max="90" v-model="range1"></range>
      </div>
    </div>
    <div class="range-content">
      <div class="range-title">取消指示
      </div>
      <div class="range-item">
        <range v-model="range2" :isIndicator='false'></range>
      </div>
    </div>
    <div class="range-content">
      <div class="range-title">自定义
      </div>
      <div class="range-item">
        <range v-model="range2" color="#dd2622"></range>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import range from '@/packages/range'
export default {
  data () {
    return {
      range0: 0,
      range1: 10,
      range2: 0
    }
  },
  components: {
    topBar,
    range
  }
}
</script>

<style lang="postcss" scoped>
.range-content {
  height: 80px;
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
