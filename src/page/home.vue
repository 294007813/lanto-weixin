<template>
<div class="animated fadeIn home">
  <!-- <div class="banner">
    <mt-swipe :auto="8000">
      <mt-swipe-item><img src="../assets/img/home/banner1.png"/></mt-swipe-item>
      <mt-swipe-item><img src="../assets/img/home/banner2.png"/></mt-swipe-item>
      <mt-swipe-item><img src="../assets/img/home/banner3.png"/></mt-swipe-item>
      <mt-swipe-item><img src="../assets/img/home/banner4.png"/></mt-swipe-item>
    </mt-swipe>
  </div> -->
  <div class="top">首页</div>
  <ul class="icons">
    <li @click="goFix"><img src="../assets/img/home/fix.png"/><p>找维修</p></li>
    <li @click="goCarList"><img src="../assets/img/home/query.png"/><p>档案查询</p></li>
    <li @click="goDoctor"><img src="../assets/img/home/doctor.png"/><p>车大夫</p></li>
    <li><img src="../assets/img/home/mall.png"/><p>车品商城</p></li>
    <li @click="goInfo"><img src="../assets/img/home/info.png"/><p>信息服务</p></li>
  </ul>
  <div class="info">
    <div class="title">
      <span>资讯</span><div @click="goInfo"><span>更多</span><i></i></div>
    </div>
    <div class="msg">
      <p>汽车有了电子健康档案，维修厂你怎么看？</p>
      <div>
        <img src="../assets/img/other/info2.png"/>
      </div>
      <span>办事指南-2017.10.23</span>
    </div>
    <div class="msg">
      <p>交通运输部办公厅关于开展汽车电子健康档案系统建设试点工作的通知</p>
      <div>
        <img src="../assets/img/other/info3.jpg">
      </div>
      <span>法律法规-2017.10.23</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods:{
    goFix(){
      this.$router.push({ path: '/maintain'})
    },
    goDoctor(){
      this.$router.push({ path: '/doctor'})
    },
    goInfo(){
      this.$router.push({ path: '/info'})
    },
    goCarList(){
      this.$router.push({ path: '/carList'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home{
    margin-bottom: 50px;
  }
// .banner{
//   height: 135px;
//   .mint-swipe-item{
//     img{
//       width: 100%;
//       position: relative;
//       top: 50%;
//       transform: translatey(-50%);
//     }
//   }
// }
.top {
  height: 40px;
  background-color: #469df6;
  color: #fff;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
}
.icons{
  display: -webkit-flex; /* Safari */
  display: flex;
  width: 100%;
  padding: 20px 0;
  font-size: 12px;
  color: #666666;
  border-bottom: 10px solid #f8f8f8;
  li{
    width: 20%;
    text-align: center;
    img{
      width: 35px;
    }
    p{
      margin-top: 10px;
    }
  }
}


.info{
  width: 100%;
  overflow: hidden;
  padding: 0 10px;
  .title {
    width: 100%;
    height: 40px;
    font-size: 13px;
    line-height: 40px;
    border-bottom: 1px solid #f7f7f7;
    >div{
      float: right;
    }
    i{
      display: inline-block;
      /*margin: 72px;*/
      border-right: 1px solid;
      border-bottom: 1px solid;
      width: 10px; height: 10px;
      transform: rotate(-45deg);
    }
  }
  .msg{
    padding: 10px 0;
    border-bottom: 1px solid #f7f7f7;
    height: 130px;
    font-size: 14px;
    position: relative;
    p{
      margin-right: 105px;
    }
    div{
      width: 105px;
      height: 105px;
      overflow: hidden;
      position: absolute;
      top:10px;
      right: 0;
      border-radius: 10px;
      img{
        height: 100%;
        width: auto;
      }
    }
    span{
      display: block;
      font-size: 12px;
      color: #8f8f8f;
      position: absolute;
      bottom: 10px;
    }
  }
}


</style>
