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
  </div>
</template>

<script>
import "../css/login.css"
// import {a} from '..//js/install '
export default {
  name: "WorkspaceJsonLogin",

  data() {
    //        var checkAge = (rule, value, callback) => {
    //     if (!value) {
    //       return callback(new Error('年龄不能为空'));
    //     }
    //     setTimeout(() => {
    //       if (!Number.isInteger(value)) {
    //         callback(new Error('请输入数字值'));
    //       } else {
    //         if (value < 18) {
    //           callback(new Error('必须年满18岁'));
    //         } else {
    //           callback();
    //         }
    //       }
    //     }, 1000);
    //   };
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
    // a()
    // console.log(this.$cookies.set("username",this.ruleForm.username))
    console.log(this.$cookies.get("keyname"));
    console.log(this.$cookies.get("username"))
    if (this.$cookies.get("keyname")) {
      this.$router.push("/firstpage");
    } else {
      // alert("出错了");
      this.$router.push("/login")
    }
  },

  methods: {
    submitForm(formName) {
      // console.log(this)
      console.log(this.ruleForm.username)//这里有值
      // let adsfa = this.ruleForm
      let va = this.ruleForm.username
      this.$http({
        methods: "get",
      
        url: "users/checksearchuser",
        params: {
          username: this.ruleForm.username,
          pass: this.$md5(this.ruleForm.pass),
        },
      }).then((res) => {
          if(res.data.length == 0){
            console.log("无参数")
            this.$message.error("密码或者用户错误")
          }else{
            console.log(res.data[0].tag)
            window.sessionStorage.setItem("tag",res.data[0].tag),
            window.sessionStorage.setItem("img",res.data[0].img),
            this.$cookies.set("img",res.data[0].img)
            console.log(res,234567890)//这里没有值
            // this.$cookies.set("username",va[true])
            // window.sessionStorage.setItem("username",va)
            this.$router.push("/firstpage")
            // this.$router.push("/firstpage")
             this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.$cookies.get('username'),"username")
            alert('登录成功');
             this.$http({
      method:"get",
      url:"subject/updatescore",
      params:{
        username:va
      }
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
         
        this.$refs[formName].resetFields();
          }
      }).catch((err)=>{
        console.log(err)
      });
       
       
    



            // this.$router.push("/firstpage"),


    //       this.$http({
    //         method:"get",
    //         //  url:"setcookie",
    //         url:"setcookie",
    //         params:{
    //           cookiesvalue: this.ruleForm.pass,
    //         }
    //       }).then(res=>{
    //         console.log(res,"200")
    //       }).catch(err=>{
    //         console.log(err,"500")
    //       })
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
      // });
    // },

  }
}
}
</script>

<style lang="css" scoped>

</style>

// nginx: [warn] conflicting server name "182.61.46.145" on 0.0.0.0:80, ignored nginx: //
// [warn] conflicting server name "182.61.46.145" on 0.0.0.0:80, ignored
