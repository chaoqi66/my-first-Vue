import VueRouter from 'vue-router'

//导入对应路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import More from './components/tabbar/Shopcar.vue'
import SearchContainer from './components/tabbar/More.vue'
import NewsList from './components/news/newslist.vue'
import MY from './components/me/me.vue'
import PhotoList from './components/PhotoList/PhotoList.vue'
import GoodsList from './components/goods/GoodsList.vue'
import NewsInfo from './components/news/newsinfo.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
//创建路由对象
var router = new VueRouter({
    routes:[//配置路由规则
      { path: '/', redirect: '/home'},
      { path: '/home', component: HomeContainer},
      { path: '/member', component: MemberContainer},
      { path: '/more', component: SearchContainer},
      { path: '/shopcar', component: More},
      { path: '/home/newslist', component: NewsList },
      { path: '/home/photolist', component: PhotoList },
      { path: '/home/GoodsList', component: GoodsList },
      { path: '/home/me', component: MY },
      { path: '/home/newsinfo/:id', component: NewsInfo},
      { path: '/home/goodsinfo/:id', component: GoodsInfo}
    ],
    linkActiveClass: 'mui-active'
  })

  export default router