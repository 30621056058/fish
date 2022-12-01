import axios from 'axios'
axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'subject/subject/'
import nProgress from 'nprogress';
import "nprogress/nprogress.css";
axios.interceptors.request.use(req=>{
    // alert(11)

   
    nProgress.start()
    return req
  },err=>{
    console.log(err)
    // return Promise.reject(err)
  })
  
  axios.interceptors.response.use(res=>{
    nProgress.done()

    return res
  },err=>{
    console.log(err)
  })

 export default  axios
