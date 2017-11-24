<template>
  <div id="allmap">
    <div class='search'>
      <span @click='popupVisible=!popupVisible'>筛选</span>
      <div class="mapWrap">
        <form>
          <input type="search" v-model='repairName' placeholder="搜索维修站点" @keyup="key($event)">
        </form>
      </div>
      <div id="container">
      </div> 
    </div> 
    <mt-popup v-model="popupVisible" class="filter" model=false position="right">
      <div class="contentWrap">
        <div class='content'>
          <!-- 车辆品牌 -->
          <ul class="mui-table-view"> 
            <li class="mui-table-view-cell mui-collapse mui-active">
              <a class="mui-navigate-right" href="javascript:;">企业类型</a>
              <div class="mui-collapse-content">
                <ul>
                  <li :class="{active: item.value=='all'}" @click='getVal($event, item.value)' v-for='(item, index) in companyType' :key='index'>{{ item.name }}</li>
                </ul>
              </div>
            </li>
          </ul>  

          <ul class="mui-table-view"> 
            <li class="mui-table-view-cell mui-collapse mui-active">
              <a class="mui-navigate-right" href="javascript:;">星级评分</a>
              <div class="mui-collapse-content">
                <ul>
                  <li class="active">全部</li>
                  <li>★★★★★</li>
                  <li>★★★★</li>
                  <li>★★★</li>
                  <li>★★</li>
                  <li>★</li>
                </ul>
              </div>
            </li>
          </ul>
          <ul class="mui-table-view"> 
            <li class="mui-table-view-cell mui-collapse">
              <a class="mui-navigate-right" href="javascript:;">区域范围</a>
              <div class="mui-collapse-content">
                <ul>
                  <li class="active">全部</li>
                  <li>黄浦区</li>
                  <li>徐汇区</li>
                  <li>长宁区</li>
                  <li>静安区</li>
                  <li>普陀区</li>
                  <li>虹口区</li>
                  <li>杨浦区</li>
                  <li>闵行区</li>
                  <li>宝山区</li>
                  <li>嘉定区</li>
                  <li>浦东新区</li>
                  <li>金山区</li>
                  <li>松江区</li>
                  <li>青浦区</li>
                  <li>奉贤区</li>
                </ul>
              </div>
            </li>
          </ul>

          <ul class="mui-table-view"> 
            <li class="mui-table-view-cell mui-collapse">
              <a class="mui-navigate-right" href="javascript:;">车辆品牌</a>
              <div class="mui-collapse-content carBrandChoose">
                <div class='carBrand'>
                  <mt-index-list :height='312'>
                      <mt-index-section index="A">
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>奥迪</label>
                            <input name="radio" type="radio">
                          </div>
                        </mt-cell>
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>阿尔法·罗密欧</label>
                            <input name="radio" type="radio">
                          </div>
                        </mt-cell>
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>阿斯顿·马丁</label>
                            <input name="radio" type="radio">
                          </div>
                        </mt-cell>
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>安凯客车</label>
                            <input name="radio" type="radio">
                          </div>
                        </mt-cell>
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>奔驰</label>
                            <input name="radio" type="radio">
                          </div>
                        </mt-cell>
                      </mt-index-section>
                      <mt-index-section index="B">
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>宾利</label>
                            <input name="radio" type="radio">
                          </div>
                        </mt-cell>
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>保时捷</label>
                            <input name="radio" type="radio">
                          </div>
                        </mt-cell>
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>奔驰</label>
                            <input name="radio" type="radio">
                          </div>
                        </mt-cell>
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>宝马</label>
                            <input name="radio" type="radio">
                          </div>
                        </mt-cell>
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>本田</label>
                            <input name="radio" type="radio">
                          </div>
                        </mt-cell>
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>别克</label>
                            <input name="radio" type="radio">
                          </div>
                        </mt-cell>
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>比亚迪</label>
                            <input name="radio" type="radio">
                          </div>
                        </mt-cell>
                        <mt-cell title="">
                          <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                          <div class="mui-input-row mui-radio">
                            <label>宝骏</label>
                            <input name="radio" type="radio">
                          </div>
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
              </div>
            </li>
          </ul>
        </div>
      </div>
    </mt-popup>
    <div v-show='popupVisible' class="confirm">
      <button>清空</button>
      <button @click='submit'>确定</button>
    </div>

    <div class="fixGuide">
      查找最近维修点
      <img src="/static/img/position.png" alt="">
    </div>
  </div>
</template>

<script> 
import { Toast, MessageBox, Navbar, TabItem } from 'mint-ui'
import $ from '../lib/jquery.min.js'
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
      value: '',
      companyType: [
        {
          name:'全部',
          value: 'all'
        },
        {
          name:'一类维修企业',
          value: '43'      
        },
        {
          name:'二类维修企业',
          value: '44'      
        },
        {
          name:'三类维修企业',
          value: '45'      
        },
        {
          name:'摩托车维修厂',
          value: '46'      
        },
        {
          name:'汽车快修厂',
          value: '47'      
        }
      ],
      val: ''    // 企业类型的标志
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
      console.log(this.points);
    })
  },
  // updated() {
  //   var fixCompany = document.getElementsByClassName('.BMap_noprint')
  //   for(var i=0; i<fixCompany.length; i++){
  //     fixCompany[i].onclick=function(){
  //       console.log(1111);
  //     }
  //   }
  // },
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
    submit(){
      this.popupVisible=!this.popupVisible
    },
    getVal(e,v){
      this.val = v
      var ele = e.target;
      $(ele).addClass('active').siblings.removeClass('active');
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
    position: relative;
    .mapWrap {
      margin-left: 60px;
      form{
        margin-left:  10px;
        input {
          background: url(../assets/img/record/search.png) no-repeat 10px 7px;
          font-size: 14px;
          background-color: #eee;
          background-size: 18px 18px;
          text-indent: 20px;
          border-radius: 5px;
          outline: none;
          border: none;
          height: 30px;
          width: 90%;
          margin: 8px 0 8px;
          text-align: left;
        }
      }
    }
    
    >span {
      float: left;
      margin-left: 15px;
      height: 46px;
      width: 65px;
      line-height: 50px;
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
    overflow: scroll;
    padding-bottom: 50px;
    // position: relative;
    .closeFilter {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #f00;
      left: 0;
      top: 0;
    }
    .contentWrap {
      background-color: #fff;
      height: 100%;
    }
    .content {
      background-color: #f8f8f8;
      position: relative;
      color: #2d2d2d;
      // height: 100%;
      >ul{
        >li::after{
          height: 0;
        }
        >li:last-child{
          
        }
        >li{
          border-bottom: 10px solid #f8f8f8;
          a {
            border-bottom: 1px solid #eee;
            transition: all 50s;
          }
          .mui-collapse-content {
            margin-top: 15px;
            border-bottom: 1px solid #eee;
            padding: 15px 0 3px;
            >ul{
              margin: 0 auto;
              width: 94%;
              overflow: hidden;
              >li {
                padding: 0 3px;
                float: left;
                border: 1px solid #ddd;
                border-radius: 5px;
                width: 31%;
                height: 35px;
                line-height: 35px;
                margin-right: 3.5%;
                box-sizing: border-box;
                font-size: 12px;
                text-align: center;
                margin-bottom: 12px;
                color: #666;
              }
              >li:nth-child(3n) {
                margin-right: 0;
              }
              .active {         /* 被选中的样式 */
                background-color: #ecf3fe;
                color:#4285f4;
                border: 1px solid #3e87f6 !important;
              }
            }
          }
          .carBrandChoose {
            padding: 0 0 3px;
          }
        }
        .mui-active {
          background-color: #fff;
          margin-top: 0;
        }
      }
      >ul::before, >ul::after{
        height: 0;
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
        .mint-cell-wrapper{
          position: relative;
          .mint-cell-value {
            width: 100%;
            span{
              margin-left: 15px;
              color: #333;
            }
            .mui-radio {
              width: 100%;
              position: static;
              label {
                color: #333;
              }
              input {
                position: absolute;
                right: 35px;
                top: 10px;
              }
              input[type=radio]::before {
                content: ''
              }
              input[type=radio]:checked::before {
                content: '\e442'
              }
            }
          }
        }
      }
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

  #container{
    width: 100%;
    height: calc(100vh - 95px);
  }
</style>
