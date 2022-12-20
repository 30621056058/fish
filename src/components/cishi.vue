<template>
  <div class="login">
    <Header></Header>
    <div class="login-insidea">
      <el-card class="login-contenta">
        <div slot="header" class="clearfix">
          <span>登录 </span>
        </div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
           <el-form-item label="用户名" prop="username">
            <button @click="yanzhen">验证token合法性</button>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <!-- <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item> -->

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-tooltip
              class="item"
              effect="dark"
              content="还没有账号注册"
              placement="top-start"
            >
              <el-button ><router-link to="/register">注册</router-link> </el-button>
            </el-tooltip>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <button @click="getconetent">获取文章</button>
    <button @click="addcontent">增加文章</button>

     <el-carousel :interval="4000" type="card" height="400px" ref="carousel" :autoplay="false">
    <el-carousel-item v-for="item in carouselitem" :key="item.id" >
      <div class="all">
        <div>一共可以创建5道题,第{{item.id}}题</div>
        <el-input v-model="item.title" placeholder="title">
          <template slot="prepend">题目</template>
        </el-input>
        <el-input v-model="item.answer1" placeholder="answer1">
           <template slot="prepend">题目</template>
        </el-input>
        <el-input v-model="item.answer2" placeholder="answer2">
           <template slot="prepend">题目</template>
        </el-input>
        <el-input v-model="item.answer3" placeholder="answer3">
           <template slot="prepend">题目</template>
        </el-input>
        <el-input v-model="item.answer4" placeholder="answer4">
           <template slot="prepend">题目</template>
        </el-input>
        <button @click="add(1)">完成</button>
      </div>
    </el-carousel-item>
  </el-carousel>
  <button @click="ceshi">cisih</button>
  </div>
</template>
  <!-- <button @click="changevalue()">{{num}}</button> -->
<script>
import {Base64} from "js-base64"
import "../css/login.css"
// import {a} from '..//js/install '
export default {
  name: "WorkspaceJsonLogin",

  data() {
     
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      num:1,
      papernum:0,
      value:[
        {
          id:"1",
          title:"",
          answer1:"",
          answer2:"",
          answer3:"",
          answer4:"",
        },
        {
          id:"2",
          title:""
        }
      ],
        
       carouselitem:[{
        id:"1",
        title:"title"
      }],
      ruleForm: {
        pass: "",
        checkPass: "",
        username: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" },
        ],
      },
    };
  },

  mounted() {

    
   this.$http({
    url:"/tianqi/index?key=1995e14a963135f27b2ef0b1b53d0fe7&city=101020100&type=1 ",
    method:"get",
    
   }).then(res=>{
    console.log(res)
   }).catch(err=>{
    console.log(err)
   })
  },

  watch:{
    "a":{
      handler(newvalue,oldvalue){
        console.log("被修改了",newvalue,oldvalue)
        // this.changevalue()
         this.$refs.carousel.next()
         console.log(this.$refs)
      }
    }
  },
  methods: {
    ceshi(){
          if(window.WebSocket){
      let ws = new WebSocket("ws://localhost:8001")
    ws.onopen = function(){
      console.log("服务器连接成功")
      ws.send("成功")
      
    }
    }else{
      console.log(1)
    }
    },
    changevalue(){
        // var a = this.papernum+=1
        // if(a == 5){
        
        //   this.papernum =0
        // }
        // this.$refs.carousel.setActiveItem(a)
        // console.log(  this.$refs.carousel.setActiveItem(a))
        // console.log(11111111)
         this.$refs.carousel.next()
        //  console.log( this.$refs)
    },
    add(){
      // this.changevalue(indexa+1)
      //  this.changevalue()
      // console.log(this.$refs.carousel)
      
      let index =2
      this.num++
      console.log(index,1)
     this.carouselitem.push({id:this.num})
       if(this.carouselitem.length ==6){
          alert("您已经填完了5道题,是否提交")

       }
      //  console.log(this.a)
     
       
    },
    async  getconetent(){
    const contentres = await this.$http({
        url:"subject/getconetent",
        method:"post"
      })
      console.log("contentres",contentres)
    },
        async  addcontent(){
          console.log("this._encode()",this._encode())
    const contentres = await this.$http({
        url:"subject/addvalue",
        method:"post",
        data:{
          jurisdiction:1
        },
        headers:{
          'Authorization':this._encode()
        }
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
      console.log("contentres",contentres)
    },
    _encode(){
      const token = localStorage.getItem('token') 
      console.log("token",token)
     const encoded =  Base64.encode(`${token}:`)
     console.log(encoded,"encoded")
     return `Basic  ${encoded}`
    },
    yanzhen(){
      this.$http({
        url:"subject/verify",
        method:"post",
        data:{
          token :window.localStorage.getItem("token")
        }
      }).then((result) => {
              console.log(result)        
      }).catch((err) => {
          console.log(err)
      });
    },
    async submitForm(formName) {
 
      console.log(formName)
      const tokenresult = await this.$http({
        url:"subject/a",
        method:"post",
        data:{
          username:this.ruleForm.username,
          pass:this.ruleForm.pass
        }
      })
      console.log(tokenresult)
      localStorage.setItem('token',tokenresult.data.token)
  }
}
}
</script>

<style lang="css" scoped>
.all{
  height: 100%;
    display: grid;
    align-items: center;
    justify-content: space-around;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>


