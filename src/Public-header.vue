<template>
    <header>
        <div class="header-theme">
            <div class="header-subject">
                <img class="logo" src="../image/sign.png" alt="">

                <router-link class="user-name" to="/home">
                    <img class="head-portrait" src="../image/tx.png" alt="">
                    <span class="name">翟萌萌</span>
                </router-link>
            </div>
        </div>
        <div class="navigation">
            <div class="navigation-subject">
                <span class="navigation-txt">My Center</span>
                <ul class="navigation-title">
                    <router-link v-on:event="handle" to="/left" class="navigation-list">基本信息</router-link>
                    <router-link to="/course-managemen"  class="navigation-list">课程管理</router-link>
                    <router-link to="/my-questions"  class="navigation-list">我的回答</router-link>
                    <router-link to="/my-income" class="navigation-list">我的收入</router-link>
                </ul>
                <router-link class="add-curriculum" to="/my-course"><img src="../image/jh.svg" alt=""> 添加课程</router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'heade',
        methods: {

        }
    }

</script>

<style lang="less">
    .header-theme {
        width: 100%;
        background: #333333;
    }

    .header-subject {
        width: 1200px;
        height: 42px;
        background: #333333;
        margin: 0 auto;
        overflow: hidden;
    }

    .header-subject:before,
    .header-subject:after {
        content: "";
        display: block;
        clear: both;
    }

    .header-subject .logo {
        margin-top: 4px;
        float: left;
        display: block;
        width: 160px;
    }

    .user-name {
        float: right;
        height: 100%;
    }

    .user-name .head-portrait {
        margin-top: 6px;
        width: 30px;
        border-radius: 50%;
        float: left;
    }

    .user-name .name {
        float: right;
        color: rgb(238, 238, 238);
        font-size: 12px;
        padding: 16px 10px 0 10px;

    }

    .navigation {
        height: 90px;
        background: #fff;
    }

    .navigation .navigation-subject {
        width: 1200px;
        margin: 0 auto;
        height: 100%;
        background: #fff;
    }

    .navigation-subject:before,
    .navigation-subjectt:after {
        content: "";
        display: block;
        clear: both;
    }

    .navigation-subject .navigation-txt {
        font-size: 25px;
        color: #00aaff;
        float: left;
        display: block;
        padding-top: 30px;
    }

    .navigation-subject .navigation-title {
        float: left;
        margin-left: 40px;
    }

    .navigation-subject .navigation-title .navigation-list {
        font-size: 16px;
        display: block;
        float: left;
        padding: 30px 0 20px 0;
        margin-left: 80px;
        cursor: pointer;
    }

    .navigation-subject .add-curriculum {
        float: right;
        font-size: 14px;
        color: #00aaff;
        margin-top: 28px;
        padding: 5px 38px;
        border: 1px solid #00aaff;
        border-radius: 14px;
        cursor: pointer;

    }

    .navigation-subject .add-curriculum img {
        width: 18px;
        float: left;
        padding-right: 5px;
        
    }
</style>