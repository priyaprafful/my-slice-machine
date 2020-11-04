import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39cf7840 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _14cbea8b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2a74a568 = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _39cf7840,
    name: "prismic-preview"
  }, {
    path: "/",
    component: _14cbea8b,
    name: "index"
  }, {
    path: "/:uid",
    component: _2a74a568,
    name: "uid"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
