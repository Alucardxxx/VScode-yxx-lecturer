<template>
    <div class="course-management">
        <div class="left-theme">
            <div class="left-theme-center">
                <div class="portrait-shadow">
                    <img class="head-portrait" src="../image/tx.png" alt="">
                    <a href="">编辑</a>
                </div>
                <router-link to="/course-managemen" class="left-theme-list">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-kecheng"></use>
                    </svg>
                    我的课程
                </router-link>
                <router-link to="" class="left-theme-list">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-tiezi-huodong-copy"></use>
                    </svg>
                    我的活动</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        methods: {

        },

    }
</script>
<script src="../font/font3/iconfont.js"></script>
<style lang="less">
    .course-management {
        width: 1200px;
        height: 588px;
        display: block;
    }
</style>