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
        url: 'http://img15.3lian.com/2015/f2/160/d/71.jpg'
      },
      {
        url: 'http://img15.3lian.com/2015/f2/160/d/71.jpg'
      },
      {
        url: 'http://img2.3lian.com/2014/f4/158/d/105.jpg'
      },
      {
        url: 'http://img15.3lian.com/2015/f2/160/d/71.jpg'
      },
      {
        url: 'http://img2.3lian.com/2014/f4/158/d/105.jpg'
      },
      {
        url: 'http://img15.3lian.com/2015/a1/13/d/6.jpg'
      },
      {
        url: 'http://img2.3lian.com/2014/f4/158/d/105.jpg'
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
