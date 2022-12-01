<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Header></Header>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import header from "../components/header.vue"

export default {
  name: 'Home',
  components: {
    HelloWorld,
    header
  }
}
</script>
