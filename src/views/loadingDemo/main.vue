<template>
  <div class="loading-demo-wrapper">
    <top-bar :title="'Loading'"></top-bar>
    <div class="demo-item">
      <div class="title">默认类型：</div>
      <loading></loading>
    </div>
    <div class="demo-item">
      <div class="title">类型1：</div>
      <loading :type="1"></loading>
    </div>
    <div class="demo-item">
      <div class="title">类型2：</div>
      <loading :type="2"></loading>
    </div>
    <div class="demo-item">
      <div class="title">类型3：</div>
      <loading :type="3"></loading>
    </div>
    <div class="demo-item">
      <div class="title">类型4：</div>
      <loading :type="4"></loading>
    </div>
    <div class="demo-item">
      <div class="title">类型5：</div>
      <loading :type="5"></loading>
    </div>
    <div class="demo-item">
      <div class="title">类型6：</div>
      <loading :type="6"></loading>
    </div>
    <div class="demo-item">
      <div class="title">类型7：</div>
      <loading :type="7"></loading>
    </div>
    <div class="demo-item">
      <div class="title">自定义radius：</div>
      <loading :type="4" radius="100%"></loading>
    </div>
    <div class="demo-item">
      <div class="title">自定义颜色：</div>
      <loading :type="1" color="#48D1CC"></loading>
    </div>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import loading from '@/packages/loading'
export default {
  components: {
    topBar,
    loading
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
