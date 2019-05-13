<template>
  <div class="pulldown-demo-wrapper">
    <top-bar :title="'Pulldown'"></top-bar>
    <div class="pulldown-wrapper">
      <atom-pull height="500px" :action="'pulldown'" :maxTopMove="50" :maxBotMove="50" :delay="1000" @promptDisplay="prompt = '松开立即刷新'" @touchEnd="handleRefresh" @pullEnd="prompt = '下拉刷新'; isLoading = false">
        <div slot="promptTop" class="topRefresh">
          <div v-text="prompt" v-if="!isLoading"></div>
          <atom-loading v-else-if="isLoading" style="margin: 0 auto"></atom-loading>
        </div>
        <ul slot="box">
          <li v-for="(item, index) in list" v-text="index" :key="index"></li>
        </ul>
      </atom-pull>
    </div>
  </div>
</template>

<script type="text/javascript">
import topBar from '@/components/topBar.vue'
import demoTitle from '@/components/demoTitle.vue'
import atomPull from '@/packages/pull'
import atomLoading from '@/packages/loading'
export default {
  data () {
    return {
      isLoading: false,
      prompt: '下拉刷新',
      list: Array(15)
    }
  },
  components: {
    topBar,
    demoTitle,
    atomLoading,
    atomPull
  },
  methods: {
    handleRefresh () {
      this.isLoading = true;
      this.$forceUpdate();
    }
  }
}
</script>

<style lang="postcss" scoped>
.pulldown-demo-wrapper {
  .pulldown-wrapper {
    .topRefresh {
      margin-top: -20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
    .botRefresh {
      margin-top: 20px;
      margin-bottom: -20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
    ul {
      li {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
      }
    }
  }
}
</style>
