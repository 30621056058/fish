<template>
    <div class="upload-subject">
      <Header></Header>
        <!-- <div style="border: 1px solid #ccc;" class="Toolbar">
                                    <Toolbar 
                                        style="border-bottom: 1px solid #ccc"
                                        :editorId="editorId"
                                        :defaultConfig="toolbarConfig"
                                        :mode="mode"
                                    />
                                    <Editor
                                        style="height: 300px; overflow-y: hidden;"
                                         :editorId="editorId"
                                        v-model="html"
                                        :defaultConfig="editorConfig"
                                        :mode="mode"
                                        @onCreated="onCreated"
                                    />
                                </div> -->
        <el-container>
            <el-main>
                <div class="prepare-upload">
                    <div class="prepare-upload-inside">
                       <div class="prepare-upload-inside-header">
                        <div class="prepare-upload-inside-header-container">
                          <div>上传题目</div>
                          <div>欢迎分享面试题，<a href="#">获取积分</a> </div>
                        </div>
                       </div>
                       <div class="prepare-upload-inside-container">
                        <div class="prepare-uload-inside-container-inside">
                          <div class="prepare-uload-inside-container-inside-bushouyinxiang">
                            <div class="prepare-uload-inside-container-inside-bushouyinxiang-col">
                              <div class="subject-font"><span>*</span><span>题型</span></div>
                              <div class="selcetone" > 
                                <el-radio v-model="radioa" label="简答">简答</el-radio>
                                <el-radio v-model="radioa" label="单选">单选</el-radio>
                                <el-radio v-model="radioa" label="不定项">不定项</el-radio>
                                </div>
                            </div>
                          </div>
                           <div class="prepare-uload-inside-container-inside-bushouyinxiang">
                            <div class="prepare-uload-inside-container-inside-bushouyinxiang-col">
                              <div class="subject-font"><span>*</span><span>难度</span></div>
                              <div class="selcet"> 
                                <el-radio v-model="radio" label="简单">简单</el-radio>
                                <el-radio v-model="radio" label="中等">中等</el-radio>
                                <el-radio v-model="radio" label="困难">困难</el-radio>
                                </div>
                            </div>
                          </div>
                           <div class="prepare-uload-inside-container-inside-bushouyinxiang">
                            <div class="prepare-uload-inside-container-inside-bushouyinxiang-col">
                              <div class="subject-font"><span>*</span><span>标签</span></div>
                              <div class="selcet"> 
                                <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
                                </div>
                            </div>
                          </div>
                           <div class="prepare-uload-inside-container-inside-bushouyinxiang">
                            <div class="prepare-uload-inside-container-inside-bushouyinxiang-col">
                              <div class="subject-font"><span>*</span><span>题目</span></div>
                            
                                 <div style="border: 1px solid #ccc;" class="Toolbar">
                                    <Toolbar 
                                        style="border-bottom: 1px solid #ccc"
                                        :editor="editor"
                                        :defaultConfig="toolbarConfig"
                                        :mode="mode"
                                    />
                                    <Editor
                                        style="height: 200px; overflow-y: hidden;"
                                        v-model="html"
                                        
                                        :defaultConfig="editorConfig"
                                        :mode="mode"
                                        @onCreated="onCreated"
                                    />
                                </div>
                                
                                
                            </div>
                          
                          </div>
                         <!-- <div id="toolbar-container"></div> -->
                        
                         <!-- <div ref='editor1'>11 </div> -->
                           <div class="prepare-uload-inside-container-inside-bushouyinxiang">
                            <div class="prepare-uload-inside-container-inside-bushouyinxiang-col">
                              <div class="subject-font"><span>*</span><span>参考解释</span></div>
                              <div class="selcet"> 
                                <quill-editor v-model="goods" :options="editorOption"/>
                                </div>
                            </div>
                          </div>
                           <!-- <div class="prepare-uload-inside-container-inside-bushouyinxiang">
                            <div class="prepare-uload-inside-container-inside-bushouyinxiang-col">
                              <div class="subject-font"><span>*</span><span>视频题解</span></div>
                              <div class="selcet"> 
                               <el-input v-model="input" placeholder="请输入内容"  size="small"></el-input>
                                </div>
                            </div>
                          </div> -->
                           <div class="prepare-uload-inside-container-inside-bushouyinxiang" style="margin-top: 70px;">
                            <div class="prepare-uload-inside-container-inside-bushouyinxiang-col">
                              <div class="subject-font"><span>*</span><span>备注</span></div>
                              <div class="selcet"> 
                                 <el-input v-model="input" placeholder="请输入内容"  size="small"></el-input>
                                </div>
                            </div>
                          </div>
                          <div class="Submit">
                            <div class="Submit-inside">
                              <el-button type="primary" @click="sumbit">提交</el-button>
                            </div>
                          </div>
                        </div>
                       </div>
                    </div>
                </div>
            </el-main>
            <el-aside>
              <div class="upload-inside">
                <div class="upload-iside-information">
                  <div class="upload-iside-information-inside">
                    <div class="upload-iside-information-header-border">
                  <div class="upload-iside-information-header">相似题目（请勿重复上传）</div>
                  </div>
                  <div class="upload-iside-information-floor">输入题目后将自动检测{{this.$store.state.username}}</div>
                  </div>
                </div>
              </div>
            </el-aside>
        </el-container>
        
    </div>
</template>

<script>
import "../css/upload.css"
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor'
// import Vue from 'vue'
// import {  createToolbar } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {  
    name: 'WorkspaceJsonPersonsubject',
     components: { Editor, Toolbar,quillEditor },
    data() {
        return {
          a:"",
          b:"",
             options: [{
          value: '选项1',
          label: '数学'
        }, {
          value: '选项2',
          label: '英语'
        }, {
          value: '选项3',
          label: '政治'
        }, {
          value: '选项4',
          label: 'c语言'
        }, {
          value: '选项5',
          label: '数据结构'
        }],
        value: '',
             radio: '1',
             radioa:'',
             input: '',
              editor: null,
              // abs:null,
              // editorId:"editor",
              //  editorId2:"editor2",
            html: '',
            toolbarConfig: { },
            editorConfig: { placeholder: '请输入内容...' },
            mode: 'simple', // or 'simple'
            editorOption:{},
            goods:"",
            checkredio:''
        };
    },
    watch:{
      checkredio:function(now,old){
        console.log(now,old)
        
        // if(this.checkredio ==)
        // // let checkredio
        //   let rediotag = document.querySelectorAll(".selcet")[0].children
        //   for(let tag = 0;tag<=rediotag.length-1;tag++){
        //     // console.log(rediotag[tag],"11")
        //     console.log(rediotag[tag],"11")
        //     if(rediotag[tag].className=='is-checked'){
        //       // console.log(1)
        //       this.checkredio = rediotag[tag].textContent
        //       console.log(this.checkredio)
        //     }else{
        //       console.log("出错")
        //     }
        //   } 
        //   console.log(rediotag)
      }
        
    },
    mounted() {
       console.log(this.radioa)
    // var that = this
        // if(this.checkredio ==)
        // let checkredio
        // console.log(document.querySelectorAll(".selcetone"))
          // let rediotag = document.querySelector(".selcetone").children
          // console.log(rediotag)
          // console.log(rediotag)
          // for(let tag = 0;tag<=rediotag.length-1;tag++){
            // console.log(rediotag[tag])
            // rediotag[tag].onclick = function(){
              //  event.cancelBubble = true
              // event.stopPropagation()
              // console.log(11)
              // console.log(that.radioa,this)

              // event.cancelBubble = true
          // } 
            // }
          // console.log(rediotag)


    // this.editor = new WangEditor(this.$refs.editor1);
          setTimeout(() => {
            this.html = '<p></p>'
        }, 1500)
    },
  beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    },
    methods: {
         onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
           
        },
        sumbit(){
        
     
          let test 
          if(this.editor.getText() == "选项1"){
            test = '数学'
          }if(this.editor.getText() == "选项2"){
             test = '英语'
          }
          if(this.editor.getText() == "选项3"){
             test = '政治'
          }
          if(this.editor.getText() == "选项4"){
             test = 'c语言'
          }else{
            test = "数据结构"
          }
         
          if(this.goods!=""){
              this.a = this.goods.split('<p>')[1]
              this.b = this.a.split("</p>")[0]
           
          }else{
            alert("未填写解析")
          }
         
         
          console.log(this.editor.getText(),test,this.radioa,this.radio,this.$cookies.get("img"),this.goods,this.input)
          if(this.editor.getText()!="" !=undefined && test!="" && this.radioa!="" && this.b!=""  !=undefined && this.radio!=""){
            alert('success')
            this.$http({
              method:"get",
            
              url:"users/savesubject",
             
              params:{
                title:this.editor.getText(),
                tag :test,
                subjecttype:this.radioa,
                difflcult:this.radio,
                username:sessionStorage.getItem("username"),
                img:this.$cookies.get("img")
              }
            }).then((res) => {
               console.log(res),
                this.$http({
      method:"get",
      url:"subject/updatescore",
      params:{
        username:this.$cookies.get("username")
      }
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    });
            }).catch((err) => {
              console.log(err)              
            });
          }else{
            alert("请重新填写相关信息")
          
          }
         
        },
        q(){
          console.log(1111111)
        }
    },
};
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang="css" scoped>


</style>

