<template>
  <div class="home">
    <img src="@/assets/logo.png">
    第一个页面
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <img :src="demoImg" width="200" height="300">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import demoImg from '~/images/demo.png'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      demoImg: demoImg
    }
  },
  mounted() {
    console.log(`这个是默认页面的主页：${this.$store.state.myname}`)
  }
}
</script>
