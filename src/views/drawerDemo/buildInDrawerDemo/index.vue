<template>
  <div class="drawer-demo-wrapper">
    <top-bar :title="'Build-In Drawer'"></top-bar>
    <atom-header style="background: #108ee9; color: white" class="header">
      <i class="icon iconfont" slot="left" @click="isShow = !isShow">&#xe790;</i>
      <span class="title" slot="center">标题</span>
      <i class="icon iconfont" slot="right">&#xe646;</i>
    </atom-header>
    <atom-drawer class="drawer" v-model="isShow">
      <ul class="menu" slot="navbar">
        <li class="item">item1</li>
        <li class="item">item2</li>
        <li class="item">item3</li>
        <li class="item">item4</li>
        <li class="item">item5</li>
        <li class="item">item6</li>
      </ul>
      <div class="content" slot="content">
        content page
      </div>
    </atom-drawer>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'
export default {
  data () {
    return {
      isShow: false
    }
  },
  components: {
    topBar,
    demoTitle
  }
}
</script>

<style lang="postcss" scoped>
.drawer-demo-wrapper {
  .header {
    .icon {
      font-size: 20px;
    }
    .title {
      font-size: 16px;
    }
  }
  .drawer {
    height: calc(100vh - 104px);
    .menu {
      width: 80%;
      height: 100%;
      list-style: none;
      margin: 0;
      padding: 0;
      .item {
        color: black;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 18px;
        border-bottom: 1px solid #f0f1f2;
        box-sizing: border-box;
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: #666;
      font-size: 18px;
      color: white;
    }
  }
}
</style>
