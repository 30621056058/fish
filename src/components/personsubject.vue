<template>
    <div class="personsubject-box">
        <div class="card-header">
            <el-card class="box-card">
                 <div slot="header" class="clearfix">
                    <span>上传记录{{uploadnum}}</span>
                 </div>
                 <div class="card-middle">
                    <el-dropdown @command="handleCommand">
  <el-button type="primary">
   题目状态<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown" >
    <el-dropdown-item v-for="item in examine" :key="item.id" :command="item.value">{{item.value}}</el-dropdown-item>
    <!-- <el-dropdown-item>已发布</el-dropdown-item>
    <el-dropdown-item>拒绝</el-dropdown-item> -->
  </el-dropdown-menu>
</el-dropdown>
                
                   <el-input class="titleall"
    placeholder="请输入搜索内容,按下回车会自动搜索"
    suffix-icon="el-icon-search"
    @change="enter(titleall)"
    v-model="titleall">
  </el-input>
                
                  <el-dropdown>
  <el-button type="primary">
    难度<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>简单</el-dropdown-item>
    <el-dropdown-item>中级</el-dropdown-item>
    <el-dropdown-item>困难</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
                 </div>
                 <div class="card-conetnet">
                   <el-empty>
  <el-button type="primary" ><router-link to="/upload">上传题目</router-link> </el-button>
</el-empty>
                 </div>
                 <div class="card-conetnet-new" v-for="item in listnum" :key="item.id">
                      <el-descriptions class="margin-top" :title='item.status' :column="3" :size="size" border>
    <template slot="extra" >
      <el-button type="primary" size="small" @click="changevalue(item)">操作</el-button>
      <el-dialog title="修改题目基本信息" :visible.sync="dialogFormVisible">
  <el-form v-model="form">
    <el-form-item label="题目" :label-width="formLabelWidth">
      <el-input v-model="form.title" autocomplete="off"></el-input>
    </el-form-item>
      <el-form-item label="题型" :label-width="formLabelWidth">
      <el-input v-model="form.subjecttype" autocomplete="off"></el-input>
    </el-form-item>
      <el-form-item label="标签" :label-width="formLabelWidth">
      <el-input v-model="form.tag" autocomplete="off"></el-input>
    </el-form-item>
      <el-form-item label="难度" :label-width="formLabelWidth">
      <el-input v-model="form.difflcult" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="close">确 定</el-button>
  </div>
</el-dialog>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-edit-outline"></i>
        题目
      </template>
     {{item.title}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-date"></i>
        上传时间
      </template>
      {{item.time}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        题型
      </template>
     {{item.subjecttype}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-collection-tag"></i>
        标签
      </template>
      <el-tag size="small">{{item.tag}}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-coin"></i>
        难度
      </template>
      {{item.difflcult}}
    </el-descriptions-item>
  </el-descriptions>

                 </div>
            </el-card>
        </div>
    </div>
</template>

<script>
import "../css/personsubject.css"
export default {
    name: 'WorkspaceJsonPersonsubject',

    data() {
      
        return {
         titleall:'',
          click:"click",
          examine:[
            {
              id:"1",
              value:"已审核"
            },
             {
              id:"2",
              value:"未审核"
            },
             {
              id:"3",
              value:"有问题"
            },
          ],
              dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
        title:"",
        subjecttype:"",
        tag:"",
        difflcult:"",
        },
        formLabelWidth: '120px',
            uploadnum:"0",
            listnum:"",
             size: '',
        };
    },

    mounted() {
        let htmlcontent =  document.querySelector(".card-conetnet")
        // console.log(htmlcontent.style)
        this.$http({
                method:"get",
                // url:"uploadsubject",
                url:"users/uploadsubject",
                // url:"uploadsubject",
                params:{
                    username:this.$cookies.get('username')
                }
            }).then((res) => {
                console.log(res),this.listnum = res.data,htmlcontent.style.display="none",this.uploadnum = res.data.length
            }).catch((err) => {
                console.log(err)                
            });
    },

    methods: {
      enter(enter){
        this.$http({
          url:"users/all",
          method:"get",
          params:{
            sha:enter,
            username:this.$cookies.get("username")
          }
        }).then(res=>{
           let htmlcontent =  document.querySelector(".card-conetnet")
          console.log(res),this.listnum = res.data,htmlcontent.style.display="none",this.uploadnum = res.data.length
          if(res.data.length == 0){
            this.$message.warning("没有信息")
          }
        }).catch(err=>{
          console.log(err)
        })
      },
         handleCommand(command) {
           let htmlcontent =  document.querySelector(".card-conetnet")
           if(command =="已审核"){
            this.$message.success(command);
           }else if(command =="未审核"){
            this.$message.warn(command)
           }else{
            this.$message.error(command)
           }
        
        this.$http({
          url:"users/datalist_status",
          method:"get",
          params:{
            status:command
          }
        }).then(res=>{
          console.log(res),this.listnum = res.data,htmlcontent.style.display="none",this.uploadnum = res.data.length
        }).catch(err=>{
          console.log(err)
        })
      },
    a(){
      console.log(11)
    },
        close(){
          this.dialogFormVisible = false
          this.$http({
            method:"get",
            // url:"changesubject",
              url:"users/changesubject",
            params:{
                title:this.form.title,
                tag:this.form.tag,
                subjecttype:this.form.subjecttype,
                difflcult:this.form.difflcult
            }
          }).then((res) => {
            console.log(res),
                location.reload()
          }).catch((err) => {
                console.log(err)
          });  
        },

        changevalue(a){
            this.dialogFormVisible = true
            console.log(a),
            this.form = a
        }
    },
};
</script>

<style lang="css" scoped>
.titleall{
  margin-right: 20px;
}
</style>