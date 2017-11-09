<template>
  <div>
    <mt-search
      v-model="searchv"
      cancel-text="取消"
      placeholder="搜索车牌号码">
    </mt-search>
    <div @click="goRecordList" class="block">
      <div class="title"><img src="../assets/img/record/list.png"/><span>苏AS566X</span></div>
      <div class="info">
        <p><span>车辆品牌：凯迪拉克</span> <span class="right">车系：XT5</span></p>
        <p><span>车架号：LBVNU39039SC84</span></p>
        <p><span>发动机号：M0301606123</span></p>
      </div>
    </div>

    <div class="block">
      <div class="title"><img src="../assets/img/record/list.png"/><span>苏AS566X</span></div>
      <div class="info">
        <p><span>车辆品牌：凯迪拉克</span> <span class="right">车系：XT5</span></p>
        <p><span>车架号：LBVNU39039SC84</span></p>
        <p><span>发动机号：M0301606123</span></p>
      </div>
    </div>

    <div class="block">
      <div class="title"><img src="../assets/img/record/list.png"/><span>苏AS566X</span></div>
      <div class="info">
        <p><span>车辆品牌：凯迪拉克</span> <span class="right">车系：XT5</span></p>
        <p><span>车架号：LBVNU39039SC84</span></p>
        <p><span>发动机号：M0301606123</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    let data = {
      systemToken: localStorage.getItem("SYSTEMTOKEN"),
      vehicleplatenumber: localStorage.getItem("ACCESSTOKEN"),
      limit: 0,
      page: 0,
    }
    this.axios({
      method: 'post',
      url: '/vehicle/owner/queryVehicelist',
      headers: {
        'Content-type': 'application/json'
      },
      data: JSON.stringify(data)
    })
    .then(res => {
      console.log(res);
      if(res.status === 200) {
        
      }
    })
  },
  data(){
    return{
      searchv:""
    }
  },
  methods:{
    goRecordList(){
      this.$router.push({
        path:'/recordList'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .mint-search{
    height: auto!important;
  }
  .block{
    width: 100%;
    padding: 0 10px;
    border-top: 10px solid #f8f8f8;
    .title{
      width: 100%;
      border-bottom: 1px solid #f8f8f8;
      height: 30px;
      overflow: hidden;
      img{
        width: 15px;
        margin-top: 7px;
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
      padding: 10px 20px;
      color: #676767;
      p{
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        .right{
          float: right;

        }
      }
    }
  }
</style>
