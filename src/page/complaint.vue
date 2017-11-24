<template>
    <div>
        <form class="mui-input-group complainWrap">
            <div class="mui-input-row">
                <label><span>*</span>类型</label>
                <input type="text" class="mui-input-clear" placeholder="选择类型">
                <span @click='showMore' class="mui-icon mui-icon-arrowright"></span>
            </div>
            <ul class="mui-table-view" v-show="isShow">
                <li class="mui-table-view-cell">Item 1</li>
                <li class="mui-table-view-cell">Item 2</li>
                <li class="mui-table-view-cell">Item 3</li>
            </ul>
            <div class="mui-input-row">
                <label><span>*</span>标题</label>
                <input type="text" class="mui-input-clear" placeholder="填写标题">
            </div>
            <div class="mui-input-row">
                <label>投诉企业</label>
                <input type="text" class="mui-input-clear" placeholder="填写投诉企业">
            </div>
            <div class="mui-input-row">
                <label>涉及车辆</label>
                <input type="text" class="mui-input-clear" placeholder="填写涉及车辆">
            </div>
            <div class="mui-input-row">
                <label>投诉人</label>
                <input type="text" class="mui-input-clear" placeholder="填写投诉人">
            </div>
            <div class="mui-input-row">
                <label>联系电话</label>
                <input type="number" class="mui-input-clear" placeholder="填写联系电话">
            </div>
            <div class="mui-input-row">
                <label><span>*</span>举报内容</label>
                <input type="text" class="mui-input-clear" placeholder="填写举报内容">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow: false
        }
    },
    methods: {
        showMore(){
            
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
        .mui-input-row {
            height: 60px;
            border-bottom: 1px solid #eee;
            position: relative;
            label {
                line-height: 60px;
                padding: 0 15px;
                color: #333;
                span {
                    color: red;
                    margin-right: 3px;
                }
            }
            input {
                margin-top: 10px;
            }
            >span {
                width: 12px;
                height: 12px;
                position: absolute;
                top: 50%;
                right: 20px;
                transform: translateY(-50%);
                color: #ddd;
            }
        }
        .mui-input-row:after {
            height: 0 ;
        }
        .mui-input-row:last-child {
            border: none;
        }
    }
    .complainWrap:before, .complainWrap:after{
        height: 0;
        
        
    }
</style>
