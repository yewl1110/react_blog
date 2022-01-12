import axios from 'axios'

const client = axios.create()

client.defaults.baseURL = 'https://external-api-server.com/'

client.defaults.common['Authorization'] = 'Bearer a1b2c3d4'

axios.interceptor.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default client
