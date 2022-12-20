<template>
  <div class="login">
    <Header></Header>
    <div class="login-insidea">
      <el-card class="login-content">
        <div slot="header" class="clearfix">
          <span>注册 </span>
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
            <el-input v-model.number="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button type="primary"><router-link to="/login">已有账号</router-link></el-button>
            <!-- <el-tooltip
              class="item"
              effect="dark"
              content="还没有账号注册"
              placement="top-start"
            >
              <el-button>注册</el-button>
            </el-tooltip> -->
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import "../css/register.css"
// import {a} from '..//js/install '
export default {
//   name: "WorkspaceJsonregister",
 name: 'WorkspaceJsonRegister',
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
        console.log(rule)
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
        pass: [{ validator: validatePass, trigger: "blur" },
            {min:5,max:10,message:"长度在 5 到 10 个字符",trigger: "blur"}
        ],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" },
        ],
      },
    };
  },

  mounted() {
    // a()
    console.log(this.$cookies.get("keyname"));
    if (this.$cookies.get("keyname")) {
    //   this.$router.push("/firstpage");
    } else {
    //   alert("出错了");
    }
  },

  methods: {
    submitForm(formName) {
      // console.log(this)
      // console.log(this.ruleForm.username,this.ruleForm.pass,'why')
      var char = this.ruleForm.username
      // console.log(char.slice(0,1))
      try{
       console.log(char.slice(0,1)) 
       if(char.slice(0,1) == "<" || char.slice(0,1) == "?"){
     alert('用户名第一个字符不能是<');
       }
      }catch{
        console.log("err")
        this.$message.error("用户名第一个参数要输入字母")
        return
      }
      if(this.ruleForm.username ===""|| this.ruleForm.pass ===""){
        this.$message.error("请输入参数")
      }else{
         this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
            this.$http({
        methods: "get",
        // url:"checksearchuser",
        url: "users/register",
        params: {
          username: this.ruleForm.username,
          password: this.$md5(this.ruleForm.pass),
        },
      })
        .then((res) => {
          console.log({data:res})
          if(res.data.mes){
              this.$message.error(res.data.mes)
          }else{
               this.$cookies.set("username",this.ruleForm.username)
               this.$router.push("/firstpage")
             this.$message({
              message: "登录成功",
              type: "success",
            });
          }
        }
        )
        .catch((err) => {
          console.log(err);
        });
            
        } else {
        this.$message.error("请输入符合规则的密码和用户名");
          return false;
        }
      });
       
      }
     
     
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="css" scoped>

</style>


