<template>
    <div class="newsinfo">
        <h3 class="title"> {{ newsinfo.title }} </h3>
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.created_time | dateFormat }} </span>
            <span>点击次数：{{ newsinfo.click }} </span>
        </p>
        <hr>
        <div class="content"> {{ newsinfo.content }} </div>

    </div>
</template>

<script>


export default {
    data(){
        return {
            id: this.$route.params.id,
            newsinfo: {}
        }
    },
    methods: {
        getnewsinfo(){
            this.$axios.get('http://47.102.154.102:8000/api/v1/common/news').then(res => {
                res.data.some(item => {
                    if(item.id==this.id){
                        this.newsinfo=item
                        return true
                    }
                })
            })
        }
    },
    created(){
        this.getnewsinfo()
    },
}
</script>


<style lang="scss" scoped>
.newsinfo {
    padding: 0 4px;
    .title {
        font-size: 16px;
        text-align: center;
        color: red;
        margin: 15px 0;
    }
    .subtitle {
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
}
</style>
