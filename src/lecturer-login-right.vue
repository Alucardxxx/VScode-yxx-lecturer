<template>
            <div class="lecturer-login-right">
                <div class="login-right-header">
                        <router-link class="link link-color" to="/">账号登陆</router-link>
                        <router-link class="link" to="/lecturerwechat">微信登陆</router-link>
                </div>
                <div class="login-right-body">
                    <div class="bottom-border"><span>手机号</span><input type="text"></div>
                    <div class="bottom-border"><span>密码</span><input type="text"></div>
                    <router-link class="forget-password" to="/yzmlogin">忘记密码？</router-link>
                    <router-link class="login-right-bottom" to="/home">登录</router-link>
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
   
        .login-right-header{
           width:580px;
            height:100px;
           display: block;
            text-align: center;
            margin:0 auto;
        }
        .link{
            display: inline-block;
           width:220px;
            height:40px;
            border-bottom:2px solid rgb(218, 218, 218);
            margin-top:40px;
        }

        .link-color{
            border-bottom:3px solid #9bc604;
        }

        .login-right-body{
            display: block;
            width:440px;
            margin:0 auto;
            
        }
        .login-right-body .bottom-border{
            border-bottom:1px solid rgb(184, 184, 184);
        }
        .login-right-body span{
            vertical-align:bottom;
            width:80px;
            display: inline-block;
            color: rgb(164, 163, 163);
            font-size:20px;
        }
        .login-right-body input{
            border:none;
            width:250px;
            padding-top:60px;
            outline:none;
            font-size:26px;
            color: rgb(98, 98, 98);
            
        }
        .forget-password{
            display: block;
           margin-left:360px;
           font-size:14px;
           color: rgb(201, 201, 201);
          margin-top:10px;
        }
        .login-right-bottom{
            display: block;
            width:400px;
            text-align: center;
            background:#9bc604;
            margin:10px auto;
            margin-top:60px;
            padding:10px 0;
            border-radius:20px;
            color: #fff;
        }
        .please-register{
            color: rgb(184, 184, 184);
            text-align: center;
            padding:20px;
        }

        .please-register .register{
            font-size:16px;
            padding:0 5px;
            color: #9bc604;
           
        }
    </style>