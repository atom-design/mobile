<template>
  <div class="item-wrapper">
    <div class="title" @click="setShow">
      <div class="text" v-text="info.title"></div>
      <i class="icon iconfont iconjiantouxia" :class="{'icon-rotate': isShow === true}"></i>
    </div>
    <ul class="comp-list" v-show="isShow">
      <li class="comp-item" v-for="(item, index) in info.childs" :key="index" @click="$router.replace({name: item.routeName})">
       <span v-text="item.text"></span>
       <i class="iconfont">&#xe646;</i>
     </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      isShow: localStorage.showCtrl && JSON.parse(localStorage.showCtrl)[this.index]
    }
  },
  props: ['info', 'index'],
  watch: {
    isShow (val) {
      const ctrlJSON = JSON.parse(localStorage.showCtrl);
      ctrlJSON[this.index] = val;
      localStorage.showCtrl = JSON.stringify(ctrlJSON);
    }
  },
  methods: {
    setShow () {
      this.isShow = !this.isShow
      const iconDom = event.currentTarget.children.item(1)
      let animDeg = 0
      if (this.isShow) animDeg = 180
      iconDom.style.transform = 'rotate3d(0, 0, 1, ' + animDeg + 'deg)'
    }
  }
}
</script>

<style lang="postcss" scoped>
  .item-wrapper {
    background: white;
    padding: 10px;
    margin-bottom: 10px;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 46px;
      font-size: 16px;
      border-radius: 2px;
      .icon {
        font-size: 18px;
        color: #666;
        transition: transform .15s;
      }
      .icon-rotate {
        transform: rotate3d(0, 0, 1, 180deg);
      }
    }
    .comp-list {
      .comp-item {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        height: 46px;
        line-height: 46px;
        font-size: 16px;
        color: #666;
        border-top: 2px solid #f0f1f2;
        i {
          font-size: 18px;
          color: #ccc;
        }
      }
    }
  }
</style>
