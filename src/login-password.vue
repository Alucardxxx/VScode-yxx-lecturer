<template>
    <div class="login-password">
        <div class="login-password-header">
            <span class="password-header-txt">登录密码</span>
        </div>
        <div class="login-password-body">
            <div class="password-body-input"><span>原密码</span><input type="text" placeholder="请输入原密码"></div>
            <div class="password-body-input"><span>新密码</span><input type="text" placeholder="请输入新密码"></div>
            <div class="password-body-input"><span>确认密码</span><input type="text" placeholder="请再次输入新密码">
            </div>
        </div>
        <div class="login-password-tail">
            <router-link to="" class="confirm password-tail-btn" href="javascript:;">确认修改</router-link>
            <router-link to="" class="cancellation password-tail-btn" href="javascript:;">取消修改</router-link>

        </div>
    </div>
</template>
<script>


    export default {

        components: {

        },

        methods: {
            xx() {

            }
        },
      
      
    }
</script>
<style>
    .login-password {
        width: 860px;
        float: right;
        height: 588px;
        background: #fff;
    }

    .login-password .login-password-header {
        height: 110px;
        border-bottom: 1px solid rgb(230, 230, 230);
        line-height: 110px;
    }

    .login-password-header .password-header-txt {
        font-size: 18px;
        color: #000;
        padding-left: 60px;
    }

    .login-password-body {
        padding-top: 40px;
    }

    .login-password-body .password-body-input {
        width: 500px;
        height: 40px;
        text-align: right;
        padding-left: 40px;
        padding-top: 20px;

    }

    .password-body-input:before,
    .password-body-input:after {
        content: "";
        display: block;
        clear: both;
    }

    .password-body-input span {
        font-size: 14px;
        color: rgb(177, 177, 177);
        padding: 0 20px;
    }

    .password-body-input input {
        height: 100%;
        width: 400px;
        border: 1px solid rgb(201, 201, 201);
        box-sizing: border-box;
        border-radius: 2px;
        letter-spacing: 2px;
        text-indent: 10px;
        font-size: 14px;
    }
</style>