<template>
  <div class="">
    <div class="above">
      <img src="../assets/img/home/main-page.png">
    </div>
    <ul class="button1">
      <li><div>公共管理</div></li>
      <li><div>管理动态</div></li>
      <li><div>创先争优</div></li>
    </ul>
    <ul class="button2">
      <li><div>文明建设</div></li>
      <li><div>行业治理</div></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.above{
  width: 100%;
}
.above img{
  width: 100%;
}
  ul{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }
  ul li{
    width: 30%;
    text-align: center;
    height: 30px;
  }
</style>
