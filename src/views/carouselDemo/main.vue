<template>
  <div class="carousel-demo-wrapper">
    <top-bar :title="'Carousel'"></top-bar>
    <div class="carousel-content">
      <demo-title>默认</demo-title>
      <carousel v-model="carouselVal1">
        <div class="carousel-item item1">item1</div>
        <div class="carousel-item item2">item2</div>
        <div class="carousel-item item3">item3</div>
      </carousel>
      <demo-title>循环</demo-title>
      <carousel :loop="true" v-model="carouselVal2">
        <div class="carousel-item item1">item1</div>
        <div class="carousel-item item2">item2</div>
        <div class="carousel-item item3">item3</div>
      </carousel>
      <demo-title>自动轮播</demo-title>
      <carousel :auto="true" :loop="true" v-model="carouselVal3">
        <div class="carousel-item item1">item1</div>
        <div class="carousel-item item2">item2</div>
        <div class="carousel-item item3">item3</div>
      </carousel>
      <demo-title>分页</demo-title>
      <carousel :pagination="true" :auto="true" :loop="true" :time="5000">
        <div class="carousel-item item1">item1</div>
        <div class="carousel-item item2">item2</div>
        <div class="carousel-item item3">item3</div>
      </carousel>
    </div>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'
import carousel from '@/packages/carousel'
export default {
  data () {
    return {
      carouselVal1: 0,
      carouselVal2: 1,
      carouselVal3: 2
    }
  },
  components: {
    topBar,
    demoTitle,
    carousel
  }
}
</script>

<style lang="postcss" scoped>
.carousel-content {
  overflow: auto;
  .carousel-item {
    width: 100%;
    height: 200px;
    font-size: 28px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item1 {
    background: #108ee9;
  }
  .item2 {
    background: #dd2622;
  }
  .item3 {
    background: #ff9900;
  }
}
</style>
