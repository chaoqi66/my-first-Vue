<template>
    <div class="comment">
        <h3>请您发表评论</h3>
        <hr>
        <textarea placeholder="请吐槽（最多120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postcomment">我要吐槽</mt-button>

        <div class="cmt-list">
            <div class="cmt-itme" v-for="(item,i) in comments" :key="item.id">
                <div class="title">
                    第{{i+1}}楼 &nbsp;&nbsp;用户：匿名用户 &nbsp;&nbsp;发表时间：{{item.created_time | dateFormat}}
                </div>
                <div class="body"> {{ item.desc }} </div>
            </div>

        </div>

        <!-- <mt-button type="danger" size="large" plain>加载更多</mt-button> -->
    </div>
</template>

<script>
import {Toast} from 'mint-ui'


export default {
    data(){
        return {
            comments:[],
            msg: ''      
        }
    },
    created(){
        this.getcomment()
    },
    methods: {
        getcomment(){
            this.$axios.get('http://47.102.154.102:8000/api/v1/common/topic').then(res =>{
                this.comments=res.data
            })
        },
        postcomment(){

            if (this.msg.trim().length===0) {
                return Toast("评论不能为空")
            }
            // else {
            //     return Toast("此功能正在维护中")
            // }
            

            this.$axios.post('http://47.102.154.102:8000/api/v1/common/topic', {
                 "desc": this.msg.trim(),
                 "name": Date.now()
            },{emulateJSON: true})
            .then(res => {
                var cmt = {  "desc": this.msg.trim(), "name": Date.now()}
                this.comments.unshift(cmt)
                this.msg=""
            })
        //     // var instance = this.$axios.create({ headers: {'content-type': 'application/x-www-form-urlencoded'} });
            // instance.post('/static/mock/comment.json', {}).then(res => res.data)
        }
    },

}
</script>

<style lang="scss" scoped>
.comment{
    margin-bottom: 50px;
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list{
        margin: 10px 0;
        .cmt-itme {
            font-size: 13px;
            .title{
                background-color: #eee;
            }
            .body {
                text-indent: 2em;
                line-height: 35px;
            }
        }
    }
}
</style>

