<template>
  <div class="loading-demo-wrapper">
    <top-bar :title="'Loading'"></top-bar>
    <div class="demo-item">
      <div class="title">默认类型：</div>
      <atom-loading></atom-loading>
    </div>
    <div class="demo-item">
      <div class="title">类型1：</div>
      <atom-loading :type="1"></atom-loading>
    </div>
    <div class="demo-item">
      <div class="title">类型2：</div>
      <atom-loading :type="2"></atom-loading>
    </div>
    <div class="demo-item">
      <div class="title">类型3：</div>
      <atom-loading :type="3"></atom-loading>
    </div>
    <div class="demo-item">
      <div class="title">类型4：</div>
      <atom-loading :type="4"></atom-loading>
    </div>
    <div class="demo-item">
      <div class="title">类型5：</div>
      <atom-loading :type="5"></atom-loading>
    </div>
    <div class="demo-item">
      <div class="title">类型6：</div>
      <atom-loading :type="6"></atom-loading>
    </div>
    <div class="demo-item">
      <div class="title">类型7：</div>
      <atom-loading :type="7"></atom-loading>
    </div>
    <div class="demo-item">
      <div class="title">自定义radius：</div>
      <atom-loading :type="4" radius="100%"></atom-loading>
    </div>
    <div class="demo-item">
      <div class="title">自定义颜色：</div>
      <atom-loading :type="1" color="#48D1CC"></atom-loading>
    </div>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
export default {
  components: {
    topBar
  }
}
</script>

<style lang="postcss" scoped>
.loading-demo-wrapper {
  .title {
    font-size: 18px;
  }
  .demo-item {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid #f0f1f2;
  }
}
</style>
