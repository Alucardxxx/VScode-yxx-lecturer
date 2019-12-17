<template>
        <div class="in-audit">
                <div class="audit-header">
                        <div class="audit-header-body">
                    <router-link class="check" to="/course-managemen">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-chenggong"></use>
                        </svg>已发布课程</router-link>
                    <router-link class="check" to="/audit-examine">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-chenggong"></use>
                        </svg>审核中课程</router-link>
                    <router-link class="check" to="/no-pass">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-chenggong"></use>
                        </svg>审核未通过课程</router-link>
                        </div>
                </div>
           <router-view></router-view>
        </div>
    </template>
    
    <script>
    
        export default {
    
        }
    </script>
    <script src="../font/font4/iconfont.js"></script>
    <style>
        .in-audit {
            width: 860px;
            height: 588px;
            background: #fff;
            float: right;
        }
        .audit-header {
        width: 100%;
        height: 120px;
        font-size: 14px;
        background: #fff;
    }
    .audit-header-body{
        padding-top:50px;
        width:94%;
        box-sizing: border-box;
        height:100%;
        margin:0 auto;

    }
    .audit-header-body .check{
        margin-right:50px;
        font-size:16px;
    }

    .audit-header-body .check .icon{
        color: rgb(85, 161, 238);
        font-size:16px;
        padding-right:10px;
    }
    
     
    </style>