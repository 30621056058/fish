<template>
    <div>
        <div >
           <li v-for="items in a " :key="items.id" :style="items.text_algin">
          {{items.text_algin}}
           </li>
           
        </div>
        <div id="bb" v-if="Boolean(c) " @click="cg">asdasd</div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonComment',

    data() {
        return {
          a:"",
          c:0
        };
        
    },

    mounted() {
       
        this.$http({
            url:"/subject/commentpage",

        }).then(res=>{
           
            this.a = res.data
            console.log(this.a)
        }).catch(err=>{
            console.log(err)
        })
    },

    methods: {
        cg(){
            console.log(11)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>