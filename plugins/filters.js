import Vue from 'vue'

Vue.filter('formatPrice', (value) => {
  if (value !== null && value !== undefined) {
    return `$${Number(value).toFixed(2)}`
  } else {
    return value
  }
})
