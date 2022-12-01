<template>
  <div>
    <input type="file" name="" id="file" ref="file">
<el-upload
  class="avatar-uploader"
  action="filenew"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
<img v-if="imageUrl" :src="imageUrl" >

<div class="abs" @click="a()">cookies</div>

<ul class="aaa">
  <li>13212</li>
  <li>154</li>
  <li>456</li>
</ul>

<button @click="ai">测试</button>
<div v-for="item in ab" :key="item.id">
{{item[0].huif}}
</div>
  </div>
  
</template>

<script>
export default {
  name: 'WorkspaceJsonAbout',

  data() {
    return {
         imageUrl: '',
         keyName:"keyName",
         time:2435467,
         ab:""
    };
  },

  mounted() {
    this.$http({
      method:"get",
      url:"users/cishia",
      // params:{
      //   cookiesvalue:123,
      //   // cookieskey:this.keyName
      // }
     }).then((res) => {
      console.log(res),this.ab = res.data[0]
     }).catch((err) => {
        console.log(err)
     });
    let ul = document.querySelectorAll(".aaa")[0].children
    // console.log(ul)
    for(let a = 0;a<=ul.length-1;a++){
      console.log(ul[a])
      ul[a].onclick = function(){
        console.log(ul[a].textContent)
      }
    }
    //  this.$http({
    //       url:"toux",
    //       method:"get",
    //     }).then((res) => {
    //       console.log(res),this.imageUrl = res.data[0].img
    //     }).catch((err) => {
    //       console.log(err)          
    //     });

    // this.$refs.file.addEventListener("change",(e)=>{
    //   const formdate = new FormData

    //   formdate.append("file",e.target.files[0])
    // })
  },

  methods: {
    ai(){
 
    },
    a(){
      // alert(1)
    //  this.$cookies.set(this.keyName, this.time),
     this.$http({
      method:"get",
      url:"users/setcookie",
      params:{
        cookiesvalue:123,
        // cookieskey:this.keyName
      }
     }).then((res) => {
      console.log(res)
     }).catch((err) => {
        console.log(err)
     });
     
    //  this.$cookies.get(this.keyName)
    },
      handleAvatarSuccess(res, file) {
        // console.log(res.file)
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log( this.imageUrl)
        // console.log(this)
        this.$http({
          url:"users/updateimg",
          method:"get",
          params:{
            imageUrl: this.imageUrl
          }
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)          
        });
        // location.reload()
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return   isLt2M;
      }
  },
};
</script>

<style lang="css" scoped>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>