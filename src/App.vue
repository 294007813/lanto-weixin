<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
    <lt-footer></lt-footer>
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'
  export default {
    name: 'app',
    components:{
      'lt-footer':Footer
    }
  }
</script>

<style>
  /*.fade-enter-active{*/
    /*transition: opacity .5s*/
  /*}*/
  /*.fade-enter,  .fade-leave-to!* .fade-leave-active in below version 2.1.8 *! {*/
    /*opacity: 0*/
  /*}*/
</style>
