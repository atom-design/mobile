<template>
  <div class="radio-demo-wrapper">
    <top-bar :title="'Load More'"></top-bar>
    <ul class="list-wrapper" v-loadmore="loadMore" distance="300">
      <li class="list-item" v-for="(item, index) in dataList" :key="index" v-text="item"></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
export default {
  data () {
    return {
      dataList: [],
      length: 0
    }
  },
  components: {
    topBar
  },
  mounted () {
    this.initData()
  },
  methods: {
    loadMore () {
      var max = this.length + 20;
      for (var i = this.length; i < max; i++) this.dataList.push(i);
      this.length = this.dataList.length;
    },
    initData () {
      for (var i = 0; i < 20; i++) this.dataList.push(i);
      this.length = this.dataList.length;
    }
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
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
}
</style>
