<template>
  <div class="remark">
    <div class="remark_company">
      <div class="title">评价企业</div>
      <div class="content">
        <ul>
          <li v-for='(item, index) in satisfaction' :key='index'>
            <div class="left">{{ item.title }}</div>
            <div class="center">
              <img data-index='0' src="../assets/img/remark/yellow.png" alt="" @click='chooseLevel($event)'>
              <img data-index='1' src="../assets/img/remark/yellow.png" alt="" @click='chooseLevel($event)'>
              <img data-index='2' src="../assets/img/remark/yellow.png" alt="" @click='chooseLevel($event)'>
              <img data-index='3' src="../assets/img/remark/yellow.png" alt="" @click='chooseLevel($event)'>
              <img data-index='4' src="../assets/img/remark/yellow.png" alt="" @click='chooseLevel($event)'>
            </div>
            <div class="right" id='satisfaction'>非常满意</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="assess">
      <div class="title">综合评价</div>
      <textarea v-model='assessText' name="" id="" cols="30" rows="5" placeholder="企业的服务还满意吗?点评一下吧,您的意见很重要哦~"></textarea>
    </div>
    <div class="addPic_wrap">
      <div class="addPic" @click='openActionsheet'></div>
    </div>
    <button @click='sendProblem($event)' data-loading-text='提交中...' type="button" data-loading-icon="mui-spinner mui-spinner-custom" class="mui-btn sendProblem mui-btn-primary">提交</button>
    <mt-actionsheet
  :actions="actions"
  v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import mui from "../lib/mui/js/mui.min.js"
export default {
  data(){
    return {
      satisfaction: [    //满意度
        {
          title: '服务态度',
          level: ''
        },
        {
          title: '维修质量',
          level: ''
        },
        {
          title: '维修速度',
          level: ''
        },
        {
          title: '维修价格',
          level: ''
        }
      ],
      sheetVisible: false,
      actions: [
        {name: '拍照', method:function(){
          self.openCamera()
        }},
        {name: '从相册中选择',method:function(){
          self.openPhoto()
        }}
      ],
      assessText: ''
    }
  },
  methods: {
    openActionsheet(){
      this.sheetVisible=!this.sheetVisible
    },
    chooseLevel(e){
      var imgs = e.target.parentNode.children
      var next=[], previous=[]
      var satisfaction = e.target.parentNode.nextElementSibling
      switch(e.target.getAttribute('data-index')){
        case '0': 
          satisfaction.innerText='非常不满意';  
          break;
        case '1': 
          satisfaction.innerText='不满意';  
          break;
        case '2': 
          satisfaction.innerText='一般';  
          break;
        case '3': 
          satisfaction.innerText='满意';  
          break;
        case '4': 
          satisfaction.innerText='非常满意';  
          break;
      }
      for(var i=0; i<imgs.length; i++){
        if(i>Number(e.target.getAttribute('data-index'))){
          next.push(imgs[i])
        }else {
          previous.push(imgs[i])
        }
      }
      for(var i=0; i<next.length; i++){
        next[i].setAttribute('src','/static/img/gray.png')
      }
      for(var i=0; i<previous.length; i++){
        previous[i].setAttribute('src','/static/img/yellow.png')
      }
    },
    sendProblem(e){
      if(!this.assessText.trim()){
        Toast('请输入综合评价内容')
        return
      }
      mui(e.target).button('loading')
      setTimeout(function(){
          mui(e.target).button('reset')
          Toast('提交成功')
      },2000)
      this.assessText=''
    }
  }
}
</script>

<style lang='scss'>
  .remark {
    background-color: #fff;
    color: #666;
    font-size: 14px;
    .title {
      background: #f8f8f8;
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
    }
    .content ul {
      padding: 10px 0;
      li {
        // background-color: #0f0;
        padding: 8px 15px;
        .left {
          float: left;
          // background-color: #f00;
          width: 80px;
        }
        .center {
          float: left;
          // background-color: #00f;
          width: 140px;
          img {
            width: 16px;
            height: 16px;
            margin-right: 5px;
            margin-top: 2px;
          }
        }
      }
    }
    .assess {
      textarea {
        border: none;
        margin-bottom: 0;
        font-size: 14px;
      }
    }
    .addPic_wrap {
      height: 65px;
      .addPic {
        height: 50px;
        width: 50px;
        border: 1px dashed #ccc;
        border-radius: 8px;
        margin: 0 0 15px 15px;
        background: url(../assets/img/record/add.png) no-repeat center center;
        background-size: 50% 50%;
      }
    }
    .mui-btn-primary {
      width: 100%;
      height: 40px;
      position: fixed;
      bottom: 0;
      background-color: #90bbf8;
      border-color: #90bbf8;
    }
  }
</style>
