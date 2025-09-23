import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _46cdccdc = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _680abaac = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _6c8a3d3c = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _58b7d7c6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6e2cea96 = () => interopDefault(import('..\\pages\\categories\\_category.vue' /* webpackChunkName: "pages/categories/_category" */))
const _0895e760 = () => interopDefault(import('..\\pages\\products\\_product.vue' /* webpackChunkName: "pages/products/_product" */))

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
    component: _46cdccdc,
    name: "cart"
  }, {
    path: "/categories",
    component: _680abaac,
    name: "categories"
  }, {
    path: "/products",
    component: _6c8a3d3c,
    name: "products"
  }, {
    path: "/",
    component: _58b7d7c6,
    name: "index"
  }, {
    path: "/categories/:category",
    component: _6e2cea96,
    name: "categories-category"
  }, {
    path: "/products/:product",
    component: _0895e760,
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
