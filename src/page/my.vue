<template>
  <div>
    <div class="header">
      <b>{{name}}</b>
      <u @click="popupVisible=!popupVisible"></u>
      <span class="telNum">{{ tel }}</span>
      <img src="../assets/img/my/user.png" alt="">
    </div>
    <div class="list" @click="goCarList">
      <img src="../assets/img/my/health.png" alt=""><span>爱车档案</span> <i></i>
    </div>
    <div class="list" @click="goMyQuestion">
      <img src="../assets/img/my/my_questions.png" alt=""><span>我的提问</span> <i></i>
    </div>
    <div class="list">
      <img src="../assets/img/my/expert_info.png" alt=""><span>专家信息</span> <i></i>
    </div>
    <div class="list">
      <img src="../assets/img/my/Satisfaction_degree.png" alt=""><span>满意度调查</span> <i></i>
    </div>
    <div class="list" @click='goSetting(tel)'>
      <img src="../assets/img/my/set.png" alt=""><span>设置</span> <i></i>
    </div>
    <div class="list" @click='goSuggestion'>
      <img src="../assets/img/my/feedback.png" alt=""><span>意见反馈</span> <i></i>
    </div>
    <div class="list" @click='goComplaint'>
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
    goCarList(){
      this.$router.push({ path: '/carList'})
    },
    goSetting(){
      this.$router.push({
        path: '/setting',
        query: {
          num: this.tel
        }
        })
    },
    goSuggestion() {
      this.$router.push({ path: '/suggestion'})
    },
    goComplaint() {
      this.$router.push({path: '/complaint'})
    },
    goMyQuestion() {
      this.$router.push({path: '/myQuestion'})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
  background-color: #f8f8f8;
}
.div{
  width: 100%;
  position: relative;
}
.header{
  line-height: 60px;
  border-bottom: 10px solid #f8f8f8;
  padding: 30px 10px;
  position: relative;
  b {
    font-size: 20px;
    color: #000;
  }
  img{
    width: 60px;
    margin-right: 10px;
    float: right;
  }
  u {
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url(../assets/img/my/edit.png);
    background-size: 100% 100%;
    margin-left: 10px;
  }
  .telNum {
    position: absolute;
    left: 10px;
    top: 55px;
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
    width: 16px;
    height: 16px;
    top: 17px;
    left: 18px;
  }
  span {
    margin-left: 35px;
    font-size: 15px;
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
  box-sizing: content-box;
}

</style>
