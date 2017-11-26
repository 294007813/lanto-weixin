<template>
  <div class="suggest">
    <div class="title">分类标签</div>
    <div class="content">
        <button type="button" @click='checkoutTag($event)' :data-index="item.index" :class="{'mui-btn': true, 'active': i==index}" v-for='(item, i) in tags' :key="i">{{ item.name }}</button>
    </div>
    <div class="title">我要反馈</div>
    <textarea name="" id="" cols="30" v-model='text' rows="8" placeholder="期待您的宝贵意见,我们将为您带来更好的使用体验"></textarea>
    <div class="addPic" @click='sheetVisible=!sheetVisible'></div>
    <button @click="submit" type="button" data-loading-text='提交中' data-loading-icon="mui-spinner mui-spinner-custom" class="mui-btn mui-btn-primary">提交</button>
    <mt-actionsheet
    :actions="actions"
    v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
import mui from "../lib/mui/js/mui.min.js"
import { Actionsheet, Toast } from 'mint-ui'
export default {
    data(){
        var self = this
        return{
            actions: [
                {name: '拍照', method:function(){
                   self.openCamera()
                }},
                {name: '从相册中选择',method:function(){
                    self.openPhoto()
                }}
            ],
            sheetVisible: false,
            tags: [
                {name:'功能建议', index:0},
                {name:'体验建议', index:1},
                {name:'内容建议', index:2},
            ],
            index: 0,
            text: ''
        }
    },
    mounted (){

    },
    methods: {
        submit(e) {   //点击提交按钮
            if(this.text.trim()==''){
               Toast('请输入反馈内容')
               return
            }
            this.text=''
            mui(e.target).button('loading')
            setTimeout(function(){
                Toast('提交成功')
                mui(e.target).button('reset')
            },1000)
        },
        openCamera(){   // 调取手机本地相机    参照网址:https://mp.weixin.qq.com/debug/wxadoc/dev/api/media-picture.html#wxchooseimageobject
            wx.chooseImage({
                count: 1,  //选择照片的数量
                sizeType: ['original','compressed'],    // 可以指定是原图还是压缩图，默认二者都有 
                sourceType: ['album'],  // 可以指定来源是相册还是相机，默认二者都有 
                success: function(res) {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    var tempFilePaths = res.tempFilePaths
                }
            })
        },
        openPhoto(){     // 调取手机本地相册

        },
        checkoutTag(e){
            this.index=e.target.getAttribute('data-index')
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
        height: 40px;
        line-height: 40px;
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
        // padding-bottom: 0px; 
    }
    .addPic {
        width: 50px;
        height: 50px;
        border: 1px dashed #ccc;
        position: absolute;
        top: 280px; 
        left: 20px;
        border-radius: 5px;
        background: url(../assets/img/record/add.png) no-repeat center center;
        background-size: 50% 50%;
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
