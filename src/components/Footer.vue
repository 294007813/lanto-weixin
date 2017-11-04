<template>
  <ul class="footer">
    <router-link :class="{active: findex==1}" :to="{ path: '/home' }" tag="li">
      <img src="../assets/img/footer/home.png" v-show="findex==1">
      <img src="../assets/img/footer/unhome.png" v-show="findex!=1">
      <p>首页</p>
    </router-link>
    <router-link :class="{active: findex==2}" :to="{ path: '/maintain' }" tag="li">
      <img src="../assets/img/footer/maintain.png" v-show="findex==2">
      <img src="../assets/img/footer/unmaintain.png" v-show="findex!=2">
      <p>找维修</p>
    </router-link>
    <router-link :class="{active: findex==3}" :to="{ path: '/doctor' }" tag="li">
      <img src="../assets/img/footer/ask.png" v-show="findex==3">
      <img src="../assets/img/footer/unask.png" v-show="findex!=3">
      <p>车大夫</p>
    </router-link>
    <router-link :class="{active: findex==4}" :to="{ path: '/info' }" tag="li">
      <img src="../assets/img/footer/news.png" v-show="findex==4">
      <img src="../assets/img/footer/unnews.png" v-show="findex!=4">
      <p>信息服务</p>
    </router-link>
    <router-link :class="{active: findex==5}" :to="{ path: '/my' }" tag="li">
      <img src="../assets/img/footer/my.png" v-show="findex==5">
      <img src="../assets/img/footer/unmy.png" v-show="findex!=5">
      <p>我的</p>
    </router-link>

  </ul>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        findex: 1
      }
    },
    watch:{
      '$route'(oldV, newV){
//        console.log(this.$route.matched[0].name)
        this.fChange()
        }

    },
    mounted(){
      this.fChange()
    },
    methods:{
      fChange() {
        switch (this.$route.matched[1].name){
          case 'home': {this.findex= 1; break;}
          case 'maintain': {this.findex= 2; break;}
          case 'doctor': {this.findex= 3; break;}
          case 'info': {this.findex= 4; break;}
          case 'my': {this.findex= 5; break;}
        }
      }
    }
  }
</script>


<style scoped lang="scss">
.footer{
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    bottom: 0;
    overflow: hidden;
    border-top: 1px solid #e2e2e3;
    background-color: white;
}
li{
  width: 20%;
  overflow: hidden;
  float: left;
  height: 100%;
  display: block;
  padding: 5px 0;
  text-align: center;
  position: relative;
}
li img{
  width: 24px;
  /*height: 25px;*/

}
li:last-child img{
  width: 20px;
}
li p{
  font-size: 12px;
  color: #8b9094;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.active p{
  color: #1383ca
}

</style>
