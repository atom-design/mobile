<template>
  <div class="radio-demo-wrapper">
    <top-bar :title="'Lazy Load'"></top-bar>
    <ul class="list-wrapper">
      <li class="list-item" v-for="(item, index) in dataList" :key="index">
        <img v-lazyload="item" :loading="lazyDefault" alt="lazy-img"/>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
// import lazyload from '@/packages/lazyload'
import lazyDefault from '../../assets/img/lazy-default.gif'

export default {
  data () {
    return {
      lazyDefault: lazyDefault,
      dataList: [
        'https://unpkg.com/assets-img@1.0.0/lazy_img1.jpg',
        'https://unpkg.com/assets-img@1.0.0/lazy_img2.jpg',
        'https://unpkg.com/assets-img@1.0.0/lazy_img3.jpg',
        'https://unpkg.com/assets-img@1.0.0/lazy_img4.jpg',
        'https://unpkg.com/assets-img@1.0.0/lazy_img5.jpg',
        'https://unpkg.com/assets-img@1.0.0/lazy_img6.jpg',
        'https://unpkg.com/assets-img@1.0.0/lazy_img7.jpg',
        'https://unpkg.com/assets-img@1.0.0/lazy_img8.jpg'
      ]
    }
  },
  // directives: {lazyload},
  components: {
    topBar
  }
}
</script>

<style lang="postcss" scoped>
.list-wrapper {
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
