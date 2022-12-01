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
  </div>
</template>

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
   
  },

  methods: {
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

</style>


