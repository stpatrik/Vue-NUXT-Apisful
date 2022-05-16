export { default as CommonNavbar } from '../..\\components\\CommonNavbar.vue'
export { default as CartProductsList } from '../..\\components\\cart\\CartProductsList.vue'
export { default as ProductGallery } from '../..\\components\\product-details\\ProductGallery.vue'
export { default as CommonProductsListPage } from '../..\\components\\products-list\\CommonProductsListPage.vue'
export { default as ProductListCard } from '../..\\components\\products-list\\ProductListCard.vue'
export { default as ProductsList } from '../..\\components\\products-list\\ProductsList.vue'
export { default as ProductsListFilter } from '../..\\components\\products-list\\ProductsListFilter.vue'

export const LazyCommonNavbar = import('../..\\components\\CommonNavbar.vue' /* webpackChunkName: "components_CommonNavbar" */).then(c => c.default || c)
export const LazyCartProductsList = import('../..\\components\\cart\\CartProductsList.vue' /* webpackChunkName: "components_cart/CartProductsList" */).then(c => c.default || c)
export const LazyProductGallery = import('../..\\components\\product-details\\ProductGallery.vue' /* webpackChunkName: "components_product-details/ProductGallery" */).then(c => c.default || c)
export const LazyCommonProductsListPage = import('../..\\components\\products-list\\CommonProductsListPage.vue' /* webpackChunkName: "components_products-list/CommonProductsListPage" */).then(c => c.default || c)
export const LazyProductListCard = import('../..\\components\\products-list\\ProductListCard.vue' /* webpackChunkName: "components_products-list/ProductListCard" */).then(c => c.default || c)
export const LazyProductsList = import('../..\\components\\products-list\\ProductsList.vue' /* webpackChunkName: "components_products-list/ProductsList" */).then(c => c.default || c)
export const LazyProductsListFilter = import('../..\\components\\products-list\\ProductsListFilter.vue' /* webpackChunkName: "components_products-list/ProductsListFilter" */).then(c => c.default || c)
