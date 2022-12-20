<template>
    <div>
        <el-container>
            <el-header>
                <div class="reply_header">
                    <div class="reply_header-inside">
                        <div class="reply_header_inside_title">
                            <span>我的消息</span>
                        </div>
                        <div class="relpy_header-inside-main">
                            <span>我的回复</span>
                        </div>
                    </div>
                </div>
            </el-header>
             <el-container id="z-border" >
            <el-aside id="leftaside">
                <div class="reply_aside">
                    <div class="reply_aside-inside">
                        <div class="reply_title">
                            <span>近期消息</span>
                        </div>
                        <div class="reply_aside-main">
                            <div class="reply_aside-main-inside">
                               <div class="reply_aside_tag_main" v-for="(item,index) in userlist" :key="item.id" @click="shubiao(index,item)" @mouseenter="mouse(index)" @mouseleave="leave(index)">
                                  <div id="zhezhaoceng" v-if="item.zhezhao "  @click="zhezhao(item.oname)">
                                    <i class="el-icon-close" @click="deletevalue(index,item.id)"></i>
                                    </div>
                                <div class="reply_aside_tag">
                                  
                                    <div class="reply_aside_tag_img">
                                       <el-avatar :size="40" :src="require(`../assets/img/${item.other_toux}`)"></el-avatar>
                                    </div>
                                    <div class="reply_aside-tag-right">
                                        <div class="reply_aside-tag-right-top">
                                            <span>{{item.oname}}</span>
                                        </div>
                                        <div class="reply_aside-tag-right-bottom">
                                            <span>{{item.otherdescribe}}</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
                </el-aside> 
                <el-main style="padding:0px !important">
                    <el-header style="border-bottom:1px solid #999">
                        <div class="main-main">
                            <span style="width:100%">{{otthername}}</span>
                        </div>
                    </el-header>
                    
                        <el-main>
                            <div id="a" ref="gun" class="content_main" style="overflow:scroll">
                                <div class="content_main_inside">
                                   <div class="content_main_inside-header">
                                    <span>没有更多消息</span>
                                   </div>
                                   <div class="content_main_inside_main">
                                    <div class="content_main_inside-header">
                                        <span>2022年5月4日&nbsp;12:06</span>
                                    </div>
                                    <div >
                                    <div class="content_main_inside_main_kuang" v-for="items in cishivalue" :key="items.id" :style="(items.otherusername != xuanranothername) ? stylea:styleb">
                                        other{{items.otherusername}}
                                        <div class="content_main_inside_main_kuang_img">
                                            <el-avatar :size="30" :src="require(`../assets/img/${items.other_toux}`)"></el-avatar>
                                        </div>
                                        <div class="content_main_inside_main_kuang_content">
                                           {{items.comment_value}}
                                           <img v-if="items.comment_img" :src="require(`../assets/img/${items.comment_img}`)" alt="">
                                        </div>
                                    </div>
                                    <!-- <div class="content_main_inside_main_kuang" style="flex-direction: row-reverse">
                                        <div class="content_main_inside_main_kuang_img" style="margin-left: 10px;">
                                            <el-avatar :size="30" :src="circleUrl"></el-avatar>
                                        </div>
                                        <div class="content_main_inside_main_kuang_content">
                                            asdadasd
                                        </div>
                                    </div> -->
                                    </div>
                                   </div>
                                </div>
                            </div>
                        </el-main>
                        <el-footer style="padding:0px">
                            <div class="sendcontent">
                                <div class="sendcontent-inside">
                                    <div class="sendcontent-inside-inside">
                                        <div class="sendcontent-inside-inside-header">
                                            
                                            <!-- <div class="sendcontent-tag"><i class="el-icon-picture-outline-round"></i></div> -->
                                           <el-popover
  placement="top-start"
  width="100"
  trigger="click">
  <div class="expression">
    <div class="expression-inside">
        <div class="biaoqing" style="font-size:20px" v-for="item in biaoqingall" :key="item.bq1" @click="getbq(item.bq1)">{{item.bq1}}</div>
        <!-- <div class="biaoqing"> 😃</div>
         <div class="biaoqing"> 😃</div>
          <div class="biaoqing"> 😃</div>
           <div class="biaoqing"> 😃</div>
            <div class="biaoqing"> 😃</div>
             <div class="biaoqing"> 😃</div>
              <div class="biaoqing"> 😃</div>
               <div class="biaoqing"> 😃</div>
                <div class="biaoqing"> 😃</div> -->
                <!-- https://funletu.com/emoji/ -->

    </div>
  </div>
  <el-button slot="reference" icon="el-icon-picture-outline-round" round size="mini"></el-button>
</el-popover>
                                            <div class="sendcontent-tag"><i @click="uploadimg = true" class="el-icon-picture"></i>
                                            <el-dialog title="收货地址" :visible.sync="uploadimg">
                                                    <imgupload :imgvalue="imgtext" @custom="addimg"></imgupload>
                                                     <el-button @click="uploadimg = false">取 消</el-button>
                                                    <el-button type="primary" @click="uploadsure">确 定</el-button>
                                                    </el-dialog>
                                                    </div>
                                        </div>
                                        <div class="sendcontent-inside-inside-bottom">
                                           <textarea name="" id="" cols="67" rows="5" maxlength="500" autofocus minlength="1" placeholder="请输入" wrap="hard" v-model="commentvalue">
                                           
                                           </textarea>
                                           <button v-if="huif" @click="addcomment">回复</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-footer>
                    
                </el-main>
          </el-container>
        </el-container>
       
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonReplypage',

    data() {
        return {
            xuanranothername:"",
            biaoqingall:[
                {
                bq1:'😄',
               
             },
            {
                 bq1:"😁",
              
               
            },
            {
                  bq1:" 😋",
            },
            {
                  bq1:" 🤪",
            },
             {
                  bq1:" 😕",
            },
            ],
            imgtext:"请选择图片",
            uploadimg:false,
            stylea:"text-align:left",
            styleb:"flex-direction: row-reverse",
            huif:false,
            commentvalue:"",
            cishivalue:[],
            otthername:"请点击旁边的评论者",
            userlist:[],
            userlisttow:{
                
            },
            zhezhaoceng:false,
             circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        };
    },

    mounted() {
        this.xuanranothername = this.$cookies.get("username")
        window.sessionStorage.setItem("classnameindex","")
         
        //  ele[1].style.background = "#999"
            this.$http({
                url:"/subject/commentpageaside",
                params:{
                    username:this.$cookies.get("username"),
                }
            }).then(res=>{
                this.userlist = res.data,console.log(res.data)
            })

        //    this.$http({
        //     url:"/subject/commentpageall",
        //     method:"get",
        //      params:{
        //                 username:this.$cookies.get("username"),
                        
        //             }
        // }).then(res=>{
        // //    this.userlist = res.data
        //     // this.cishivalue = res.data
        //     console.log(res)
        //     console.log(typeof(this.cishivalue))
        //     // this.otthername =  this.cishivalue[0].otherusername
        // }).catch(err=>{
        //     console.log(err)
        // })
    //    const that = this
        // var zhezhao = document.querySelectorAll(".reply_aside_tag_main")
        // console.log(zhezhao)
        // for(let i=0;i<=zhezhao.length-1;i++){
        //       zhezhao[i].onclick = function(){
        //         console.log(1)
        //       }
            
        //     }
        
    },
 
    methods: {
        getbq(e){
            console.log(e)
            this.commentvalue = e
        },
        uploadsure(){
            this.uploadimg = false
          var  num = 0
            let value = {
                    id:num+1,
                    comment_img:window.sessionStorage.getItem("e"),
                     username:this.$cookies.get("username"),
                        toux:window.sessionStorage.getItem("img"),
                        comment_value:this.commentvalue,
                        test_title:"后续再补上",
                        otherusername:window.sessionStorage.getItem("otherusernamepage"),
                        other_toux:window.sessionStorage.getItem("othertouxpage"),
                        otherdescribe:"暂时不知道"
            }
            this.cishivalue.push(value)
        },
        addimg(e){
            window.sessionStorage.setItem("e",e)
            console.log(e)
            this.$http({
                url:"users/uploadimg",
                method:"get",
                params:{
                    comment_img:e,
                     username:this.$cookies.get("username"),
                        toux:window.sessionStorage.getItem("img"),
                        comment_value:this.commentvalue,
                        test_title:"后续再补上",
                        otherusername:window.sessionStorage.getItem("otherusernamepage"),
                        other_toux:window.sessionStorage.getItem("othertouxpage"),
                        otherdescribe:"暂时不知道"
                }
            }).then(res=>{
                console.log(res)
                
            }).catch(err=>{
                console.log(err)
            })
        },
        deletevalue(index,id){
            var ele = document.querySelectorAll(".reply_aside_tag_main")[index]
            ele.style.display = "none"
            this.$http({
                url:"/subject/deltecommentpageaside",
                params:{
                    id:id
                }
            }).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        },
        addcomment(){
           
          
        //    t.style.overflow = "scroll"
        
        
           console.log( document.getElementById("a").scrollTop)
            
            var that = this
            // console.log(this.commentvalue)
            let num;
            let a;
            this.$http({
                url:"",
                params:{
                    username:"",
                    otherusername:""
                }
            }).then(res=>{
               
                num = res.data.length+1
               
                console.log(res)
            })
             a = 
                {
                      "id": num,
        "username": window.sessionStorage.getItem('username'),
        "toux": window.sessionStorage.getItem('userpagetoux'),
        "comment_value": this.commentvalue,
        // "test_title": "偶函数是y轴对称，奇函数是原点对称",
        "otherusername": that.$cookies.get("username"),
        "other_toux": window.sessionStorage.getItem('othertouxpage'),
        // "nun": 0,
        // "text_algin": "text-align: left",
        // "zhezhao": 0,
        // "otherdescribe": "1"
                }
            if(window.sessionStorage.getItem("classnameindex") ==""){
                alert("请选择")
            }else{
                  this.cishivalue.push(a)
                  this.$http({
                    url:"/subject/insertcommnet",
                    method:"get",
                    params:{
                        username:this.$cookies.get("username"),
                        toux:window.sessionStorage.getItem("img"),
                        comment_value:this.commentvalue,
                        test_title:"后续再补上",
                        otherusername:window.sessionStorage.getItem("otherusernamepage"),
                        other_toux:window.sessionStorage.getItem("othertouxpage"),
                        otherdescribe:"暂时不知道"
                    }
                  }).then(res=>{
                    console.log(res),
                    this.$nextTick(()=>{
            var t =this.$refs.gun
            t.scrollTop = t.scrollHeight
        })
                  }).catch(err=>{
                    console.log(err)
                    this.$message.error("报错")
                  })
            }
           console.log(this.cishivalue)
           this.commentvalue = ""
           this.$message.success("回复成功")
            // console.log(v,"v")
            // console.log(this.cishivalue)
            // console.log(this.userlist)
        },
        leave(index){
            console.log(1)
            this.userlist[index].zhezhao = false
            
        },
        mouse(index){
            console.log(index)
            this.userlist[index].zhezhao = true
            
        },
        shubiao(index,item){
            // this.otthername = item.otherusername
            this.huif = true
            var ele = document.querySelectorAll(".reply_aside_tag_main")
            window.sessionStorage.setItem("uploadimgid",item.id)
            window.sessionStorage.setItem("usernamepage",item.name)
            window.sessionStorage.setItem("userpagetoux",item.toux)
            window.sessionStorage.setItem("otherusernamepage",item.oname)
            window.sessionStorage.setItem("othertouxpage",item.other_toux)
            console.log(window.sessionStorage.getItem("classnameindex"))
            if(window.sessionStorage.getItem("classnameindex") ==""){
                    window.sessionStorage.setItem("classnameindex",index)
                    
             console.log(ele[index],"index")
                
                ele[index].style.background = "#999"
                }else if(window.sessionStorage.getItem("classnameindex") !=index){
                        ele[window.sessionStorage.getItem("classnameindex")].style.background = ''
                          window.sessionStorage.setItem("classnameindex",index)
                        ele[index].style.background = "#999"
                }
                // console.log(Boolean(0))
                this.$http({
                    url:"subject/uploadheadernumtwo",
                    method:"get",
                    params:{
                        id: window.sessionStorage.getItem("uploadimgid")
                    }
                }).then(res=>{
                    console.log(res),
                    window.localStorage.setItem("headernum",'')
                     this.$store.dispatch("headernum",0)
                }).catch(err=>{
                    console.log(err)
                })
                
                    
                this.$http({
                    url:"/subject/commentpage",
                    params:{
                        username:item.name,
                        otherusername:item.oname
                    }
                }).then(res=>{
                    // console.log(res),
                    this.cishivalue = res.data
                    // console.log(Boolean("0"),"bb")
                }).catch(err=>{
                    console.log(err)
                })
        },
        zhezhao(e){
            console.log(e)
            console.log(1)
        }
    },
};
</script>

<style lang="css" scoped>
.biaoqing{
    width: 30px;
    height: 40px;
    text-align: center;
    cursor: pointer;
    /* border: 1px solid gray; */
}
.expression-inside{
    /* width: 100px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.abs{
    background-color: #333;
}
.el-icon-picture-outline-round{
    font-size: 20px;
}
.el-icon-picture{
    font-size: 20px;
}
.sendcontent-inside-inside-header{
    display: flex;
}
.sendcontent-tag{
    width: 50px;
}
.sendcontent-inside-inside{
    padding: 10px 10px 0px 10px;
    background: antiquewhite;
    /* height: 150px; */
    height: 100%;
    position: relative;
}
.sendcontent-inside{
    height: 100%;
}
.sendcontent-inside-inside-bottom{
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
}
.sendcontent{
    height: 182px;
    background-color: aqua;
    border-top: 1px solid gray;
}
.content_main_inside_main_kuang_content{
    /* height: 200px; */
    width: 100%;
    background-color: #999;
    text-align: left;
    padding: 15px;
    border-radius: 10px;
}
.content_main_inside_main_kuang_img{
    margin-right: 10px;
    align-self: flex-start;
}
.content_main_inside_main_kuang{
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-bottom: 20px;
}
.content_main_inside_main{
    margin-top: 20px;
    /* margin-bottom: 20px; */
}
.content_main_inside-header{
    font-size: 12px;
    color: #999;
    margin-bottom: 20px;
}
.content_main{
    height: 380px;
}
#leftaside{
    border-right: 1px solid #999;
}
#z-border{
border:1px solid #999
}
.main-main{
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
}
.el-aside{
    height: 625px;
}
.el-icon-close{
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -8px;
}
.reply_aside_tag_main{
    position: relative;
}
.reply_aside_tag:hover{
    background-color: rgba(153, 153, 153, 0.484);
}
.reply_aside-tag-right-top{
    font-size: 14px;
    color: #333;
    text-align: left;
    margin-bottom: 10px;
    
}
.reply_aside-tag-right-bottom{
    font-size: 12px;
    color: #999;
    text-align: left;
}
#zhezhaoceng{
  width: 238px;
    height: 78px;
    background-color: rgba(153, 153, 153, 0.389);
    position: absolute;
}
.reply_aside_tag_img{
    margin-right: 15px;
}
.reply_aside_tag{
    display: flex;
    align-items: center;
   
    padding: 0px 20px;
    height: 78px;
}
.reply_title{
    /* border: 1px solid; */
    border-bottom: 1px solid #999;
    /* border-right: 1px solid #999; */
    display: flex;
    align-items: center;
    height: 36px;
    /* width: 240px; */
   padding-left: 20px;
   /* border: 1px solid gainsboro; */
}
.reply_main{
    padding: 15px 0;
}
.reply_aside_header_title{
    text-align: left;
    height: 36px;
    display: flex;
    align-items: center;
    
    font-size: 13px;
}
.el-aside{
    width: 239px !important;
    /* padding: 0 20px; */
    /* background-color: gray; */
    /* border: 1px solid gainsboro; */
}
.reply_header{
    height: 100%;
}
.reply_header-inside{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.el-header{
    height: 37px !important;
    width: 100%;
    background-color: gainsboro;
    margin-bottom: 15px;
}
</style>