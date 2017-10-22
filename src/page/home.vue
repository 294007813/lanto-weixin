<template>
<div class="animated fadeIn home">
    <div class="above">
      <img src="../assets/img/home/main-page.png">
    </div>
  <ul class="button1">
    <router-link :to="{ path: '/maintain' }" tag="li">
      <div><img src="../assets/img/home/maintain.png" class="eye"/><p>找维修</p></div>
    </router-link>
    <li>
      <div><img src="../assets/img/home/query.png"/><p>档案查询</p></div>
    </li>
    <router-link :to="{ path: '/doctor'}" tag="li">
      <div><img src="../assets/img/home/doctor.png"/><p>车大夫</p></div>
    </router-link>
  </ul>
  <ul class="button2">
    <li>
      <div><img src="../assets/img/home/mall.png" class="mall"/><p>车品商城</p></div>
    </li>
    <router-link :to="{ path: '/info' }" tag="li">
      <div><img src="../assets/img/home/info.png"/><p>信息服务</p></div>
    </router-link>
  </ul>
  <div class="info">
    <div class="title"><img src="../assets/img/home/message.png"/><span>资讯</span>
      <img src="../assets/img/home/add.png" class="add"/>
    </div>
    <div class="infopic">
      <img src="../assets/img/other/info1.jpg"/>
      <img src="../assets/img/other/info2.png"/>
      <img src="../assets/img/other/info3.jpg"/>
      <img src="../assets/img/other/info4.jpg"/>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width: 100%;
  height: 100%;
  background-color: #e6f9ff;
}
.above,ul{
  width: 100%;
  overflow: hidden;
}
.above img{
  width: 100%;
}
.button1 li{
  width: 33.3%;
}
.button2 li{
  width: 50%;
  margin-bottom: 10px;
}
ul{
  margin-top: 20px;
}
ul li{
  float: left;
  text-align: center;

}

ul li div{
  display: inline-block;
  width: 75px;
  height: 75px;
  font-size: 14px;
  color: #999999;
  position: relative;
  border: 1px solid #e6f9ff;
}
ul li div:hover{
  border-radius: 100%;
  border: 1px solid #c4f1ff;
  background-color: white;
}
ul li div img{
  width: 30px;
  margin-top: 5px;
}
.eye{
  width: 50px;
}
.mall{
  width: 35px;
}
ul li div p{
  width: 100%;
  position: absolute;
  bottom: 5px;

}
.info{
  width: 100%;
  overflow: hidden;
  margin-bottom: 50px;
  padding: 5px;
  background-color: white;
}
.info .title{
  padding: 0 5px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: #606060;
}
  .info .title img{
    width: 16px;
    height: 16px;
    margin: 7px 5px;
  }
  .info .title span{
    font-size: 12px;
  }
  .add{
    float: right;
  }
  .infopic{
    width: 100%;
    overflow: hidden;
  }
.infopic img{
  width: 25%;
  display: block;
  padding: 5px;
  float: left;
}
</style>
