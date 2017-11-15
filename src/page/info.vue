<template>
<div class="info">
  <mt-navbar v-model="selected" :fixed="true">
    <mt-tab-item id="1">全部</mt-tab-item>
    <mt-tab-item id="2">办事指南</mt-tab-item>
    <mt-tab-item id="3">管理指南</mt-tab-item>
    <mt-tab-item id="4">行业概况</mt-tab-item>
    <mt-tab-item id="5">政务公开</mt-tab-item>
  </mt-navbar>

  <!-- tab-container -->
  <mt-tab-container v-model="selected">
    <mt-tab-container-item id="1">
      <div @click="goOut" class="msg">
        <p>汽车有了电子健康档案，维修厂你怎么看？</p>
        <div>
          <img src="../assets/img/other/info2.png"/>
        </div>
        <span>办事指南-2017.10.23</span>
      </div>
      <div @click="goOut" class="msg">
        <p>交通运输部办公厅关于开展汽车电子健康档案系统建设试点工作的通知</p>
        <div>
          <img src="../assets/img/other/info3.jpg">
        </div>
        <span>法律法规-2017.10.23</span>
      </div>
      <div @click="goOut" class="msg">
        <p>汽车有了电子健康档案，维修厂你怎么看？</p>
        <div>
          <img src="../assets/img/other/info2.png"/>
        </div>
        <span>办事指南-2017.10.23</span>
      </div>
      <div @click="goOut" class="msg">
        <p>交通运输部办公厅关于开展汽车电子健康档案系统建设试点工作的通知</p>
        <div>
          <img src="../assets/img/other/info3.jpg">
        </div>
        <span>法律法规-2017.10.23</span>
      </div>
    </mt-tab-container-item>
    <mt-tab-container-item id="2">
      <div @click="goOut" class="msg">
        <p>汽车有了电子健康档案，维修厂你怎么看？</p>
        <div>
          <img src="../assets/img/other/info2.png"/>
        </div>
        <span>办事指南-2017.10.23</span>
      </div>
    </mt-tab-container-item>
    <mt-tab-container-item id="3">

    </mt-tab-container-item>
    <mt-tab-container-item id="4">

    </mt-tab-container-item>
    <mt-tab-container-item id="5">
      <div class="msg">
        <p>交通运输部办公厅关于开展汽车电子健康档案系统建设试点工作的通知</p>
        <div>
          <img src="../assets/img/other/info3.jpg">
        </div>
        <span>法律法规-2017.10.23</span>
      </div>
    </mt-tab-container-item>
  </mt-tab-container>
</div>
</template>

<script>
  import { Navbar, TabItem, Cell} from 'mint-ui';
  import { TabContainer, TabContainerItem } from 'mint-ui';

export default {
  name: 'info',
  data () {
    return {
      selected:"1"
    }
  },
  methods:{
    goOut(){
      window.location.href= 'http://static.shanghaiqixiu.org/article/1.html'
    }
  },
  components:{
    mtCell: Cell,
    mtNavbar: Navbar,
    mtTabItem: TabItem,
    mtTabContainer: TabContainer,
    mtTabContainerItem:TabContainerItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .info{
    margin: 50px 0;
  }
  .msg{
    padding: 10px;
    border-bottom: 1px solid #f7f7f7;
    height: 130px;
    font-size: 14px;
    position: relative;
    p{
      margin-right: 105px;
    }
    div{
      width: 105px;
      height: 105px;
      overflow: hidden;
      position: absolute;
      top:10px;
      right: 10px;
      border-radius: 10px;
      img{
        height: 100%;
        width: auto;
      }
    }
    span{
      display: block;
      font-size: 12px;
      color: #8f8f8f;
      position: absolute;
      bottom: 10px;
    }
  }
</style>

