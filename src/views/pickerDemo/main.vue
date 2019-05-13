<template>
  <div class="picker-demo-wrapper">
    <top-bar :title="'Picker'"></top-bar>
    <atom-btn  v-for="(item, index) in demoList" :key="index" size="large" v-text="item.text" @click.native="toastShow(item.type)" style="box-shadow: 0 0 20px 1px #ccc; width: 90%; margin: 20px auto;"></atom-btn>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import atomBtn from '@/packages/button'
import picker from '@/packages/picker'
import toast from '@/packages/toast'
export default {
  data () {
    return {
      demoList: [{
        text: 'custom picker',
        type: 0
      }]
    }
  },
  components: {
    topBar,
    atomBtn
  },
  methods: {
    submit (val) {
      toast(val.toString());
    },
    toastShow (type) {
      const monthArr = [{
        text: 1,
        childrens: [{
          text: 2,
          childrens: [{text: 2}, {text: 3}, {text: 4}, {text: 5}]
        }, {text: 3}, {text: 4}, {text: 5}]
      }, {text: 2}, {text: 3}, {text: 4}, {text: 5}, {text: 6}, {text: 7}, {text: 8}, {text: 9}, {text: 10}];
      const monthArr1 = [{
        text: 9,
        childrens: [{text: 2}, {text: 3}, {text: 4}, {text: 5}]
      }, {text: 10}, {text: 11}, {text: 12}, {text: 13}];
      var options = {
        data: [{
          text: 1996,
          childrens: monthArr
        },
        {
          text: 1997,
          childrens: monthArr1
        },
        {
          text: 1998,
          childrens: monthArr
        },
        {
          text: 1999,
          childrens: monthArr
        },
        {
          text: 2000,
          childrens: monthArr
        }],
        submitBtn: {
          style: '',
          event: this.submit
        }
      }
      switch (type) {
        case 0:
          picker(options);
          break
      }
    }
  }
}
</script>
