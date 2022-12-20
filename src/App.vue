<template>
  <div id="app">
    
    <router-view/>
    
  </div>
</template>
<script>
export default {
  mounted(){
    if(this.$cookies.get("username")==null){
      console.log("null")
    }else{
this.$http({
        url:"subject/headernum",
        method:"get",
        params:{
          username:this.$cookies.get("username")
        }
      }).then(res=>{
        // console.log(res.data[0].num,"numaa")
        if(res.data.length == 0){
          console.log('app')
          return
        }else{
           this.$store.dispatch("headernum",res.data[0].num)
        }
       
      }).catch(err=>{
        console.log(err)
      })
    }
      
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
