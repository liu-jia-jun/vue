import Vue from "vue"
import VueRouter from "vue-router"
 
import App from "./App.vue"

import router from "./router/index.js"

 Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
    el:"#app",
    render: h => h(App),
    router:router
     
   

})