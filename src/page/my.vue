<template>
  <div class="">
    <div class="head">
      <img src="../assets/img/my/photo.png">
      <span>{{name}}</span>
      <p><i></i></p>
    </div>
    <div class="list" @click="goCarList">
      <span>健康档案</span> <p><i></i></p>
    </div>
    <div class="list">
      <span>专家列表</span> <p><i></i></p>
    </div>
    <div class="list" >
      <span>我的提问</span> <p><i></i></p>
    </div>
    <div class="list">
      <span>满意度调查</span> <p><i></i></p>
    </div>
    <div class="list">
      <span>投诉举报</span> <p><i></i></p>
    </div>
    <div class="list">
      <span>意见反馈</span> <p><i></i></p>
    </div>
    <div class="list" @click="logout">
      <span>退出账号</span> <p><i></i></p>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
export default {
  name: 'query',
  data () {
    return {
      name:""
    }
  },
  beforeMount(){
    let userinfo=JSON.parse(localStorage.getItem("USERINFO"))
//    console.log(userinfo)
    this.name= userinfo.userName? userinfo.userName: userinfo.telphone
  },
  methods:{
    logout(){
      let self= this
      this.axios({
        method: 'get',
        url: '/user/useraccount/logout/'+ localStorage.getItem("ACCESSTOKEN")
      }).then(function (response) {
        if(response.data.code!='000000'){
          MessageBox('提示', response.data.status);
        }else{
          localStorage.removeItem("ACCESSTOKEN")
          localStorage.removeItem("USERINFO")
          MessageBox.alert('退出成功').then(action => {
            self.$router.replace({
              path:'/'
            })
          });

        }
      })
    },
    goCarList(){
      this.$router.push({ path: '/carList'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.div{
  width: 100%;
  position: relative;
}
.head{
  height: 100px;
  line-height: 70px;
  border-top: 10px solid #f8f8f8;
  border-bottom: 10px solid #f8f8f8;
  padding: 0 10px;
  img{
    width: 60px;
    margin: 10px;
  }
}
.list{
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  border-bottom: 1px solid #f8f8f8;
}
p{
  height: 100%;
  float: right;
}
i{
  display: inline-block;
  border-right: 1px solid;
  border-bottom: 1px solid;
  width: 10px;
  height: 10px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
</style>
