<template>
  <div class="doctor">
    <div class="block">
      <div class="user">
        <img src="../assets/img/my/photo.png"/>
        <div class="userright"><p>name</p><span>2017.08.28 玛莎拉蒂GT 发动机</span></div>
      </div>
      <p class="question">没电后备箱打不开，前机箱的正负极在哪里？或用其他方法把车打着火，我有电瓶有正负搭线</p>
      <div class="answer">
        <span class="violet">已处理</span>
        <p>大师：可以从发电机大线上搭正极，负极在车身搭铁就行了。。</p>
      </div>
      <div class="foot">27浏览 4回答</div>
    </div>

    <div class="block">
      <div class="user">
        <img src="../assets/img/my/photo.png"/>
        <div class="userright"><p>name</p><span>2017.08.28 玛莎拉蒂GT 发动机</span></div>
      </div>
      <p class="question">没电后备箱打不开，前机箱的正负极在哪里？或用其他方法把车打着火，我有电瓶有正负搭线</p>
      <div class="answer">
        <span class="blue">已采纳</span>
        <p>大师：可以从发电机大线上搭正极，负极在车身搭铁就行了。。</p>
      </div>
      <div class="foot">27浏览 4回答</div>
    </div>

    <div class="block">
      <div class="user">
        <img src="../assets/img/my/photo.png"/>
        <div class="userright"><p>name</p><span>2017.08.28 玛莎拉蒂GT 发动机</span></div>
      </div>
      <p class="question">没电后备箱打不开，前机箱的正负极在哪里？或用其他方法把车打着火，我有电瓶有正负搭线</p>
      <div class="answer">
        <span class="violet">已处理</span>
        <p>大师：可以从发电机大线上搭正极，负极在车身搭铁就行了。。</p>
      </div>
      <div class="foot">27浏览 4回答</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'doctor',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .doctor{
    margin-bottom: 50px;
  }
  .block{
    width: 100%;
    overflow: hidden;
    border-top: 10px solid #f8f8f8;
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
    }
    .answer{
      font-size: 12px;
      span{
        display: block;
        padding: 1px 5px;
        color: white;
        float: left;
      }
      p{
        margin-left: 55px;
        margin-bottom: 30px;
        color: #646464;
      }
      .violet{
        background-color: #93adf8;
      }
      .blue{
        background-color: #599ef9;
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
</style>
