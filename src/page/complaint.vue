<template>
    <div>
        <form class="mui-input-group complainWrap">
            <div class="mui-input-row">
                <label><span>*</span>类型</label>
                <input type="text" class="mui-input-clear" v-model='complainType' placeholder="选择类型">
                <span @click='showPicker' class="mui-icon mui-icon-arrowright"></span>
            </div>
            <mt-picker :slots="slots" @change="onValuesChange" v-show='isShow'></mt-picker>
            <div class="mui-input-row tit">
                <label><span>*</span>标题</label>
                <input type="text" v-model='complainTitle' class="mui-input-clear" placeholder="填写标题">
            </div>
            <div class="mui-input-row">
                <label><span class="tit">投诉企业</span></label>
                <input v-model='complainCompany' type="text" class="mui-input-clear" placeholder="填写投诉企业">
            </div>
            <div class="mui-input-row">
                <label><span class="tit">涉及车辆</span></label>
                <input v-model='complainCar' type="text" class="mui-input-clear" placeholder="填写涉及车辆">
            </div>
            <div class="mui-input-row">
                <label><span class="tit">投诉人</span></label>
                <input v-model='complainPerson' type="text" class="mui-input-clear" placeholder="填写投诉人">
            </div>
            <div class="mui-input-row">
                <label><span class="tit">联系电话</span></label>
                <input v-model='complainTel' type="number" class="mui-input-clear" placeholder="填写联系电话">
            </div>
            <div class="mui-input-row">
                <label><span>*</span>举报内容</label>
                <input type="text" v-model='complainContent' class="mui-input-clear" placeholder="填写举报内容">
            </div>
        </form>
        <button @click='submit($event)' type="button" data-loading-text='提交中...' data-loading-icon="mui-spinner mui-spinner-custom" class="submitComplain mui-btn mui-btn-primary">提交</button>
    </div>
</template>

<script>
import mui from "../lib/mui/js/mui.min.js"
import { Toast, Picker } from 'mint-ui'
export default {
    data(){
        return{
            isShow: false,
            slots: [
                {
                flex: 1,
                values: ['服务态度', '维修质量', '维修速度', '维修价格'],
                className: 'slot1',
                textAlign: 'center'
                }
            ],
            complainType: '',
            complainTitle: '',
            complainContent: '',
            complainCompany: '',
            complainCar: '',
            complainPerson: '',
            complainTel: ''
        }
    },
    methods: {
        showPicker(){
            this.isShow=!this.isShow
            if(this.isShow){
                this.complainType=picker.getValues()[0]
            }
        },
        onValuesChange(picker, values){
            this.complainType=picker.getValues()[0]
        },
        chooseType(e){
            this.isShow = !this.isShow;
            this.complainType=e.target.innerText
        },
        submit(e) {   //点击提交按钮
            if(!this.complainType.trim()){
                Toast('请选择类型')
                return
            }else if (!this.complainTitle.trim()){
                Toast('请输入标题')
                return
            }else if(!this.complainContent.trim()) {
                 Toast('请输入举报内容')
                 return
            }
            this.complainType=''
            this.complainTitle=''
            this.complainContent=''
            this.complainCompany=''
            this.complainCar=''
            this.complainPerson=''
            this.complainTel=''
            mui(e.target).button('loading')
            setTimeout(function(){
                mui(e.target).button('reset')
                Toast('提交成功')
            },2000)
        }
    }
}
</script>

<style lang='scss'>
    body {
        background-color: #f8f8f8;
    }
    .complainWrap {
        margin-top: 10px;
        .tit {
            border-top: 1px solid #eee;
        }
        .mui-input-row {
            height: 50px;
            border-bottom: 1px solid #eee;
            position: relative;
            .mui-icon-clear {
                top: 33px;
            }
            label {
                line-height: 50px;
                padding: 0 15px;
                color: #333;
                font-size: 15px;
                span {
                    color: red;
                    margin-right: 3px;
                    border-top: none;
                }
                .tit {
                    color: #333;
                    margin-left: 8px;
                }
            }
            input {
                margin-top: 5px;
                font-size: 15px;
            }
            >span {
                width: 24px;
                height: 24px;
                position: absolute;
                top: 50%;
                right: 10px;
                transform: translateY(-50%);
                color: #ddd;
            }
        }
        .picker 
        .picker-item{
            font-size: 15px;
        }
        .mui-input-row:after {
            height: 0 ;
        }
        .mui-input-row:last-child {
            border: none;
        }
        .mui-table-view::before {
            height: 0;
        }
    }
    .complainWrap:before, .complainWrap:after{
        height: 0;
    }
    .submitComplain {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 40px;
        background-color: #9fc7fa;
        border: none;
        font-size: 16px;
    }
</style>
