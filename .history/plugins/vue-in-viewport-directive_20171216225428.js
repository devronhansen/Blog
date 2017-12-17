import Vue from 'vue'
import inViewportDirective from 'vue-in-viewport-directive'

inViewportDirective.defaults.top = -200
Vue.directive('in-viewport', inViewportDirective)
