<template>
  <div id="allmap">
    <mt-search
      v-model="searchv"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
    <baidu-map class="map" center="上海市闵行区" :zoom="zoom" @ready="handler">
      <bm-point-collection
        :points="points"
        color="red"
      ></bm-point-collection>
    </baidu-map>
  </div>
</template>

<script>
  var map = new BMap.Map("allmap")
	var point = new BMap.Point(116.404, 39.915)
	map.centerAndZoom(point, 15)
	var marker = new BMap.Marker(point)  // 创建标注
	map.addOverlay(marker);              // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE) //跳动的动画
export default {
  name: '',
  data () {
    return {
      searchv:'',
      zoom: 13,
      points:[]
    }
  },
  beforeMount(){
    let self=this, data={
      systemToken: localStorage.getItem("SYSTEMTOKEN")
    }
    console.log(data);
    this.axios({
      method: 'post',
      url: '/maintain/getRangeCorps',
      headers: {
        'Content-type': 'application/json'
      },
      data: JSON.stringify(data)
    }).then(function (response) {
      console.log(response)
      let points = [], datas=response.data.data;
      for( let i in datas){
        points.push({
          lng: datas[i].longitude,
          lat: datas[i].latitude
        })
      }
      self.points= points
    })
  },
  methods:{
    handler ({BMap, map}) {
      // console.log(BMap, map)

//      this.zoom = 5
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .mint-search{
    height: auto!important;
  }
  .map{
    width: 100%;
    height: calc(100vh - 95px);
  }
</style>
