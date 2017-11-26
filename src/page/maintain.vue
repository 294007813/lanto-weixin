<template>
  <div id="allmap">
    <div class='search'>
      <span @click='popupVisible=!popupVisible'>筛选</span>
      <div class="mapWrap">
        <form>
          <input id='search_repaire' class="mui-input-clear" type="search" v-model='repairName' placeholder="搜索维修站点" @keyup="key($event)">
        </form>
      </div>

      <div id="container">
      </div> 
      <!-- 企业详情开始 -->
      <div id="popover" class="mui-popover">
        <div class="top">
          <div class="title">
            <div class="img">
              <!-- <img src="" alt="">  -->
            </div>
            <span>上海百信多好车行管理服务有限公司梅陇西路分公司</span>
          </div>
          <div class="address">
            <div class="name">
              <em></em>
              <span>梅陇西路1972号底层、1976号底层</span>
            </div>
            <div class="mile">
              <i></i>
              <span>1.7km</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="top">
            <div class="left">
              <p>AA</p>
              <span>信誉等级</span>
            </div>
            <div class="right">
              <div class="stars">
                <img src="../assets/img/maintain/score_yellow.png" alt="">
                <img src="../assets/img/maintain/score_yellow.png" alt="">
                <img src="../assets/img/maintain/score_yellow.png" alt="">
                <img src="../assets/img/maintain/score_yellow.png" alt="">
                <img src="../assets/img/maintain/score_gray.png" alt="">
              </div>
              <p>综合评分: 7.5分</p>
            </div>
          </div>
          <div class="middle">
            <div class="one hehe">
            </div>
            <div class="two hehe"></div>
            <div class="three hehe"></div>
            <div class="four hehe"></div>
          </div>
          <div class="bottom" @click='goRemark'>我要评价</div>
        </div>
        <!-- xx关闭按钮 -->
       <div class="close_btn" @click='closeModel'></div>
      </div>
      <!-- 企业详情结束 -->
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
                  <li :class="{active: item.value=='all'}" @click='getCompanyType($event, item.value)' v-for='(item, index) in companyType' :key='index'>{{ item.name }}</li>
                </ul>
              </div>
            </li>
          </ul>  
          <!-- 星级评分 -->
          <ul class="mui-table-view"> 
            <li class="mui-table-view-cell mui-collapse mui-active">
              <a class="mui-navigate-right" href="javascript:;">星级评分</a>
              <div class="mui-collapse-content">
                <ul>
                  <li :class="{active: item.value=='all'}" @click='getStarLevel($event, item.value)' v-for='(item, index) in starLevel' :key='index'>{{ item.name }}</li>
                </ul>
              </div>
            </li>
          </ul>
          <!-- 区域范围 -->
          <ul class="mui-table-view"> 
            <li class="mui-table-view-cell mui-collapse">
              <a class="mui-navigate-right" href="javascript:;">区域范围</a>
              <div class="mui-collapse-content">
                <ul>
                  <li :class="{active: item.value=='all'}" @click='getArea($event, item.value)' v-for='(item, index) in Area' :key='index'>{{ item.name }}</li>
                </ul>
              </div>
            </li>
          </ul>
          <!-- 车辆品牌 -->
          <ul class="mui-table-view"> 
            <li class="mui-table-view-cell mui-collapse">
              <a class="mui-navigate-right" href="javascript:;">车辆品牌</a>
              <div class="mui-collapse-content carBrandChoose">
                <div class='carBrand'>
                  <mt-index-list :height='312'>
                    <mt-index-section :index=item.index v-for="(item, i) in carBrand" :key='i'>
                      <mt-cell title="" v-for="(list, i) in item.brand" :key='i'>
                        <img src="../assets/img/record/aodi.png" width="30" height="20" alt="">
                        <div class="mui-input-row mui-radio" @click='getBrand(list.name)'>
                          <label>{{ list.name }}</label>
                          <input name="radio" type="radio">
                        </div>
                      </mt-cell>
                    </mt-index-section>
                  </mt-index-list>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </mt-popup>
    <div v-show='popupVisible' class="confirm">
      <button @click='clear'>清空</button>
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
import mui from "../lib/mui/js/mui.min.js"
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
      type: '',    // 企业类型的标志
      starLevel: [
        {
          name:'全部',
          value: 'all'
        },
        {
          name:'★★★★★',
          value: '43'      
        },
        {
          name:'★★★★',
          value: '44'      
        },
        {
          name:'★★★',
          value: '45'      
        },
        {
          name:'★★',
          value: '46'      
        },
        {
          name:'★',
          value: '47'      
        }
      ],
      level: '',   // 星级评分标志
      Area: [
        {
          name: '全部',
          value: 'all'
        },
        {
          name: '黄浦区',
          value: '1'
        },{
          name: '徐汇区',
          value: '2'
        },
        {
          name: '长宁区',
          value: '3'
        },
        {
          name: '静安区',
          value: '4'
        },
        {
          name: '普陀区',
          value: '5'
        },
        {
          name: '虹口区',
          value: '6'
        },
        {
          name: '杨浦区',
          value: '7'
        },
        {
          name: '闵行区',
          value: '8'
        },
        {
          name: '宝山区',
          value: '9'
        },
        {
          name: '嘉定区',
          value: '10'
        },
        {
          name: '浦东新区',
          value: '11'
        },
        {
          name: '金山区',
          value: '12'
        },
        {
          name: '松江区',
          value: '13'
        },
        {
          name: '青浦区',
          value: '14'
        },
        {
          name: '奉贤区',
          value: '15'
        },
      ],
      area: '',
      carBrand: [
        {
          index: 'A',
          brand: [
            {
              name: '奥迪',
              pic: 'aodi',
            },
            {
              name: '阿尔法·罗密欧',
              pic: 'aodi'
            },
            {
              name: '阿斯顿·马丁',
              pic: 'aodi'
            },
            {
              name: '安凯客车',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'B',
          brand: [       
             {
              name: '宾利',
              pic: 'aodi'
            },
            {
              name: '保时捷',
              pic: 'aodi'
            },
            {
              name: '奔驰',
              pic: 'aodi'
            },
            {
              name: '宝马',
              pic: 'aodi'
            },
            {
              name: '别克',
              pic: 'aodi'
            },
            {
              name: '本田',
              pic: 'aodi'
            },
            {
              name: '比亚迪',
              pic: 'aodi'
            },
            {
              name: '宝骏',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'C',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'D',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'E',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'F',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'G',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'H',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'I',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'J',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'K',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'L',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'M',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'N',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'O',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'P',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'Q',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'R',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'S',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'T',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'U',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'V',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'W',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'X',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'Y',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
        {
          index: 'Z',
          brand: [
             {
              name: '迈巴赫',
              pic: 'aodi'
            },
             {
              name: '玛莎拉蒂',
              pic: 'aodi'
            }
          ]
        },
      ],
      brand: ''  
    }
  },

  mounted() {
    let data={
      systemToken: localStorage.getItem("SYSTEMTOKEN"),
      limit: 300,
      page: 1
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
      let points = []
      let datas=response.data.data.content
      for( let i in datas){
        points.push({
          lng: datas[i].lat,
          lat: datas[i].lng
        })
      } 
      this.points=points
      console.log(this.points);
    })
  },
  watch: {
    points: function(){
      var markers=[];
      var map = new BMap.Map("container")          // 创建地图实例  
      var point = new BMap.Point(this.pointX, this.pointY)  // 创建点坐标  
      map.centerAndZoom(point, this.scale)                 // 初始化地图，设置中心点坐标和地图级别  
      map.addControl(new BMap.NavigationControl())  //添加放大缩小控件


      //更改红色水滴样式
      var myIcon = new BMap.Icon("/static/img/findfix-2x.png",  
        new BMap.Size(52, 52), {  
          offset: new BMap.Size(10, 25)
      });

      for(var i=0; i<this.points.length;i++){
        var points = new BMap.Point(this.points[i].lat, this.points[i].lng)
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
          console.log('中心点坐标:'+centerLng+','+centerLat);
        }
      )

      // 圆形区域检索
      // map.centerAndZoom(new BMap.Point(centerLng, centerLat), 13)
      // var local = new BMap.LocalSearch(map, { renderOptions:{map: map, autoViewport: true}})
      // local.searchNearby("小吃", "前门")


      // 点击维修企业图标查看详细信息
      for(var i=0; i<markers.length; i++){
        markers[i].addEventListener('click',function(){
          mui('.mui-popover').popover('show',document.getElementById("popover"))
        })
      }
    }
  },
  methods:{
    key(e){
      if(e.keyCode=='13' && document.hasFocus()){
        var search = document.getElementById('search_repaire');
        search.blur()
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
    clear(){   // 清空
      this.type='all'
      this.level='all'
      this.area='all'
      this.brand=''
      var lis = document.getElementsByClassName('content')[0]
      console.log(lis);
    },
    submit(){  // 确定
      this.popupVisible=!this.popupVisible
    },
    getCompanyType(e,v){
      this.type = v
      this.addclass(e)
      console.log(this.type);
    },
    getStarLevel(e,v){
      this.level = v
      console.log(this.level);
      this.addclass(e)
    },
    getArea(e,v){
      this.area = v
      console.log(this.area);
      this.addclass(e)
    },
    getBrand(v){
      this.brand = v
      console.log(this.brand);
    },
    addclass(e){
      var ele = e.target
      var brothers = ele.parentNode.children
      for(var i=0;i<brothers.length;i++){
        brothers[i].className = ''
      }
      ele.className='active'
    },
    closeModel(){
      mui('.mui-popover').popover('hide',document.getElementById("popover"))
    },
    goRemark(){
      mui('.mui-popover').popover('hide',document.getElementById("popover"))
      this.$router.push({
        path: '/remark'
      })
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
      background-position: left 55%;
      background-size: 16px 16px;
      background-color: #fff;
      text-indent: 20px;
      font-size: 16px;
    }
    // 企业详情弹出框样式开始
    #popover{
      z-index: 2500;
      width: 90%;
      height: 450px;
      border-radius: 15px;
      left: 5% !important;
      top:  50% !important;
      transform: translateY(-50%);
      background-color: #fff;
      .mui-popover-arrow {
        height: 0;
      }
      .close_btn {
        position: absolute;
        left: 50%;
        bottom: -50px;
        width: 35px;
        height: 35px;
        transform: translateX(-50%);
        background: url(../assets/img/maintain/close.png) no-repeat;
        background-size: contain;
      }
      >.top {
        height: 130px;
        border-radius: 15px 15px 0 0;
        background: linear-gradient(to right, #67aafb, #3b83f6);
        overflow: hidden;
        .title {
          height: 60px;
          margin-top: 25px;
          .img {
            width: 60px;
            height: 60px;
            background-color: #fff;
            margin: 0 13px;
            float: left;
          }
          span {
            color: #fff;
            font-size: 16px;
            line-height: 24px;
            font-family: 'PingFang-SC-Medium';
          }
        }
        @media screen and (min-width: 320px) {
          .address{
            font-size: 12px;
          }
        }
        @media screen and (min-width: 375px) {
          .address{
            font-size: 14px;
          }
        }
        .address {
          height: 20px;
          color: #fff;
          margin-top: 12px;
          margin-left: 15px;
          .name{
            height: 20px;
            float: left;
            position: relative;
            em {
              width: 15px;
              height: 15px;
              background: url(../assets/img/maintain/address.png) no-repeat;
              background-size: contain;
              position: absolute;
              top: 3px;
            }
            span {
              margin-left: 18px;
              display: inline-block;
              width: 93%;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }
          }
          .mile {
            float: right;
            margin-right: 10px;
            position: relative;
            i {
              position: absolute;
              width: 15px;
              height: 15px;
              background: url(../assets/img/maintain/mile.png) no-repeat;
              background-size: contain;
              top: -15px;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
      }
      >.content {
        >.top {
          height: 50px;
          color: #666;
          >.left {
            float: left;
            border-bottom: 1px solid #eee;
            border-right: 1px solid #eee;
            width: 50%;
            height: 100%;
            box-sizing: border-box;
            >p {
              text-align: center;
              color: red;
              margin-bottom: 0;
              margin-top: 2px;
            }
            span {
              display: block;
              text-align: center;
              font-size: 14px;
            }
          }
          >.right {
            border-bottom: 1px solid #eee;
            height: 100%;
            float: right;
            width: 50%;
            position: relative;
            .stars {
              position: absolute;
              font-size: 1px;
              width: 80px;
              height: 14px;
              left: 50%;
              transform: translateX(-50%);
              top: 5px;
              img {
                width: 14px;
                height: 14px;
              }
            }
            p {
              text-align: center;
              margin-top: 22px;
              color: #666;
            }
          }
        }
        >.middle {
          height: 230px;
          background: pink;
          padding: 17px 12px;

        }
        >.bottom {
          text-align: center;
          height: 40px;
          line-height: 40px;
          border-radius: 0 0 15px 15px;
          color: #4285f4;
        }
      }
    }
// 企业详情弹出框样式结束
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
      // background-color: #f8f8f8;
      position: relative;
      color: #2d2d2d;
      padding-bottom: 50px;
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
