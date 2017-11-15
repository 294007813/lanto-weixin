<template>
  <div>
    <div class="head">
      <b>{{name}}</b>
      <u @click="popupVisible=!popupVisible"></u>
      <span>{{ tel }}</span>
      <img @click="logout" src="../assets/img/my/user.png" alt="">
    </div>
    <div class="list" @click="goCarList">
      <img src="../assets/img/my/health.png" alt=""><span>健康档案</span> <i></i>
    </div>
    <div class="list" >
      <img src="../assets/img/my/my_questions.png" alt=""><span>我的提问</span> <i></i>
    </div>
    <div class="list">
      <img src="../assets/img/my/expert_info.png" alt=""><span>专家信息</span> <i></i>
    </div>
    
    <div class="list">
      <img src="../assets/img/my/Satisfaction_degree.png" alt=""><span>满意度调查</span> <i></i>
    </div>
    <div class="list">
      <img src="../assets/img/my/set.png" alt=""><span>设置</span> <i></i>
    </div>
    <div class="list">
      <img src="../assets/img/my/feedback.png" alt=""><span>意见反馈</span> <i></i>
    </div>
    <div class="list">
      <img src="../assets/img/my/report.png" alt=""><span>投诉举报</span> <i></i>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  export default {
  name: 'query',
  data () {
    return {
      name:"",
      tel: ''
    }
  },
  beforeMount(){
    let userinfo=JSON.parse(localStorage.getItem("USERINFO"))
    this.name= userinfo.userName? userinfo.userName: userinfo.telphone
    this.tel=userinfo.telphone.substr(0,3)+"****"+ userinfo.telphone.substr(7)
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
  line-height: 60px;
  border-top: 10px solid #f8f8f8;
  border-bottom: 10px solid #f8f8f8;
  padding: 0 10px;
  position: relative;
  b {
    font-size: 20px;
  }
  img{
    width: 60px;
    margin: 10px;
    float: right;
  }
  u {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(../assets/img/my/edit.png);
    background-size: 100% 100%;
    margin-left: 10px;
  }
  span {
    position: absolute;
    left: 10px;
    top: 25px;
    color: #999;
  }
}
.list{
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #f8f8f8;
  position: relative;
  img {
    position: absolute;
    width: 22px;
    height: 22px;
    top: 13px;
    left: 18px;
  }
  span {
    margin-left: 45px;
  }
  i{
    position: absolute;
    right: 10px;
    top: 18px;
    border-right: 1px solid;
    border-bottom: 1px solid;
    width: 10px;
    height: 10px;
    color: #999;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
}
.list:nth-child(6) {
  border-top: 10px solid #f8f8f8;
}

</style>
