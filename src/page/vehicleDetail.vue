<template>
    <div class="box">
        <div class="title">
            <img src="../assets/img/record/repairLog.png">
            <span>维修记录</span>
        </div>
        <ul>
            <li>
                <span class="left">维修企业名称</span>
                <span class="right">{{ repairInfo.repairBasicinfo.companyname }}</span>
            </li>
            <li>
                <span class="left">结算清单编号</span>
                <span class="right">{{ repairInfo.repairBasicinfo.costlistcode }}</span>
            </li>
            <li>
                <span class="left">车辆识别代码</span>
                <span class="right">{{ repairInfo.repairBasicinfo.vin }}</span>
            </li>
            <li>
                <span class="left">送修日期</span>
                <span class="right">{{ repairInfo.repairBasicinfo.repairdate }}</span>
            </li>
            <li>
                <span class="left">送修里程</span>
                <span class="right">{{ repairInfo.repairBasicinfo.repairmileage  }}</span>
            </li>
            <li>
                <span class="left">结算日期</span>
                <span class="right">{{ repairInfo.repairBasicinfo.settledate  }}</span>
            </li>
            <li>
                <span class="left">车牌号码</span>
                <span class="right">{{ repairInfo.repairBasicinfo.vehicleplatenumber  }}</span>
            </li>
            <li>
                <span class="left">故障描述</span>
                <span class="right">{{ repairInfo.repairBasicinfo.faultdescription  }}</span>
            </li>
        </ul>
        <div class="title">
            <img src="../assets/img/record/repairItem.png">
            <span>维修项目</span>
        </div>
        <ul class="repairItem">
            <li v-for='(item, index) in repairInfo.repairprojectlist' :key='index'>
                <div>
                    <p>名称: {{ item.repairproject }}</p>
                    <p>工时: {{ item.workinghours }}</p>
                </div>
            </li>
        </ul>
        <div class="title">
            <img src="../assets/img/record/repairOther.png">
            <span>维修配件</span>
        </div>
        <ul class="repairOther">
            <li v-for='(item, index) in repairInfo.vehiclepartslist' :key="index">
                <div>
                    <p>名称: {{ item.partsname }}</p>
                    <p>编号: {{ item.partscode }}</p>
                    <p>数量: {{ item.partsquantity }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    beforeMount(){
        let data={
            "accessToken": localStorage.getItem("ACCESSTOKEN"),
            "repairbasicinfoId": this.$route.query.repairbasicinfoId
        }
        this.axios({
            method: 'post',
            url: 'vehicle/carfile/queryDetail',
            headers: {'Content-type': 'application/json'},
            data: JSON.stringify(data)
        })
        .then(res=>{
            this.repairInfo = res.data.data
            console.log(this.repairInfo);
        })
    },
     data(){
        return{
            repairInfo: {}
        }
    }
}
</script>
<style lang='scss' scoped>
    .box {
        
        .title {
            border-top: 10px solid #f8f8f8;
            width: 100%;
            box-sizing: content-box;
            height: 35px;
            border-bottom: 1px solid #f8f8f8;
            line-height: 35px;
            font-size: 16px;
            color: 333;
            img {
                width: 15px;
                height: 15px;
                margin: 10px 0 0 10px;
            }
        }
        ul {
            margin-left: 20px;
            li {
                border-bottom: 1px solid #f8f8f8;
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                width: 100%;
                .left {
                    color: #333;
                    float: left;
                }
                .right {
                    color: #666;
                    float: right;
                    margin-right: 10px;
                }
            }
        }
        .repairItem {
            li{
                line-height: 22px;
                color: #666;
                height: 60px;
                position: relative;
                div {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                }
                p {
                    margin-bottom: 0;
                }
            }
        }
        .repairOther {
            li {
                height: 80px;
                color: #666;
                position: relative;
                div {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    p {
                        line-height: 22px;
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
</style>
