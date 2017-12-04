<template>
  <div class="welcome">
  </div>
</template>

<script>
export default {
    mounted(){
        var that=this, timer=null
        timer=setTimeout(function(){
            that.$router.push({
                path: '/index'
            })
            clearTimeout(timer)
        },3000)
       
    }
}
</script>

<style>
    .welcome {
        width: 100%;
        height: 100vh;
        background: url(../assets/img/welcome/welcome.jpg) no-repeat;
        background-size: contain;
    }
</style>
