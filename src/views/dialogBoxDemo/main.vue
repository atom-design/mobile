<template>
  <div class="dialog-demo-wrapper">
    <top-bar :title="'Dialog Box'"></top-bar>
    <atom-btn  v-for="(item, index) in demoList" :key="index" size="large" v-text="item.text" @click.native.prevent="dialogShow(item.type)" style="box-shadow: 0 0 20px 1px #ccc; width: 90%; margin: 20px auto;"></atom-btn>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import Dialog from '@/packages/dialog'
import atomBtn from '@/packages/button'
export default {
  data () {
    return {
      demoList: [{
        text: 'alert',
        type: 0
      },
      {
        text: 'confirm',
        type: 1
      },
      {
        text: 'prompt',
        type: 2
      }]
    }
  },
  components: {
    topBar,
    atomBtn
  },
  methods: {
    dialogShow (type) {
      switch (type) {
        case 0:
          Dialog.alert('Title', 'Description', {
            isTitle: false,
            submitBtn: {
              text: 'Ok',
              event: () => {
                console.log('%c Click Submit', 'color: blue;')
              }
            }
          });
          break
        case 1:
          Dialog.confirm('Title', 'Description', {
            cancelBtn: {
              text: 'Cancel',
              event: () => {
                console.log('%c Click Cancel', 'color: red;')
              }
            },
            submitBtn: {
              text: 'Ok',
              event: () => {
                console.log('%c Click Submit', 'color: blue;')
              }
            }
          });
          break
        case 2:
          Dialog.prompt('Title', 'Description', {
            cancelBtn: {
              text: 'Cancel',
              event: () => {
                console.log('%c Click Cancel', 'color: red;')
              }
            },
            submitBtn: {
              text: 'Ok',
              event: () => {
                console.log('%c Click Submit', 'color: blue;')
              }
            }
          });
          break
      }
    }
  }
}
</script>
