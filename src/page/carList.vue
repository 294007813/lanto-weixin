<template>
  <div class='box'>
    <div class='search'>
      <input type="search" placeholder="搜索车牌号码">
    </div>


    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottomDropText='""' :bottomPullText='bottomText' @bottom-status-change='change'
 ref="loadmore">
      <div @click="goRecordList(item.vehicleId)"  class="block" v-for='(item, index) in carList' :key='index'>
        <div class="title">
          <img width="15" height="15" src="../assets/img/record/list.png"/>
          <span>{{ item.vehicleplatenumber }}</span>
          <img class="arrow" src="../assets/img/my/right-arrow.png" width="7px" height="14px">
        </div>
        <div class="info">
          <p><span>车辆品牌：{{ item.brand }}</span></p>
          <p><span>车  架  号：{{ item.vin }}</span></p>
          <p><span>发动机号：{{ item.engineno }}</span></p>
        </div>
      </div>
    </mt-loadmore>



  </div>
</template>

<script>
export default {
  created(){
    let data = {
      accessToken: localStorage.getItem("ACCESSTOKEN"),
      vehicleplatenumber: '',
      limit: 10,
      page: this.page
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
      this.carList = res.data.data.content
      this.lastPage = res.data.data.lastPage
    })
  },


  data(){
    return{
      searchv: "",
      carList: [],
      bottomText: '加载更多...',
      lastPage: 'ddd',
      page: 1,
      allLoaded: false
    }
  },



  methods:{
    goRecordList(id){
      this.$router.push({
        path:'/recordList',
        query:{id: id}
      })
    },
    loadBottom() {
      this.page+=1
      console.log(this.lastPage);
      if(this.lastPage){
        this.allLoaded = true;
        return
      }

      let data = {
        accessToken: localStorage.getItem("ACCESSTOKEN"),
        vehicleplatenumber: '',
        limit: 10,
        page: this.page,
      }
      this.axios({
        method: 'post',
        url: '/vehicle/owner/queryVehicelist',
        headers: {'Content-type': 'application/json'},
        data: JSON.stringify(data)
      }).then(res => {
        // es6黑科技写法, 数组的属性扩散   http://es6.ruanyifeng.com/#docs/array
          this.carList=[...this.carList, ...res.data.data.content]
          this.lastPage = res.data.data.lastPage
          
          console.log(this.carList)
      })
    },
    change(val){
      console.log(val)
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  padding-top: 50px;
  .search {
    padding: 8px 12px;
    position: fixed;
    width: 100%;
    background: #fff;
    z-index: 10;
    left: 0;
    top: 0;
    input {
      background: url(../assets/img/record/search.png) no-repeat 10px 10px;
      font-size: 14px;
      background-color: #eee;
      background-size: 18px 18px;
      text-indent: 32px;
      border-radius: 5px;
      outline: none;
      border: none;
      width: 100%;
      height: 35px;
      position: relative;
    }
    span {
      position: absolute;
      top: 8px;
      right: 12px;
      height: 35px;
      width: 50px;
      line-height: 35px;
      text-align: center;
    }
  } 

  .mint-search{
    height: auto!important;
  }
  .block{
    width: 100%;
    padding: 0 10px;
    border-top: 10px solid #f8f8f8;
    // margin-top: 50px;
    .title{
      width: 100%;
      border-bottom: 1px solid #f8f8f8;
      height: 30px;
      overflow: hidden;
      img{
        margin-top: 7px;
      }
      .arrow {
        float: right;
        margin-right: 10px;
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
}
</style>
