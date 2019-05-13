<template>
  <div class="dialog-demo-wrapper">
    <top-bar :title="'Select Box'"></top-bar>
    <atom-btn  v-for="(item, index) in demoList" :key="index" size="large" v-text="item.text" @click.native.prevent="dialogShow(item.type)" style="box-shadow: 0 0 20px 1px #ccc; width: 90%; margin: 20px auto;"></atom-btn>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import selectBox from '@/packages/selectBox'
import atomBtn from '@/packages/button'
import toast from '@/packages/toast'
export default {
  data () {
    return {
      demoList: [{
        text: 'default select',
        type: 0
      },
      {
        text: 'custom select',
        type: 1
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
          selectBox({
            list: [{
              text: '标为未读'
            },
            {
              text: '消息置顶'
            }]
          }, (msg, index) => {
            toast(`${msg}, ${index}`);
          });
          break
        case 1:
          selectBox({
            list: [{
              text: '标为未读',
              style: 'color: #108ee9;'
            },
            {
              text: '消息置顶',
              style: 'color: #dd2622;'
            }]
          }, (msg, index) => {
            toast(`${msg}, ${index}`);
          })
          break
      }
    }
  }
}
</script>
