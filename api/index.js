import axios from 'axios'

export const Apisful = axios.create({
  // We are using apisful.com as a backend for this e-commerce website
  baseURL: 'https://api.apisful.com/v1/collections/',
  headers: {
    // Put your access key here
    'X-Api-Key': 'VDc6Q3e0fQOkfAMDQ7tZVtko5sTQDTkfcHkwPKOms6c'
  },
  validateStatus (status) {
    return status >= 200 && status < 500
  }
})
