<template>
<div>
  <div class="basinfo">
    <div class="title"><img src="../assets/img/record/list.png"/><span>基本信息</span></div>
    <ul class="info" v-for='(item, index) in info' :key='index'>
      <li><i>*</i><span>车牌号码</span><p>{{ item.vehicleplatenumber }}</p></li>
      <li><span>车辆品牌</span><p>{{ item.brand }}</p></li>
      <li><span>车系</span><p>{{ item.cartype }}</p></li>
      <li><span>排量</span><p>{{  }}T</p></li>
      <li><span>生产年份</span><p>{{ item.manufacturedate }}</p></li>
      <li><span>购买日期</span><p>{{ item.registerdate }}</p></li>
      <li><i>*</i><span>车架号</span><p>{{ item.vin }}</p></li>
      <li><span>发动机号</span><p>{{ item.engineno }}</p></li>
    </ul>
  </div>

  <div class="basinfo">
    <div class="title"><img src="../assets/img/record/repairinfo.png"/><span>维修信息</span></div>
    <ul class="info thick">
      <li><span>维修企业</span><p>上海永畅修理厂</p></li>
      <li><span>结算日期</span><p>2017-09-08</p></li>
      <li><span>送修里程</span><p>19023</p></li>
      <div class="more" @click="goVehicleDetail"><span>详情</span><i></i></div>
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
      info: [],
      info2: []
    }
  },
  methods: {
    goVehicleDetail() {
       this.$router.push({
        path:'/vehicleDetail'
      })
    }
  },
  created() {
    let data = {
      accessToken: localStorage.getItem("ACCESSTOKEN"),
      vehicleplatenumber: '',
      vehicleId: location.hash.split('?')[1].split('=')[1],
      limit: 10,
      page: 1
    }
    let data2 = {
      accessToken: localStorage.getItem("ACCESSTOKEN"),
      repairbasicinfoId: 0
    }

    this.axios({
      method: 'post',
      url: '/vehicle/owner/queryVehicelist',
      headers: {'Content-type': 'application/json'},
      data: JSON.stringify(data)
    })
    .then(res => {
      this.info = res.data.data.content
      console.log(this.info);
    })

    this.axios({
      method: 'post',
      url: '/vehicle/carfile/queryDetail',
      headers: { 'Content-type': 'application/json'},
      data: JSON.stringify(data2)
    })
    .then(res => {
      // this.info2 = res.data.data
      // console.log(this.info2);
    })
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
