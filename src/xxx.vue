<template>
    <div>
            <div v-if="loginType === 'username'">
                    <label>Username</label>
                    <input placeholder="Enter your username">
                  </div>
                  <div v-else>
                    <label>Email</label>
                    <input placeholder="Enter your email address">
                  </div>
                  </div>
</template>

<script>
    export default {

        data() {
            return {
              
            }
        },

    }


</script>

<style lang="less">

</style>