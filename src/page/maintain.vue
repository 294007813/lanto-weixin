<template>
  <div class="">
    <mt-search
      v-model="searchv"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
    <baidu-map class="map" center="上海" :zoom="zoom" @ready="handler">
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      searchv:'',
      zoom: 14
    }
  },
  methods:{
    handler ({BMap, map}) {
      console.log(BMap, map)

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
    height: calc(100vh - 85px);
  }
</style>
