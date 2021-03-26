import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import env from './env'
import store from './store'
import VueCookie from 'vue-cookie'
//根据前端的跨域方式做调整 /a/b => /api/a/b
axios.defaults.baseURL = "/api"
//axios.defaults.baseURL = 'https://www.fastmock.site/mock/5348ed3efba65ed7076455bfca082426/api';//fastmock地址
axios.defaults.timeout = 8000
//axios.defaults.baseURL = env.baseURL;

//接口错误拦截
axios.interceptors.response.use(response => {
    let res = response.data;
    if(res.status == 0){
        return res.data;
    }else if(res.status == 10){
        //没有登录
        window.location.href = "/#/login";
    }else{
        alert(res.msg);
    }
    return Promise.reject(res);
})
Vue.config.productionTip = false
Vue.use(VueAxios,axios)
Vue.use(VueCookie)
new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount('#app')
