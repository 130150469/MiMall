<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from 'storage/index'
import jsonp from 'jsonp'
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return {
      res:{}
    };
  },
  components: {
  },
  mounted(){ 
    // 本地加载请求 json文件的形式
    // this.axios.get("/mock/user/login.json").then(res => {
    //   this.res = res;
    //   console.log(res);
    // })

    //通过fast-mock平台调用mock
    this.axios.get("/user").then(res => {
      this.res = res;
      console.log(res);
    })
  }
}
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
