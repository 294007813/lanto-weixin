<template>
  <div class='box'>
    <div class='search'>
      <form>
        <input type="search" placeholder="搜索车牌号码" v-model='vehicleplatenumber' @keyup="key($event)">
      </form>
    </div>
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :bottomDropText='bottomDropText' :bottomPullText='bottomPullText' ref="loadmore">
      <ul>
        <li @click="goRecordList(item.repairbasicinfoId, item.vehicleplatenumber)"  class="block" v-for='(item, index) in carList' :key='index'>
          <div class="title">
            <img width="15" height="15" src="../assets/img/record/list.png"/>
            <span>{{ item.vehicleplatenumber }}</span>
            <img class="arrow" src="../assets/img/my/right-arrow.png" width="7px" height="14px">
          </div>
          <div class="info">
            <p><span>车辆品牌：{{ item.brand }}</span></p>
            <p><span>车 架 号：{{ item.vin }}</span></p>
            <p><span>发动机号：{{ item.engineno }}</span></p>
          </div>
        </li>
        <li class="block" v-if="isShow">
          <div class="title">
            <img width="15" height="15" src="../assets/img/record/list.png"/>
            <span>{{ plate }}</span>
            <img class="arrow" src="../assets/img/my/right-arrow.png" width="7px" height="14px">
          </div>
          <div class="info">
            <form class="mui-input-group">
              <div class="mui-input-row">
                  <label>车牌号:</label>
                  <input type="text" class="mui-input-clear" placeholder="请输入车牌号" v-model='plate'>
              </div>
              <div class="mui-input-row">
                  <label>车架号:</label>
                  <input type="text" class="mui-input-clear" placeholder="请输入车架号" v-model='frame'>
              </div>
            </form>
          </div>
          <mt-button type="default" size="small" style="padding: 0 20px" @click="cancel">取消</mt-button>
          <mt-button type="primary" size="small" @click='addCar' style="float:right; padding: 0 20px">确定</mt-button>
        </li>
        <li class="addCar" @click="isShow=true">
          <mt-button type="primary" v-if='isShowAddButton' class="add_car" size="large" style="margin-top: 10px">新增绑定车辆</mt-button>
        </li>   
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import { Toast, Loadmore, Button } from 'mint-ui'
export default {
  created() {
    this.getData()
    this.checkUser()
  },

  data() {
    return {
      searchv: "",
      carList: [],
      bottomPullText: '加载更多...',
      bottomDropText: '释放更新',
      lastPage: false,
      page: 1,
      allLoaded: false,
      vehicleplatenumber: '',
      plate: '',  // 车牌号
      frame: '',  // 车架号
      isShow: false,
      isShowAddButton: false
    }
  },

  methods: {
    // 查询用户角色
    checkUser(){
      let info = JSON.parse(localStorage.getItem('USERINFO')).userRoleId
      if(info===1){
        this.isShowAddButton=true  
      }
    },
    goRecordList(id, vehicleplatenumber) {
      this.$router.push({
        path: '/recordList',
        query: { repairbasicinfoId: id, vehicleplatenumber: vehicleplatenumber }
      })
    },
    getData(){
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
        if(res.data.code=='130412'){
          Toast('请重新登录')
          return
        }
        this.carList = res.data.data.content
        this.lastPage = res.data.data.lastPage
        if (this.carList.length == 0) {
          Toast('暂无数据')
        }
      })
    },
    // 上拉加载更多
    loadBottom() {
        this.page+=1
        if(this.lastPage){
          this.bottomText = '没有更多了...'
          this.bottomDropText = '没有更多了...'
          this.bottomPullText = '没有更多了...'
          this.$refs.loadmore.onBottomLoaded()
          return
        }
      let data = {
        accessToken: localStorage.getItem("ACCESSTOKEN"),
        vehicleplatenumber: this.vehicleplatenumber,
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
      this.$refs.loadmore.onBottomLoaded()
    },
    // 输入车牌号进行搜索
    key(e) {
      this.page=0
      if (e.keyCode == '13') {
        e.target.blur()
        if (this.vehicleplatenumber.trim() == '') {
          Toast('请输入车牌号')
          return
        }
        let data = {
          accessToken: localStorage.getItem("ACCESSTOKEN"),
          vehicleplatenumber: this.vehicleplatenumber,
          limit: 10,
          page: this.page
        }
        this.axios({
          method: 'post',
          url: '/vehicle/carfile/query',
          headers: { 'Content-type': 'application/json' },
          data: JSON.stringify(data)
        }).then(res => {
          if (res.data.data.content.length == 0){
            Toast('未找到匹配车辆')
            return
          }
          this.carList = res.data.data.content
          this.allLoaded = true
          console.log(this.carList)
        })
      }
    },
    // 取消新增绑定车辆
    cancel(){
      this.isShow = !this.isShow
      this.plate=''
      this.frame=''
    },
    // 确定新增绑定车辆 
    addCar(){
      if(this.plate.trim()==''){
        Toast("请输入车牌号")
        return
      }else if(this.frame.trim()==''){
        Toast("请输入车架号")
        return
      }
      let data={
        accessToken: localStorage.getItem("ACCESSTOKEN"),
        vehicleplatenumber: this.plate,
        vin: this.frame
      }
      this.axios({
        method: 'post',
        url: '/vehicle/owner/bind',
        headers: { 'Content-type': 'application/json' },
        data: JSON.stringify(data)
      })
      .then(res=>{
        console.log(res);
        if(res.data.code==="000000"){
          Toast("车辆绑定成功")
          this.isShow = !this.isShow
        }
      })
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
    form {
      input {
        background: url(../assets/img/record/search.png) no-repeat 10px 10px;
        font-size: 14px;
        background-color: #eee;
        background-size: 18px 18px;
        text-indent: 20px;
        border-radius: 5px;
        outline: none;
        border: none;
        width: 100%;
        height: 35px;
        position: relative;
        text-align: left;
        margin-bottom: 0;
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
  }
  .mint-search {
    height: auto!important;
  }
  .block {
    width: 100%;
    padding: 0 10px;
    border-top: 10px solid #f8f8f8; // margin-top: 50px;
    .title {
      width: 100%;
      border-bottom: 1px solid #f8f8f8;
      height: 30px;
      overflow: hidden;
      img {
        margin-top: 7px;
      }
      .arrow {
        float: right;
        margin-right: 10px;
      }
      span {
        font-size: 16px;
        display: inline-block;
        height: 30px;
        line-height: 30px;
        margin-left: 5px;
      }
    }
    .info {
      padding: 10px 20px;
      color: #676767;
      margin: 0;
      p {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        margin-bottom: 0;
        .right {
          float: right;
        }
      }
      form {
         &:after, &:before {
            height: 0;
          }
        font-size: 14px;
        .mui-input-row {
          label {
            padding: 11px 0;
            width: 50px;
          }
          input {
            float: left;
            font-size: 14px;
            padding-left: 10px;
          }
        }
      }
    }
    .mint-button {
      width: 80px;
    }
  }
  .addCar {
    button {
      width: 100%;
    }
  }
}
</style>
