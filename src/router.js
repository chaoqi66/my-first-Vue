import VueRouter from 'vue-router'

//导入对应路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/newslist.vue'
import PhotoList from './components/PhotoList/PhotoList.vue'
import GoodsList from './components/goods/GoodsList.vue'

//创建路由对象
var router = new VueRouter({
    routes:[//配置路由规则
      { path: '/', redirect: '/home'},
      { path: '/home', component: HomeContainer},
      { path: '/member', component: MemberContainer},
      { path: '/search', component: SearchContainer},
      { path: '/shopcar', component: ShopcarContainer},
      { path: '/home/newslist', component: NewsList },
      { path: '/home/photolist', component: PhotoList },
      { path: '/home/GoodsList', component: GoodsList }
    ],
    linkActiveClass: 'mui-active'
  })

  export default router