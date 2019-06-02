<template>
  <div class="toast-demo-wrapper">
    <top-bar :title="'Toast'"></top-bar>
    <atom-btn  v-for="(item, index) in demoList" :key="index" size="large" v-text="item.text" @click.native="toastShow(item.type)" style="box-shadow: 0 0 20px 1px #ccc; width: 90%; margin: 20px auto;"></atom-btn>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
export default {
  data () {
    return {
      demoList: [{
        text: 'show on top position',
        type: 0
      },
      {
        text: 'show on middle position',
        type: 1
      },
      {
        text: 'show on bottom position',
        type: 2
      }]
    }
  },
  components: {
    topBar
  },
  methods: {
    toastShow (type) {
      switch (type) {
        case 0:
          this.$toast({message: 'this is message on top posittion', position: 'top'})
          break
        case 1:
          this.$toast({message: 'this is message on middle posittion', position: 'middle'})
          break
        case 2:
          this.$toast({message: 'this is message on bottom posittion', position: 'bottom'})
          break
      }
    }
  }
}
</script>
