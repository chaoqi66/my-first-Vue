//入口文件
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//导入自己的router.js路由模块
import router from './router.js'
//导入并且安装vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//按需导入
// import { Header,Swipe,SwipeItem } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//导入MUI
import './lib/MUI/css/mui.css'
import './lib/MUI/css/icons-extra.css'


//导入APP根组件
import app from './App.vue'


//创建实例
var vm=new Vue({
  el:'#app',
  render: c =>c(app),
  router    //挂载到实例上去
})