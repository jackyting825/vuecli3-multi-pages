<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <a href="./login.html">secpage</a>
    <br>
    <el-button type="primary" @click="click">主要按钮</el-button>
    <el-button type="primary" @click="logout">登出</el-button>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { test } from '@/api/test'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['getUserInfo']),
  },
  created() {
    // this.$cookie.set('name', 'value', { expires: new Date(new Date().getTime() + 1 * 60 * 1000) })
    // console.log(this.$cookie.get('name'))
  },
  mounted() {
    console.log('asdsad')
    console.log(this.getUserInfo)
  },
  methods: {
    click() {
      test().then(function (response) {
        console.log(response)
        Notification({
          title: '成功',
          message: response.data,
          type: 'success'
        })
      })
        .catch(function (error) {
          console.log(error)
        })
    },
    logout() {
      this.$store.dispatch('LogOut', this.$store).then(() => {
        location.href = './login.html'
      }).catch(() => {
      })
    }
  }
}
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
