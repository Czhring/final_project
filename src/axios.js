import axios from 'axios'

let apiUrl
const apiUrls = {
  // your production api url
  production: 'https://glacial-tundra-91410.herokuapp.com',
  // your development api url
  development: 'http://localhost:8000'
}// check if development or production
if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
  } else {
    apiUrl = apiUrls.production
  }
const axiosInstance = axios.create({
    baseURL:apiUrl,
    timeout :5000,
    headers:{
        Authorization:localStorage.getItem('token')
            ?'Token '+localStorage.getItem('token')
            :null,
        'Content-Type':'application/json',
        accept:'*/*',
    }
})

export default axiosInstance