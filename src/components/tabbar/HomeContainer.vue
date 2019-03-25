<template>
    <div>
        <mt-swipe :auto="4000">
             <mt-swipe-item>
                 <img src="../../images/夜曲.jpg" alt="">
             </mt-swipe-item>
             <mt-swipe-item>
                 <a href="https://v.youku.com/v_show/id_XNDAwMDcwNzQxMg==.html?spm=a2h3j.8428770.3416059.1">
                    <img src="../../images/8.jpg" alt="">
                 </a>
             </mt-swipe-item>
             <mt-swipe-item>
                 <img src="../../images/7.jpg" alt="">
             </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格改造成六格 -->
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <router-link to="/home/newslist">
		             <img src="../../images/menu1.png" alt="">
		             <div class="mui-media-body">新闻资讯</div>
                  </router-link>
            </li>
		     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <router-link to="/home/photolist">
		             <img src="../../images/menu2.png" alt="">
		             <div class="mui-media-body">图片分享</div>
                 </router-link>
            </li>
		     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <router-link to="/home/goodslist">
		             <img src="../../images/menu3.png" alt="">
		             <div class="mui-media-body">商品购买</div>
                 </router-link>
            </li>
		     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		             <img src="../../images/menu4.png" alt="">
		             <div class="mui-media-body">充值话费</div></a></li>
		     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		             <img src="../../images/menu5.png" alt="">
		             <div class="mui-media-body">视频专区</div></a></li>
		     <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                 <router-link to="/home/me">
		             <img src="../../images/menu6.png" alt="">
		             <div class="mui-media-body">联系我们</div>
                </router-link></li>
	      </ul>
    </div>
</template>

<script>
    
</script>

<style scoped lang="scss">
    .mint-swipe{
        height: 200px; 
        img {
            width: 100%;
        }
    }

    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
        img {
            width: 60px;
            height: 60px;
        }
    }
    .mui-media-body{
        font-size: 13px;
    }
</style>


