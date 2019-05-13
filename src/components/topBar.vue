<template>
  <div class="topbar-wrapper">
    <i class="iconfont" @click="$router.replace({name: 'home'})">&#xe645;</i>
    <span class="title" v-text="this.title"></span>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['title']
}
</script>

<style lang="postcss" scoped>
  .topbar-wrapper {
    position: relative;
    height: 54px;
    background: white;
    i {
      position: absolute;
      top: 50%;
      transform: translate3d(0, -50%, 0);
      left: 12px;
      font-size: 20px;
    }
    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      font-size: 18px;
    }
  }
</style>
