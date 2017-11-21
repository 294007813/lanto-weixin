<template>
  <div class="suggest">
      <div class="title">分类标签</div>
      <div class="content">
          <button type="button" class="mui-btn active">功能建议</button>
          <button type="button" class="mui-btn">体验建议</button>
          <button type="button" class="mui-btn">内容建议</button>
      </div>
      <div class="title">我要反馈</div>
      <textarea name="" id="" cols="30" rows="8" placeholder="期待您的宝贵意见,我们将为您带来更好的使用体验">

      </textarea>
      <button @click="submit" type="button" data-loading-text='提交中' data-loading-icon="mui-spinner mui-spinner-custom" class="mui-btn mui-btn-primary">提交</button>
  </div>
</template>

<script>
import mui from "../lib/mui/js/mui.min.js"
export default {
    mounted (){

    },
    methods: {
        submit(e) {
            mui(e.target).button('loading')
            // 阻止提交loading样式的方法
           // mui(e.target).button('reset');//切换为reset状态(即重置为原始的button)
        }
    }
}
</script>

<style lang='scss'>
body {
    background-color: #f8f8f8;
}
.suggest {
    .title {
        background-color: #f8f8f8;
        height: 50px;
        line-height: 50px;
        padding-left: 15px;
    }
    .content {
        height: 70px;
        padding-left: 15px;
        button {
            height: 40px;
            width: 80px;
            margin-top: 15px;
            margin-right: 12px;
        }
        .active {
            color: #5285f4;
            border-color: #3e87f6;
            background-color: #ecf3fe;
        }
    }
    textarea {
        border: none;
        font-size: 14px;
    }
    .mui-btn-primary {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40px;
        background-color: #9fc7fa;
        border: none;
    }
}
</style>
