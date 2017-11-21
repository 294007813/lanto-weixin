<template>
  <div id="allmap">
    <div class='search'>
      <span @click='popupVisible=!popupVisible'>筛选</span>
      <div class="wrap">
        <form>
          <input type="search" v-model='repairName' placeholder="搜索维修站点" @keyup="key($event)">
        </form>
      </div>
    </div> 
    <div id="container">
    </div> 
    <mt-popup v-model="popupVisible" class="filter" model=false position="right">
      <div class='content'>
        <ul class="companyType_starLevel">
          <!-- 企业类型 -->
          <li>
            <div class="title">
              <p>企业类型</p>
              <em @click='popupVisible=!popupVisible'></em>
            </div>
            <div class="son" ref='companyWrap'>
              <div @click='companyIsActive' class='active'>全部</div>
              <div @click='companyIsActive'>一类维修企业</div>
              <div @click='companyIsActive'>二类维修企业</div>
              <div @click='companyIsActive'>三类维修企业</div>
              <div @click='companyIsActive'>摩托车维修厂</div>
              <div @click='companyIsActive'>汽车快修厂</div>
            </div>
          </li>
          <!-- 星级评分 -->
          <li>
            <div class="title">
              <p>星级评分</p>
            </div>
            <div class="son" ref='starWrap'>
              <div @click='starIsActive' class="active">全部</div>
              <div @click='starIsActive'>1星</div>
              <div @click='starIsActive'>2星</div>
              <div @click='starIsActive'>3星</div>
              <div @click='starIsActive'>4星</div>
              <div @click='starIsActive'>5星</div>
            </div>
          </li>
        </ul>
      <!-- 车辆品牌 -->
        <div class="title">
          <p>车辆品牌</p>
        </div>
        <div class='carBrand'>
          <mt-index-list :height='165'>
            <mt-index-section index="A">
              <mt-cell :class="{choosed: true}" title="">
                <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                <span>奥迪</span>
              </mt-cell>
              <mt-cell :class="{choosed: false}" title="">
                <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                <span>奥拓</span>
              </mt-cell>
              <mt-cell :class="{choosed: false}" title="">
                <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                <span>阿姆斯特朗</span>
              </mt-cell>
            </mt-index-section>
            <mt-index-section index="B">
              <mt-cell title="">
                <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                <span>宝马</span>
              </mt-cell>
              <mt-cell title="">
                <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                <span>宝骏</span>
              </mt-cell>
              <mt-cell title="">
                <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                <span>保时捷</span>
              </mt-cell>
            </mt-index-section>
            <mt-index-section index="C"></mt-index-section>
            <mt-index-section index="D"></mt-index-section>
            <mt-index-section index="E"></mt-index-section>
            <mt-index-section index="F"></mt-index-section>
            <mt-index-section index="G"></mt-index-section>
            <mt-index-section index="H"></mt-index-section>
            <mt-index-section index="I"></mt-index-section>
            <mt-index-section index="J"></mt-index-section>
            <mt-index-section index="K"></mt-index-section>
            <mt-index-section index="L"></mt-index-section>
            <mt-index-section index="M"></mt-index-section>
            <mt-index-section index="N"></mt-index-section>
            <mt-index-section index="O"></mt-index-section>
            <mt-index-section index="P"></mt-index-section>
            <mt-index-section index="Q"></mt-index-section>
            <mt-index-section index="R"></mt-index-section>
            <mt-index-section index="S"></mt-index-section>
            <mt-index-section index="T"></mt-index-section>
            <mt-index-section index="U"></mt-index-section>
            <mt-index-section index="V"></mt-index-section>
            <mt-index-section index="W"></mt-index-section>
            <mt-index-section index="X"></mt-index-section>
            <mt-index-section index="Y"></mt-index-section>
            <mt-index-section index="Z"></mt-index-section>
          </mt-index-list>
        </div>


      <div class="confirm">
        <button @click='clear'>清空</button>
        <button @click='submit'>确定</button>
      </div>
      </div>
    </mt-popup>
    <div class="fixGuide">
      查找最近维修点
      <img src="/static/img/position.png" alt="">
    </div>
  </div>
</template>

<script> 
import { Toast, MessageBox } from 'mint-ui'
export default {
  name: '',
  data () {
    return {
      searchv:'',
      zoom: 13,
      points: [],
      popupVisible: false,
      repairName: '',    
      pointX: 121.389,   // 地图中心点纬度
      pointY: 31.117,    // 地图中心点经度
      scale: 12,   // 地图放大级别 
      value: ''
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
      var markers=[];
      var map = new BMap.Map("container")          // 创建地图实例  
      var point = new BMap.Point(this.pointX, this.pointY)  // 创建点坐标  
      map.centerAndZoom(point, this.scale)                 // 初始化地图，设置中心点坐标和地图级别  
      map.enableScrollWheelZoom(true)     //开启鼠标滚轮缩放
      map.addControl(new BMap.NavigationControl())  //添加放大缩小控件


      //更改红色水滴样式
      var myIcon = new BMap.Icon("/static/img/findfix-2x.png",  
        new BMap.Size(52, 52), {  
          offset: new BMap.Size(10, 25)
      });

      for(var i=0; i<this.points.length;i++){
        var points = new BMap.Point(this.points[i].lng, this.points[i].lat)
        markers.push(new BMap.Marker(points, {icon: myIcon}))
      }

      var markerClusterer = new BMapLib.MarkerClusterer(map, {
        markers: markers,
        girdSize : 200,
        // 尼玛 ,文档没有,还是看源码才知道怎么修改样式的
        styles : [{
          url:'/static/img/position-num.png',
          size: new BMap.Size(52, 52),
          textColor: '#fff',
          textSize: 16
        }]
      })

      // 监听中心点的变化
      var centerLng = null;
      var centerLat = null;
      map.addEventListener("dragend", function(){
          var center = map.getCenter()
          centerLng = center.lng
          centerLat = center.lat
        }
      )

      // 圆形区域检索
      // map.centerAndZoom(new BMap.Point(centerLng, centerLat), 13)
      // var local = new BMap.LocalSearch(map, { renderOptions:{map: map, autoViewport: true}})
      // local.searchNearby("小吃", "前门")
    }
  },
  methods:{
    key(e){
      if(e.keyCode=='13' && document.hasFocus()){
        let data={
          systemToken: localStorage.getItem("SYSTEMTOKEN"),
          corpName: this.repairName
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
          let points = [], datas=response.data.data
          console.log(datas);
          for( let i in datas){
            points.push({
              lng: datas[i].longitude,
              lat: datas[i].latitude
            })
          }
          if(points.length==0){
            MessageBox({
              message: '未找到该维修站点',
              position: 'bottom',
              duration: 2000
            });
            return
          }
          this.points=points
          this.pointX=this.points[0].lng
          this.pointY=this.points[0].lat
          this.scale = 14
        })
      }
    },
    companyIsActive(e) {
      var that = e.target
      for(var i=0; i<that.parentNode.children.length; i++){
        that.parentNode.children[i].className=''
      }
      that.className='active'
    },
    starIsActive(e) {
      this.companyIsActive(e)
    },
    clear(){
      var divs = this.$refs.companyWrap.children
      var dvs = this.$refs.starWrap.children
      for(var i=0; i<divs.length; i++){
        divs[i].className=''
      }
      divs[0].className='active'
      for(var j=0; j<dvs.length; j++){
        dvs[j].className=''
      }
      dvs[0].className='active'
    },
    submit() {
      this.popupVisible = true
    } 
  }
}
</script>

<style lang="scss">
  #allmap {
    position: relative;
    .fixGuide {
      padding: 5px 8px;
      border-radius: 5px;
      font-size: 14px;
      color: #fff;
      background-color: #0f0;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #3272F7;
      z-index: 2000;
      img {
        position: absolute;
        width: 14px;
        height: 20px;
        top: 18px;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
      }
    }
  }

  .search {
    padding: 6px 10px;
    position: relative;
    .wrap {
      margin-left: 60px;
      input {
        background: url(../assets/img/record/search.png) no-repeat 10px 7px;
        font-size: 14px;
        background-color: #eee;
        background-size: 18px 18px;
        text-indent: 20px;
        border-radius: 8px;
        outline: none;
        border: none;
        height: 30px;
        width: 100%;
        margin-bottom: 0;
        text-align: left;
      }
    }
    
    >span {
      float: left;
      height: 30px;
      width: 60px;
      line-height: 30px;
      background: url(../assets/img/record/findfix.png) no-repeat;
      background-position: left center;
      background-size: 16px 16px;
      background-color: #fff;
      text-indent: 20px;
    }
  } 

  .filter {
    padding-left: 12%;
    background-color: rgba(0,0,0,0);
    width: 100%;
    height: 100%;
    .content {
      background-color: #fff;
      position: relative;
      color: #2d2d2d;
      padding-top: 1%; 
      height: 100%;
      
      ul.companyType_starLevel {
        li {
          border-bottom: 8px solid #f8f8f8;
          .title{ 
            p { 
              text-indent: 10px;
              font-size: 14px;
              font-weight: 500;
              line-height: 40px;
              border-bottom: 1px solid #eee;
              font-size: 16px;
              color: #666;
              margin-bottom: 0;
            }
            em {
              position: absolute;
              width: 12px;
              height: 12px;
              text-align: center;
              right: 15px;
              top: 3%;
              background-image: url(../assets/img/record/Close.png);
              background-size: 12px 12px;
            }
          }
          .son {
            font-size: 0;
            padding: 0 8px 10px;
            div {
              display: inline-block;
              width: 32%;
              text-align: center;
              margin-right: 2%;
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 5px; 
              padding: 8px 5px;
              margin-top: 3%;
            }
            div:nth-child(3n) {
              margin-right: 0;
            }
          }
        }
      }
      .title { 
        p { 
          color: #666;
          text-indent: 10px;
          font-size: 14px;
          font-weight: 500;
          line-height: 40px;
          border-bottom: 1px solid #eee;
          font-size: 16px;
        }
      }
      .carBrand {
        height: 100%;
        overflow: auto;
        .mint-indexlist-navlist {
          overflow: auto;
        }
        .mint-indexsection-index {
          padding:  5px 10px; 
        }
        .mint-cell-title {
          flex: 0;
        }
        .mint-cell-value {
          span{
            margin-left: 15px;
            color: #333;
          }
        }
        .choosed {
          background: url(../assets/img/record/gouxuan.png) no-repeat;
          background-position: 85% center;
          background-size: 20px 20px;
        }
      }
      .confirm {
        height: 50px;
        width: 100%;
        border-top: 1px solid #eee;
        position: fixed;
        left: 12%;
        bottom: 0;
        padding: 0 6%;
        font-size: 0;
        z-index: 30000;
        background-color: #fff;
        button {
          font-size: 16px;
          width: 40%;
          margin-right: 6%;
          height: 35px;
          margin-top: 7px;
          background-color: #fff;
          border-radius: 6px;
          border: none;
          border: 1px solid #ddd;
          outline: none;
        }
        button:nth-child(2){
          background: linear-gradient(to right, #77b9fe, #3882f5);
          color: #fff;
        }
      }

      .active {
        background-color: #d8e7fd;
        color:#3e87f6;
        border: 1px solid #3e87f6 !important;
      }
    }
  }
  #container{
    width: 100%;
    height: calc(100vh - 95px);
  }
</style>
