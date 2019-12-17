<template>
    <div class="audit-body">
        <div class="curriculum">
            <img src="../image/kc1.png" alt="">
            <div class="curriculum-body body-top">
                <p class="curriculum-body-txt1">显示你的实力-面试</p>
                <p class="curriculum-body-txt2">上传时间: 12月2日 12:11</p>
                <span class="curriculum-body-txt3">免费</span>
            </div>
            <div class="curriculum-tail">
                <router-link class="curriculum-modify" to="/save-video">修改课程</router-link>
            </div>
        </div>
        <div class="curriculum">
            <img src="../image/kc2.png" alt="">
            <div class="curriculum-body body-top">
                <p class="curriculum-body-txt1">微信微博新媒体营销课程</p>
                <p class="curriculum-body-txt2">上传时间: 12月2日 12:11</p>
                <span class="curriculum-body-txt3">￥199</span>
            </div>
            <div class="curriculum-tail">
                    <router-link class="curriculum-modify" to="/save-video">修改课程</router-link>
                </div>
        </div>
    </div>
</template>

<script>

    export default {

    }
</script>

<style>
    .audit-body {
        width: 100%;

    }

    .curriculum {
        width: 100%;
        padding: 40px 0 40px 40px;
        border-top: 1px solid rgb(223, 223, 223);
        box-sizing: border-box;

    }

    .curriculum:before,
    .curriculum:after {
        content: "";
        display: block;
        clear: both;
    }

    .curriculum img {
        width: 200px;
        float: left;
    }

    .curriculum-body {
        float: left;
        padding-left: 20px;
        line-height: 34px;
        position: relative;
    }

    .curriculum .body-top {
        padding-top: 10px;
    }

    .curriculum-body-txt1 {}

    .curriculum-body-txt2 {
        font-size: 14px;
        color: rgb(165, 165, 165);
    }

    .curriculum-body-txt3 {
        color: #00aaff;
    }

    .curriculum-tail {
        width:162px;
        float: right;
       padding-top:30px;
    }

    .curriculum-modify {
        display: block;
        color: #00aaff;
        border: 1px solid rgb(223, 223, 223);
        border-radius: 20px;
        width: 160px;
       text-align: center;
      padding:5px 0;
    }

    .delect-curriculum {
      float: right;
      color: rgb(220, 220, 220);
      margin-right:50px;
      margin-top:10px;
    }
</style>