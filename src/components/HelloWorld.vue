<template>
    <div>
        <button @click="a">{{list}}</button>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonHelloWorld',

    data() {
        return {
            list:""
        };
    },

    mounted() {
        
    },

    methods: {
        a(){
            this.$http({
                url:"https://www.tianapi.com/apiview/72?1995e14a963135f27b2ef0b1b53d0fe7",
                method:"get",
                
            }).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.label(err)
            })
        }
    },
};
</script>

<style lang="scss" scoped>

</style>