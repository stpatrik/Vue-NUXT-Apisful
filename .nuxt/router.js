import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f4a355f4 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _73bd26f6 = () => interopDefault(import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */))
const _07ea8d66 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _142f5648 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _5c91ef10 = () => interopDefault(import('../pages/categories/_category.vue' /* webpackChunkName: "pages/categories/_category" */))
const _55a6aef6 = () => interopDefault(import('../pages/products/_product.vue' /* webpackChunkName: "pages/products/_product" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _f4a355f4,
    name: "cart"
  }, {
    path: "/categories",
    component: _73bd26f6,
    name: "categories"
  }, {
    path: "/products",
    component: _07ea8d66,
    name: "products"
  }, {
    path: "/",
    component: _142f5648,
    name: "index"
  }, {
    path: "/categories/:category",
    component: _5c91ef10,
    name: "categories-category"
  }, {
    path: "/products/:product",
    component: _55a6aef6,
    name: "products-product"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
