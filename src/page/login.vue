<template>
  <div>
    <div class="top">
      <p @click="goBack()"><i></i></p>
    </div>
    <div class="head">
      <p>Welcome</p>
      <span>上海汽修</span>
    </div>
    <div class="input">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    </div>
    <mt-button type="primary" @click="login">登录</mt-button>
    <div class="noac">
      <span @click="goRegister">立即注册</span>|<span>忘记密码</span>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  export default {
    name: 'login',
    data () {
      return {
        username:"",
        password:""
      }
    },
    mounted(){
      console.log(this.$route.query.redirect)
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },
      goRegister(){
        this.$router.push({path: '/register'})
      },
      login(){
        let self=this
        let data={
          loginaccount: this.username,
          userpassword: this.password,
          systemToken: localStorage.getItem("SYSTEMTOKEN")
        }
        this.axios({
          method: 'post',
          url: '/user/useraccount/login',
          headers: {
            'Content-type': 'application/json'
          },
          data: JSON.stringify(data)
        }).then(function (response) {
          console.log(response)
          if(response.data.code=='000000'){
            localStorage.setItem("ACCESSTOKEN",response.data.data.accessToken);
            localStorage.setItem("USERINFO",JSON.stringify(response.data.data));

            MessageBox.alert('登录成功').then(action => {
              self.$router.replace({
                path:self.$route.query.redirect
              })
            });


          }else{
            MessageBox('提示', response.data.status);
          }
        })
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
.head{
  margin-top: 20px;
  text-align: center;
  color: #1383ca;
  p{
    font-size: 32px;
  }
}
.input{
  width: 80%;
  margin: 20px auto;
  color: #1383ca;
}
.mint-button{
  width: 60%;
  margin: auto;
  display: block;
}
.noac{
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  span{
    margin: 0 20px;
  }
}
</style>
