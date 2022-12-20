<template>
  <div>
    <!-- blob:http://localhost:8081/cde0ef9c-50dc-4183-b359-03095bd70001 -->
    <div class="person-main-inside">
      <div class="person-main-inside-top" v-for="userdata in userdataold" :key="userdata.id">
        <div class="person-main-inside-top-information">
          <div class="person-main-inside-top-information-img">
          <!-- <img :src="require(`../assets/img/${userdata.img}`)"> -->
          <!-- <img :src="absa" alt=""> -->
          <img :src="require(`../assets/img/${absa}`)" alt="">
          </div>
          <div class="person-main-inside-top-information-synopsis">
            <div class="person-main-inside-top-information-synopsis-header">
              <div>{{userdata.name}}</div>
              <div>
                <el-tag type="">{{userdata.tag}}</el-tag>
              </div>
            </div>
            <div class="person-main-inside-top-information-synopsis-botton">
              <div>我自己忘了这里是什么了</div>
            </div>
          </div>
        </div>
      </div>
      <div class="person-main-inside-botton">
        <div class="person-main-inside-botton-information">
          <div class="person-main-inside-botton-information-header">
            <div class="person-main-inside-botton-information-header-inside">
              <div>信息</div>
              <div>
                <!-- <template slot-scope="scope"> -->
                <el-button type="text" @click="abs"
                  >编辑</el-button
                >
                <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
                  <el-form :model="form" >
                    <el-form-item
                      label="用户名"
                      :label-width="formLabelWidth"
                    >
                     <el-input
                        v-model="form.name"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="性别"
                      :label-width="formLabelWidth"
                    >
                      
                      <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
                    </el-form-item>
                    <el-form-item
                      label="分数"
                      :label-width="formLabelWidth"
                    >
                       <el-input
                        v-model="form.score"
                        autocomplete="off"
                         :disabled="true"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="是否为大会员"
                      :label-width="formLabelWidth"
                    >
                       <el-input
                        v-model="form.tag"
                        autocomplete="off"
                         :disabled="true"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="头像"
                      :label-width="formLabelWidth"
                    >
                       <!-- <el-input
                        v-model="form.img"
                        autocomplete="off"
                      ></el-input> -->
                      <!-- action="filenew" -->
                      <el-upload
  class="avatar-uploader"
  
   action="pictureupload"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
                    </el-form-item>
                    <el-form-item
                      label="注册时间"
                      :label-width="formLabelWidth"
                    >
                       <el-input
                       disabled
                        v-model="form.Registration_time"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="兴趣"
                      :label-width="formLabelWidth"
                    >
                       <el-input
                        v-model="form.interest"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false"
                      >取 消</el-button
                    >
                    <el-button type="primary" @click="verifybutton()"
                      >确 定</el-button
                    >
                  </div>
                </el-dialog>
                 <!-- </template> -->
              </div>
             
            </div>
            
          </div>
          <div class="person-main-inside-botton-information-describe">
            <div class="person-main-inside-botton-information-describe-inside" v-for="userdata in userdataold" :key="userdata.id">
              <div
                class="
                  person-main-inside-botton-information-describe-inside-col
                " 
              >
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-left
                  "
                >
                  积分
                </div>
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-right
                  "
                >
                  {{userdata.score}}
                </div>
              </div>
              <div
                class="
                  person-main-inside-botton-information-describe-inside-col
                "
              >
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-left
                  "
                >
                  性别
                </div>
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-right
                  "
                >
                  {{userdata.sex}}
                </div>
              </div>
              <div
                class="
                  person-main-inside-botton-information-describe-inside-col
                "
              >
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-left
                  "
                >
                  简介
                </div>
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-right
                  "
                >
                   {{userdata.introduction}}
                </div>
              </div>
              <div
                class="
                  person-main-inside-botton-information-describe-inside-col
                "
              >
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-left
                  "
                >
                  兴趣
                </div>
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-right
                  "
                >
                  {{userdata.interest}}
                </div>
              </div>
              <div
                class="
                  person-main-inside-botton-information-describe-inside-col
                "
              >
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-left
                  "
                >
                  状态
                </div>
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-right
                  "
                >
                   {{userdata.state}}
                </div>
              </div>
              <div
                class="
                  person-main-inside-botton-information-describe-inside-col
                "
              >
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-left
                  "
                >
                  邮箱
                </div>
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-right
                  "
                >
                   {{userdata.email}}
                </div>
              </div>
              <div
                class="
                  person-main-inside-botton-information-describe-inside-col
                "
              >
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-left
                  "
                >
                  注册时间
                </div>
                <div
                  class="
                    person-main-inside-botton-information-describe-inside-col-right
                  "
                >
                  {{userdata.Registration_time}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <floor></floor>
  </div>
</template>

<script>
import "../css/childdata.css"
export default {
  name: "WorkspaceJsonChilddata",

  data() {
    return {
       options: [
        {
          value: '选项1',
          label: '男'
        },
         {
          value: '选项2',
          label: '女'
        }
        ],
        value: '',
       imageUrl: '',
      absa:"",
        // a:"../assets/img/qq.jpg",
        //  img:('../assets/img/qq.jpg'),
        //  imga:require(this.a),
        userdata:"",
        userdataold:"",
      formLabelWidth: "120px",
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        id:"1",
        // img:"qq.jpg",
        name:"123",
        score:"",
        sex:"",
        introduction:"",
        interest:"",
        state:"",
        email:"",
        Registration_time:"",
        img:"",
        tag:"",
       
      },
    };
  },

  mounted() {
    var times = Date(Date.now())
     console.log(times.toString() )
    // console.log(img)
     this.$http({
          // url:"toux",
          url:"users/toux",
          // url:"toux",
          method:"get",
        }).then((res) => {
          console.log(res),this.absa = res.data[0].img,window.sessionStorage.setItem("img",res.data[0].img)
        }).catch((err) => {
          console.log(err)          
        });

    this.$http({
        methods:"get",
        
        url:"users/searchuser",
        params:{
          value:this.$cookies.get("username")
        }
        
    }).then(res=>{
        console.log(res),this.userdataold=res.data,this.form = res.data[0],console.log(typeof(this.form))
    }).catch(err=>{
        console.log(err)
    })
  },

  methods: {
     handleAvatarSuccess() {
        // this.imageUrl = URL.createObjectURL(file.raw);
        this.$http({
          url:"users/updateimg",
          // url:"updateimg",
          method:"get",
        }).then((res) => {
          console.log(res),this.imageUrl = res.data[0].img,location.reload()
        }).catch((err) => {
          console.log(err)          
        });
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    verifybutton(){
      this.dialogFormVisible = false,
      console.log(this.form.id)
     
      // console.log(11)
      this.$http({
          url:"users/update",
          //  url:"update",
          methods:"get",
          params:{
           id: this.form.id,
           updata:this.form.name,
           score:this.form.score,
           sex:this.form.sex,
           introduction:this.form.introduction,
           interest:this.form.interest,
           state:this.form.state,
           email:this.form.email,
           Registration_time:this.form.Registration_time,
           img:this.form.img,
           tag:this.form.tag,
          }
        }).then(res=>{
          console.log(res),console.log(this.form)
        })
    },
    abs(){
        this.dialogFormVisible = true
        console.log(this.dialogFormVisible)
       
    }
  },
};
</script>

<style lang="css" scoped>

</style>