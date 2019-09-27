import axios from 'axios'

const axio=axios.create({
  baseURL:'http://localhost:3000',
  timeout:3000
})

axio.interceptors.request.use(
  config=>config,
  err=>{
    console.error('reqError-->',err)
  }
)
axio.interceptors.response.use(
  res=>res,
  err=>{
    console.error('resError-->',err)
  }
)


export function getBanner(){
  return axio.get('/banner')
}