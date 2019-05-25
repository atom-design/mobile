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
        url: 'https://user-gold-cdn.xitu.io/2019/5/25/16aef66f2214ca3b?w=500&h=313&f=jpeg&s=43283'
      },
      {
        url: 'https://user-gold-cdn.xitu.io/2019/5/25/16aef67118892ae5?w=500&h=313&f=jpeg&s=36490'
      },
      {
        url: 'https://user-gold-cdn.xitu.io/2019/5/25/16aef672bdb10786?w=708&h=300&f=jpeg&s=38633'
      },
      {
        url: 'https://user-gold-cdn.xitu.io/2019/5/25/16aef674051d932e?w=330&h=220&f=jpeg&s=27736'
      },
      {
        url: 'https://user-gold-cdn.xitu.io/2019/5/25/16aef675a2704db2?w=533&h=300&f=jpeg&s=27931'
      },
      {
        url: 'https://user-gold-cdn.xitu.io/2019/5/25/16aef67730754043?w=500&h=334&f=jpeg&s=30308'
      },
      {
        url: 'https://user-gold-cdn.xitu.io/2019/5/25/16aef6796f385990?w=500&h=312&f=jpeg&s=17877'
      },
      {
        url: 'https://user-gold-cdn.xitu.io/2019/5/25/16aef67afc5f6875?w=500&h=313&f=jpeg&s=31278'
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
