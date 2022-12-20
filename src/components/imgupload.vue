<template>
    <div>
        <el-upload
  class="upload-demo"
  action="users/pictureuploado"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :on-success="success"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">{{imgvalue}}</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonImgupload',
    props:{
        imgvalue:{
            type:String,
            required: true,
            default:"啥"
        }
    },
    data() {
        return {
             fileList: [],
             imgvaluea:"1111",
             img:"",
        };
    },

    mounted() {
        
    },

    methods: {
         handlePreview(file) {
        console.log(file,"chu");
      },
        success( file){
            // console.log(file)
        this.img = file
        this.$emit("custom",file)
        },
           handleRemove(file, fileList) {
        console.log(file, fileList,"yi");
      },
    },
};
</script>

<style lang="scss" scoped>

</style>