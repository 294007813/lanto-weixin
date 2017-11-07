<template>
<div>
  <div class="basinfo">
    <div class="title"><img src="../assets/img/record/list.png"/><span>基本信息</span></div>
    <ul class="info">
      <li><i>*</i><span>车牌号码</span><p>苏AS566X</p></li>
      <li><span>车辆品牌</span><p>凯迪拉克</p></li>
      <li><span>车系</span><p></p></li>
      <li><span>排量</span><p>2.0T</p></li>
      <li><span>生产年份</span><p>2017</p></li>
      <li><span>购买日期</span><p>2017-10-09</p></li>
      <li><i>*</i><span>车架号</span><p>LBVNU39039SC84</p></li>
      <li><span>发动机号</span><p></p></li>
    </ul>
  </div>

  <div class="basinfo">
    <div class="title"><img src="../assets/img/record/repairinfo.png"/><span>维修信息</span></div>
    <ul class="info thick">
      <li><span>维修企业</span><p>上海永畅修理厂</p></li>
      <li><span>结算日期</span><p>2017-09-08</p></li>
      <li><span>送修里程</span><p>19023</p></li>
      <div class="more"><span>详情</span><i></i></div>
    </ul>
    <ul class="info thick">
      <li><span>维修企业</span><p>上海永畅修理厂</p></li>
      <li><span>结算日期</span><p>2017-09-08</p></li>
      <li><span>送修里程</span><p>19023</p></li>
      <div class="more"><span>详情</span><i></i></div>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="scss">
.basinfo{
  width: 100%;
  border-top: 10px solid #f8f8f8;
  .title{
    width: 100%;
    border-bottom: 1px solid #f8f8f8;
    height: 30px;
    overflow: hidden;
    img{
      width: 15px;
      margin-top: 7px;
      margin-left: 10px;
    }
    span{
      font-size: 16px;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      margin-left: 5px;
    }
  }
  .info{
    padding-left: 30px;

    li{
      height: 35px;
      line-height: 35px;
      width: 100%;
      border-bottom: 1px solid #f8f8f8;
      font-size: 14px;
      /*overflow: hidden;*/
      position: relative;
      i{
        color:red;
        position: absolute;
        left: -10px;
      }
      span{
        width: 90px;
        display: inline-block;
      }
      p{
        display: inline;
      }
    }
  }
  .thick{
    border-top: 5px solid #f8f8f8;
    position: relative;
    .more{
      font-size: 14px;
      color: #3486ff;
      position: absolute;
      height: 35px;
      line-height: 35px;
      top: 0;
      right: 10px;
      i{
        display: inline-block;
        border-right: 1px solid;
        border-bottom: 1px solid;
        width: 10px;
        height: 10px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        color: black;
      }
    }
  }
}
</style>
