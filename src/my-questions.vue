<template>
    <div class="my-questions">
        <div class="left-theme">
            <div class="left-theme-center">
                <div class="portrait-shadow">
                    <img class="head-portrait" src="../image/tx.png" alt="">
                    <a href="">编辑</a>
                </div>
                <router-link to="/my-questions" class="left-theme-list">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-wenti"></use>
                    </svg>
                    我的提问
                </router-link>
                <router-link to="/my-answers" class="left-theme-list">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiaoxi"></use>
                    </svg>
                    我的回答</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    }
</script>
<script src="../font/font6/iconfont.js"></script>
<style lang="less">
    .my-questions {
        width: 1200px;
        height: 588px;
        display: block;
    }
</style>