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
        url: 'http://img3.imgtn.bdimg.com/it/u=2705788817,137013700&fm=26&gp=0.jpg'
      },
      {
        url: 'http://img4.imgtn.bdimg.com/it/u=267907305,2843671657&fm=26&gp=0.jpg'
      },
      {
        url: 'http://img1.imgtn.bdimg.com/it/u=2146458810,616143025&fm=26&gp=0.jpg'
      },
      {
        url: 'http://img2.imgtn.bdimg.com/it/u=133522425,2118378143&fm=26&gp=0.jpg'
      },
      {
        url: 'http://img4.imgtn.bdimg.com/it/u=267907305,2843671657&fm=26&gp=0.jpg'
      },
      {
        url: 'http://img3.imgtn.bdimg.com/it/u=2705788817,137013700&fm=26&gp=0.jpg'
      },
      {
        url: 'http://img4.imgtn.bdimg.com/it/u=267907305,2843671657&fm=26&gp=0.jpg'
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
