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
import axios from 'axios'
Vue.prototype.$axios=axios
// Vue.http.options.root='http://localhost:8080'
Vue.http.options.emulateJSON=true

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

//注册vuex
import Vuex from 'vuex'
Vue.use (Vuex)
//每当刷新网页，从本地中获取car数组
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store=new Vuex.Store({
  state: {
    car: car    //把购物车里的数据用一个数组储存起来，包含id,count,price,selected
  },
  mutations: {
    addtocar(state,goodsinfo){
      //开始认为没找到
      var flag = false

      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
      if (!flag) {
        state.car.push(goodsinfo)
      }

      //当更新car之后，把数据存储到本地的localStorage之中
      localStorage.setItem('car', JSON.stringify(state.car))

    },
    updateGoodsInfo(state,goodsinfo){
      state.car.some(item => {
        if(item.id===goodsinfo.id){
          item.count=parseInt(goodsinfo.count)
          return true
        }
      })

      //修改之后也要保存
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removecar(state,id){
      state.car.some((item, i) => {
        if(item.id==id){
          state.car.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))

    },
    updateSelected(state,info){
      state.car.some(item => {
        if(item.id==info.id){
          item.selected=info.selected
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount(state){
      var c = 0;
      state.car.forEach(item => {
        c += item.count
      });
      return c;
    },
    getCountAndVal(state){
      var o ={
        count: 0,
        val: 0
      }

      state.car.forEach(item => {
        if(item.selected){
          o.count += item.count
          o.val += item.count*item.price
        }
      })
      return o
    }
  }
})


//导入APP根组件
import app from './App.vue'

// 导入格式化时间的插件
import moment from 'moment'
//全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})


//创建实例
var vm=new Vue({
  el:'#app',
  render: c =>c(app),
  router,    //挂载到实例上去
  store
})