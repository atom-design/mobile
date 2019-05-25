<template>
  <div class="radio-demo-wrapper">
    <top-bar :title="'Lazy Load'"></top-bar>
    <ul class="list-wrapper">
      <li class="list-item" v-for="(item, index) in dataList" :key="index">
        <img v-lazyload="item.url" :loading="lazyDefault" alt="lazy-img"/>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import lazyLoad from '@/packages/lazyLoad'
import lazyDefault from '../../assets/img/lazy-default.gif'
export default {
  data () {
    return {
      lazyDefault: lazyDefault,
      dataList: [{
        url: 'https://raw.githubusercontent.com/atom-design/docs/master/src/assets/img/lazyload1.jpg'
      },
      {
        url: 'https://raw.githubusercontent.com/atom-design/docs/master/src/assets/img/lazyload2.jpg'
      },
      {
        url: 'https://raw.githubusercontent.com/atom-design/docs/master/src/assets/img/lazyload3.jpg'
      },
      {
        url: 'https://raw.githubusercontent.com/atom-design/docs/master/src/assets/img/lazyload4.jpg'
      },
      {
        url: 'https://raw.githubusercontent.com/atom-design/docs/master/src/assets/img/lazyload5.jpg'
      },
      {
        url: 'https://raw.githubusercontent.com/atom-design/docs/master/src/assets/img/lazyload6.jpg'
      },
      {
        url: 'https://raw.githubusercontent.com/atom-design/docs/master/src/assets/img/lazyload7.jpg'
      },
      {
        url: 'https://raw.githubusercontent.com/atom-design/docs/master/src/assets/img/lazyload8.jpg'
      }]
    }
  },
  directives: lazyLoad,
  components: {
    topBar
  }
}
</script>

<style lang="postcss" scoped>
.list-wrapper {
  height: calc(100vh - 54px);
  list-style: none;
  margin: 0;
  padding: 0;
  .list-item {
    position: relative;
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #f0f1f2;
    img[loaded=true] {
      width: 100%;
      height: 100%;
    }
    img[loaded=false] {
      width: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
}
</style>
