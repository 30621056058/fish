<template>
    <div>
       <div class="main-inside" v-for="item in dalist" :key="item.id">
                              <div class="transfrom">{{item.title}}</div>
                              <div class="main-first-left-tag ">
                              <el-tag type="success" class="tag-main">{{item.tag}}</el-tag>
                               <el-tag type="success">{{item.tag}}</el-tag>
                              </div>
                              <div class="difficulty" >
                                <div>{{item.difflcult}}</div>
                                <div>|</div>
                                <div>{{item.difflcult}}</div>
                                <div>|</div>
                                <div>{{item.time}}</div>
                              </div>
                              <div class="main-first-information" >
                                <el-link icon="el-icon-edit">{{item.views}}</el-link>
                                <el-link icon="el-icon-edit">{{item.collection}}</el-link>
                                <el-link icon="el-icon-edit">{{item.subjecttype}}</el-link>
                                <el-link icon="el-icon-edit">{{item.subjecttype}}</el-link>
                              </div>
                            </div>
        
    </div>
</template>

<script>
import "../css/persondata.css"
export default {
    name: 'WorkspaceJsonPersondata',

    data() {
        return {
            dalist:{

            }
        };
    },

    mounted() {
        this.$http({
            methods:"get",
            url:"users/save"
        }).then((res =>((console.log(res)),this.dalist = res.data,console.log(this.dalist))))
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>