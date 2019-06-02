<template>
  <div class="switch-demo-wrapper">
    <top-bar :title="'Switch'"></top-bar>
    <div class="switch-content">
      <div class="switch-item">
        <span class="switch-title">默认false</span>
        <div class="switch-demo">
          <atom-switch v-model="switch0"></atom-switch>
          <span v-text="switch0"></span>
        </div>
      </div>
      <div class="switch-item">
        <span class="switch-title">默认true</span>
        <div class="switch-demo">
          <atom-switch v-model="switch1"></atom-switch>
          <span v-text="switch1"></span>
        </div>
      </div>
      <div class="switch-item">
        <span class="switch-title">自定义颜色</span>
        <div class="switch-demo">
          <atom-switch v-model="switch3" :color="'#ff9933'"></atom-switch>
          <span v-text="switch3"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
export default {
  data () {
    return {
      switch0: false,
      switch1: true,
      switch3: true
    }
  },
  components: {
    topBar
  }
}
</script>

<style lang="postcss" scoped>
.switch-content {
  overflow: auto;
  .switch-item {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid #f0f1f2;
    white-space: 10px;
    .switch-title {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      text-align: left;
      margin-right: 24px;
    }
    .switch-demo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100px;
    }
  }
}
</style>
