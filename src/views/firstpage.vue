<template>
  <div class="first_page" v-loading="loading">
    <Header></Header>
    <div class="main-content">
      <el-container>
        <el-main style="margin-left:20px">
          <div class="main-header">
            <div class="main-header-content">
              <el-tag effect="plain" v-for="(item,index)  in subjectbtn" :key="item" @click="subjectvalue(index)" id="subjectvalue" ref="subjectref">{{item}}</el-tag>
              <!-- <el-tag effect="plain">数学</el-tag>
              <el-tag effect="plain">英语</el-tag>
              <el-tag effect="plain">政治</el-tag>
              <el-tag effect="plain">计算机</el-tag>
              <el-tag effect="plain">医学</el-tag>
              <el-tag effect="plain">农学</el-tag>
              <el-tag effect="plain">经管</el-tag>
              <el-tag effect="plain">艺术概论</el-tag>
              <el-tag effect="plain">法律</el-tag>
              <el-tag effect="plain">教育理论</el-tag>
              <el-tag effect="plain">杂七杂八</el-tag>
              <el-tag effect="plain">标签五</el-tag>
              <el-tag effect="plain">标签三</el-tag>
              <el-tag effect="plain">标签四</el-tag>
              <el-tag effect="plain">标签五</el-tag> -->
            </div>
          </div>
          <div class="main-center">
            <div class="main-center-content">
              <div class="main-center-content-top">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="广东分区" name="first">
                    <div class="main-conetnet" v-for="item in datalist" :key="item.id" v-show="item.status!='审核中'">
                      <div class="main-conetnet-first">
                        <div class="first-left">
                          <el-col :span="12" class="main-first-col">
                            <div class="main-inside" >
                              <div class="transfrom"  @click="a(item)">{{item.title}}</div>                                         
                              <div class="main-first-left-tag ">                                                                                                                                                                                                                                                                                                              
                              <el-tag type="success" class="tag-main">{{item.tag}}</el-tag>
                               <el-tag type="success">{{item.tag}}</el-tag>
                              </div>
                              <div class="difficulty" >                   
                                <div>{{item.difflcult}}</div>
                                <div>|</div>
                                <div>{{item.difflcult}}</div>
                                <div>|</div>
                                <div>{{item.time}}</div>
                              </div>
                              <div class="main-first-information" >
                                  <el-tooltip  effect="dark" content="浏览量" placement="right">
                                <el-link icon="el-icon-view">{{item.views}}</el-link>
                                </el-tooltip>
                                 <el-tooltip  effect="dark" content="收藏数" placement="right">
                                <el-link icon="el-icon-folder-add">{{item.collection}}</el-link>
                                  </el-tooltip>
                                   <el-tooltip  effect="dark" content="留言数" placement="right">
                                <el-link icon="el-icon-edit">{{item.Leavingmessage}}</el-link>
                                </el-tooltip>
                                <el-tooltip  effect="dark" content="遇到数" placement="right">
                                <el-link icon="el-icon-user-solid">{{item.yudao}}</el-link>
                                 </el-tooltip>
                              </div>
                            </div>
                          </el-col>
                        </div>
                        <el-col :span="12">
                          <div class="main-right-one">
                              <el-tooltip class="item" effect="dark" :content="item.area" placement="top">
      <el-button>区域</el-button>
    </el-tooltip>
                          </div>
                        </el-col>
                      </div>
                    </div>
                    <div class="lookmore">
                        <div>
                            <el-button type="primary" @click="lookmore" class="seemore" >查看更多</el-button>
                        </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="四川分区" name="second"
                    >
                     <div class="main-conetnet" v-for="item in datalist" :key="item.id" v-show="item.status!='审核中'">
                      <div class="main-conetnet-first">
                        <div class="first-left">
                          <el-col :span="12" class="main-first-col">
                            <div class="main-inside" >
                              <div class="transfrom"  @click="a(item)">{{item.title}}</div>                                         
                              <div class="main-first-left-tag ">                                                                                                                                                                                                                                                                                                              
                              <el-tag type="success" class="tag-main">{{item.tag}}</el-tag>
                               <el-tag type="success">{{item.tag}}</el-tag>
                              </div>
                              <div class="difficulty" >                   
                                <div>{{item.difflcult}}</div>
                                <div>|</div>
                                <div>{{item.difflcult}}</div>
                                <div>|</div>
                                <div>{{item.time}}</div>
                              </div>
                              <div class="main-first-information" >
                                  <el-tooltip  effect="dark" content="浏览量" placement="right">
                                <el-link icon="el-icon-view">{{item.views}}</el-link>
                                </el-tooltip>
                                 <el-tooltip  effect="dark" content="收藏数" placement="right">
                                <el-link icon="el-icon-folder-add">{{item.collection}}</el-link>
                                  </el-tooltip>
                                   <el-tooltip  effect="dark" content="留言数" placement="right">
                                <el-link icon="el-icon-edit">{{item.Leavingmessage}}</el-link>
                                </el-tooltip>
                                <el-tooltip  effect="dark" content="遇到数" placement="right">
                                <el-link icon="el-icon-user-solid">{{item.yudao}}</el-link>
                                 </el-tooltip>
                              </div>
                            </div>
                          </el-col>
                        </div>
                        <el-col :span="12">
                          <div class="main-right-one">
                              <el-tooltip class="item" effect="dark" :content="item.area" placement="top">
      <el-button>区域</el-button>
    </el-tooltip>
                          </div>
                        </el-col>
                      </div>
                    </div>
                    <div class="lookmore">
                        <div>
                            <el-button type="primary" @click="lookmore" class="seemore" >查看更多</el-button>
                        </div>
                    </div>
                    </el-tab-pane
                  >
                  <el-tab-pane label="山西分区" name="third"
                    >
                    <div class="main-conetnet" v-for="item in datalist" :key="item.id" v-show="item.status!='审核中'">
                      <div class="main-conetnet-first">
                        <div class="first-left">
                          <el-col :span="12" class="main-first-col">
                            <div class="main-inside" >
                              <div class="transfrom"  @click="a(item)">{{item.title}}</div>                                         
                              <div class="main-first-left-tag ">                                                                                                                                                                                                                                                                                                              
                              <el-tag type="success" class="tag-main">{{item.tag}}</el-tag>
                               <el-tag type="success">{{item.tag}}</el-tag>
                              </div>
                              <div class="difficulty" >                   
                                <div>{{item.difflcult}}</div>
                                <div>|</div>
                                <div>{{item.difflcult}}</div>
                                <div>|</div>
                                <div>{{item.time}}</div>
                              </div>
                              <div class="main-first-information" >
                                  <el-tooltip  effect="dark" content="浏览量" placement="right">
                                <el-link icon="el-icon-view">{{item.views}}</el-link>
                                </el-tooltip>
                                 <el-tooltip  effect="dark" content="收藏数" placement="right">
                                <el-link icon="el-icon-folder-add">{{item.collection}}</el-link>
                                  </el-tooltip>
                                   <el-tooltip  effect="dark" content="留言数" placement="right">
                                <el-link icon="el-icon-edit">{{item.Leavingmessage}}</el-link>
                                </el-tooltip>
                                <el-tooltip  effect="dark" content="遇到数" placement="right">
                                <el-link icon="el-icon-user-solid">{{item.yudao}}</el-link>
                                 </el-tooltip>
                              </div>
                            </div>
                          </el-col>
                        </div>
                        <el-col :span="12">
                          <div class="main-right-one">
                              <el-tooltip class="item" effect="dark" :content="item.area" placement="top">
      <el-button>区域</el-button>
    </el-tooltip>
                          </div>
                        </el-col>
                      </div>
                    </div>
                    <div class="lookmore">
                        <div>
                            <el-button type="primary" @click="lookmore" class="seemore" >查看更多</el-button>
                        </div>
                    </div>
                    </el-tab-pane
                  >
                  <el-tab-pane label="江苏分区" name="fourth"
                    >
                    <div class="main-conetnet" v-for="item in datalist" :key="item.id" v-show="item.status!='审核中'">
                      <div class="main-conetnet-first">
                        <div class="first-left">
                          <el-col :span="12" class="main-first-col">
                            <div class="main-inside" >
                              <div class="transfrom"  @click="a(item)">{{item.title}}</div>                                         
                              <div class="main-first-left-tag ">                                                                                                                                                                                                                                                                                                              
                              <el-tag type="success" class="tag-main">{{item.tag}}</el-tag>
                               <el-tag type="success">{{item.tag}}</el-tag>
                              </div>
                              <div class="difficulty" >                   
                                <div>{{item.difflcult}}</div>
                                <div>|</div>
                                <div>{{item.difflcult}}</div>
                                <div>|</div>
                                <div>{{item.time}}</div>
                              </div>
                              <div class="main-first-information" >
                                  <el-tooltip  effect="dark" content="浏览量" placement="right">
                                <el-link icon="el-icon-view">{{item.views}}</el-link>
                                </el-tooltip>
                                 <el-tooltip  effect="dark" content="收藏数" placement="right">
                                <el-link icon="el-icon-folder-add">{{item.collection}}</el-link>
                                  </el-tooltip>
                                   <el-tooltip  effect="dark" content="留言数" placement="right">
                                <el-link icon="el-icon-edit">{{item.Leavingmessage}}</el-link>
                                </el-tooltip>
                                <el-tooltip  effect="dark" content="遇到数" placement="right">
                                <el-link icon="el-icon-user-solid">{{item.yudao}}</el-link>
                                 </el-tooltip>
                              </div>
                            </div>
                          </el-col>
                        </div>
                        <el-col :span="12">
                          <div class="main-right-one">
                              <el-tooltip class="item" effect="dark" :content="item.area" placement="top">
      <el-button>区域</el-button>
    </el-tooltip>
                          </div>
                        </el-col>
                      </div>
                    </div>
                    <div class="lookmore">
                        <div>
                            <el-button type="primary" @click="lookmore" class="seemore" >查看更多</el-button>
                        </div>
                    </div>
                    </el-tab-pane
                  > 
                  <el-tab-pane label="浙江分区" name="five"
                    >
                    <div class="main-conetnet" v-for="item in datalist" :key="item.id" v-show="item.status!='审核中'">
                      <div class="main-conetnet-first">
                        <div class="first-left">
                          <el-col :span="12" class="main-first-col">
                            <div class="main-inside" >
                              <div class="transfrom"  @click="a(item)">{{item.title}}</div>                                         
                              <div class="main-first-left-tag ">                                                                                                                                                                                                                                                                                                              
                              <el-tag type="success" class="tag-main">{{item.tag}}</el-tag>
                               <el-tag type="success">{{item.tag}}</el-tag>
                              </div>
                              <div class="difficulty" >                   
                                <div>{{item.difflcult}}</div>
                                <div>|</div>
                                <div>{{item.difflcult}}</div>
                                <div>|</div>
                                <div>{{item.time}}</div>
                              </div>
                              <div class="main-first-information" >
                                  <el-tooltip  effect="dark" content="浏览量" placement="right">
                                <el-link icon="el-icon-view">{{item.views}}</el-link>
                                </el-tooltip>
                                 <el-tooltip  effect="dark" content="收藏数" placement="right">
                                <el-link icon="el-icon-folder-add">{{item.collection}}</el-link>
                                  </el-tooltip>
                                   <el-tooltip  effect="dark" content="留言数" placement="right">
                                <el-link icon="el-icon-edit">{{item.Leavingmessage}}</el-link>
                                </el-tooltip>
                                <el-tooltip  effect="dark" content="遇到数" placement="right">
                                <el-link icon="el-icon-user-solid">{{item.yudao}}</el-link>
                                 </el-tooltip>
                              </div>
                            </div>
                          </el-col>
                        </div>
                        <el-col :span="12">
                          <div class="main-right-one">
                              <el-tooltip class="item" effect="dark" :content="item.area" placement="top">
      <el-button>区域</el-button>
    </el-tooltip>
                          </div>
                        </el-col>
                      </div>
                    </div>
                    <div class="lookmore">
                        <div>
                            <el-button type="primary" @click="lookmore" class="seemore" >查看更多</el-button>
                        </div>
                    </div>
                    </el-tab-pane
                  >
                </el-tabs>
              </div>
            </div>
          </div>
        </el-main>
        <el-aside style="width:500px">
          <div class="aside-header">
            <div class="aside-header-inside">
              <div class="aside-header-inside-top">
                <el-link icon="el-icon-edit"
                  >第一次上线自己的项目</el-link
                >
              </div>
              <div class="aside-header-inside-button">
                <div>
                 各位大哥帮我创造点数据
                  <router-link to="" class="Jump">点击了解详情(啥也没有)。</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="aside-center">
            <div class="aside-center-inside">
              <div class="aside-center-inside-header">
                <div class="aside-center-inside-header-inside">
                  <div>关于本站</div>
                </div>
              </div>
              <!-- aside-center-inside-header -->
              <div class="aside-center-inside-botton">
                <div class="aside-center-inside-botton-inside">
                  <div class="head-portrait">
                    <el-avatar :size="40" @error="errorHandler">
                      <img src="../assets/img/qq.jpg" alt="" />
                    </el-avatar>
                  </div>
                  <!-- head-portrait -->
                  <div class="aside-center-inside-botton-inside-information">
                    <div
                      class="aside-center-inside-botton-inside-information-font"
                    >
                      收集各种东西，资料，题目，生活都可以
                    </div>
                  </div>
                  <!-- aside-center-inside-botton-inside-information -->
                </div>
                <!-- aside-center-inside-botton -->
              </div>
              <!-- aside-center-inside-header -->
            </div>
            <!-- aside-center-inside -->
          </div>
          <!-- aside-center -->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
             <div class="header-inside">
              <div>积分榜</div>
              <div>月榜</div>
             </div>
            </div>
            <div class="box-card-content" v-for="item in scorelist" :key="item.id">
              <div class="box-card-content-inside" >
                <div class="box-card-content-inside-img">
                   <el-avatar :src="require(`../assets/img/${imgurl}`)"></el-avatar>
                </div>
                <div class="box-card-content-inside-jieshao">
                  <div class="box-card-content-inside-jieshao-header">
                    <div class="user"><span>{{item.username}}</span> </div>
                    <div><el-tag type=""  size="mini">{{item.tag}}</el-tag></div>
                  </div>
                  <div>
                    <div><span>本月积分:15</span></div>
                  </div>
                </div>
                <div>
                </div>
              </div>
              <!-- <div class="box-card-content-inside">
                <div class="box-card-content-inside-img">
                   <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </div>
                <div class="box-card-content-inside-jieshao">
                  <div class="box-card-content-inside-jieshao-header">
                    <div ><span>{{item.username}}</span> </div>
                    <div><el-tag type=""  size="mini">v2</el-tag></div>
                  </div>
                  <div>
                    <div><span>本月积分:15</span></div>
                  </div>
                </div>
                <div>
                </div>
              </div> -->
            </div>
            <div>
            </div>
          </el-card>
        </el-aside>
      </el-container>
    </div>
    <Floor></Floor>
  </div>
</template>

<script>

import {lookmorea,lookmoreab,changearea} from "../api/firstpage"
import "../css/firstpage.css"
import Floor from "../components/floor.vue";
// import '../components/header.vue'
import Header from "../components/header.vue";
export default {
  data() {
    return {
      subjectbtn:{
        语文:"语文",
        数学:"数学",
        英语:"英语",
        政治:"政治",
        医学:"医学",
        农学:"农学",
        经管:"经管",
        艺术概论:"艺术概论",
        法律:"法律",
        教育理论:"教育理论",
        杂七杂八:"杂七杂八",

      },
      imgurl:"qq.jpg",
      Prompt:"111",
      timer:"",
      loading:true,
       visible: true,
      activeName: "first",
      num:5,
      datalistlength:'',
      one:null,
      two:"",
      numall:"",
      // more:"",
      // number:"",
      datalist:{
      
      },
      scorelist:{},
        children:[]
    };
  },
  methods: {
   
    subjectvalue(index){
        console.log(index,"index")
        console.log(this.subjectbtn.index)
        // console.log(this.$refs.subjectref)
        this.$http({
          url:"users/changesubjectbtn",
          method:"get",
          params:{
            btnvalue:index
          }
        }).then(res=>{
          console.log(res),this.datalist = res.data
        }).catch(err=>{
          console.log(err)
        })
    },
   a(a){
    // console.log()
    console.log(a,"0===============")
    console.log(a,this.$cookies.get("username"))
   this.$router.push("/contentmain")
    // this.$http({
    //   method:"get",
    //   url:"users/updateseevalue",
    //   // url:"updateseevalue",
    //   params:{
    //     see:"true",
    //     title:a.title,
    //     username:this.$cookies.get("username"),
    //     views:a.views +1
    //     // view:view 
    //   }
    // }).then((res) => {
        
    // //        this.$http({
    // //   method:"get",
    // //   url:"subject/updatescore",
    // //   params:{
    // //     username:this.$cookies.get("username")
    // //   }
    // // }).then((res) => {
    // //     console.log(res)
    // // }).catch((err) => {
    // //     console.log(err)
    // // });
    // }).catch((err) => {
    //     console.log(err)
    // });
    this.$store.dispatch('infromation',a.title);
      this.$cookies.set("title",this.$store.state.title)
      // this.$cookies.set("title",this.$store.state.title)
    // alert(11)
    
   },
    lookmore(){
      //防止多次请求，数据已经没有了
      if(this.one == this.two){
        alert("已经是最后一次了,再点也没有用")
        return
      }
     this.num +=5
     
     lookmorea(this.num,this.numall).then((res =>((console.log(res,this.datalistlength,this.datalist)),this.datalistlength = res.data.data.length ,this.datalist = res.data.data,this.numall = res.data.numvalue,
      lookmoreab()
      ))).catch(err=>{
        console.log(err)
      })
     
    },
    handleClick(e) {
      console.log(e.$options.propsData.label)
      changearea(e.$options.propsData.label).then(res=>{
        console.log(res),this.datalist  = res.data
      }).catch(err=>{
        console.log(err)
      })
    },
    errorHandler() {
      return true;
    },
  },
  components: {
    // header
    Header,
    Floor,
  },
  mounted(){
     var that = this
    // var that = this
    //  var btn = document.getElementById('subjectvalue')
    // var btn = document.querySelectorAll("#subjectvalue")
    // console.log(btn.onclick = function(){},"oncilc")
    //   btn.onclick = function(){
    //     that.$http({
    //       url:"users/changesubjectbtn",
    //       method:"get",
    //       params:{
    //         btnvalue:this.innerText
    //       }
    //     }).then(res=>{
    //       console.log(res),this.datalist = res.data
    //     }).catch(err=>{
    //       console.log(err)
    //     })
    //   }
    // console.log(this.timevalue)
    if(this.$cookies.get("times")>=2592000){
       this.$http({
      url:"users/monthupdate",
      method:"get",
    }).then(res=>{
      console.log(res,"monthupdate"),
         this.$http({
      url:"users/newuserall",
      method:"get",
    }).then(res=>{
      console.log(res),this.scorelist = res.data,console.log(this,888888)
    }).catch(err=>{
      console.log(err)
    })
    }).catch(err=>{
      console.log(err)
    })
    }else{
 this.$http({
      url:"users/newuserall",
      method:"get",
    }).then(res=>{
      console.log(res),this.scorelist = res.data,console.log(this,888888)
    }).catch(err=>{
      console.log(err)
    })
    }
      
    
//  this.$http({
//       url:"users/olduserall",
//       method:"get",
//     }).then(res=>{
//       console.log(res),this.scorelist = res.data,console.log(Vue.prototype,"0101")
//     }).catch(err=>{
//       console.log(err)
//     })
    
   
   
   that.timer =   setInterval(function(){
      if (document.readyState =="complete"){
      that.loading = false
      }
      window.clearInterval(that.timer)
    },1000)
     
    
    this.$http({
      methods:"get",
      url:"users/save",
      params:{
          num :this.num,
          numall : this.numall
       
      }
    }).then((res=>((console.log(res)),
    this.datalist = res.data.data,
    console.log(this.datalist.data)
    )))
  }
};
</script>

<style  lang="css" scoped>
.main-conetnet-first{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .box-card-content-inside-jieshao-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .el-card__body{
    border-bottom: 1px solid;
  }
  .box-card-content-inside{
    display: flex;
    height: 60px;
    border-bottom: 1px solid ;
    margin-bottom: 20px;
  }
  .box-card-content-inside-img{
    margin-right: 20px;
  }
  .header-inside{
        display: flex;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
      height: 10px;
      align-items: center;
  }
  .score{
      font-size: 14px;
      color: gray;
      text-align: left;
      margin-top: 5px;
  }
  .aside-button-inside-information-button-inside-right-header{
      display: flex;
      width: 120px;
      justify-content: space-between;
  }
  
  .aside-button-inside-information-button-inside-img{
      padding-right: 20px;
  }
  .text {
      font-size: 14px;
    }
  
    /* .item {
      margin-bottom: 18px;
    } */
      .box-card {
      /* width: 480px; */
    }
   .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }
  .aside-button-inside-information-button{
      /* padding: 10px; */
      padding-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid darkgray;
  
  }
  .lookmore{
      padding-bottom: 20px;
      padding-top: 20px;
  }
  .huobao{
      border: 1px solid grey;
      background: aqua;
  }
  .aside-button-inside-information-header-inside{
  display: flex;
  justify-content: space-between;
  }
  .aside-button{
      background: white;
  }
  .aside-button-inside-information-header{
      padding-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid darkgrey;
  }
  .aside-button-inside-information-button-inside{
      display: flex;
  }
  .tag-main{
      margin-right: 20px;
  }
  .aside-button-inside{
      padding-left: 10px;
      padding-right: 10px;
  }
  .main-center-content-top{
      padding-left: 11px;
      padding-right: 11px;
  }
  .aside-button{
      background: white;
      box-shadow: 1px 8px 8px white;
  }
  .aside-button-inside-button-information-inside-describe-top-lift {
    flex: 1;
    line-height: 2;
  }
  .Jump{
      color: #1890ff;
  }
  .aside-header-inside{
      padding-left: 10px;
      padding-right: 10px;
  }
  .transfrom:hover{
      color: #1890ff;
  }
  .aside-button-inside-button {
    border-bottom: 1px solid;
  }
  .aside-center{
      padding-left: 10px;
      padding-right: 10px;
      box-shadow: 8px 8px 8px white;
  }
  .v2 {
    flex: 1;
  }
  .admin {
    flex: 5;
  }
  .aside-button-inside-button-information-inside {
    display: flex;
  }
  .aside-button-inside-button-information-inside-touxiang {
    flex: 1;
    line-height: 4;
  }
  .aside-button-inside-button-information-inside-describe {
    flex: 5;
    text-align: left;
  }
  .aside-button-inside-button-information-inside-describe-top {
    display: flex;
  }
  .aside-button-inside-header {
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid;
    padding-left: 10px;
    padding-right: 10px;
  }
  .aside-center-inside-botton-inside-information-font {
    text-align: left;
  }
  .aside-center-inside-botton-inside {
    display: flex;
    justify-content: space-between;
    /* line-height: 2; */
    /* margin-top: 30px; */
  }
  .aside-center {
    margin-top: 30px;
    margin-bottom: 30px;
    background: white;
  }
  .aside-center-inside-header-inside {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid darkgray;
  }
  .aside-header-inside {
    /* border: 1px solid rgba(208, 198, 198, 0.709); */
  }
  .main-right-one {
    /* position: absolute;
    bottom: 10px;
    right: 0; */
    /* position: relative;
    left: 760px;
    bottom: -120px; */
    width: 100%;
    text-align: right;
    height: 48px;
    line-height: 48px;
    /* display: grid; */
    /* align-items: center; */
  }
  .aside-center-inside-botton-inside-information {
    width: 380px;
  }
  .main-center {
    background: white;
    margin-top: 20px;
  }
  .first_page {
    background: #f0f2f5;
  }
  .aside-header {
    /* padding: 20px; */
    /* height: 50px; */
    line-height: 50px;
    border-bottom: 1px solid rgba(207, 199, 199, 0.455);
    background: white;
    box-shadow: 5px 8px 8px white;
  }
  .aside-header-inside-top {
    border-bottom: 1px solid rgba(173, 168, 160, 0.815);
  }
  .el-aside {
    padding: 52px 20px;
  }
  .zouwei {
    position: relative;
  }
  .main-conetnet {
    display: -webkit-box;
    height: 160px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.377);
  }
  .main-inside {
    width: 300px;
    font-size: 15px;
  }
  .main-first-col {
    text-align: left;
    line-height: 40px;
  }
  .main-first-information {
    display: flex;
    justify-content: space-between;
  }
  .difficulty {
    display: flex;
    justify-content: space-between;
  }
  .el-aside {
    width: 500px !important;
  }
  .main-header {
    background: white;
  }
  .main-header-content {
    display: flex;
    justify-content: space-between;
  }
</style>
