import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import heade  from '../src/js/install ';
import axios from 'axios'
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;
import "../src/css/public.css";
import VueQuillEditor from 'vue-quill-editor' 
import VueCookies from 'vue-cookies'
import store from './vuex'
Vue.use(VueCookies, { expire: '30d'})
Vue.use(VueQuillEditor); 
Vue.use(store)

import nProgress from 'nprogress';
import "nprogress/nprogress.css";
Vue.prototype._ = _
Vue.prototype.$http = axios
// Vue.timevalue = ''
console.log(Vue.prototype)
// Vue.prototype.$message = message
axios.defaults.withCredentials = true
// axios.defaults.baseURL = process.env.VUE_APP_BASE_API
Vue.use(heade)
Vue.use(ElementUI);
axios.interceptors.request.use(req=>{
  // alert(11)
  // console.log(Vue,"this")
//  if(req.params ==""){
 
//   alert("请输入参数")
//   return
//  }else{
  
//  }
nProgress.start()
  return req
},err=>{
  console.log(err)
  // return Promise.reject(err)
})

axios.interceptors.response.use(res=>{
  nProgress.done()
  // console.log(res,"===============")
  return res
},err=>{
  console.log(err)
})
var timess = Vue.$cookies.get("times")
 var dingshiqi =  setInterval(() => {
  // axios({
  //   url:"users/monthupdate",
  //   method:"get",
  
  //  }).then(res=>{
  //   console.log(res),Vue.timevalue = "2"
  //  }).catch(err=>{
  //   console.log(err)
  //  })
  
    timess ++
    // Vue.$cookies.remove('times')
 
  // console.log(timess)
},1000);
window.addEventListener("beforeunload",function(){
  if(timess < 2592000){
    Vue.$cookies.set("times",timess)
  }else{
   clearInterval(dingshiqi)
    Vue.$cookies.remove("times")
  }
})
// if(Vue.timevalue !=''){
//   clearInterval(timer)
//   Vue.timevalue = ""
// }

new Vue({
	
	beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
	},
   
}) 
// beforeRouteLeave ((to,from)=>{
//   if(to.path =="/")
// })


Vue.config.productionTip = false
import { Button } from 'element-ui';
import { _ } from 'core-js';
// import { times } from 'lodash';
// import { message } from 'ant-design-vue';
Vue.component(Button.name, Button);
Vue.component("header")

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
