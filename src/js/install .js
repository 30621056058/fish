// import Vue from "vue";
import Header from "../components/header.vue"
import Floor from "../components/floor.vue"
import imgupload from '../components/imgupload'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
const heade = {
    install:function(Vue){
        Vue.component("Header",Header)
        Vue.component("Floor",Floor)
        Vue.component("imgupload",imgupload)
    }
}




    function tab(){
        
        var i ;
        var a  =  document.querySelector(".transform-inside-information-header-left-ul")
        // console.log(a)
        var child =  a.children
        // console.log(child)
        console.log(child.length)
        for(i=0;i++;i<=4){
            // child[i].oncilck = function(){
                console.log("chengg")
            // }
            // console.log('i')
        }
        // console.log(i)
    }

export default heade ;
// export default {tab}
export {tab} 

function a(){
    console.log(11)
    console.log(this)
}


export {a}