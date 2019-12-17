<template>
  <div id="app">

    
    <router-view></router-view>
    

  </div>
</template>

<script>

  
 

  export default {
    name: 'app',
    components: {
     
     
    },
    mounted() {
      this.axios.get('/api/getList').then(function (res) {
          window.console.log(res);
        });
     },
  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #f4f4f4;

  }

  li {
    list-style: none;
  }

  a {
    color: #545454;
    text-decoration: none;
  }

  * {
    margin: 0;
    padding: 0;
  }

  input::-webkit-input-placeholder {
    color: rgb(197, 197, 197);
  }

  input:-moz-placeholder {
    color: rgb(197, 197, 197);
  }

  input::-moz-placeholder {
    color: rgb(197, 197, 197);
  }

  input:-ms-input-placeholder {
    color: rgb(197, 197, 197);
  }

  .login-password-tail {
    display: block;
    width: 300px;
    padding-left: 130px;
    padding-top: 20px;
  }

  .login-password-tail .password-tail-btn {
    display: inline-block;
    height: 38px;
    width: 140px;
    margin-left: 10px;
    border-radius: 6px;
    text-align: center;
    font-size: 14px;
    line-height: 38px;
  }

  .login-password-tail .confirm {
    background: #00aaff;
    color: #fff;
  }

  .login-password-tail .cancellation {
    color: #000;
    border: 1px solid rgb(201, 201, 201);
    box-sizing: border-box;
  }



  .vv {
    background: #00aaff;
    width: 100px;
    height: 50px;
    text-align: center;

  }
</style>