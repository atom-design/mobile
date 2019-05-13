<template>
  <div class="actionsheet-demo-wrapper">
    <top-bar :title="'Action Sheet'"></top-bar>
    <atom-btn  v-for="(item, index) in demoList" :key="index" size="large" v-text="item.text" @click.native="actionSheetShow(item.type)" style="box-shadow: 0 0 20px 1px #ccc; width: 90%; margin: 20px auto;"></atom-btn>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import atomBtn from '@/packages/button'
import actionSheet from '@/packages/actionSheet'
import toast from '@/packages/toast'
export default {
  data () {
    return {
      demoList: [{
        text: 'show action sheet',
        type: 0
      },
      {
        text: 'show action sheet with cancel button',
        type: 1
      },
      {
        text: 'custom actionSheet',
        type: 2
      }]
    }
  },
  components: {
    topBar,
    atomBtn,
    actionSheet
  },
  methods: {
    actionSheetShow (type) {
      switch (type) {
        case 0:
          actionSheet({
            list: [{
              text: '选择图片'
            },
            {
              text: '选择联系人'
            }]
          }, (msg, index) => {
            toast(`${msg}, ${index}`);
          });
          break
        case 1:
          actionSheet({
            cancelBtn: {
              text: 'Cancel'
            },
            list: [{
              text: '选择图片'
            },
            {
              text: '选择联系人'
            }]
          }, (msg, index) => {
            toast(`${msg}, ${index}`);
          });
          break
        case 2:
          actionSheet({
            cancelBtn: {
              text: 'Cancel',
              style: 'color: #dd2622;'
            },
            list: [{
              text: '选择图片',
              style: 'color: #108ee9;'
            },
            {
              text: '选择联系人'
            }]
          }, (msg, index) => {
            toast(`${msg}, ${index}`);
          });
          break
      }
    }
  }
}
</script>
