<template>
  <div class="drawer-demo-wrapper">
    <top-bar :title="'Drawer'"></top-bar>
    <atom-btn  v-for="(item, index) in demoList" :key="index" size="large" v-text="item.text" @click.native="jumpDemo(item.type)" style="box-shadow: 0 0 20px 1px #ccc; width: 90%; margin: 20px auto;"></atom-btn>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import atomBtn from '@/packages/button'
export default {
  data () {
    return {
      demoList: [{
        text: 'Built-in Drawer',
        type: 0
      },
      {
        text: 'Popup Drawer',
        type: 1
      }]
    }
  },
  components: {
    topBar,
    atomBtn
  },
  methods: {
    jumpDemo (type) {
      switch (type) {
        case 0:
          this.$router.replace({name: 'buildInDrawerDemo'})
          break
        case 1:
          this.$router.replace({name: 'popupDrawerDemo'})
          break
      }
    }
  }
}
</script>
