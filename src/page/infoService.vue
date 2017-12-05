<template>
  <div id='wrap'>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../assets/img/infoService/1.png" alt="">
        <p>机动车维修企业质量信誉考核办法</p>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/infoService/2.png" alt="">
        <p>道路运输车辆技术管理规定</p>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/infoService/6.png" alt="">
        <p>上海市交通港航企业质量信誉考核办法</p>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/infoService/4.png" alt="">
        <p>道路运输从业人员管理规定</p>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/infoService/5.png" alt="">
        <p>机动车维修管理规定</p>
      </mt-swipe-item>
    </mt-swipe>
    <ul>
      <li @click='goInfoServiceList'>
        <div class="lef">
          <img src="../assets/img/infoService/11.png" alt="">
        </div>
        <div class="rig">
          <h4>公共管理</h4>
          <span>推进社会整体协调发展</span>
        </div>
      </li>
      <li @click='goInfoServiceList'>
        <div class="lef">
          <img src="../assets/img/infoService/22.png" alt="">
        </div>
        <div class="rig">
          <h4>管理动态</h4>
          <span>再造行业管理新机制</span>
        </div>
      </li>
      <li @click='goInfoServiceList'>
        <div class="lef">
          <img src="../assets/img/infoService/33.png" alt="">
        </div>
        <div class="rig">
          <h4>创先争优</h4>
          <span>优质的行业配置服务</span>
        </div>
      </li>
      <li @click='goInfoServiceList'>
        <div class="lef">
          <img src="../assets/img/infoService/44.png" alt="">
        </div>
        <div class="rig">
          <h4>文明建设</h4>
          <span>激发市场活力和市场潜能</span>
        </div>
      </li>
      <li @click='goInfoServiceList'>
        <div class="lef">
          <img src="../assets/img/infoService/55.png" alt="">
        </div>
        <div class="rig">
          <h4>行业治理</h4>
          <span>构建高效行业治理机制</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Swipe, SwipeItem  } from 'mint-ui'
export default {
  methods: {
    goInfoServiceList(){
      this.$router.push({path: '/infoList'})
    }
  }
}
</script>

<style lang='scss'>
  
  #wrap {
    height: 100vh;
    .mint-swipe { 
      height: auto;
    }
    .mint-swipe-indicators {
      bottom: 30px;
      .mint-swipe-indicator {
        width: 12px;
        height: 3px;
        background: rgba(0,0,0,.6);
        border-radius: 2px;
      }
      .is-active {
        background: #fff;
      }
    }
    .mint-swipe-items-wrap {
      height: 180px;
      .mint-swipe-item {
        p {
          position: absolute;
          left: 0;
          bottom: 0;
          color: #fff;
          margin: 0;
          text-indent: 15px;
          background-color: rgba(0,0,0,.3);
          line-height: 30px;
          width: 100%;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    ul{
      border-top: 10px solid #f8f8f8;
      overflow: hidden;
      li{
        width: 50%;
        float: left;
        padding: 10px 0 10px 12px;
        border: 1px solid #f8f8f8;
        border-top: none;
        border-left: none;
        .lef{
          float: left;
          width: 20px;
          height: 20px;
          margin-top: 15px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .rig {
          width: 77%;
          float: right;
          margin-right: 5px;
          margin-left: 5px;
          margin-top: 10px;
          h4 {
            font-weight: normal;
            margin: 0;
            font-size: 12px;
          }
          span {
            display: inline-block;
            width: 98%;
            font-size: 10px;
            color: #999;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
</style>


