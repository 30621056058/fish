
<template>
  <div class="header-big"  >
    <el-row>
      <el-container>
        <el-header>
          <div class="header-content">
            <el-col :span="12">
              <div class="header-left-all">
                <div style="line-height: 70px;">升本</div>
                <div>
                  <ul class="header-left">
                  
                   
                    <li><el-link icon="el-icon-house" @click="fg">首页</el-link></li>
                    <li><el-link icon="el-icon-edit" @click="subject">题目</el-link></li>
                   <li><el-link icon="el-icon-edit" @click="testpapera">试卷</el-link></li>
                    <li><el-link icon="el-icon-user" @click="person">个人</el-link></li>
                  
                  </ul>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="header-right">
                <el-col :span="16">
                  <el-autocomplete 
                  v-show = istrue
      class="inline-input"
      v-model="searchsubjectvalue"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    > <el-button slot="append" icon="el-icon-search" @click="searchcontent"></el-button></el-autocomplete>
                </el-col>
                <el-col :span="4">
                     <el-button type="primary" @click="upload">点击上传</el-button>
                </el-col>
                <el-col :span="4"  v-if="information">
                     <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    <el-badge :is-dot="Boolean($store.state.headernum) " class="itema" >
     
  <el-button size="small">消息中心</el-button>
</el-badge>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>{{$cookies.get("username")}}</el-dropdown-item>
    <el-dropdown-item ><a href="#" @click="childdata">个人中心</a> </el-dropdown-item>
     <el-dropdown-item ><a href="#" @click="Logout">退出登录</a> </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
                </el-col>
              </div>
            </el-col>
          </div>
        </el-header>
      </el-container>
    </el-row>
    <!-- {{dalist}} -->
  </div>
</template>

<script>
// import {closewindow} from "../js/header"
import {cishi} from '../api/header'
import "../css/header.css"
import "../css/public.css";
export default {
  data() {
    return {
      badge:false,
      information:false,
      istrue:true,
        input4:"",
         searchsubjectvalue: '',
         thata:"",
         thisa:null,
         searchvalueheader:"",
         carryCurrentRowCode:""
    };
  },

  mounted() {
    
    if(this.$cookies.get("username")== null){
      console.log("sha")
    }else{
      this.$http({
      url:"/subject/headernum",
      method:"get",
      params:{
        username:this.$cookies.get("username")
      }
    }).then(res=>{
      console.log(res.data,1)
      if(res.data.length == 0){
        console.log('return')
        return
      }else{
  // var num =  Object.values(res.data)
  //  console.log(num,"num")
      for(let i =0;i<=res.data.length-1;i++){
        console.log(Object.values(res.data[i]),'i')
        if(Object.values(res.data[i]) == 1){
        
          window.localStorage.setItem("headernum",true)
          // this.badge =Boolean(window.localStorage.getItem("headernum")) 
            console.log(this.badge,"bgage")
        }else{
        // return
        console.log("shayemeiy1")
        }
      }
     
      }
    
    })
    }
    
    if(this.$cookies.get("username") != null){
      this.information = true
    }else{
      this.information = false
    }
     var n = window.location.href
       console.log(n)
      console.log(n.indexOf("subject")!=-1,1) 
      if(n.indexOf("subject")!=-1 ==true){
        this.istrue = false
      }else{
        this.istrue = true
      }
     window.addEventListener('scroll',this.scrollHandle);//绑定页面滚动事件
  // xy()  
  // clear()
     this.restaurants = this.loadAll();
    //  console.log(this.dalist,'header')
     this.thisa = this
    //  console.log(this.thisa)



   
     
  },

  props:["dalist"],
  // watch:{
  //   dalist:function(now,old){
  //     if(old == now){
  //       // this.searchcontent()
  //       return
  //     }
  //     else{
  //     //  this.searchcontent()
  //      console.log(now,old,1)
  //     }
  //     // this.searchcontent()
  //   }
  // },
 
  methods: {
  scrollHandle(e){
      let top = e.srcElement.scrollingElement.scrollTop;    // 获取页面滚动高度
      // console.log(top);
      var header_big =  document.querySelector(".header-big")
      if(top >=100){
        //  header_big = document.querySelector(".header-biga")
         header_big.classList.add('header-biga') 
        
        //  console.log('=========')
      }else{
        //  header_big.className = "header-big"
        header_big.className = "header-big"
      }
        },
    searchcontent(){
    //   this.$http({
    //     methods:"get",
    //     url:"users/search",
    //      params:{
    //       searcha:this.searchsubjectvalue
    //      }
    //   }).then((res) => {
    //    this.searchvalueheader = res.data, this.$bus.$emit('notmethod',this.searchsubjectvalue)
    //   }).catch((err) => {
    // console.log(err)        
    //   });
    cishi({ searcha:this.searchsubjectvalue}).then(res=>{
       this.searchsubjectvalue = res.data, this.$bus.$emit('notmethod',this.searchsubjectvalue)
    }).catch(err=>{
      console.log(err)  
    })
      console.log(this.searchvalueheader,"000")
       this.carryCurrentRowCode = this.searchsubjectvalue ;
      
      this.$router.push({
        path: "subject",
        //query: this.carryCurrentRowCode
        query: {
          carryCurrentRowCode: this.carryCurrentRowCode
        }
        
      });
      console.log(this.searchvalueheader,0)
//       const routeData = this.$router.resolve({

//   name: 'subject',
//   query: {
//     // record_id: item.record_id
//     a: vm.searchvalueheader
//   }
// })
// window.sessionStorage.setItem("id","1")
// console.log(vm.searchvalueheader,2)
// window.open(routeData.href, '_blank')
    },
    Logout(){
     
      window,sessionStorage.clear()
      // this.$cookies.remove("keyname")
        this.$cookies.remove("keyname")
      this.$cookies.remove("username")
      this.$router.push('/login')
     
    },
    cishi(){
      this.$router.push("/about")
    },
     querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      handleSelect(item) {
        console.log(item);
        
      },
       testpapera(){
       if(this.$cookies.get("username")!="" && this.$cookies.get("username")!=null){
       this.$router.push("/testpaper")
       console.log(this.$cookies.get("username"))
       }else{
         alert("请登录")
         this.$router.push("/login")
       }
       
    },
    upload(){
       if(this.$cookies.get("username")!="" || this.$cookies.get("username")!=null){
       this.$router.push("/upload")
       }else{
         alert("请登录")
         this.$router.push("/login")
       }
       
    },
    childdata(){
       if(this.$cookies.get("username")!="" && this.$cookies.get("username")!=null){
       this.$router.push("/childdata")
       }else{
         alert("请登录")
         this.$router.push("/login")
       }
    },
    fg(){
      if(this.$cookies.get("username")!="" && this.$cookies.get("username")!=null){
         this.$router.push("/firstpage")
         console.log(this.$cookies.get("username"))
      }else{
        console.log(this.$cookies.get("username"))
        alert("请登录")
        this.$router.push("/login")
      }
    },
    subject(){
      if(this.$cookies.get("username")!="" && this.$cookies.get("username")!=null){
         this.$router.push({
          name:"subject",
         },()=>{},()=>{}
         )
      }else{
        alert("请登录")
        this.$router.push("/login")
      }
        
    },
    person(){
        //  this.$router.push("/person")
         if(this.$cookies.get("username")!="" && this.$cookies.get("username")!=null){
          this.$router.push({
          name:"person",
        },()=>{},()=>{}
        )
         }else{
        alert("请登录")
        this.$router.push("/login")
      }
        
    }
  },
};
</script>

<style lang="css" scoped>

</style>