//入口文件
import Vue from 'vue'

//按需导入
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
//导入MUI
import './lib/MUI/css/mui.css'


//导入APP根组件
import app from './App.vue'

//创建实例
var vm=new Vue({
  el:'#app',
  render: c =>c(app)
})