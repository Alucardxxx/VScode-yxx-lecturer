<template>
        <div class="lecturer-login-right">
            <div class="login-right-header">
                    <p class="yzm-txt">通过手机号码注册</p>  
            </div>
            <div class="login-right-body">
                    <div class="bottom-border"><span>手机号</span><input type="text"><router-link class="yzm-obtain" to="">获取验证码</router-link></div>
                    <div class="bottom-border"><span>验证码</span><input type="text"></div>
                    <div class="bottom-border"><span>密 码</span><input type="text"></div>
                <router-link class="login-right-bottom bottomwz" to="/home">登录</router-link>

            </div>
        </div>
</template>
<script>

    export default {
        components: {

        }

    }
</script>

<style lang="less">
    .bottomwz{
        margin-top:40px;
    }
</style>