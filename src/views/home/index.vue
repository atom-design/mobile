<template>
  <div id="home">
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
import headerBar from './header.vue'
export default {
  mounted () {
    if (localStorage.scrollPosition) {
      this.$el.scrollTo(0, ~~localStorage.scrollPosition)
    }
    this.$el.addEventListener('scroll', () => {
      localStorage.scrollPosition = this.$el.scrollTop;
    }, {capture: false, passive: true})
  },
  components: {
    headerBar
  }
}
</script>

<style lang="postcss" scoped>
  #home {
    height: 100vh;
    overflow: auto;
  }
</style>
