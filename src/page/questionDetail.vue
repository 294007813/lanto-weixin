<template>
    <div id='questionDetail'>
        <div class="block">
            <div class="user">
                <img src="../assets/img/my/photo.png"/>
                <div class="userright"><p>我是用户名</p><span>2017.08.28 玛莎拉蒂GT 发动机</span></div>
            </div>
            <p class="question">没电后备箱打不开，前机箱的正负极在哪里？或用其他方法把车打着火，我有电瓶有正负搭线。</p>
            <div class="imgsWrap">
                <img src="http://static.shanghaiqixiu.org/images/2017/11/8/pic_1512726836942.jpg" alt=""><img src="http://static.shanghaiqixiu.org/images/2017/11/8/pic_1512726836942.jpg" alt="">
                <img src="http://static.shanghaiqixiu.org/images/2017/11/8/pic_1512726836942.jpg" alt="">
            </div>
            <div class="answer">
                <span class="violet">已处理</span>
                <span class="gray">#发动机</span>
                <span class="gray">#传向转动</span>
            </div>
            <div class="foot">27浏览 · 4回答</div>
        </div>
        <div class="answers">
            <ul>
                <li>
                    <span class="used">已采纳</span> 
                    <div class="zhuanjia">
                        <img src="../assets/img/my/photo.png"/>
                        <div class="userright"><p>我是协会专家</p><span>10小时前</span></div>
                    </div>
                    <div class="answer_text">您好,后备箱打不开是因为...前机舱的正负极在某某某地方.或用其他方法把车打着火,我有电瓶有正负搭线.</div>
                </li>
                 <li>
                    <div class="zhuanjia">
                        <img src="../assets/img/my/photo.png"/>
                        <div class="userright"><p>我是协会专家</p><span>10小时前</span></div>
                    </div>
                    <div class="answer_text">您好,后备箱打不开是因为...前机舱的正负极在某某某地方.或用其他方法把车打着火,我有电瓶有正负搭线.</div>
                </li>
                 <li>
                    <div class="zhuanjia">
                        <img src="../assets/img/my/photo.png"/>
                        <div class="userright"><p>我是协会专家</p><span>10小时前</span></div>
                    </div>
                    <div class="answer_text">您好,后备箱打不开是因为...前机舱的正负极在某某某地方.或用其他方法把车打着火,我有电瓶有正负搭线.</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
    #questionDetail {
        .block{
            width: 100%;
            overflow: hidden;
            padding: 10px;
            position: relative;
            .user{
                 overflow: hidden;
                img{
                    width: 50px;
                    border-radius: 100%;
                    float: left;
                    margin-right: 10px;
                }
                .userright{
                    float: left;
                    height: 50px;
                    line-height: 25px;
                    p{
                        font-size: 14px;
                        margin-bottom: 0;
                        color: #333;
                    }
                    span{
                        font-size: 12px;
                        color: #9a9a9a;
                    
                    }
                }
            }
            .question{
                font-size: 14px;
                margin: 10px 0;
                color: #333;
            }
            .imgsWrap {
                height: 60px;
                margin-bottom: 10px;
                img {
                    height: 100%;
                    margin-right: 10px;
                }
            }
            .answer{
                font-size: 12px;
                span{
                    display: block;
                    padding: 1px 5px;
                    color: white;
                    float: left;
                    margin-right: 5px;
                }
                p{
                    margin-left: 55px;
                    margin-bottom: 30px;
                    color: #666;
                }
                .violet{
                    background-color: #ecf3fe;
                    color: #599ef9;
                }
                .gray{
                    background-color: #f5f5f5;
                    color: #999;
                }
            }
            .foot{
                font-size: 12px;
                color: #999999;
                position: absolute;
                right: 10px;
                bottom: 10px;
            }
        }
        .answers {
            border-top: 10px solid #efeff4;
            padding: 0 10px;
            li {
                border-bottom: 1px solid #efeff4;
                padding: 10px 0;
                position: relative;
                .used {
                    background-color: #5997ff;
                    color: #fff;
                    padding: 3px 5px;
                    position: absolute;
                    right: 0;
                    font-size: 12px;
                }
                .zhuanjia{
                    overflow: hidden;
                    img{
                        width: 50px;
                        border-radius: 100%;
                        float: left;
                        margin-right: 10px;
                    }
                    .userright{
                        float: left;
                        height: 50px;
                        line-height: 25px;
                        p{
                            font-size: 14px;
                            margin-bottom: 0;
                            color: #333;
                        }
                        span{
                            font-size: 12px;
                            color: #9a9a9a;
                        
                        }
                    }
                }
                .answer_text{
                    margin-left: 60px;
                    color: #333;
                    font-size: 14px;
                }
            }
        }
    }
</style>
