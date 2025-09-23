export { default as CommonNavbar } from '../..\\components\\CommonNavbar.vue'
export { default as CartProductsList } from '../..\\components\\cart\\CartProductsList.vue'
export { default as ProductGallery } from '../..\\components\\product-details\\ProductGallery.vue'
export { default as ProductsListCommonProductsListPage } from '../..\\components\\products-list\\CommonProductsListPage.vue'
export { default as ProductsListProductListCard } from '../..\\components\\products-list\\ProductListCard.vue'
export { default as ProductsList } from '../..\\components\\products-list\\ProductsList.vue'
export { default as ProductsListFilter } from '../..\\components\\products-list\\ProductsListFilter.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
