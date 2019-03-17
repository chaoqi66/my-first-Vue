import VueRouter from 'vue-router'

//导入对应路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'


//创建路由对象
var router = new VueRouter({
    routes:[//配置路由规则
      { path: '/', component: HomeContainer},
      { path: '/home', component: HomeContainer},
      { path: '/member', component: MemberContainer},
      { path: '/search', component: ShopcarContainer},
      { path: '/shopcar', component: SearchContainer}
    ],
    linkActiveClass: 'mui-active'
  })

  export default router