<template>
<div class="animated fadeIn home">
  <!-- 轮播开始 -->
  <div id="Gallery" style="margin-top:15px;">
    <div>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <img src="../assets/img/home/appointment.png" alt="">
            <div class="mui-media-body">预约服务</div>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <img src="../assets/img/home/gohome.png" alt="">
            <div class="mui-media-body">上门服务</div>
        </li>
        <li @click="goFix" class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <img src="../assets/img/home/fix.png" alt="">
            <div class="mui-media-body">维修服务</div>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <img src="../assets/img/home/suggestion.png" alt="">
            <div class="mui-media-body">维修投诉</div>
        </li>
        <li @click="goDoctor" class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <img src="../assets/img/home/doctor.png" alt="">
            <div class="mui-media-body">车大夫门诊</div>
        </li>
        <li @click="goCarList" class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <img src="../assets/img/home/query.png" alt="">
            <div class="mui-media-body">爱车档案</div>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <img src="../assets/img/home/goverment.png" alt="">
            <div class="mui-media-body">政府管理</div>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <img src="../assets/img/home/industry.png" alt="">
            <div class="mui-media-body">行业自律</div>
        </li>
        <li @click="goInfo" class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
              <img src="../assets/img/home/public.png" alt="">
            <div class="mui-media-body">公共服务</div>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
              <img src="../assets/img/home/repair.png" alt="">
            <div class="mui-media-body">维修企业服务</div>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <img src="../assets/img/home/company.png" alt="">
            <div class="mui-media-body">产业企业服务</div>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <img src="../assets/img/home/mall.png" alt="">
            <div class="mui-media-body">车品商城</div>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
            <img src="../assets/img/home/online.png" alt="">
            <div class="mui-media-body">在线商务</div>
        </li>
      </ul>
    </div>
  </div>
 <!-- 轮播结束 -->
 
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
import mui from "../lib/mui/js/mui.min.js"
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
      this.$router.push({ path: '/infoService'})
    },
    goCarList(){
      this.$router.push({ path: '/carList'})
    }
  },
  mounted() {
    mui(".mui-slider").slider()    // 解决了当页面切出去后在切回来无法滑动的问题
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  body {
    background-color: #f8f8f8;
  }

  .home{
    margin-bottom: 50px;
    #Gallery {
      margin: 0 !important;
      padding: 5px 0 5px;
      ul {
        background-color: #fff;
        border: none;
        li {
          border: none;
          padding: 10px 0;
          a {
            padding: 0;
          }
          img {
            width: 40px;
            height: 40px;
          }
          @media screen and (max-width: 320px){
            .mui-media-body{
              font-size: 12px;
            }
          }
          @media screen and (max-width: 640px){
            .mui-media-body{
              font-size: 14px;
            }
          }
          .mui-media-body {
            height: 16px;
            margin-top: 10px;
          }
        }
      }
      .mui-slider-indicator{
        .mui-active {
          background: linear-gradient(to right, #66a9fb, #4087f6) !important;
          width: 12px !important;
          margin: 1px 2px;
          transition: all 0.3s;
        }
      }
      .mui-slider-indicator .mui-indicator {
        height: 2px;
        width: 8px;
        border-radius: 1px;
        margin: 0;
        border: none;
        background-color: #eaeaea;
        box-shadow: none;
      }
    }
  }



.info{
  width: 100%;
  overflow: hidden;
  padding: 0 10px;
  margin: 0;
  border-top: 10px solid #f8f8f8;
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
      color: #333;
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
