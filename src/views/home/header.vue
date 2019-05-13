<template>
  <header id="header" class="clearfix">
    <h1 class="title">Atom Design</h1>
     <p class="dis">mobile ui library for vue developer</p>
  </header>
</template>

<script type="text/javascript">
export default {
  data () {
    return {}
  }
}
</script>

<style lang="postcss" scoped>
  #header {
    position: relative;
    padding: 12px 24px;
    box-shadow: 0 1px 2px #f0f1f2;
    box-sizing: border-box;
    background: white;
    .title {
      font-weight: bold;
      font-size: 18px;
      height: 32px;
      line-height: 32px;
      white-space: nowrap;
      text-align: left;
    }
    .dis {
      font-size: 16px;
      color: #555;
    }
  }
  .iconfont {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translate3d(0, -50%, 0);
    font-size: 36px;
  }
  #menu {
    float: right;
    width: 70%;
    .atom-menu {
      float: right;
      font-size: 14px;
      color: #333;
      cursor: pointer;
      li {
        display: inline-block;
        min-width: 80px;
        height: 64px;
        line-height: 64px;
        text-align: center;
        box-sizing: border-box;
        &:hover {
          color: #0099FF;
          border-bottom: 2px solid #0099ff;
        }
      }
    }
  }
</style>
