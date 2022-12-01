<template>
    <div class="person">
        <Header></Header>
             <div class="aside-right">
            <el-aside :width="isCollapse ? '78px' :'250px'">
                <div class="aside-inside">
                    <div class="aside-inside-information">
                        <div class="aside-inside-information-tag">
                           <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <!-- <div><button class="open" @click="isCollapseon">缩小</button></div> -->
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
 <el-menu-item index="/childdata">
    <i class="el-icon-menu"></i>
    <span slot="title">个人信息</span>
  </el-menu-item>
  <el-menu-item index="/personCollection">
    <i class="el-icon-menu"></i>
    <span slot="title">collection收藏</span>
  </el-menu-item>
  <el-menu-item index="/personsubject" >
    <i class="el-icon-document"></i>
    <span slot="title">上传记录</span>
  </el-menu-item>
  <el-menu-item index="seevalue">
    <i class="el-icon-setting"></i>
    <span slot="title">浏览记录</span>
  </el-menu-item>
</el-menu>
                        </div>
                    </div>
                </div>
            </el-aside>
        </div>
        <el-container>
   
        <el-main>
        <div class="person-main">
            <router-view></router-view>
            <!-- <div class="person-main-inside">
                <div class="person-main-inside-top">
                    <div class="person-main-inside-top-information">
                        <div class="person-main-inside-top-information-img">
                            <img src="../assets/img/qq.jpg" alt="">
                        </div>
                        <div class="person-main-inside-top-information-synopsis">
                            <div class="person-main-inside-top-information-synopsis-header">
                                <div>yaya</div>
                                <div>
                                    <el-tag type="">v1</el-tag>
                                </div>
                            </div>
                            <div class="person-main-inside-top-information-synopsis-botton">
                                <div>暂无简介</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="person-main-inside-botton">
                    <div class="person-main-inside-botton-information">
                        <div class="person-main-inside-botton-information-header">
                            <div class="person-main-inside-botton-information-header-inside">
                                  <div>信息</div>
                            <div> <el-link icon="el-icon-edit">编辑</el-link></div>
                            </div>
                          
                        </div>
                        <div class="person-main-inside-botton-information-describe">
                            <div class="person-main-inside-botton-information-describe-inside">
                                <div class="person-main-inside-botton-information-describe-inside-col">
                                    <div class="person-main-inside-botton-information-describe-inside-col-left">积分</div>
                                    <div class="person-main-inside-botton-information-describe-inside-col-right">1</div>
                                </div>
                                  <div class="person-main-inside-botton-information-describe-inside-col">
                                    <div class="person-main-inside-botton-information-describe-inside-col-left">性别</div>
                                    <div class="person-main-inside-botton-information-describe-inside-col-right">男</div>
                                </div>
                                  <div class="person-main-inside-botton-information-describe-inside-col">
                                    <div class="person-main-inside-botton-information-describe-inside-col-left">简介</div>
                                    <div class="person-main-inside-botton-information-describe-inside-col-right">暂无</div>
                                </div>
                                  <div class="person-main-inside-botton-information-describe-inside-col">
                                    <div class="person-main-inside-botton-information-describe-inside-col-left">兴趣</div>
                                    <div class="person-main-inside-botton-information-describe-inside-col-right">打羽毛球</div>
                                </div>
                                  <div class="person-main-inside-botton-information-describe-inside-col">
                                    <div class="person-main-inside-botton-information-describe-inside-col-left">状态</div>
                                    <div class="person-main-inside-botton-information-describe-inside-col-right">暂无</div>
                                </div>
                                  <div class="person-main-inside-botton-information-describe-inside-col">
                                    <div class="person-main-inside-botton-information-describe-inside-col-left">邮箱</div>
                                    <div class="person-main-inside-botton-information-describe-inside-col-right">暂无</div>
                                </div>
                                  <div class="person-main-inside-botton-information-describe-inside-col">
                                    <div class="person-main-inside-botton-information-describe-inside-col-left">注册事件</div>
                                    <div class="person-main-inside-botton-information-describe-inside-col-right">2022-6-26</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <Floor></Floor>
                </div>
            </div> -->
        </div>
        </el-main>
        </el-container>
    </div>
</template>

<script>
// import floor from '../components/floor.vue';
import "../css/person.css"
export default {
//   components: { floor },
    name: 'WorkspaceJsonPerson',

    data() {
        return {
             isCollapse: false,
        };
    },

    mounted() {
        
    },

    methods: {
        isCollapseon(){
           this.isCollapse = !this.isCollapse
        //    console.log("11")
            // console.log(this.isCollapse)          
            // var open =  document.querySelector(".open").textContent
            if(this.isCollapse ==false){
                document.querySelector(".open").Contentextt = "缩小"
            }
            else{
                document.querySelector(".open").textContent = "展开"
            }
             
            console.log(open)
            
        },
         handleOpen(key, keyPath) {
        console.log(key, keyPath);
      }, handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
};
</script>

<style lang="css" scoped>

</style>