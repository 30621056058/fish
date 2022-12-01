<template>
    <div class="Collection">
        <div class="Collection-inside">
            <div class="Collection-inside-header">
                <div class="Collection-inside-header-inside">
                    <div>我的收藏</div>
                    <div>(0)</div>
                </div>
            </div>
            <div class="Collection-inside-botton">
                <div class="Collection-inside-botton-inside">
                    <div class="Collection-inside-botton-inside-search">
                        <input type="text" placeholder="搜索">
                    </div>
                    <div class="Collection-inside-botton-inside-botton">
                        <el-empty description="空空如也"></el-empty>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../css/personCollection.css"
export default {
    name: 'WorkspaceJsonPersonCollection',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>

</style>