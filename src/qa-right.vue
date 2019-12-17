<template>
    <div class="qa-right">
        <div class="qa-header">
            <div class="qa-header-left">
                    <router-link class="check" to="">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-chenggong"></use>
                        </svg>全部</router-link>
                    <router-link class="check" to="">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-chenggong"></use>
                        </svg>待处理</router-link>
            </div>
            
                <router-link class="qa-header-right" to="">我要提问</router-link>
            
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {

    }
</script>

<style>
    .qa-right {
        width: 860px;
        height: 588px;
        background: #fff;
        float: right;
    }

    .qa-header {
        width: 100%;
        height: 120px;
        border-bottom:1px solid rgb(223, 223, 223);
    }

    .qa-header:before,
    .qa-header:after {
        content: "";
        display: block;
        clear: both;
    }


    .qa-header-left{
        float: left;
        padding:50px;
        
    }
    .qa-header-left .check{
        color: #00aaff;
        margin-right:60px;;
    }

    .qa-header-right{
        background: #00aaff;
        color: #fff;
        float: right;
        height: 38px;
        width: 140px;
        border-radius: 6px;
        text-align: center;
        font-size: 14px;
        line-height: 38px;
        margin-top:36px;
        margin-right:60px;
    }
</style>