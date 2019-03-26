<template>
    <div>
        <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="itme in newslist" :key="itme.id">
				<router-link :to="'/home/newsinfo/'+itme.id">
					<img class="mui-media-object mui-pull-left" :src="itme.img_url">
					<div class="mui-media-body">
						<h1>{{ itme.title }}</h1>
						<p class='mui-ellipsis'>
                            <span>发布时间：{{ itme.created_time | dateFormat }}</span>
                            <span>点击：{{ itme.click }} </span>
                        </p>
					</div>
				</router-link>
			</li>
		</ul>
    </div>
</template>

<script>

export default {
	data(){
		return {
			newslist: []
		}
	},
	
    methods: {
		getNewsList(){
			this.$axios.get('http://47.102.154.102:8000/api/v1/common/news').then(res => {
				this.newslist=res.data
			})
		}
	},
	mounted() {
		this.getNewsList();
	},
	
}
</script>

<style lang="scss" scoped>
    .mui-table-view{
		margin-bottom: 50px;
        li {
            h1 {
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
            
        }
    }
</style>
