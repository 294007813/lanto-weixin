<template>
  <div class="welcome">
      <img src="../assets/img/welcome/welcome.jpg" alt="">
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

<style lang='scss' scoped>
    .welcome {
        width: 100%;
        height: 100vh;
        img {
            width: 100%;
            height: 100%;
        }
    }
</style>
