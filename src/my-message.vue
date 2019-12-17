<template>
    <div class="my-message">
                    <ul class="user-information">
                        <li class="information-list">
                            <span class="tips">姓名</span>
                            <span class="users">翟萌萌</span>
                        </li>
                        <li class="information-list">
                            <span class="tips">出生日期</span>
                            <span class="users">1999年8月13日</span>
                        </li>
                        <li class="information-list">
                            <span class="tips">姓别</span>
                            <span class="users">女</span>
                        </li>
                        <li class="information-list">
                            <span class="tips">手机号</span>
                            <span class="users">18749136780<i class="yz">√ 已验证</i></span>
                        </li>
                        <li class="information-list">
                            <span class="tips">邮箱</span>
                            <span class="users">1942143826@qq.com</span>
                        </li>
                        <li class="information-list">
                            <span class="tips">身份证号</span>
                            <span class="users">410781199908135613</span>
                        </li>
                        <li class="information-list">
                            <span class="tips">微信号</span>
                            <span class="users">18790648649</span>
                        </li>
                        <li class="information-list">
                            <span class="tips">QQ号</span>
                            <span class="users">39827898</span>
                        </li>
                    </ul>
                    <router-link to="/Editing" class="edit-information" ref="btn">   
                        <img src="../image/pan.svg" alt="">
                        编辑
                    </router-link >
    </div>
</template>

<script>
    export default {

        components: {
        }
    }
</script>

<style lang="less">
    .my-message {
        width: 860px;
        height: 588px;
        background: #fff;
        float: right;

    }

    .user-information {
        width: 300px;
        padding-left: 40px;
        padding-top: 40px;
        float: left;


    }

    .user-information .information-list {
        display: block;
        padding-top: 30px;


    }

    .information-list .tips {
        display: inline-block;
        font-size: 14px;
        color: rgb(155, 155, 155);
        width: 60px;
        text-align: right;
        padding-right: 16px;
    }

 .information-list .users {
        display: inline-block;
        font-size: 16px;
        color: #000;
        width: 160px;
        text-align: left;
        padding-left: 16px;

    }

    .yz {
        font-style: normal;
        font-size: 13px;
        color: rgb(146, 212, 23);
        padding-left: 12px;

    }

    .edit-information {
        float: right;
        color: #00aaff;
        font-weight: 500;
        margin: 60px 40px 0 0;
    }

    .edit-information{
        color: #00aaff;
    }

    .edit-information img {
        width: 18px;
    }
</style>