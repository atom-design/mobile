<template>
  <div class="slideItem-demo-wrapper">
    <top-bar :title="'SlideItem'"></top-bar>
    <demo-title>右边按钮</demo-title>
    <atom-slide-item>
      <div class="slide-demo">向左拖拽</div>
      <div class="slide-action" slot="rightAction">
        <div class="action edit" @click="show">编辑</div>
        <div class="action delete" @click="show">删除</div>
      </div>
    </atom-slide-item>
    <demo-title>左边按钮</demo-title>
    <atom-slide-item>
      <div class="slide-demo">向右拖拽</div>
      <div class="slide-action" slot="leftAction">
        <div class="action edit" @click="show">编辑</div>
        <div class="action delete" @click="show">删除</div>
      </div>
    </atom-slide-item>
    <demo-title>两边按钮</demo-title>
    <atom-slide-item>
      <div class="slide-action" slot="rightAction">
        <div class="action edit" @click="show">编辑</div>
        <div class="action delete" @click="show">删除</div>
      </div>
      <div class="slide-demo">左右拖拽</div>
      <div class="slide-action" slot="leftAction">
        <div class="action info" @click="show">查看</div>
      </div>
    </atom-slide-item>
    <demo-title>控制</demo-title>
    <atom-slide-item v-model="isClose">
      <div class="slide-action" slot="rightAction">
        <div class="action edit" @click="show">编辑</div>
        <div class="action delete" @click="show">删除</div>
      </div>
      <div class="slide-demo">左右拖拽</div>
      <div class="slide-action" slot="leftAction">
        <div class="action info" @click="show">查看</div>
      </div>
    </atom-slide-item>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'
// import slide from '@/packages/slideItem'
export default {
  data () {
    return {
      isClose: false
    }
  },
  components: {
    topBar,
    demoTitle/* ,
    'atom-slide-item': slide */
  },
  methods: {
    show () {
      this.$toast(event.target.innerHTML);
      this.isClose = true;
    }
  }
}
</script>

<style lang="postcss" scoped>
.slideItem-demo-wrapper {
  .slide-demo {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    text-align: center;
    background: white;;
  }
  .slide-action {
    display: flex;
    font-size: 0;
    .action {
      width: 80px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 18px;
      color: white;
    }
    .info {
      background: #333;
    }
    .edit {
      background: #108ee9;;
    }
    .delete {
      background: #dd2622;;
    }
  }
}
</style>
