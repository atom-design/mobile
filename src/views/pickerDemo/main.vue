<template>
  <div class="picker-demo-wrapper">
    <top-bar :title="'Picker'"></top-bar>
    <atom-btn  v-for="(item, index) in demoList" :key="index" size="large" v-text="item.text" @click.native="pickerShow(item.type)" style="box-shadow: 0 0 20px 1px #ccc; width: 90%; margin: 20px auto;"></atom-btn>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
// import Picker from '@/packages/picker'
export default {
  data () {
    return {
      demoList: [{
        text: 'default picker',
        type: 0
      },
      {
        text: 'custom picker',
        type: 1
      }]
    }
  },
  components: {
    topBar
  },
  methods: {
    submit (val) {
      this.$toast(val.toString());
    },
    pickerShow (type) {
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
      var options1 = {
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
      var options2 = {
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
        cancelBtn: {
          text: '取消',
          actionStyle: {
            background: '#dd2622',
            color: 'white'
          },
          style: {
            'color': '#dd2622'
          }
        },
        submitBtn: {
          text: '确定',
          actionStyle: {
            background: '#0000ff',
            color: 'white'
          },
          event: this.submit
        }
      }
      switch (type) {
        case 0:
          this.$picker(options1)
          break
        case 1:
          this.$picker(options2)
          break
      }
    }
  }
}
</script>
