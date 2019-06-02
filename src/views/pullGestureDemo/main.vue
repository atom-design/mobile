<template>
  <div class="toast-demo-wrapper">
    <top-bar :title="'Pull Gesture'"></top-bar>
    <atom-btn  v-for="(item, index) in demoList" :key="index" size="large" v-text="item.text" @click.native="jumpDemo(item.type)" style="box-shadow: 0 0 20px 1px #ccc; width: 90%; margin: 20px auto;"></atom-btn>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
export default {
  data () {
    return {
      demoList: [{
        text: 'pull down and pull up',
        type: 0
      },
      {
        text: 'pulldown',
        type: 1
      },
      {
        text: 'pullup',
        type: 2
      }]
    }
  },
  components: {
    topBar
  },
  methods: {
    jumpDemo (type) {
      switch (type) {
        case 0:
          this.$router.replace({name: 'pullbothDemo'})
          break
        case 1:
          this.$router.replace({name: 'pulldownDemo'})
          break
        case 2:
          this.$router.replace({name: 'pullupDemo'})
          break
      }
    }
  }
}
</script>
