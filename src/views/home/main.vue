<template>
  <div id="home-wrapper" class="clearfix">
    <div class="content-wrapper">
      <item-bar v-for="(item, index) in compList" :key="index" :info="item" :index="index"></item-bar>
    </div>
  </div>
</template>

<script type="text/javascript">
import itemBar from './itemBar.vue'
export default {
  name: 'home',
  data () {
    return {
      compList: [{
        title: 'Common',
        childs: [{
          text: 'Button',
          routeName: 'buttonDemo'
        },
        {
          text: 'Switch',
          routeName: 'switchDemo'
        },
        {
          text: 'Radio',
          routeName: 'radioDemo'
        },
        {
          text: 'Badge',
          routeName: 'badgeDemo'
        },
        {
          text: 'Loading',
          routeName: 'loadingDemo'
        },
        {
          text: 'Progress',
          routeName: 'progressDemo'
        }]
      },
      {
        title: 'Popup',
        childs: [{
          text: 'Toast',
          routeName: 'toastDemo'
        },
        {
          text: 'Dialog Box',
          routeName: 'dialogBoxDemo'
        },
        {
          text: 'Action Sheet',
          routeName: 'actionSheetDemo'
        },
        {
          text: 'Select Box',
          routeName: 'selectBoxDemo'
        },
        {
          text: 'Picker',
          routeName: 'pickerDemo'
        }]
      },
      {
        title: 'Data Input',
        childs: [{
          text: 'InputItem',
          routeName: 'inputItemDemo'
        },
        {
          text: 'Textarea',
          routeName: 'textareaDemo'
        },
        {
          text: 'SearchBar',
          routeName: 'searchBarDemo'
        }]
      },
      {
        title: 'Gesture',
        childs: [{
          text: 'Carousel',
          routeName: 'carouselDemo'
        },
        {
          text: 'SlideItem',
          routeName: 'slideItemDemo'
        },
        {
          text: 'PullGesture',
          routeName: 'pullGestureDemo'
        },
        {
          text: 'Range',
          routeName: 'rangeDemo'
        }]
      },
      {
        title: 'Navigation',
        childs: [{
          text: 'Header',
          routeName: 'headerDemo'
        },
        {
          text: 'Drawer',
          routeName: 'drawerDemo'
        },
        {
          text: 'Tabs',
          routeName: 'tabsDemo'
        }]
      },
      {
        title: 'Directive',
        childs: [{
          text: 'Load More',
          routeName: 'loadMoreDemo'
        },
        {
          text: 'Lazy Load',
          routeName: 'lazyLoadDemo'
        }]
      }]
    }
  },
  components: {
    itemBar
  },
  mounted () {
    if (localStorage.showCtrl === void 0) {
      const ctrlArr = '0'.repeat(this.compList.length).split('').map(function (el, index) {
        return !!~~el;
      })
      localStorage.showCtrl = JSON.stringify(ctrlArr);
    }
  }
}
</script>

<style lang="postcss" scoped>
  #home-wrapper {
    .content-wrapper {
      margin: 20px;
    }
  }
</style>
