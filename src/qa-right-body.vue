<template>
    <div class="qa-right-body">
        <div class="qa-body-list">
            <div class="qa-list-left">
                <p class="problem">中午在凡客打电话退货，下午可以到吗？在北京</p>
                <p class="problem-information">提问时间：3月22日 回答：0 | 94人看到过</p>
            </div>
            <div class="qa-list-right">
                <router-link class="right-click" to="">查看并处理</router-link>
            </div>
        </div>
        <div class="qa-body-list">
                <div class="qa-list-left">
                    <p class="problem">中午在凡客打电话退货，下午可以到吗？在北京</p>
                    <p class="problem-information">提问时间：3月22日 回答：0 | 94人看到过</p>
                </div>
                <div class="qa-list-right">
                    <router-link class="right-click click2" to="">删除问题</router-link>
                </div>
            </div>
    </div>
</template>

<script>

    export default {

    }
</script>

<style>
    .qa-right-body {
        width: 100%;
    }
    .qa-right-body:before,
    .qa-right-body:after {
        content: "";
        display: block;
        clear: both;
    }
    .qa-body-list{
        float: left;
        width: 100%;
        border-bottom:1px solid rgb(223, 223, 223);
    }
    .qa-list-left{
        float: left;
        padding:24px 0;
    }
  
    .qa-list-left p{
        padding:8px 0 8px 46px;
    }
    .problem{

    }
    .problem-information{
        font-size:12px;
        color: rgb(189, 189, 189);
    }

    .qa-list-right{
        float: right;
        margin-top:40px;
        padding:5px 46px 0 0;
        margin-top:40px;
        
    }

    .right-click{
        display: block;
        padding:6px 0;
        width:162px;
        border:1px solid rgb(223, 223, 223);
        color: #00aaff;
        border-radius:24px;
        text-align: center;
    }
    .click2{
        color: rgb(196, 196, 196);
    }
</style>