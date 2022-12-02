import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BASE_URL


axios.request({
  url:`${baseUrl}/home/multidata`,
  method:'GET'
}).then(res =>{
  console.log(res.data)
})

