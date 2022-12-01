<template>
    <div>
       <el-card>
        <div slot="header">
            <div>浏览记录{{num}}</div>
        </div>
        <div class="card-content">
            <div class="card-content-box" v-for="item in items " :key="item.id">
            <div class="card-content-child">
                <div class="card-content-child-inside">
                <div class="card-content-header">
                    <div class="card-content-header-inside">
                    <div>{{item.title}}</div>
                    </div>
                </div>
                
                <div class="card-content-tag">
                     <div class="card-content-tag-inside">
                    <el-tag>{{item.tag}}</el-tag>
                     </div>
                </div>

                <div class="card-content-information">
                    <div class="card-content-information-inside">
                    <ul>
                        <li style="text-align: left;">{{item.subjecttype}}</li>
                        <li style="border-left:1px solid;border-right:1px solid;text-align: center;  ">{{item.difflcult}}</li>
                        <li style="text-align: right; ">{{item.time}}</li>
                    </ul>
                    </div>
                </div>

                <div class="card-content-bottom">
                    <div class="card-content-bottom-inside">
                     <el-link icon="el-icon-edit" :underline='false' >浏览数&nbsp;&nbsp;{{item.views}}</el-link>
                     <el-link icon="el-icon-edit" :underline='false'>收藏数&nbsp;&nbsp;{{item.collection}}</el-link>
                     <el-link icon="el-icon-edit" :underline='false'>留言数&nbsp;&nbsp;{{item.Leavingmessage}}</el-link>
                     <el-link icon="el-icon-edit" :underline='false'>遇到人数&nbsp;&nbsp;{{item.yudao}}</el-link>
                    </div>
                </div>
                </div>
                <div class="card-content-btn">
                    <el-button type="primary" size="mini">选项</el-button>
                </div>
            </div>
            </div>
        </div>
       </el-card>
    </div>
</template>

<script>
import "../css/seevalue.css"
export default {
    name: 'WorkspaceJsonSeevalue',

    data() {
        return {
            num:0,
            items:"",
        };
    },

    mounted() {
        this.$http({
            method:"get",
           
            url:"users/seevalue",
            params:{
                username:this.$cookies.get("username"),
                see:"true",
            }
        }).then((res) => {
            console.log(res),this.items = res.data,this.num = res.data.length,console.log(this.$cookies.username)
        }).catch((err) => {
            console.log(err)            
        });
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>


</style>