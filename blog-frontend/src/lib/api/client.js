import axios from 'axios'

const client = axios.create()

// client.defaults.baseURL = 'http://localhost:4000'

client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4'

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default client
