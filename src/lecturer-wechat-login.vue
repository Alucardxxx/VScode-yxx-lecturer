<template>
        <div class="lecturer-login-right">
            <div class="login-right-header">
                    <router-link class="link" to="/">账号登陆</router-link>
                    <router-link class="link link-color" to="/lecturerwechat">微信登陆</router-link>
            </div>
            <div class="login-right-body">
                <img class="ewm" src="../image/ewm.png" alt="">
                <p class="please-register">打开微信，扫描二维码</p>
                <p class="please-register">还没有账号？ 请 <router-link class="register" to="/phoneregister">注册</router-link></p>
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

    .ewm{
        display: block;
        margin:20px auto;
    }

  
</style>