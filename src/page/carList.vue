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
      </ul>  
    </mt-loadmore>
  </div>
</template>

<script>
import { Toast, Loadmore } from 'mint-ui'
export default {
  created() {
    this.getData()
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
      vehicleplatenumber: ''
    }
  },

  methods: {
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
        this.carList = res.data.data.content
        this.lastPage = res.data.data.lastPage
        if (this.carList.length == 0) {
          Toast('暂无数据')
        }
        console.log(this.carList);
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
      this.$refs.loadmore.onBottomLoaded()
    },
    // 输入车牌号进行搜索
    key(e) {
      if (e.keyCode == '13' && document.hasFocus()) {
        if (this.vehicleplatenumber.trim() == '') {
          Toast('请输入车牌号')
          return
        }
        let data = {
          accessToken: localStorage.getItem("ACCESSTOKEN"),
          vehicleplatenumber: this.vehicleplatenumber,
          limit: 10
        }
        this.axios({
          method: 'post',
          url: '/vehicle/carfile/query',
          headers: { 'Content-type': 'application/json' },
          data: JSON.stringify(data)
        }).then(res => {
          if (res.data.data.content.length == 0) {
            Toast('未找到匹配车辆')
            return
          }
          this.carList = res.data.data.content
          this.allLoaded = true
          console.log(this.carList)
        })
      }
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
    }
  }
}
</style>
