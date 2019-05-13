import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: resolve => require(['@/views/home'], resolve),
      children: [{
        path: '',
        name: 'home',
        component: resolve => require(['@/views/home/main.vue'], resolve),
        meta: {
          name: '首页'
        }
      }]
    },
    {
      path: '/button',
      name: '',
      component: resolve => require(['@/views/buttonDemo'], resolve),
      children: [{
        path: '',
        name: 'buttonDemo',
        component: resolve => require(['@/views/buttonDemo/main.vue'], resolve),
        meta: {
          name: 'buttonDemo'
        }
      }]
    },
    {
      path: '/switch',
      name: '',
      component: resolve => require(['@/views/switchDemo'], resolve),
      children: [{
        path: '',
        name: 'switchDemo',
        component: resolve => require(['@/views/switchDemo/main.vue'], resolve),
        meta: {
          name: 'switchDemo'
        }
      }]
    },
    {
      path: '/radio',
      name: '',
      component: resolve => require(['@/views/radioDemo'], resolve),
      children: [{
        path: '',
        name: 'radioDemo',
        component: resolve => require(['@/views/radioDemo/main.vue'], resolve),
        meta: {
          name: 'radioDemo'
        }
      }]
    },
    {
      path: '/toast',
      name: '',
      component: resolve => require(['@/views/toastDemo'], resolve),
      children: [{
        path: '',
        name: 'toastDemo',
        component: resolve => require(['@/views/toastDemo/main.vue'], resolve),
        meta: {
          name: 'toastDemo'
        }
      }]
    },
    {
      path: '/dialogBox',
      name: '',
      component: resolve => require(['@/views/toastDemo'], resolve),
      children: [{
        path: '',
        name: 'dialogBoxDemo',
        component: resolve => require(['@/views/dialogBoxDemo/main.vue'], resolve),
        meta: {
          name: 'dialogBoxDemo'
        }
      }]
    },
    {
      path: '/actionSheet',
      name: '',
      component: resolve => require(['@/views/actionSheetDemo'], resolve),
      children: [{
        path: '',
        name: 'actionSheetDemo',
        component: resolve => require(['@/views/actionSheetDemo/main.vue'], resolve),
        meta: {
          name: 'actionSheetDemo'
        }
      }]
    },
    {
      path: '/carousel',
      name: '',
      component: resolve => require(['@/views/carouselDemo'], resolve),
      children: [{
        path: '',
        name: 'carouselDemo',
        component: resolve => require(['@/views/carouselDemo/main.vue'], resolve),
        meta: {
          name: 'carouselDemo'
        }
      }]
    },
    {
      path: '/range',
      name: '',
      component: resolve => require(['@/views/rangeDemo'], resolve),
      children: [{
        path: '',
        name: 'rangeDemo',
        component: resolve => require(['@/views/rangeDemo/main.vue'], resolve),
        meta: {
          name: 'rangeDemo'
        }
      }]
    },
    {
      path: '/badge',
      name: '',
      component: resolve => require(['@/views/badgeDemo'], resolve),
      children: [{
        path: '',
        name: 'badgeDemo',
        component: resolve => require(['@/views/badgeDemo/main.vue'], resolve),
        meta: {
          name: 'badgeDemo'
        }
      }]
    },
    {
      path: '/loading',
      name: '',
      component: resolve => require(['@/views/loadingDemo'], resolve),
      children: [{
        path: '',
        name: 'loadingDemo',
        component: resolve => require(['@/views/loadingDemo/main.vue'], resolve),
        meta: {
          name: 'loadingDemo'
        }
      }]
    },
    {
      path: '/loadMore',
      name: '',
      component: resolve => require(['@/views/loadMoreDemo'], resolve),
      children: [{
        path: '',
        name: 'loadMoreDemo',
        component: resolve => require(['@/views/loadMoreDemo/main.vue'], resolve),
        meta: {
          name: 'loadMoreDemo'
        }
      }]
    },
    {
      path: '/header',
      name: '',
      component: resolve => require(['@/views/headerDemo'], resolve),
      children: [{
        path: '',
        name: 'headerDemo',
        component: resolve => require(['@/views/headerDemo/main.vue'], resolve),
        meta: {
          name: 'headerDemo'
        }
      }]
    },
    {
      path: '/drawer',
      name: '',
      component: resolve => require(['@/views/drawerDemo'], resolve),
      children: [{
        path: '',
        name: 'drawerDemo',
        component: resolve => require(['@/views/drawerDemo/main.vue'], resolve),
        meta: {
          name: 'drawerDemo'
        }
      },
      {
        path: 'popupDrawer',
        name: 'popupDrawerDemo',
        component: resolve => require(['@/views/drawerDemo/popupDrawerDemo/index.vue'], resolve),
        meta: {
          name: 'popupDrawerDemo'
        }
      },
      {
        path: 'buildInDrawer',
        name: 'buildInDrawerDemo',
        component: resolve => require(['@/views/drawerDemo/buildInDrawerDemo/index.vue'], resolve),
        meta: {
          name: 'buildInDrawerDemo'
        }
      }]
    },
    {
      path: '/inputItem',
      name: '',
      component: resolve => require(['@/views/inputItemDemo'], resolve),
      children: [{
        path: '',
        name: 'inputItemDemo',
        component: resolve => require(['@/views/inputItemDemo/main.vue'], resolve),
        meta: {
          name: 'inputItemDemo'
        }
      }]
    },
    {
      path: '/textarea',
      name: '',
      component: resolve => require(['@/views/textareaDemo'], resolve),
      children: [{
        path: '',
        name: 'textareaDemo',
        component: resolve => require(['@/views/textareaDemo/main.vue'], resolve),
        meta: {
          name: 'textareaDemo'
        }
      }]
    },
    {
      path: '/searchBar',
      name: '',
      component: resolve => require(['@/views/searchBarDemo'], resolve),
      children: [{
        path: '',
        name: 'searchBarDemo',
        component: resolve => require(['@/views/searchBarDemo/main.vue'], resolve),
        meta: {
          name: 'searchBarDemo'
        }
      }]
    },
    {
      path: '/slideItem',
      name: '',
      component: resolve => require(['@/views/slideItemDemo'], resolve),
      children: [{
        path: '',
        name: 'slideItemDemo',
        component: resolve => require(['@/views/slideItemDemo/main.vue'], resolve),
        meta: {
          name: 'slideItemDemo'
        }
      }]
    },
    {
      path: '/pullGesture',
      name: '',
      component: resolve => require(['@/views/pullGestureDemo'], resolve),
      children: [{
        path: '',
        name: 'pullGestureDemo',
        component: resolve => require(['@/views/pullGestureDemo/main.vue'], resolve),
        meta: {
          name: 'pullGestureDemo'
        }
      },
      {
        path: 'pullboth',
        name: 'pullbothDemo',
        component: resolve => require(['@/views/pullGestureDemo/pullbothDemo/main.vue'], resolve),
        meta: {
          name: 'pulldownDemo'
        }
      },
      {
        path: 'pulldown',
        name: 'pulldownDemo',
        component: resolve => require(['@/views/pullGestureDemo/pulldownDemo/main.vue'], resolve),
        meta: {
          name: 'pulldownDemo'
        }
      },
      {
        path: 'pullup',
        name: 'pullupDemo',
        component: resolve => require(['@/views/pullGestureDemo/pullupDemo/main.vue'], resolve),
        meta: {
          name: 'pullupDemo'
        }
      }]
    },
    {
      path: '/tabs',
      name: '',
      component: resolve => require(['@/views/tabsDemo'], resolve),
      children: [{
        path: '',
        name: 'tabsDemo',
        component: resolve => require(['@/views/tabsDemo/main.vue'], resolve),
        meta: {
          name: 'tabsDemo'
        }
      }]
    },
    {
      path: '/picker',
      name: '',
      component: resolve => require(['@/views/pickerDemo'], resolve),
      children: [{
        path: '',
        name: 'pickerDemo',
        component: resolve => require(['@/views/pickerDemo/main.vue'], resolve),
        meta: {
          name: 'pickerDemo'
        }
      }]
    },
    {
      path: '/selectBox',
      name: '',
      component: resolve => require(['@/views/selectBoxDemo'], resolve),
      children: [{
        path: '',
        name: 'selectBoxDemo',
        component: resolve => require(['@/views/selectBoxDemo/main.vue'], resolve),
        meta: {
          name: 'selectBoxDemo'
        }
      }]
    },
    {
      path: '/progress',
      name: '',
      component: resolve => require(['@/views/progressDemo'], resolve),
      children: [{
        path: '',
        name: 'progressDemo',
        component: resolve => require(['@/views/progressDemo/main.vue'], resolve),
        meta: {
          name: 'progressDemo'
        }
      }]
    },
    {
      path: '/lazyLoad',
      name: '',
      component: resolve => require(['@/views/lazyLoadDemo'], resolve),
      children: [{
        path: '',
        name: 'lazyLoadDemo',
        component: resolve => require(['@/views/lazyLoadDemo/main.vue'], resolve),
        meta: {
          name: 'lazyLoadDemo'
        }
      }]
    }
  ]
})
