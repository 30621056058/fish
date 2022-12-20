import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import floor from "../components/floor.vue"
import header from "../components/header.vue"
import firstpage from '../views/firstpage.vue'
import upload from '../views/upload.vue'
import subject from '../views/subject.vue'
import testpaper from '../views/testpaper.vue'
import person from '../views/person.vue'
import persondata from '../components/persondata.vue'
import childdata from '../components/childdata.vue'
import personCollection from '../components/personCollection.vue'
import personsubject from "../components/personsubject.vue"
import cishi from '../components/cishi.vue'
import zhuci from '../views/zhuci.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import seevalue from '../components/seevalue.vue'
import contentmain from '../views/contentmain.vue'
import testpapercontent from '../views/testpapercontent.vue'
import imgupload from '../components/imgupload'
import comment from '../components/comment'
import replypage from '../components/replypage'
Vue.use(VueRouter)



const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/imgupload',
    name: 'imgupload',
    component: imgupload
  },
  {
    path:"/testpaper",
    name:"testpaper",
    component:testpaper
  },
  {
    path:"/testpapercontent",
    name:"testpapercontent",
    component:testpapercontent
  },
  {
    path:"/contentmain",
    name:"contentmain",
    component:contentmain
  },
  {
    path:"/register",
    name:"register",
    component:register
  },
  {
    path:"/zhuci",
    name:"zhuci",
    component:zhuci
  },
  {
    path:"/login",
    name:"login",
    component:login
  },
  {
    path:"/persondata",
    name:"persondata",
    component:persondata
  },
  {
    path:"/cishi",
    name:"cishi",
    component:cishi
  },
  {
    path:"/person",
    name:"person",
    component:person,
    redirect:'/childdata',
    children:[{
      path:"/childdata",
      name:"childdata",
      component:childdata,
    },
    {
      path:"/personCollection",
      name:"personCollection",
      component:personCollection,
    },
    {
      path:"/personsubject",
      name:"personsubject",
      component:personsubject,
    },
    {
      path:"/seevalue",
      name:"seevalue",
      component:seevalue
    },
    {
      path:"/comment",
      name:"comment",
      component:comment
    },
    {
      path:"/replypage",
      name:"replypage",
      component:replypage
    },
    ]
  },
  {
    path:"/firstpage",
    name:"firstpage",
    component:firstpage
  },
  {
    path:"/subject",
    name:"subject",
    component:subject
  },
  {
    path:"/upload",
    name:"upload",
    component:upload
  },
  {
    path:"/header",
    name:"header",
    component:header
  },
  {
    path:"/floor",
    name:"floor",
    component:floor
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
