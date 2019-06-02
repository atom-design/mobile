<template>
  <div class="badge-demo-wrapper">
    <top-bar :title="'Badge'"></top-bar>
    <div class="badge-content">
      <div class="badge-title">默认</div>
      <div class="badge-item">
        <atom-badge>1</atom-badge>
        <atom-badge type="warning">2</atom-badge>
        <atom-badge type="danger">3</atom-badge>
      </div>
      <div class="badge-title">自定义</div>
      <div class="badge-item">
        <atom-badge style="background: #48D1CC; border-radius: 6px;">1</atom-badge>
        <atom-badge type="warning"  style="border-radius: 6px">2</atom-badge>
        <atom-badge type="danger" style="border-radius: 100%; width: 20px; height: 20px; line-height: 20px; padding: 0;">3</atom-badge>
      </div>
      <div class="badge-title">案例</div>
      <div class="badge-demo">
        <div class="text">未读消息</div>&nbsp;
        <atom-badge>1</atom-badge>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
export default {
  data () {
    return {
      badge0: 0,
      badge1: 10
    }
  },
  components: {
    topBar
  }
}
</script>

<style lang="postcss" scoped>
.badge-content {
  overflow: auto;
  .badge-title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    text-align: left;
    padding-left: 20px;
  }
  .badge-item {
    width: 80%;
    font-size: 28px;
    margin: 0 auto;
  }
  .badge-demo {
    height: 45px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    background: white;
    font-size: 16px;
    border: 1px solid #ccc;
  }
}
</style>
