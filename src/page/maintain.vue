<template>
  <div id="allmap">
    <!-- <div class="top">
      找维修
      <span>检测站</span>  
    </div> -->
    <div class='search'>
      <div class="wrap">
        <form>
          <input type="search" placeholder="搜索维修站点" @keyup="key($event)">
        </form>
      </div>
      <span @click='popupVisible=!popupVisible'>筛选</span>
    </div>
    <div id="container"></div> 
    <mt-popup v-model="popupVisible" class="filter" model=false position="right">
      <div class='content'>


        <div class="companyType">
          <p>企业类型</p>
          <em @click='popupVisible=!popupVisible'>x</em>
          <div class="repairCompany">
            <mt-button plain @click.native="handleClick">全部</mt-button>
            <mt-button plain>一类维修企业</mt-button>
            <mt-button plain>二类维修企业</mt-button>
          </div>
          <div class="repairCompany ">
            <mt-button plain>三类维修企业</mt-button>
            <mt-button plain>摩托车维修厂</mt-button>
            <mt-button plain>汽车快修厂</mt-button>
          </div>
        </div>

        <div class="starLevel">
          <p>星级评分</p>
          <div class="repairCompany">
            <mt-button plain @click.native="handleClick">全部</mt-button>
            <mt-button plain>1星</mt-button>
            <mt-button plain>2星</mt-button>
          </div>
          <div class="repairCompany">
            <mt-button plain>3星</mt-button>
            <mt-button plain>4星</mt-button>
            <mt-button plain>5星</mt-button>
          </div>
        </div>

      </div>
    </mt-popup>

  </div>
</template>

<script> 
export default {
  name: '',
  data () {
    return {
      searchv:'',
      zoom: 13,
      points: [
        {lng: 121.455, lat: 31.148},
        {lng: 121.465, lat: 31.158},
        {lng: 121.475, lat: 31.168},
      ],
      popupVisible: false
    }
  },

  created() {
    let data={
      systemToken: localStorage.getItem("SYSTEMTOKEN")
    }
    this.axios({
      method: 'post',
      url: '/maintain/getRangeCorps',
      headers: {
        'Content-type': 'application/json'
      },
      data: JSON.stringify(data)
    })
    .then(response => {
      let points = [], datas=response.data.data;
      console.log(datas);
      for( let i in datas){
        points.push({
          lng: datas[i].longitude,
          lat: datas[i].latitude
        })
      }
      this.points=points
    })
  },
  watch: {
    points: function(){
      var map = new BMap.Map("container")
      map.centerAndZoom(new BMap.Point(121.389, 31.117), 12)
      map.addControl(new BMap.NavigationControl({enableGeolocation:true}))   //放大缩小控件
      map.enableScrollWheelZoom()  // 鼠标滚轮放大缩小控件
      
      // map.addEventListener("dragend", function(){
      //     var center = map.getCenter()
      //     console.log("地图中心点变更为：" + center.lng + ", " + center.lat);    
      //   }
      // )

      // 点聚合
      var markers = [];
      for (var i = 0; i < this.points.length; i++) {
        var pt = new BMap.Point(this.points[i].lng, this.points[i].lat);   
        var myIcon = new BMap.Icon("/static/img/findfix-2x.png", new BMap.Size(52,52)); 
        var marker2 = new BMap.Marker(pt,{icon:myIcon})
        map.addOverlay(marker2)
        markers.push(new BMap.Marker(pt))
        
        //点击每一个维修点显示公司地址及 详情
        marker2.addEventListener('click',function(){
          console.log(1);
        })
      }

      var markerClusterer = new BMapLib.MarkerClusterer(map, {
        markers: markers,
        girdSize : 100,
        styles : [{
          url:'/static/img/position-num.png',
          size: new BMap.Size(52, 52)
        }],
      });
    }
  },
  methods:{
    handler ({BMap, map}) {
      // console.log(BMap, map)
      //      this.zoom = 5
    },
    key(e){
      if(e.keyCode=='13'){
          console.log(1111);
      }
    }
  }
}
</script>

<style scoped lang="scss">
  // .top {
  //   height: 40px;
  //   background-color: #469df6;
  //   color: #fff;
  //   line-height: 40px;
  //   font-size: 16px;
  //   text-align: center;
  //   span {
  //     float: right;
  //     font-size: 14px;
  //     margin-right: 10px;
  //   }
  // }
  .search {
    padding: 8px 12px;
    position: relative;
    .wrap {
      margin-right: 60px;
      input {
        background: url(../assets/img/record/search.png) no-repeat 10px 10px;
        font-size: 14px;
        background-color: #eee;
        background-size: 18px 18px;
        text-indent: 32px;
        border-radius: 8px;
        outline: none;
        border: none;
        height: 35px;
        width: 100%;
        position: relative;
      }
    }
    
    span {
      position: absolute;
      top: 8px;
      right: 12px;
      height: 35px;
      width: 60px;
      line-height: 35px;
      background: url(../assets/img/record/findfix.png) no-repeat;
      background-position: 5px center;
      background-size: 16px 16px;
      background-color: #fff;
      text-align: right;
    }
  } 
  .filter {
    padding-left: 50px;
    background-color: rgba(0,0,0,0);
    .content {
      background-color: #fff;
      height: 568px;
        /*注意*/
      position: relative;
      width: 100%;
      color: #666;
      padding-top: 5px;
      p {
        text-indent: 10px;
        font-size: 14px;
        line-height: 40px;
        border-bottom: 1px solid #eee;
      }
      em {
        position: absolute;
        width: 20px;
        text-align: center;
        line-height: 20px;
        height: 20px;
        right: 15px;
        top: 15px;
      }
      
      .repairCompany{
        font-size: 0;
        display: flex;
        padding-right: 8px;
        .mint-button {
          justify-content: space-around;
          height: 30px;
          border: 1px solid #ddd;
          width: 80px;
          font-size: 12px;
          color: #2d2d2d;
          padding: 0;
          margin-top: 10px;
          margin-left: 8px;
        }
        .active {
          background-color: #d8e7fd;
          color:#3e87f6;
          border: 1px solid #3e87f6;
        }
      }
      
      
      .starLevel {
        border-top: 10px solid #f8f8f8;
        margin-top: 15px;
      }
    }
  }
  #container{
    width: 100%;
    height: calc(100vh - 95px);
  }
</style>
