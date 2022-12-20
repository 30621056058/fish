<template>
    <div>
        <Header></Header>
        <el-container>
            <el-main>
                <div class="box_card">
       <el-card class="box-card" :body-style="{borderBottom:'1px solid #fff'}">
  <div slot="header" class="clearfix">
    <div class="card_top">
        <ul>
            <li >{{subjecttype}}</li>
            <li>|</li>
            <li><el-tag type="success">{{tag}}</el-tag></li>
        </ul>
    </div>
    <i class="el-icon-edit" style="float: right; padding: 3px 0" type="text"></i>
  </div>
  <div class="card_main">
    <div class="card_main-inside">
        <div class="card_main-inside-header">{{titlevalue}}</div>
        <div class="card_main-inside-btn">
            <div class="card_main-inside-btn-inside">
                <el-button  type="primary"  @click="font">文字解析</el-button>
               <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
        </div>
    </div>
  </div>
   
</el-card>
 <div class="card-botton">
            <div class="card-botton-inside">
                <ul>
                    <li style="border-right:1px solid"> <el-link icon="el-icon-star-off" :underline="a" @click="collecttion">收藏</el-link></li>
                    <li style="border-right:1px solid"> <el-link icon="el-icon-time" :underline="false" @click="yudao">遇到</el-link></li>
                    <li style="border-right:1px solid"> <el-link icon="el-icon-chat-round" :underline="false" @click="share">分享</el-link></li>
                    <li> <el-link icon="el-icon-c-scale-to-original">操作</el-link></li>
                </ul>
            </div>
        </div>
        </div>
        <div class="comment-main">
               <el-card  :body-style="{'text-align':'left','padding':'0 20px'}">
        <div slot="header">
             <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
  </el-tabs>
        </div>
        <div class="comment-body">
            <div class="comment-body-header">
                <div class="comment-body-header-inside">
                    <div class="comment-body-header-inside-header">
                    <span class="comment-body-header-inside-answer">{{comment_reply.length}}个回答</span>
                    <span><el-button type="primary" @click="hotvalue">最热</el-button><el-button type="primary" @click="newnum">最新</el-button></span>
                    <span><el-button type="primary" @click="answer">写回答 </el-button></span>
                    </div>
                     <div class="content-main-main" v-for="item in comment_reply" :key="item.id">
                        <div class="user-information">
                            <div class="user-information-inside">
                             <div class="block" >
                                 <el-avatar :size="small" :src="require(`../assets/img/${item.head_portrait_main}`)"></el-avatar>
                                </div>
                                <div class="user-information-main">
                                    <div class="user-information-main-top"><span>java</span><span><el-tag size="mini">{{item.Grade_main}}</el-tag></span></div>
                                    <div><span>{{item.comment_time_main}}</span></div>
                                </div>
                                </div>
                        </div>
                        <div class="content-inside" >
                        <ul   ref="conentimg">
                            <li>title:{{item.comment_title}}</li>
                            <li>主要内容:{{item.comment_content_main}}</li>
                            <li v-if="item.comment_img && item.comment_img != `` "><img  :src="require(`../assets/img/${item.comment_img}`)" alt="" ></li>
                        </ul> 
                        </div>
                        <div class="dianzan">
                            <div class="dianzan-inside">
                                <span><el-button type="primary" icon="el-icon-thumb" @click="thumbs(item)">{{item.thumbs_up_main}}</el-button></span>
                                
                                <span>  <el-link type="primary" @click="huif(item)">回复：</el-link></span>
                                <div id="onetexta">
                                    <div >
                                    <textarea name="" id="onetext" cols="30" rows="10" ref="comment" value></textarea>
                                        </div>
                                        
                                        <div style="text-align:right"> <el-button type="text" @click="open(item)">点赞回复</el-button><el-button type="text" @click="cancel(item)">取消</el-button></div>
                                        
                                    </div>
                            </div>
                        </div>
                        <div class="thumb" v-for="itema in item.replylist" :key="itema.id" >
                            <div class="thumb-inside" >
                                <div class="thumb-inside-toux"> 
                                     <div class="block" >
                                <el-avatar :size="small" :src="require(`../assets/img/${itema.head_portrait}`)"></el-avatar>
                                <!-- 服务器图片报错 -->
                                    </div>
                                    <div class="all">
                                   <div><span>{{itema.username}}</span></div>
                                   <div class="huifuvalue"><span>{{itema.reply_content}}</span></div>
                                   </div>
                                </div>
                                <div class="timeandhuif"><span>{{itema.reply_time}}</span><span class="timeandhuif-btn" @click="huifbtn">回复</span></div>
                                <div class="huifshow">
                                    <div><textarea name="" id="" cols="143" rows="5"></textarea></div>
                                    <div style="text-align:right"><el-button type="primary">回复</el-button><el-link type="primary" @click="cancel(item)">取消</el-link></div>
                                    </div>
                            </div>
                        </div>
                    </div> 
                   
                    <el-dialog title="写回答" :visible.sync="dialogTableVisible">
                        <input type="text" name="" id="" placeholder="请输入回答的标题" v-model="titlenew">
                        <el-input
  type="textarea"
  autosize
  placeholder="请输入回答的内容"
  v-model="textarea1">
</el-input>
<el-upload
  class="upload-demo"
  action="users/pictureuploado"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :on-success="success"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogTableVisible = false">取 消</el-button>
    <el-button type="primary" @click="queding">确 定</el-button>
  </span>
                    </el-dialog>
                </div>
            </div>
        </div>
    </el-card>
        </div>
</el-main>
<el-aside style="width:520px">
    <div class="card-right-header">
    <el-card :body-style="{'text-align':'left'}">
        <div slot="header">题目信息</div>
        <div class="subject-conetnet">
            <div class="subject-conetnet-inside" v-for="item in subject_information" :key="item.id">
                <div><span>浏览数：</span><span>{{item.views}}</span></div>
                <div><span>发布时间：</span><span>{{item.time}}</span></div>
                <div>
                    <ul class="toux">
                <li>上传者：</li>
                <li> <el-avatar :size="30" :src="require(`../assets/img/${item.img}`)"></el-avatar></li>
                <li>{{item.username}}</li>
                <li><el-tag type="success">{{item.tag}}</el-tag></li>
                <!-- <li><el-tag type="success">v3</el-tag></li>
                <li><el-tag type="success">v3</el-tag></li> -->
                </ul>
                </div>
                <div><span>遇到人数: </span><span>{{item.yudao}}</span><button class="subject-btn" @click="myencounter">我遇到过</button></div>
            </div>
        </div>
    </el-card>
    </div>
    <div>
        <el-card>
            <div slot="header">
                    相似题目
            </div>
            <div>
                <div class="similar-card">
                    <div class="similar-card-inside"  v-for="card in cardold" :key="card.id">
                        <div class="similar-card-inside-content">
                            <div><a >{{card.title}}</a></div>
                            <div class="similar-tag"><el-tag type="">{{card.tag}}</el-tag><el-tag type="">{{card.tag}}</el-tag><el-tag type="">{{card.tag}}</el-tag></div>
                            <div>
                                <ul class="similar-subject">
                            <li>{{card.subjecttype}}</li>
                            <li style="border-left:1px solid;border-right:1px solid;text-align:center">{{card.difflcult}}</li>
                            <li style="text-align:right">{{card.time}}</li>
                            </ul>
                            </div>
                            <div class="card-edit-father">
                                <ul class="card-edit">
                                    <li><el-link icon="el-icon-edit">{{card.views}}</el-link></li>
                                    <li><el-link icon="el-icon-edit">{{card.collection}}</el-link></li>
                                    <li><el-link icon="el-icon-edit">{{card.Leavingmessage}}</el-link></li>
                                    <li><el-link icon="el-icon-edit">{{card.yudao}}</el-link></li>
                                </ul>
                                <el-button type="primary" size="mini">选题</el-button>
                                </div>
                        </div>
                    </div>
                     <!-- <div class="similar-card-inside">
                           <div class="similar-card-inside-content">
                            <div><a >什么是token</a></div>
                            <div class="similar-tag"><el-tag type="">最新</el-tag><el-tag type="">最新</el-tag><el-tag type="">最新</el-tag></div>
                            <div>
                                <ul class="similar-subject">
                            <li>简单题</li>
                            <li style="border-left:1px solid;border-right:1px solid;text-align:center">简单题</li>
                            <li style="text-align:right">简单题</li>
                            </ul>
                            </div>
                            <div class="card-edit-father">
                                <ul class="card-edit">
                                    <li><el-link icon="el-icon-edit">编辑</el-link></li>
                                    <li><el-link icon="el-icon-edit">编辑</el-link></li>
                                    <li><el-link icon="el-icon-edit">编辑</el-link></li>
                                    <li><el-link icon="el-icon-edit">编辑</el-link></li>
                                </ul>
                                <el-button type="primary" size="mini">选题</el-button>
                                </div>
                        </div>
                    </div> -->
                     <!-- <div class="similar-card-inside">
                           <div class="similar-card-inside-content">
                            <div><a >什么是token</a></div>
                            <div class="similar-tag"><el-tag type="">最新</el-tag><el-tag type="">最新</el-tag><el-tag type="">最新</el-tag></div>
                            <div>
                                <ul class="similar-subject">
                            <li>简单题</li>
                            <li style="border-left:1px solid;border-right:1px solid;text-align:center">简单题</li>
                            <li style="text-align:right">简单题</li>
                            </ul>
                            </div>
                            <div class="card-edit-father">
                                <ul class="card-edit">
                                    <li><el-link icon="el-icon-edit">编辑</el-link></li>
                                    <li><el-link icon="el-icon-edit">编辑</el-link></li>
                                    <li><el-link icon="el-icon-edit">编辑</el-link></li>
                                    <li><el-link icon="el-icon-edit">编辑</el-link></li>
                                </ul>
                                <el-button type="primary" size="mini">选题</el-button>
                                </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </el-card>
    </div>
</el-aside>
</el-container>

    

<!-- <img :src="require(`../assets/img/${abs}`)" alt=""> -->


<floor></floor> 
    </div>
</template>

<script>
import "../css/contentmain.css"
import Header from '../components/header.vue';
export default {
  components: { Header },
    name: 'WorkspaceJsonContentmain',   

    data() {
        return {
            subject_information:"",
            analysis:"",
            arrall:[],
            arr:[],
            comment_reply:{},
            usertag:"",
            views:"",
            imgtoux:"qq.jpg",
            titlevalue:"",
            tag:"",
            subjecttype:"",
            xiao:"small",
            img:"",
            contentold:"",
            small:"small",
                userimg: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            titlenew:"",
            title:"",
            maincontent:"",
            abs:"qq.jpg",
              fileList: [],
              textarea1: '',
            a:false,
             circleUrl: "",
             activeName: 'second',
              dialogTableVisible: false,
               formLabelWidth: '120px',
               releasetime:"",
               yudaonum:"",
               cardold:"",
               conent_img:"",
               thumbsvalue:"",
               collectionvalue:"",
               collectionuse:"",
        };
    },

    mounted() {
//   console.log(this.$cookies.get("title"),1111111)
    // console.log(this.$store.state.title,11111111)
   this.$http({
    url:"users/test",
    params:{
        value:this.$cookies.get('title')
    }
   }).then((res) => {

    //    console.log(res,"00000000000"),
       this.comment_reply = res.data//comment_reply赋值,
            //  console.log(this.comment_reply.comment_img,"this")
       if(this.img ==='' || null || undefined){
                   this.conent_img = true
                //    console.log(this.$refs,111111) 
            }else{
                this.conent_img = true 
            }
       for(var i=0;i<=this.comment_reply.length-1;i++){
            // console.log(this.comment_reply[i],'222222222222')
            this.comment_reply[i].index = i
            //   console.log(this.comment_reply[i].comment_img,"this")
            //   console.log(this,'0101')
       }
    //    this.$http({
    //     url:"users/updataLeavingmessage",
    //     method:"get",
    //     params:{
    //         title:this.$cookies.get('title'),
    //         Leavingamessage:this.comment_reply.length
    //     }
    //    }).then(res=>{
    //     console.log(res)
    //    }).catch(err=>{
    //     console.log(err)
    //    })
   }).catch((err) => {
        console.log(err)
   });
    this.$http({
        url:"users/selecttitle",
        method:"get",   
        params:{
            title:this.$cookies.get("title")
        }
    }).then((res) => {
        this.subject_information = res.data,
        window.sessionStorage.setItem("title_username",res.data[0].username)
        window.sessionStorage.setItem("title_img",res.data[0].img)
        // console.log(res),
        this.subjecttype = res.data[0].subjecttype,
        this.tag = res.data[0].tag,
        this.titlevalue = res.data[0].title,
        this.collectionvalue = res.data[0].collection,
        this.imgtoux = res.data[0].img,
        this.views = res.data[0].views,
        this.releasetime = res.data[0].time,
        this.yudaonum = res.data[0].yudao,
        this.usertag = res.data[0].tag,
        this.analysis = res.data[0].analysis
          this.$http({
                url:"users/similar",
                method:"get",
                params:{
                    // title:this.$cookies.get("title"),
                    tag:this.tag
                //   iscollection:true,
                //   iscollectionusername:this.$cookies.get("username")
                },
            }).then((res) => {
                // console.log(res,1111111111111),
                this.cardold = res.data  
                // ,console.log(this.cardold)
            }).catch((err) => {
                console.log(err)
            })
    }).catch((err) => {
            console.log(err)        
    });
        // this.$http({
        //     url:"users/comment_mount",
        
        //     methods:"get"
        // }).then((res) => {
        //     console.log(res),
        // //   this.title = res.data[1].title,this.maincontent = res.data[1].content,this.abs = res.data[1].picture
        // this.contentold = res.data
        
        // }).catch((err) => {
        //     console.log(err)
        // });
       
          
        
  
    },

    watch:{
       
        // comment_reply:function(newvalue,old){
        //     // console.log(newvalue,old,222)
        //    }

    },

    methods: {
        font(){
 this.$alert(this.analysis, {
          confirmButtonText: '确定',
        
        });
        },
        //我遇到过
        myencounter(){
            this.yudao()
            // this.$http({
            //     url:"",
            //     method:"get",
            //     params:{

            //     }
            // }).then(res=>{
            //     console.log(res)
            //     if(this.thumbsvalue >0){
            //         this.yudaonum --
            //         this.thumbsvalue --
            //     }else{
            //           this.yudaonum ++
            //           this.thumbsvalue ++
            //     }
            // }).catch(err=>{
            //     console.log(err)
            // })
        },
        share(){
            // console.log(window.location.href)
            this.$message.success("分享请复制网址"+"--"+window.location.href)
        },
        thumbs(value){
        //    console.log(value.thumbs_up_main)
          
           if(value.thumbs_up_main >0){
               value.thumbs_up_main --
           }else{
            value.thumbs_up_main++
           }
           
        //    if(value.head_portrait_main)
        //    console.log(this.comment_reply)
        //    for (const num in this.comment_reply) {
        //     if(value ===this.comment_reply[num]){
        //         if(this.comment_reply[num].thumbs_up_main === value.thumbs_up_main +1){
        //             console.log(this.comment_reply[num].thumbs_up_main)
        //             console.log(value.thumbs_up_main,2222)
        //             console.log(a,444)
        //              this.comment_reply[num].thumbs_up_main ++
        //         }else{
        //             console.log(2222)
        //         }
        //         return
        //     }
        //         console.log("wu")
        //    }
        },
        hotvalue(){
            this.$http({
    url:"users/hot"
   }).then((res) => {
    //    console.log(res,"00000000000"),
       this.comment_reply = res.data//comment_reply赋值
   }).catch((err) => {
        console.log(err)
   });
        },
        newnum(){
             this.$http({
    url:"users/test",
    method:"get",
    params:{
       value:this.$cookies.get('title')
    }
   }).then((res) => {
    //    console.log(res,"00000000000"),
       this.comment_reply = res.data//comment_reply赋值
   }).catch((err) => {
        console.log(err)
   });
        },
        yudao(){
            this.$http({
                url:"users/yudaoadd",
                method:"get",
                params:{
                    title:this.$cookies.get("title"),
                //   iscollection:true,
                //   iscollectionusername:this.$cookies.get("username")
                },
            }).then((res) => {
                console.log(res)
              
                  if(this.thumbsvalue >0){
                    this.yudaonum --
                    this.thumbsvalue --
                    this.$message.warn("请不要多次点击")
                }else{
                      this.yudaonum ++
                      this.thumbsvalue ++
                        this.$message.success("遇到过一次")
                }
            }).catch((err) => {
                console.log(err),
                this.$message.error("点击失败了，稍后重试或者你点了两次")
            });
        },
        collecttion(){
              if(this.collectionuse >0){
                    this.collectionvalue --
                    this.collectionuse --
                    this.$message.warning("已取消收藏")
                }else{
                      this.collectionvalue ++
                      this.collectionuse ++
                        this.$message.success("收藏成功+1")
                }
          this.$http({
                url:"users/collection",
                method:"get",
                params:{
                    title:this.$cookies.get("title"),
                  iscollection:true,
                  iscollectionusername:this.$cookies.get("username"),
                  collection:this.collectionvalue
                },
            }).then((res) => {
                console.log(res)
               
            }).catch((err) => {
                console.log(err)
            });
        },
        cancel(itema){
            // console.log(itema)
             let allnum = this.comment_reply.length
 var b = document.querySelectorAll("#onetexta")
            b[allnum-itema.id].style.display = "none"
              var onetesta = document.querySelector(".huifshow")
            onetesta.style.display = "none"
        },
        huifbtn(){
               var onetest = document.querySelector(".huifshow")    
            onetest.style.display = "block"
        },
        huif(item){
            // console.log(item)
            
            // let allnum = this.comment_reply.length
            //2 -13
           
           
            // console.log(item)
         
            let a =  document.querySelectorAll("#onetexta")
            // let b = document.getElementById("onetexta")
           
           for(var i = 0;i<=a.length-1;i++){
        //    var a =  document.getElementById("onetexta")
            a[i].style.display = "none"
           }
            a[item.index].style.display = 'block'
            
        },
         open(shu) {
            
            //   console.log(shu)
              var a = document.getElementById("onetext").value
            //   console.log(a)
        this.$confirm('是否回复', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          

            this.$http({
                url:"users/reply_table",
                method:"get",
                params:{
                  reply_id:shu.id,
                  username:this.$cookies.get('username'),
                  head_portrait:this.$cookies.get("img"),
                //   reply_time,
                  reply_content:a,
                  child_title:this.$cookies.get("title")
                }
            }).then(() => {
                console.log(shu,2222)
            })
          
          this.$message({
            type: 'success',
            message: '回复成功!'
           
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消回复'
          });          
        });
      },
        success( file){
            // console.log(file)
        this.img = file
        },
        queding(){
            
            this.dialogTableVisible = false,
             this.$http({
            url:"users/comment",
            // url:"comment",
            methods:"get",
            params:{
                title:this.titlenew,
                content:this.textarea1,
                toux:this.$cookies.get('img'),
                tag:this.$cookies.get('tag'),
                username:this.$cookies.get('username'),
                img:this.img,
                father_title:this.$cookies.get("title")
                // time:"",
            }
        }).then((res) => {
            console.log(res),  this.comment_reply = res.data//comment_reply赋值
            for(var i=0;i<=this.comment_reply.length-1;i++){
            // console.log(this.comment_reply[i],'222222222222')
            this.comment_reply[i].index = i
            //   console.log(this.comment_reply[i].comment_img,"this")
            //   console.log(this,'0101')
       }
        }).catch((err) => {
            console.log(err)
        });
        if(window.sessionStorage.getItem("title_username") == this.$cookies.get("username")){
            return
        }else{
                this.$http({
                    url:"/subject/insertcommnet_two",
                    method:"get",
                    params:{
                        username:window.sessionStorage.getItem("title_username"),
                        toux:window.sessionStorage.getItem("title_img"),
                        comment_value:this.textarea1,
                        test_title:this.$cookies.get("title"),
                        otherusername:this.$cookies.get("username"),
                        other_toux:window.sessionStorage.getItem("img"),
                        otherdescribe:"暂时不知道"
                    }
                  }).then(res=>{
                    console.log(res.data)
                    this.$http({
                        url:"subject/uploadheadernum",
                        method:"get",
                        params:{
                                username:window.sessionStorage.getItem("title_username"), 
                                otherusername:this.$cookies.get("username"),
                        }
                    }).then(res=>{
                        console.log(res),
                        this.$message.success("评论成功，他她会看到的")
                    }).catch(err=>{
                        console.log(err)
                    })
                  })
                }
        
             },
           handleRemove(file, fileList) {
        console.log(file, fileList,"yi");
      },
      handlePreview(file) {
        console.log(file,"chu");
      },
        // open(){
        //     console.log(11111111111111111)
        // },
           handleClick(tab, event) {
        console.log(tab, event);
      },
      answer(){
         this.dialogTableVisible = !this.dialogTableVisible
        //  console.log(11)
        //  this.$http({
        //     url:"toux",
        //     methods:"get"
        // }).then((res) => {
        //     console.log(res),this.abs = res.data[0].img
        // }).catch((err) => {
        //     console.log(err)
        // });
        //  this.$http({
        //     url:""
        //  })
      }
    },
};
</script>   

<style lang="css" scoped>

 /* .el-tag{
    height: 20px;
    line-height: 20px;
 } */

</style>