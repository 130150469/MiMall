<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
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
    this.getUser();
    this.getCartCount();
  },
  methods:{
    ...mapActions([
      'saveUserName',
    ]),
    getUser(){
      this.axios.get("/user").then((res = {})=>{
        //to-do 保存到vuex里面
        this.saveUserName(res.username);
        //this.$store.dispatch('saveUserName',res.username)
      })
    },
    getCartCount(){
      this.axios.get("/carts/products/sum").then((res = 0) => {
        // to-do 保存到vuex里面
        this.$store.dispatch('saveCartCount',res)
      })
    }
  }
}
</script>

<style  lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
