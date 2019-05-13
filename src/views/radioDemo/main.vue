<template>
  <div class="radio-demo-wrapper">
    <top-bar :title="'Radio'"></top-bar>
    <div class="radio-content">
      <div class="radio-item">
        <span class="radio-title">默认：</span>
        <div class="radio-demo">
          <atom-radio :name="'name'" :val="'选项1'" v-model="radio0"></atom-radio>
          <atom-radio :name="'name'" :val="'选项2'" v-model="radio0"></atom-radio>
        </div>
      </div>
      <div class="radio-item">
        <span class="radio-title">自定义颜色：</span>
        <div class="radio-demo">
          <atom-radio :name="'name1'" :val="'选项1'" v-model="radio1" color="#ff9933"></atom-radio>
          <atom-radio :name="'name1'" :val="'选项2'" v-model="radio1" color="#ff9933"></atom-radio>
        </div>
      </div>
      <div class="radio-item">
        <span class="radio-title">禁用：</span>
        <div class="radio-demo">
          <atom-radio :name="'name2'" :disabled="radio2 === 'true'" :val="'选项1'" v-model="radio2"></atom-radio>
          <atom-radio :name="'name2'" val="true" v-model="radio2"></atom-radio>
          <atom-radio :name="'name2'" val="false" v-model="radio2"></atom-radio>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import atomRadio from '@/packages/radio'
import toast from '@/packages/toast'
export default {
  data () {
    return {
      radio0: '选项1',
      radio1: '选项2',
      radio2: 'true'
    }
  },
  components: {
    topBar,
    atomRadio
  },
  watch: {
    radio0 (val) {
      toast(val);
    },
    radio1 (val) {
      toast(val);
    },
    radio2 (val) {
      val === 'true' ? toast('禁用') : val === 'false' ? toast('取消禁用') : toast(val);
    }
  }
}
</script>

<style lang="postcss" scoped>
.radio-content {
  overflow: auto;
  .radio-item {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid #f0f1f2;
    white-space: 10px;
    .radio-title {
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      text-align: left;
      margin-right: 24px;
    }
    .radio-demo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100px;
    }
  }
}
</style>
