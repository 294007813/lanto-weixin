<template>
  <div id="myQuestion">
    <div class="top">
      <div class="quetionsCategory">
        <button @click='chooseCategory($event)' type="button" :data-code='item.code' :class="{'active': i==code}" v-for='(item, i) in quetionsCategory' :key="i">{{ item.name }}</button>
      </div>
      <textarea name="" id="" cols="30" rows="5" v-model='text' placeholder="问得好，才能答的好。请描述您的问题，专家门诊会给您最满意的回复！"></textarea>
      <div class="addPic" @click='openActionsheet'></div>
    </div>
    <div class="list">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
            <a class="mui-navigate-right">车辆型号<span>奥迪A6L新能源</span></a>
        </li>
        <li class="mui-table-view-cell">
            <a class="mui-navigate-right">提问类型</a>
        </li>
        <li class="mui-table-view-cell">
            <a class="mui-navigate-right">问题分类</a>
        </li>
        <li class="mui-table-view-cell">
            <a class="mui-navigate-right">选择专家</a>
        </li>
        </ul>
    </div>
    <button @click='sendProblem($event)' data-loading-text='提交中...' type="button" data-loading-icon="mui-spinner mui-spinner-custom" class="mui-btn sendProblem mui-btn-primary">发布问题</button>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>

<script>
import mui from "../lib/mui/js/mui.min.js"
import { Toast, Actionsheet } from 'mint-ui'
export default {
  data(){
    return {
      code: '0',
      quetionsCategory: [
        {
          name: '故障诊断',
          code: '0'
        },
        {
          name: '维修咨询',
          code: '1'
        },
        {
          name: '维修服务',
          code: '2'
        },
        {
          name: '救援服务',
          code: '3'
        },
        {
          name: '汽配咨询',
          code: '4'
        },
        {
          name: '经营管理',
          code: '5'
        },
        {
          name: '培训服务',
          code: '6'
        }
      ],
      text: '',
      sheetVisible: false,
      actions: [
        {name: '拍照', method:function(){
          self.openCamera()
        }},
        {name: '从相册中选择',method:function(){
          self.openPhoto()
        }}
      ]
    }
  },

  methods: { 
    chooseCategory(e){
      this.code=e.target.getAttribute('data-code')
    },
    sendProblem(e){
      if(this.text.trim() == ''){
        return Toast('请输入提问内容')
      }
      mui(e.target).button('loading'); //切换为loading状态
      setTimeout(function(){
        mui(e.target).button('reset');//切换为reset状态(即重置为原始的button)
        Toast('发布成功')
      },1000)
      this.text=''
    },
    openActionsheet(){
      this.sheetVisible=!this.sheetVisible
    }
  }
}
</script>

<style lang='scss'>
  #myQuestion {
    background-color: #f8f8f8;
    height: 100vh;
    position: relative;
    >.top {
      background-color: #fff;
      padding: 12px;
      height: 311px; 
      line-height: 0; 
    }
    .quetionsCategory {
      height: 120px;
      >button {
        color: #666;
        width: 30%;
        height: 28px;
        padding: 0;
        margin-right: 5%;
        margin-bottom: 12px;
      }
      >button:nth-child(3n) {
        margin-right: 0;
      }
      .active {
        color: #5285f4;
        border-color: #3e87f6;
        background-color: #ecf3fe;
      }
    }
    textarea {
      font-size: 14px;
      padding: 0;
      margin: 10px 0 0 0;
      border: none;
    }
    .addPic {
      width: 50px;
      height: 50px;
      border: 1px dashed #ccc;
      border-radius: 8px;
      background: url(../assets/img/record/add.png) no-repeat center center;
      background-size: 50% 50%;
      line-height: 0px !important;
    }
    .list{
      margin-top: 10px;
      font-size: 14px;
      color: #666;
      padding: 0;
      line-height: 0;
      ul::before, ul::after {
        height: 0;
      }
      ul li {
        height: 42px;
        a {
          margin: 0 -15px;
           span {
            float: right;
            color: #ccc;
            margin-right: 18px;
          }
        }
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
