<template>
  <div class="register">
    <div class="top">
      <p @click="goback()"><i></i></p>
    </div>
    <div class="input">
      <mt-field label="手机号" placeholder="手机号" v-model="tel"></mt-field>
      <mt-field label="验证码" placeholder="验证码" v-model="code">
        <span @click="getCode">{{getCodeButton}}</span>
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
    <mt-button type="primary" @click="register">注册</mt-button>
  </div>
</template>

<script>
  import { Toast, MessageBox } from 'mint-ui';
  export default {
    name: 'register',
    data () {
      return {
        tel:"",
        code:"",
        getCodeButton:"获取验证码",
        password:"",
        rpassword:"",
        radiov: "",
        options:[
          {label: '车主注册', value: '1'},
          {label: '企业注册', value: '2'},
          {label: '管理注册', value: '3'}
        ],
        agree:[],
        count: 0,
        timer: null
      }
    },
    methods:{
      goback(){
        this.$router.go(-1)
      },
      getCode(){
        if( !/^13[0-9]{9}$|14[0-9]{9}$|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$/.test(this.tel) ){
          Toast('手机号不正确！');
          return
        }
        if(this.timer) return;

        this.axios({
          method: 'post',
          url: '/message/sms/sendcaptcha/'+ localStorage.getItem('SYSTEMTOKEN') + '/' + this.tel,
          headers: {
            'Content-type': 'application/json'
          }
        }).then(function (response) {
          console.log(response)
          if(response.data.code=='000000'){
            Toast('发送成功，请查收！');
          }else {
            Toast(response.data.status);
          }
        })


        //计时器
        const TIME_COUNT = 60;
        let num= 0;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              num= this.count
              this.getCodeButton= num+ "s"
              this.count--;
            } else {
              clearInterval(this.timer);
              this.getCodeButton= '获取验证码'
              this.timer = null;
            }
          }, 1000)
        }
      },
      register(){
        if( !/^13[0-9]{9}$|14[0-9]{9}$|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$/.test(this.tel) ){
          Toast('手机号不正确！');
          return
        }
        if(! /(.+){6,18}$/.test(this.password)){
          Toast('密码必须6到18位！');
          return
        }
        if(this.password!= this.rpassword){
          Toast('两次密码不一致！');
          return
        }
        if(!this.code){
          Toast('请输入验证码！');
          return
        }
        if(!this.radiov){
          Toast('请选择注册类型（注册后不可修改）！');
          return
        }
        if(this.agree.length==0){
          Toast('请同意《上海汽修平台协议》');
          return
        }

        let self= this
        let data={
          "captcha": this.code,
          "systemToken": localStorage.getItem('SYSTEMTOKEN'),
          "useroleid": this.radiov,
          "userpassword": this.password,
          "usertel": this.tel
        }
        this.axios({
          method: 'post',
          url: '/user/useraccount/register',
          headers: {
            'Content-type': 'application/json'
          },
          data: JSON.stringify(data)
        }).then(function (response) {
          console.log(response)
          if(response.data.code=='000000'){
            MessageBox.alert('注册成功').then(action => {
              self.$router.push({
                path:'/login'
              })
            });
          }else {
            MessageBox('提示', response.data.status);
          }

        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .register {
    height: 100vh;
  }
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
    width: 86%;
    margin: auto;
    color: #1383ca;
    .mint-field-core {
      border: none ;
      padding: 10px;
      margin-bottom: 0;
    }
    .mint-cell-title {
      width: 65px;
    }
    .mint-cell-value input {
      color: #000;
    }
  }
  .radio{
    width: 60%;
    margin: auto;
    color: #1383ca;
  }
  .agree{
    text-align: center;

  }
  .agree>div{
    display: inline-block;
  }
  .mint-button{
    width: 60%;
    margin: auto;
    display: block;
  }
</style>
