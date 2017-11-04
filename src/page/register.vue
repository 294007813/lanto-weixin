<template>
  <div>
    <div class="top">
      <p @click="goback()"><i></i></p>
    </div>
    <div class="input">
      <mt-field label="手机号" placeholder="手机号" v-model="tel"></mt-field>
      <mt-field label="验证码" placeholder="验证码" v-model="code">
        <span>获取验证码</span>
      </mt-field>
      <mt-field label="密码" placeholder="输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="确认密码" placeholder="再次输入密码" type="password" v-model="rpassword"></mt-field>
    </div>
    <div class="radio">
      <mt-radio
        align="right"
        v-model="radiov"
        :options="options">
      </mt-radio>
    </div>
    <div class="agree">
      <mt-checklist
        v-model="agree"
        :options="['同意《上海汽修平台协议》']">
      </mt-checklist>
    </div>
    <mt-button type="primary">注册</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'register',
    data () {
      return {
        tel:"",
        code:"",
        password:"",
        rpassword:"",
        radiov: "",
        options:[
          {label: '车主注册', value: '1'},
          {label: '企业注册', value: '2'},
          {label: '管理注册', value: '3'}
        ],
        agree:[]
      }
    },
    methods:{
      goback(){
        this.$router.go(-1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .top{
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    p{
      width: 40px;
      height: 40px;
    }
    i{
      display: inline-block;
      border-right: 1px solid;
      border-bottom: 1px solid;
      width: 10px;
      height: 10px;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
  }
  .input{
    width: 80%;
    margin: auto;
    color: #1383ca;
  }
  .radio{
    width: 60%;
    margin: auto;
    color: #1383ca;
  }
  .agree{
    text-align: center;

  },
  .agree>div{
    display: inline-block;
  }
  .mint-button{
    width: 60%;
    margin: auto;
    display: block;
  }

</style>
