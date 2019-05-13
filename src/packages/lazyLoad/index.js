function getScrollDom () {
  var element = arguments[0];
  while (element && element.tagName !== 'HTML' && element.tagName !== 'BODY') {
    let scrollYStyle = document.defaultView.getComputedStyle(element).overflowY;
    if (element.nodeType === 1 && (scrollYStyle === 'auto' || scrollYStyle === 'scroll')) {
      return element;
    }
    element = element.parentNode;
  }
  return window;
}

function throttle (fn, delay) {
  var now;
  var preExce = 0;
  var execute = function () {
    fn.call();
    preExce = now;
  };
  return function () {
    now = Date.now();
    if (now - preExce > delay) {
      execute();
    } else {
      var timer = setTimeout(function () {
        execute();
        clearTimeout(timer);
      }, delay);
    }
  };
}
function initEvent () {
  this.scrollTarget = getScrollDom(this.el);
  this.scrollEvent = throttle(scrollEvent.bind(this), 2e2);
  // initialize src attribute of img tag when tag visible
  this.scrollEvent();
  this.scrollTarget.addEventListener('scroll', this.scrollEvent, {capture: false});
}

function scrollEvent () {
  var canExec = false;
  if (this.scrollTarget !== window) {
    canExec = this.el.offsetTop <= this.scrollTarget.scrollTop + this.scrollTarget.clientHeight;
  } else if (this.scrollTarget === window) {
    canExec = this.el.getBoundingClientRect().top <= document.documentElement.clientHeight;
  }
  if (canExec) {
    if (!this.lock) {
      // handle lazy load
      const tempImg = new Image();
      tempImg.src = this.src;
      tempImg.addEventListener('load', () => {
        this.isLoad = true;
        this.el.setAttribute('loaded', this.isLoad);
        this.el.src = this.src;
      }, {capture: false, once: true});
    }
  } else {
    if (this.lock) this.lock = false;
  }
}

function initImg () {
  this.el.setAttribute('loaded', this.isLoad);
  this.el.src = this.el.getAttribute('loading');
}

export default {
  lazyload: {
    inserted: (el, binding) => {
      this.context = {el: el, src: binding.value, isLoad: false};
      initImg.call(this.context);
      initEvent.call(this.context);
    },
    unbind: () => {
      this.context.scrollTarget.removeEventListener('scroll', this.context.scrollEvent);
    }
  }
};
