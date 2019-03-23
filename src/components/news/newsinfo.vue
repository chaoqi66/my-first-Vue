<template>
    <div class="newsinfo">
        <h3 class="title"> {{ newsinfo.title }} </h3>
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_time }} </span>
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
            this.$axios.get('/static/mock/newsinfo.json').then(res => {
                this.newsinfo=res.data.message[this.id-1]
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
