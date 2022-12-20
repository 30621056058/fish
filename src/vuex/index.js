import Vue from 'vue'
import Vuex from 'vuex'
 import home from "./home"
//1.安装插件
Vue.use(Vuex)
 
//2.创建对象
const store = new Vuex.Store({
  state:{
    username:1234567,
    img:"qq.jpg",
    tag:"前端",
    subjecttype:"简答题",
    title:"",
    num:'',
    subjectid:0,
    headernum:0,
  },
  mutations:{
    // JIA:function(state,value){
    //     // console.log("mutations被调用")
    //     state.username = value 
    // },
    Infromation:function(state,value){
      state.title = value 
      console.log('mutations')
    },
    Add:function(state,value){
      state.num = value
    },
    Subject:function(state,value){
      state.subjectid = value
    },
    Headernum:function(state,value){
      state.headernum = value
    }
    
  },
  actions:{
    // jia:function(context,value){
    //     console.log(value)
    //     context.commit('JIA',value)
    // },
    Add:function(state,value){
      state.commit("Add",value)
    },
    infromation:function(state,value){
      console.log(value)
      console.log('Infromation')
      state.commit('Infromation',value)
    },
    subject:function(state,value){
      state.commit("Subject",value)
    },
    headernum:function(state,value){
      state.commit("Headernum",value)
    }
  },
  getters:{
 
  },
  modules:{
    home
  }
})
//3.导出使用
export default store